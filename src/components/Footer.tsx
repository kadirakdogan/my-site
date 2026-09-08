export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center sm:flex-row sm:px-8 sm:text-left lg:px-12">
        <p className="font-mono text-xs text-content-tertiary">
          © {year} Kadir Akdoğan. All rights reserved.
        </p>
        <p className="font-mono text-xs text-content-tertiary">
          Built with{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-content-secondary transition-colors duration-300 hover:text-accent-light"
          >
            Next.js
          </a>
        </p>
      </div>
    </footer>
  );
}