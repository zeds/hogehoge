'use client';

export default function SamplePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b-2 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <div className="flex gap-1">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600"></div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-300 to-blue-400"></div>
              </div>
              <div>
                <div className="text-sm text-gray-600">一般社団法人</div>
                <div className="text-2xl font-bold text-gray-800">日本エコ協会</div>
                <div className="text-xs text-gray-500">Japan Eco Association</div>
              </div>
            </div>

            {/* Right Links */}
            <div className="flex flex-col items-end gap-1 text-sm">
              <div className="flex items-center gap-4">
                <a href="#" className="flex items-center gap-1 text-green-600 hover:underline">
                  <span className="text-lg">📄</span>
                  <span>サイトマップ</span>
                </a>
                <a href="#" className="flex items-center gap-1 text-green-600 hover:underline">
                  <span className="text-lg">📋</span>
                  <span>サイトポリシー</span>
                </a>
              </div>
              <a href="#" className="flex items-center gap-1 text-green-600 hover:underline">
                <span className="text-lg">🔒</span>
                <span>プライバシーポリシー</span>
              </a>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="bg-gray-100 border-t border-b border-gray-300">
          <div className="max-w-7xl mx-auto">
            <ul className="flex justify-between text-center">
              <li className="flex-1 border-r border-gray-300">
                <a href="#" className="block py-4 px-4 hover:bg-gray-200 font-bold text-gray-700">
                  HOME
                </a>
              </li>
              <li className="flex-1 border-r border-gray-300">
                <a href="#" className="block py-4 px-4 hover:bg-gray-200 text-gray-700">
                  日本エコ協会について
                </a>
              </li>
              <li className="flex-1 border-r border-gray-300">
                <a href="#" className="block py-4 px-4 hover:bg-gray-200 text-gray-700">
                  活動内容
                </a>
              </li>
              <li className="flex-1 border-r border-gray-300">
                <a href="#" className="block py-4 px-4 hover:bg-gray-200 text-gray-700">
                  活動報告
                </a>
              </li>
              <li className="flex-1 border-r border-gray-300">
                <a href="#" className="block py-4 px-4 hover:bg-gray-200 text-gray-700">
                  入会案内
                </a>
              </li>
              <li className="flex-1 border-r border-gray-300">
                <a href="#" className="block py-4 px-4 hover:bg-gray-200 text-gray-700">
                  お問い合わせ
                </a>
              </li>
              <li className="flex-1">
                <a href="#" className="block py-4 px-4 hover:bg-gray-200 text-gray-700">
                  リンク
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Hero Banner */}
      <div className="relative w-full h-64 bg-gradient-to-r from-blue-400 via-green-300 to-lime-200 rounded-3xl mx-auto max-w-7xl mt-8 overflow-hidden shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-500/20"></div>
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h100v100H0z\' fill=\'none\'/%3E%3Cpath d=\'M0 50h100M50 0v100\' stroke=\'%23fff\' stroke-width=\'0.5\' opacity=\'0.3\'/%3E%3C/svg%3E")',
            backgroundSize: '20px 20px'
          }}
        ></div>
        <div className="relative h-full flex items-center">
          <div className="w-full px-12">
            <h1 className="text-3xl font-bold text-white drop-shadow-lg">
              環境対策の普及促進、循環型社会、低炭素社会の実現のために
            </h1>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-600/30 to-transparent">
          <div className="absolute bottom-4 left-1/4 w-24 h-24 bg-green-700/40 rounded-full blur-xl"></div>
          <div className="absolute bottom-8 right-1/3 w-32 h-32 bg-green-600/30 rounded-full blur-2xl"></div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Left Content */}
          <div className="flex-1">
            {/* Main Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-green-600 border-l-4 border-green-600 pl-4 mb-6">
                良い事、良いものはシェアしよう！エコの失敗をなくそう！
              </h2>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  世の中には、まだまだ広く知らされていない優れた環境対策製品があります。しかし、新しい技術・製品はなかなか世間に認知されません。
                </p>
                
                <p>
                  日本エコ協会は、会員の優れた製品・サービスを他団体との連携、会員同士のつながりを活かし、世間にお伝えする活動をしています。
                </p>
                
                <p className="pt-4">
                  また、「環境対策製品を導入したが失敗してしまった。」という話もよく耳にします。
                </p>
                
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>何年もしないうちに製品がダメになった。</li>
                  <li>手抜き工事をされた。工事の仕上がりが非常に粗く、いい加減だった。</li>
                </ul>
                
                <p className="pt-4">など。</p>
                
                <p className="pt-4">当会では、、</p>
                
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>製品選びのポイントとチェック項目</li>
                  <li>信頼できる、安心できる施工業者の選び方　など</li>
                </ul>
                
                <p className="pt-4">
                  「エコ対策の失敗」を防ぐため、環境対策に関するセミナーや相談会を開催しています。
                </p>
              </div>
            </section>

            {/* News Section */}
            <section>
              <h2 className="text-2xl font-bold text-green-600 border-l-4 border-green-600 pl-4 mb-6">
                ニュース・トピックス
              </h2>
              
              <div className="space-y-4">
                <div className="flex gap-4 items-start hover:bg-gray-50 p-4 rounded transition-colors">
                  <span className="text-2xl font-bold text-orange-500">2018.07.18</span>
                  <a href="#" className="text-blue-600 hover:underline text-lg">
                    日本エコ協会の新しいリーフレットが出来ました！
                  </a>
                </div>
              </div>
            </section>
          </div>

          {/* Right Sidebar */}
          <aside className="w-80 space-y-6">
            {/* Certified Products */}
            <div className="border-4 border-blue-400 rounded-lg p-4 bg-gradient-to-br from-blue-50 to-white">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex gap-1">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-300 to-blue-400"></div>
                </div>
                <span className="text-lg font-bold text-gray-800">日本エコ協会 推奨製品</span>
              </div>
            </div>

            {/* Login Button */}
            <button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center gap-2 shadow-lg transition-all">
              <span className="text-xl">🔓</span>
              <span>ログイン／会員専用ページ</span>
            </button>

            {/* Ibaraki Energy Consultation */}
            <div className="border-2 border-gray-300 rounded-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center py-3 font-bold">
                茨城県省エネルギー相談<br />支援事業
              </div>
              <div className="p-4 bg-white">
                <div className="bg-blue-600 text-white text-center py-8 rounded-lg mb-4 relative">
                  <div className="absolute top-2 left-2 bg-white text-blue-600 px-3 py-1 rounded font-bold text-sm">
                    経済産業省<br />関東経済産業局
                  </div>
                  <h3 className="text-xl font-bold mb-2">茨城県省エネルギー<br />診断・支援事業のご案内</h3>
                </div>
                <div className="space-y-2 text-sm text-gray-700 mb-4">
                  <p className="font-bold">無料・技術・設備・技術・実施してお困りではありませんか？</p>
                  <p>診療所や学校なども無料で診断実施中！省エネ診断実施中ではありません</p>
                </div>
                <div className="bg-gray-50 p-3 rounded text-xs text-gray-600 space-y-1">
                  <p>●お問い合わせ・相談先/受付専用窓口はこちら</p>
                  <p className="font-bold">一般社団法人 茨城県環境管理協会 事業推進部</p>
                </div>
              </div>
            </div>

            {/* Association Logo */}
            <div className="border-4 border-yellow-400 rounded-lg p-6 bg-white">
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600"></div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-300 to-blue-400"></div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">一般社団法人</div>
                  <div className="text-lg font-bold text-gray-800">日本エコ協会</div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
