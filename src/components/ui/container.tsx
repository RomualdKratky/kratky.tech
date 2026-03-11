/**
 * Centers content with a max-width of 6xl and consistent horizontal padding.
 * Use the `className` prop to add spacing, flex, or grid overrides.
 *
 * @example
 * <Container className="py-24">...</Container>
 */
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`max-w-6xl mx-auto px-6 ${className}`}>{children}</div>
  );
}
