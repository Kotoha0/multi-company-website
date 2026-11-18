import { useState } from 'react';
import type { ReactNode } from 'react';
import type { Theme } from '../types';

interface HeaderProps {
  companyName: string;
  theme: Theme;
  ctaLabel?: string;
  ctaHref?: string;
  children?: ReactNode;
  onCompanyChange?: (companyId: string) => void;
}

const companies = [
  { id: 'sampletech', label: 'SampleTech' },
  { id: 'yasuragi-cafe', label: 'やすらぎカフェ' },
];

const Header = ({
  companyName,
  theme,
  ctaLabel,
  ctaHref = '#contact',
  children,
  onCompanyChange,
}: HeaderProps) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header
      style={{ backgroundColor: theme.accent }}
      className="sticky top-0 z-50"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap items-center gap-x-8 gap-y-3">
        <a
          href="#home"
          style={{ color: theme.text }}
          className="text-xl md:text-2xl font-bold tracking-tight mr-auto"
        >
          {companyName}
        </a>

        <div className="order-last md:order-none w-full md:w-auto">{children}</div>

        <div className="flex items-center gap-3">
          {onCompanyChange && (
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                style={{ color: theme.text, borderColor: `${theme.primary}40` }}
                className="px-4 py-2 rounded-full border text-xs font-medium bg-transparent hover:opacity-70 transition-opacity"
              >
                企業切替
              </button>
              {showDropdown && (
                <div
                  style={{ borderColor: `${theme.primary}26` }}
                  className="absolute right-0 mt-2 w-48 bg-white rounded-xl border overflow-hidden"
                >
                  {companies.map((company) => (
                    <button
                      key={company.id}
                      onClick={() => {
                        onCompanyChange(company.id);
                        setShowDropdown(false);
                      }}
                      className="block w-full text-left px-5 py-3 text-sm text-gray-800 bg-white hover:bg-gray-50 transition-colors"
                    >
                      {company.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
          {ctaLabel && (
            <a
              href={ctaHref}
              style={{ backgroundColor: theme.primary }}
              className="px-5 md:px-6 py-2.5 rounded-full text-sm font-bold text-white hover:opacity-85 transition-opacity whitespace-nowrap"
            >
              {ctaLabel}
            </a>
          )}
        </div>
      </div>
    </header>
  );
};

export { Header };
