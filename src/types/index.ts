export interface NavigationItem {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
}

export interface Theme {
  primary: string;
  accent: string;
  text: string;
  background: string;
}

export interface HeroConfig {
  headline: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
}

export interface ContactConfig {
  heading: string;
  email: string;
  buttonLabel: string;
}

export interface FooterConfig {
  copyright: string;
}

export interface CompanyConfig {
  id: string;
  name: string;
  industry: string;
  theme: Theme;
  navigation: NavigationItem[];
  hero: HeroConfig;
  services: Service[];
  contact: ContactConfig;
  footer: FooterConfig;
}

export interface CompaniesData {
  note: string;
  companies: CompanyConfig[];
}
