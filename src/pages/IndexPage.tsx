const IndexPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            マルチテナント企業サイト デモ
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            同じコンポーネントで複数企業の異なるデザイン・内容を実現
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <a
            href="/?company=sampletech"
            className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow border-t-4"
            style={{ borderTopColor: '#1769d2' }}
          >
            <h2 className="text-2xl font-bold mb-2" style={{ color: '#1769d2' }}>
              SampleTech
            </h2>
            <p className="text-gray-600 mb-4">ITコンサルティング</p>
            <p className="text-sm text-gray-500">
              中小企業のDX推進を支援するコンサルティング企業
            </p>
            <div
              className="mt-6 inline-block px-6 py-2 rounded-lg font-semibold text-white"
              style={{ backgroundColor: '#1769d2' }}
            >
              サイトを表示 →
            </div>
          </a>

          <a
            href="/?company=yasuragi-cafe"
            className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow border-t-4"
            style={{ borderTopColor: '#337c4c' }}
          >
            <h2 className="text-2xl font-bold mb-2" style={{ color: '#337c4c' }}>
              やすらぎカフェ
            </h2>
            <p className="text-gray-600 mb-4">カフェ・飲食店</p>
            <p className="text-sm text-gray-500">
              こだわりのコーヒーと手作りスイーツのカフェ
            </p>
            <div
              className="mt-6 inline-block px-6 py-2 rounded-lg font-semibold text-white"
              style={{ backgroundColor: '#337c4c' }}
            >
              サイトを表示 →
            </div>
          </a>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 md:p-10">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">📋 プロジェクト概要</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-2xl mr-4">✓</span>
              <div>
                <strong>共通コンポーネント</strong>
                <p className="text-gray-600">
                  Header, Navigation, Hero, ServiceSection, Contact, Footer を共有
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-4">✓</span>
              <div>
                <strong>設定ベースのカスタマイズ</strong>
                <p className="text-gray-600">
                  companies.json の設定データで企業名・配色・内容を切り替え
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-4">✓</span>
              <div>
                <strong>レスポンシブデザイン</strong>
                <p className="text-gray-600">
                  PC・スマートフォンの両方で最適な表示に対応
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-4">✓</span>
              <div>
                <strong>拡張性</strong>
                <p className="text-gray-600">
                  新しい企業を追加する場合は JSON に設定を追加するだけ
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-6 md:p-8 rounded">
          <h4 className="font-bold text-yellow-900 mb-2">⚙️ 設定方法</h4>
          <p className="text-sm md:text-base text-yellow-800">
            <code className="bg-yellow-100 px-2 py-1 rounded">src/data/companies.json</code> を編集して、
            企業の設定データを変更します。変更後は自動的に反映されます。
          </p>
        </div>
      </div>
    </div>
  );
};

export { IndexPage };
