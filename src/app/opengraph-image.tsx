import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";
import { siteConfig } from "@/data/site";

export const runtime = "nodejs";
export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Dark-mode color palette used in the OG image.
 * Mirrors the `.dark` CSS variables in globals.css — update both if the
 * design tokens change.
 */
const COLORS = {
  bg: "#020617",
  accent: "#22d3ee",
  heading: "#f1f5f9",
  subheading: "#94a3b8",
  body: "#cbd5e1",
  meta: "#334155",
} as const;

export default async function OgImage() {
  // readFileSync is intentional: this route only runs at build time under
  // `output: 'export'`. The font is vendored into public/fonts/ so it remains
  // stable across Next.js version upgrades.
  const photoData = readFileSync(join(process.cwd(), "public", "rk.jpg"));
  const photo = `data:image/jpeg;base64,${photoData.toString("base64")}`;

  const fontData = readFileSync(
    join(process.cwd(), "public", "fonts", "noto-sans-regular.ttf"),
  );

  return new ImageResponse(
    <div
      style={{
        width: 1200,
        height: 630,
        display: "flex",
        background: COLORS.bg,
        overflow: "hidden",
        position: "relative",
        fontFamily: "Noto Sans, sans-serif",
      }}
    >
      {/* Cyan glow — top right */}
      <div
        style={{
          position: "absolute",
          top: -180,
          right: 160,
          width: 560,
          height: 560,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(34,211,238,0.18) 0%, transparent 68%)`,
          display: "flex",
        }}
      />

      {/* Subtle bottom-left glow */}
      <div
        style={{
          position: "absolute",
          bottom: -120,
          left: -80,
          width: 380,
          height: 380,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(34,211,238,0.07) 0%, transparent 70%)`,
          display: "flex",
        }}
      />

      {/* Left: text */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px 0 64px 80px",
          flex: 1,
        }}
      >
        {/* Brand */}
        <div
          style={{
            display: "flex",
            color: COLORS.accent,
            fontSize: 16,
            fontWeight: 400,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            marginBottom: 36,
          }}
        >
          {siteConfig.title}
        </div>

        {/* Name */}
        <div
          style={{
            display: "flex",
            color: COLORS.heading,
            fontSize: 58,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            marginBottom: 14,
          }}
        >
          {siteConfig.og.name}
        </div>

        {/* Role */}
        <div
          style={{
            display: "flex",
            color: COLORS.subheading,
            fontSize: 22,
            fontWeight: 400,
            letterSpacing: "0.01em",
            marginBottom: 32,
          }}
        >
          {siteConfig.author.role}
        </div>

        {/* Cyan accent rule */}
        <div
          style={{
            display: "flex",
            width: 52,
            height: 3,
            background: COLORS.accent,
            borderRadius: 2,
            marginBottom: 32,
          }}
        />

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            color: COLORS.body,
            fontSize: 21,
            fontWeight: 400,
            lineHeight: 1.5,
            maxWidth: 500,
            marginBottom: 36,
          }}
        >
          {siteConfig.og.tagline}
        </div>

        {/* Meta */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            color: COLORS.meta,
            fontSize: 15,
          }}
        >
          {siteConfig.og.locationBlurb}
        </div>
      </div>

      {/* Right: photo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingRight: 88,
          paddingLeft: 32,
          flexShrink: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 308,
            height: 308,
            borderRadius: "50%",
            border: `2px solid rgba(34, 211, 238, 0.35)`,
            padding: 8,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 284,
              height: 284,
              borderRadius: "50%",
              overflow: "hidden",
            }}
          >
            <img
              src={photo}
              alt={siteConfig.og.name}
              width={284}
              height={284}
              style={{
                objectFit: "cover",
                objectPosition: "center top",
              }}
            />
          </div>
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: "Noto Sans",
          data: fontData,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
