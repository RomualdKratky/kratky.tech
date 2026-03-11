"use client";

import { useRef, useEffect } from "react";
import { useTranslations } from "next-intl";
import { siteConfig, trustedByItems } from "@/data/site";
import { HeroShader } from "@/components/canvas/hero-shader";
import { SocialLinks } from "@/components/ui/social-links";
import { Container } from "@/components/ui/container";
import { ClientLogo } from "@/components/ui/client-logo";

export function HeroSection() {
  const t = useTranslations("hero");
  const tTrusted = useTranslations("trustedBy");

  // Pause the CSS marquee animation when the section scrolls out of view
  // to avoid unnecessary GPU work.
  const marqueeContainerRef = useRef<HTMLDivElement>(null);
  const marqueeTrackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = marqueeContainerRef.current;
    const track = marqueeTrackRef.current;
    if (!container || !track) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        track.style.animationPlayState = entry.isIntersecting ? "" : "paused";
      },
      { threshold: 0 },
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center">
      <HeroShader />

      <Container className="relative z-10 pt-32 pb-20 flex-1 flex flex-col justify-center">
        <div className="space-y-6">
          <p className="text-sm tracking-[0.3em] uppercase text-accent font-medium">
            {t("role")}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
            {siteConfig.author.name}
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-muted max-w-2xl leading-relaxed tracking-wide">
            {t("tagline")}
          </p>
          <p className="text-base text-muted/70 max-w-xl leading-relaxed">
            {t("subtitle")}
          </p>

          <div className="flex items-center gap-6 pt-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-fg rounded-md text-sm font-medium tracking-wider shadow-lg shadow-accent/30 hover:brightness-110 transition-all duration-200"
            >
              {t("cta")}
            </a>
            <SocialLinks size={20} showEmail />
          </div>
        </div>
      </Container>

      {/* Logo Marquee — accessible region with duplicate set hidden from AT */}
      <div
        ref={marqueeContainerRef}
        role="region"
        aria-label="Trusted by"
        className="relative z-10 border-t border-glass-border bg-glass-bg backdrop-blur-xl overflow-hidden"
      >
        {/* Edge fade mask */}
        <div className="[mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          {/* Track — duplicated for seamless loop, pauses on hover */}
          <div
            ref={marqueeTrackRef}
            className="flex w-max animate-marquee hover:[animation-play-state:paused]"
          >
            {(["a", "b"] as const)
              .flatMap((set) =>
                trustedByItems.map((item) => ({ ...item, set })),
              )
              .map((item) => (
                <div
                  key={`${item.key}-${item.set}`}
                  // Hide the duplicate "b" set from screen readers — it is purely
                  // visual for the seamless loop; "a" set provides the content.
                  aria-hidden={item.set === "b" ? true : undefined}
                  className="flex items-center px-10 py-5"
                >
                  <span
                    className={`inline-flex items-center rounded px-2 py-1 ${
                      item.padded
                        ? "bg-white/90 dark:bg-white/95"
                        : item.pillDark
                          ? "dark:bg-white/90"
                          : ""
                    }`}
                  >
                    <ClientLogo
                      src={item.logo}
                      label={tTrusted(item.key)}
                      height={item.height}
                      // First set loads eagerly (above fold); duplicate set is lazy.
                      priority={item.set === "a"}
                    />
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
