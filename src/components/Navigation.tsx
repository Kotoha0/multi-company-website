import type { NavigationItem, Theme } from '../types';

interface NavigationProps {
  items: NavigationItem[];
  theme: Theme;
}

const Navigation = ({ items, theme }: NavigationProps) => {
  return (
    <nav className="flex gap-6 md:gap-8">
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          style={{ color: theme.text }}
          className="whitespace-nowrap text-sm font-medium hover:opacity-60 transition-opacity"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};

export { Navigation };
