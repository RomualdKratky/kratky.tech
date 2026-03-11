"use client";

import {
  useRef,
  useEffect,
  useMemo,
  useCallback,
  useSyncExternalStore,
} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform vec3 uColorBase;
  uniform vec3 uColorAccent;
  uniform vec2 uResolution;
  varying vec2 vUv;

  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                       -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
      + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy),
      dot(x12.zw, x12.zw)), 0.0);
    m = m * m;
    m = m * m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vec2 uv = vUv;
    float aspectRatio = uResolution.x / uResolution.y;
    uv.x *= aspectRatio;

    // Slow the global time down to a subtle drift speed
    float t = uTime * 0.05;

    // Three noise layers at different scales + speeds for organic complexity:
    //   n1 — medium scale, full drift speed (base movement)
    //   n2 — fine detail, slightly slower counter-drift
    //   n3 — large scale, slow diagonal creep
    float n1 = snoise(uv * 1.5 + t);
    float n2 = snoise(uv * 3.0 - t * 0.7);
    float n3 = snoise(uv * 0.8 + vec2(t * 0.3, -t * 0.2));

    // Weighted blend: n1 carries half the energy; n2/n3 add equal fine detail
    float noise = n1 * 0.5 + n2 * 0.25 + n3 * 0.25;
    noise = noise * 0.5 + 0.5;

    float gradient = smoothstep(0.0, 1.0, vUv.y * 0.8 + noise * 0.2);
    float accentMask = smoothstep(0.3, 0.7, noise) * 0.15;

    vec3 color = mix(uColorBase, uColorBase * 1.15, gradient);
    color = mix(color, uColorAccent, accentMask);

    gl_FragColor = vec4(color, 1.0);
  }
`;

function createUniforms() {
  return {
    uTime: { value: 0 },
    uColorBase: { value: new THREE.Vector3(0.01, 0.02, 0.09) },
    uColorAccent: { value: new THREE.Vector3(0.13, 0.83, 0.93) },
    uResolution: { value: new THREE.Vector2(1, 1) },
  };
}

function ShaderPlane() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const uniforms = useMemo(() => createUniforms(), []);

  // Reads --shader-base / --shader-accent CSS vars (comma-separated RGB 0–1 triplets)
  // and pushes them into the shader uniforms. Called on mount and on theme class change.
  const updateColors = useCallback(() => {
    const style = getComputedStyle(document.documentElement);
    const base = style.getPropertyValue("--shader-base").trim();
    const accent = style.getPropertyValue("--shader-accent").trim();

    const clamp01 = (v: number) => Math.max(0, Math.min(1, v));

    if (base && materialRef.current) {
      const [r, g, b] = base.split(",").map(Number);
      // Guard against malformed CSS var values (NaN, out-of-range)
      if (!isNaN(r) && !isNaN(g) && !isNaN(b)) {
        materialRef.current.uniforms.uColorBase.value.set(
          clamp01(r),
          clamp01(g),
          clamp01(b),
        );
      }
    }
    if (accent && materialRef.current) {
      const [r, g, b] = accent.split(",").map(Number);
      if (!isNaN(r) && !isNaN(g) && !isNaN(b)) {
        materialRef.current.uniforms.uColorAccent.value.set(
          clamp01(r),
          clamp01(g),
          clamp01(b),
        );
      }
    }
  }, []); // materialRef is a stable ref — no deps needed

  useEffect(() => {
    updateColors();
    // Re-sync colors when the theme class toggles on <html>
    const observer = new MutationObserver(updateColors);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, [updateColors]);

  useEffect(() => {
    const handleResize = () => {
      if (materialRef.current) {
        materialRef.current.uniforms.uResolution.value.set(
          window.innerWidth,
          window.innerHeight,
        );
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useFrame((_, delta) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value += delta;
    }
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

let webGLSupported: boolean | null = null;

function canUseWebGL(): boolean {
  if (typeof window === "undefined") return false;
  if (webGLSupported !== null) return webGLSupported;
  try {
    const canvas = document.createElement("canvas");
    webGLSupported = !!(
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
    );
  } catch {
    webGLSupported = false;
  }
  return webGLSupported;
}

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// useSyncExternalStore requires a subscribe function; we only use it for
// SSR/client snapshot diffing here, so no actual subscription is needed.
const noopSubscribe = () => () => {};

export function HeroShader() {
  const showCanvas = useSyncExternalStore(
    noopSubscribe,
    () => canUseWebGL() && !prefersReducedMotion(),
    () => false,
  );

  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-surface" />
      {showCanvas && (
        <div className="absolute inset-0 pointer-events-none">
          <Canvas
            dpr={[1, 1.5]}
            gl={{
              antialias: false,
              alpha: false,
              powerPreference: "low-power",
            }}
            camera={{ position: [0, 0, 1] }}
          >
            <ShaderPlane />
          </Canvas>
        </div>
      )}
    </>
  );
}
