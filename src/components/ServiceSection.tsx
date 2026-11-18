import type { Service, Theme } from '../types';

interface ServiceSectionProps {
  services: Service[];
  theme: Theme;
  companyId?: string;
}

const serviceImages: Record<string, string> = {
  スペシャルティコーヒー: '/images/coffee_image.png',
  手作りスイーツ: '/images/cake_image.png',
  ランチセット: '/images/lunch_image.png',
  業務改善コンサルティング: '/images/consulting_image.png',
  システム開発: '/images/system_image.png',
  DX支援: '/images/dx_image.png',
};

const ServiceSection = ({ services, theme, companyId }: ServiceSectionProps) => {
  const isCafe = companyId === 'yasuragi-cafe';

  return (
    <section id="services" className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
      <h2
        style={{ color: theme.text }}
        className="text-center text-2xl md:text-3xl font-bold mb-10 md:mb-14"
      >
        {isCafe ? 'おすすめメニュー' : 'サービス'}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-8">
        {services.map((service) => {
          const image = serviceImages[service.title];

          if (isCafe) {
            return (
              <article key={service.title} className="text-center">
                <div
                  className="aspect-[4/3] rounded-2xl overflow-hidden mb-5"
                  style={{ backgroundColor: '#cfcbc5' }}
                >
                  {image && (
                    <img
                      src={image}
                      alt={service.title}
                      className="w-full h-full object-contain"
                    />
                  )}
                </div>
                <h3 style={{ color: theme.text }} className="text-lg font-bold mb-1">
                  {service.title}
                </h3>
                <p style={{ color: theme.text }} className="text-sm opacity-70">
                  {service.description}
                </p>
              </article>
            );
          }

          return (
            <article
              key={service.title}
              style={{ borderColor: `${theme.primary}26` }}
              className="text-center rounded-2xl border bg-white px-6 py-9"
            >
              {/* 黒線のアイコンを lighten ブレンドでテーマ色に染める */}
              {image && (
                <div
                  className="w-20 h-20 mx-auto mb-5 isolate"
                  style={{ backgroundColor: theme.primary }}
                >
                  <img
                    src={image}
                    alt={service.title}
                    className="w-full h-full object-contain"
                    style={{ mixBlendMode: 'lighten' }}
                  />
                </div>
              )}
              <h3 style={{ color: theme.text }} className="text-base md:text-lg font-bold mb-2">
                {service.title}
              </h3>
              <p style={{ color: theme.text }} className="text-sm opacity-70">
                {service.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export { ServiceSection };
