import type { CompanyConfig } from '../types';
import { Header } from './Header';
import { Navigation } from './Navigation';
import { Hero } from './Hero';
import { ServiceSection } from './ServiceSection';
import { ContactSection } from './ContactSection';
import { Footer } from './Footer';

interface CompanyPageProps {
  company: CompanyConfig;
  onCompanyChange?: (companyId: string) => void;
}

const CompanyPage = ({ company, onCompanyChange }: CompanyPageProps) => {
  return (
    <div style={{ backgroundColor: company.theme.background, color: company.theme.text }}>
      <Header
        companyName={company.name}
        theme={company.theme}
        ctaLabel={company.contact.buttonLabel}
        onCompanyChange={onCompanyChange}
      >
        <Navigation items={company.navigation} theme={company.theme} />
      </Header>
      <Hero config={company.hero} theme={company.theme} companyId={company.id} />
      <ServiceSection services={company.services} theme={company.theme} companyId={company.id} />
      <ContactSection config={company.contact} theme={company.theme} />
      <Footer config={company.footer} theme={company.theme} />
    </div>
  );
};

export { CompanyPage };
