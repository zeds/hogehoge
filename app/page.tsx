'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";

export default function Home() {
  const [jpy, setJpy] = useState<string>('');
  const [vnd, setVnd] = useState<string>('');
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  // 為替レートを取得
  useEffect(() => {
    const fetchExchangeRate = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/JPY');
        const data = await response.json();
        setExchangeRate(data.rates.VND);
      } catch (err) {
        setError('為替レートの取得に失敗しました');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchExchangeRate();
  }, []);

  // 日本円 → ベトナムドン
  const convertJpyToVnd = () => {
    if (!jpy || !exchangeRate) return;
    const jpyValue = parseFloat(jpy);
    if (isNaN(jpyValue)) return;
    const vndValue = jpyValue * exchangeRate;
    setVnd(vndValue.toFixed(2));
  };

  // ベトナムドン → 日本円
  const convertVndToJpy = () => {
    if (!vnd || !exchangeRate) return;
    const vndValue = parseFloat(vnd);
    if (isNaN(vndValue)) return;
    const jpyValue = vndValue / exchangeRate;
    setJpy(jpyValue.toFixed(2));
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left w-full">
          <h1 className="text-3xl font-semibold leading-10 tracking-tight text-red-600 dark:text-red-500">
            奥村さんようこそ
          </h1>
          
          {/* 為替変換セクション */}
          <div className="w-full max-w-md space-y-6 mt-8">
            <h2 className="text-2xl font-semibold text-black dark:text-white">
              為替レート変換
            </h2>
            
            {loading && (
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                為替レートを読み込み中...
              </p>
            )}
            
            {error && (
              <p className="text-sm text-red-600 dark:text-red-400">
                {error}
              </p>
            )}
            
            {exchangeRate && (
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                現在のレート: 1 JPY = {exchangeRate.toFixed(2)} VND
              </p>
            )}

            {/* 日本円入力 */}
            <div className="space-y-2">
              <label htmlFor="jpy" className="block text-sm font-medium text-black dark:text-white">
                日本円 (JPY)
              </label>
              <input
                id="jpy"
                type="number"
                value={jpy}
                onChange={(e) => setJpy(e.target.value)}
                placeholder="金額を入力"
                className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* ベトナムドン入力 */}
            <div className="space-y-2">
              <label htmlFor="vnd" className="block text-sm font-medium text-black dark:text-white">
                ベトナムドン (VND)
              </label>
              <input
                id="vnd"
                type="number"
                value={vnd}
                onChange={(e) => setVnd(e.target.value)}
                placeholder="金額を入力"
                className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* 変換ボタン */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                onClick={convertJpyToVnd}
                disabled={!exchangeRate || loading}
                className="flex-1 h-12 px-5 rounded-lg bg-red-600 text-white font-medium transition-colors hover:bg-red-700 disabled:bg-zinc-400 disabled:cursor-not-allowed"
              >
                JPY → VND
              </button>
              <button
                onClick={convertVndToJpy}
                disabled={!exchangeRate || loading}
                className="flex-1 h-12 px-5 rounded-lg bg-blue-600 text-white font-medium transition-colors hover:bg-blue-700 disabled:bg-zinc-400 disabled:cursor-not-allowed"
              >
                VND → JPY
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row mt-8">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
