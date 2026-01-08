'use client';

import { useState } from 'react';

export default function CustomerManagement() {
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const handleSave = () => {
    if (!name || !age) {
      alert('名前と年齢を入力してください');
      return;
    }
    
    // ここで実際の保存処理を行う（例：APIに送信など）
    console.log('保存データ:', { name, age });
    
    // ポップアップを表示
    setShowPopup(true);
    
    // 3秒後にポップアップを非表示
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
    
    // フォームをリセット
    setName('');
    setAge('');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black flex items-center justify-center p-4">
      {/* ポップアップ */}
      {showPopup && (
        <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in">
          <div className="bg-green-500 text-white px-8 py-4 rounded-lg shadow-lg flex items-center gap-3">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-medium text-lg">保存しました</span>
          </div>
        </div>
      )}

      {/* メインコンテンツ */}
      <div className="w-full max-w-2xl">
        {/* ヘッダー */}
        <div className="border-4 border-black dark:border-white bg-white dark:bg-black mb-12">
          <h1 className="text-center text-3xl font-bold py-12 text-black dark:text-white">
            顧客管理システム
          </h1>
        </div>

        {/* フォーム */}
        <div className="space-y-8 px-4">
          {/* 名前入力 */}
          <div className="flex items-center gap-8">
            <label htmlFor="name" className="text-xl font-medium text-black dark:text-white min-w-[80px]">
              名前
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="flex-1 px-4 py-3 border-2 border-black dark:border-white bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder=""
            />
          </div>

          {/* 年齢入力 */}
          <div className="flex items-center gap-8">
            <label htmlFor="age" className="text-xl font-medium text-black dark:text-white min-w-[80px]">
              年齢
            </label>
            <input
              id="age"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="flex-1 px-4 py-3 border-2 border-black dark:border-white bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder=""
            />
          </div>

          {/* 保存ボタン */}
          <div className="flex justify-center pt-8">
            <button
              onClick={handleSave}
              className="px-24 py-4 border-2 border-black dark:border-white bg-white dark:bg-black text-black dark:text-white text-xl font-medium hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              保存
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
