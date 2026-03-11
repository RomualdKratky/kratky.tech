interface ClientLogoProps {
  src: string;
  label: string;
  height?: string;
  /** True for the first (visible) set of logos — loads eagerly as they are above the fold. */
  priority?: boolean;
}

export function ClientLogo({
  src,
  label,
  height = "h-7",
  priority = false,
}: ClientLogoProps) {
  return (
    // Using <img> intentionally: logos render at a fluid `h-*` height with
    // w-auto, so next/image's required width/height props don't apply here.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={label}
      draggable={false}
      // Marquee logos are above the fold — eager-load the first set,
      // lazy-load the duplicated aria-hidden set.
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      className={`${height} w-auto object-contain select-none grayscale opacity-40 dark:opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500`}
    />
  );
}
