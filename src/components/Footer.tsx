export default function Footer() {
  const navLinks = [
    { label: '事業概要', href: '#about' },
    { label: '会社概要', href: '#company' },
    { label: 'アクセス', href: '#access' },
    { label: 'お問い合わせ', href: '#contact' },
  ];

  return (
    <footer className="bg-brand-bg pt-20 pb-10 border-t border-brand-border px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <nav className="flex flex-wrap justify-center gap-6 sm:gap-10 mb-12">
          {navLinks.map((link, idx) => (
            <div key={link.href} className="flex items-center gap-6 sm:gap-10">
              <a
                href={link.href}
                className="font-serif-jp text-xs tracking-widest text-brand-muted hover:text-brand-accent transition-colors"
              >
                {link.label}
              </a>
              {idx < navLinks.length - 1 && (
                <span className="w-px h-3 bg-brand-border block" />
              )}
            </div>
          ))}
        </nav>

        <p className="font-serif-en text-xs tracking-[0.2em] text-brand-muted/70 uppercase text-center text-balance">
          © 2025 Sample Partners Co., Ltd. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
