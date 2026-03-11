/** Shared outer chrome for legal pages (Impressum, Datenschutz). */
export function LegalPageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">{children}</div>
    </div>
  );
}
