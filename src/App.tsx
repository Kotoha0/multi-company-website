import { useState, useEffect } from 'react';
import './App.css';
import { getCompanyById } from './data';
import { CompanyPage } from './components/CompanyPage';
import { IndexPage } from './pages/IndexPage';
import type { CompanyConfig } from './types';

function App() {
  const [selectedCompany, setSelectedCompany] = useState<CompanyConfig | null>(null);

  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const companyId = params.get('company');
      
      if (companyId) {
        const company = getCompanyById(companyId);
        if (company) {
          setSelectedCompany(company);
        }
      } else {
        setSelectedCompany(null);
      }
    };

    // 初期ロード
    handlePopState();

    // ブラウザのバック/フォワード時に対応
    window.addEventListener('popstate', handlePopState);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const handleCompanyChange = (companyId: string) => {
    const company = getCompanyById(companyId);
    if (company) {
      setSelectedCompany(company);
      window.history.pushState({}, '', `/?company=${companyId}`);
    }
  };

  if (selectedCompany) {
    return (
      <CompanyPage
        company={selectedCompany}
        onCompanyChange={handleCompanyChange}
      />
    );
  }

  return <IndexPage />;
}

export default App;
