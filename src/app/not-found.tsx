import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 pt-28 pb-16">
      <div className="rounded-full border border-[var(--border-color)] bg-[var(--surface-subtle)] px-4 py-1.5 font-mono text-xs text-[var(--text-subtle)] mb-6">
        404 — Page Not Found
      </div>
      <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[var(--text-primary)] mb-4">
        Sayfa Bulunamadı
      </h1>
      <p className="max-w-md font-body text-base text-[var(--text-muted)] leading-relaxed mb-8">
        Aradığınız sayfa taşınmış, silinmiş veya geçici olarak kullanım dışı kalmış olabilir.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-lg border border-[var(--text-primary)] bg-[var(--text-primary)] px-6 py-3 font-display text-sm font-semibold text-[var(--bg-color)] transition-opacity hover:opacity-90 shadow-sm"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span>Ana Sayfaya Dön / Back to Home</span>
      </Link>
    </div>
  );
}
