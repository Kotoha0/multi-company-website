import type { HeroConfig, Theme } from '../types';

interface HeroProps {
  config: HeroConfig;
  theme: Theme;
  companyId?: string;
}

const heroImages: Record<string, string> = {
  sampletech: '/images/office_hero.jpg',
  'yasuragi-cafe': '/images/cafe_hero.jpg',
};

// 文字を読みやすくするための左側の暗幕色（画像の色味に合わせる）
const overlayColors: Record<string, string> = {
  sampletech: '10, 32, 66',
  'yasuragi-cafe': '48, 28, 12',
};

const Hero = ({ config, theme, companyId = '' }: HeroProps) => {
  const image = heroImages[companyId] ?? heroImages.sampletech;
  const overlay = overlayColors[companyId] ?? overlayColors.sampletech;
  const isCafe = companyId === 'yasuragi-cafe';

  return (
    <section id="home" className="max-w-6xl mx-auto px-5 md:px-8 pt-6 md:pt-8">
      <div
        className="relative rounded-2xl overflow-hidden min-h-[380px] md:min-h-[460px] flex items-center"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(${overlay}, 0.78) 0%, rgba(${overlay}, 0.5) 45%, rgba(${overlay}, 0) 80%), url('${image}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="        px-8 md:px-14 py-14 max-w-3xl text-white">
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight whitespace-pre-line mb-5">
            {config.headline}
          </h1>
          <p className="text-sm md:text-lg leading-relaxed opacity-95 mb-8 max-w-md md:max-w-lg">
            {config.description}
          </p>
          <a
            href={config.buttonHref}
            style={{
              backgroundColor: isCafe ? theme.background : '#fff',
              color: isCafe ? theme.primary : theme.text,
            }}
            className="inline-block px-8 py-3.5 rounded-full text-sm md:text-base font-bold hover:opacity-90 transition-opacity"
          >
            {config.buttonLabel}
          </a>
        </div>
      </div>
    </section>
  );
};

export { Hero };
