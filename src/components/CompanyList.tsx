import type { CompanyConfig } from '../types';

interface CompanyListProps {
  companies: CompanyConfig[];
  onSelectCompany: (companyId: string) => void;
}

const CompanyList = ({ companies, onSelectCompany }: CompanyListProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            マルチテナント企業サイト
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            共通コンポーネントで異なるデザイン・内容の企業サイトを実現
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {companies.map((company) => (
            <div
              key={company.id}
              onClick={() => onSelectCompany(company.id)}
              className="cursor-pointer p-6 md:p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow transform hover:scale-105"
              style={{ borderTop: `6px solid ${company.theme.primary}` }}
            >
              <h2
                style={{ color: company.theme.primary }}
                className="text-2xl md:text-3xl font-bold mb-2"
              >
                {company.name}
              </h2>
              <p
                style={{ color: company.theme.text }}
                className="text-base md:text-lg mb-4 opacity-80"
              >
                {company.industry}
              </p>
              <p className="text-sm text-gray-500 mb-6">
                {company.services.length}個のサービス
              </p>
              <button
                style={{
                  backgroundColor: company.theme.primary,
                  color: '#fff',
                }}
                className="w-full py-2 md:py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                サイトを表示
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 md:p-8 bg-blue-50 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-2">
            💡 デモについて
          </h3>
          <p className="text-sm md:text-base text-blue-800">
            同じReact・TypeScriptコンポーネントを再利用しながら、設定データの切り替えで異なるデザイン・内容のWebページを表示しています。
            新しい企業を追加する場合は、設定JSONにデータを追加するだけで対応可能です。
          </p>
        </div>
      </div>
    </div>
  );
};

export { CompanyList };
