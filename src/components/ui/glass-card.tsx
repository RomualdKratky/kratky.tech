/**
 * Card with glass-morphism styling (frosted background, subtle border).
 * Use `hover` for interactive cards — adds an accent border and shadow lift on hover.
 *
 * @example
 * <GlassCard hover className="p-8">...</GlassCard>
 */
interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  /** Adds a visible hover effect: accent border + shadow lift. */
  hover?: boolean;
}

export function GlassCard({
  children,
  className = "",
  hover = false,
}: GlassCardProps) {
  const classes = [
    "bg-card-bg backdrop-blur-xl border border-glass-border rounded-lg",
    hover &&
      "hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={classes}>{children}</div>;
}
