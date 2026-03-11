import { Container } from "./container";

/**
 * Shared outer chrome for legal pages (Impressum, Datenschutz).
 * Uses Container for consistent horizontal padding, then constrains the
 * reading width to 3xl for comfortable long-form text.
 */
export function LegalPageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Container className="pt-32 pb-24">
      <div className="max-w-3xl">{children}</div>
    </Container>
  );
}
