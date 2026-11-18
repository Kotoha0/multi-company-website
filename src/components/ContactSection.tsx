import type { ContactConfig, Theme } from '../types';

interface ContactSectionProps {
  config: ContactConfig;
  theme: Theme;
}

const ContactSection = ({ config, theme }: ContactSectionProps) => {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-24">
      <div
        className="rounded-2xl px-6 py-14 md:py-16 text-center"
        style={{ backgroundColor: theme.accent }}
      >
        <h2 style={{ color: theme.text }} className="text-2xl md:text-3xl font-bold mb-4">
          {config.heading}
        </h2>
        <p style={{ color: theme.text }} className="text-sm md:text-base opacity-75 mb-8 leading-relaxed">
          ご不明な点やご質問がございましたら、お気軽にお問い合わせください。
          <br className="hidden md:block" />
          最短で24時間以内にご返信いたします。
        </p>
        <a
          href={`mailto:${config.email}`}
          style={{ backgroundColor: theme.primary }}
          className="inline-block px-10 py-3.5 rounded-full text-sm md:text-base font-bold text-white hover:opacity-85 transition-opacity"
        >
          {config.buttonLabel}
        </a>
        <p style={{ color: theme.text }} className="text-xs opacity-60 mt-5">
          {config.email}
        </p>
      </div>
    </section>
  );
};

export { ContactSection };
