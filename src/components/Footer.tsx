import type { FooterConfig, Theme } from '../types';

interface FooterProps {
  config: FooterConfig;
  theme: Theme;
}

const links = [
  { label: 'ホーム', href: '#home' },
  { label: 'サービス', href: '#services' },
  { label: 'お問い合わせ', href: '#contact' },
];

const Footer = ({ config, theme }: FooterProps) => {
  return (
    <footer style={{ borderTop: `1px solid ${theme.primary}1f`, color: theme.text }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-wrap items-center justify-between gap-4 text-xs">
        <p className="opacity-70">{config.copyright}</p>
        <div className="flex gap-6">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="opacity-70 hover:opacity-100 transition-opacity">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export { Footer };
