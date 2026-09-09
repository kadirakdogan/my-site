export default function Loading() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center pt-28 pb-16 px-4">
      <div className="flex flex-col items-center gap-4">
        {/* Minimal monochrome pulse spinner */}
        <div className="h-8 w-8 rounded-full border-2 border-[var(--border-color)] border-t-[var(--text-primary)] animate-spin" />
        <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-subtle)]">
          Loading...
        </span>
      </div>
    </div>
  );
}
