"use client";

import Link from "next/link";
import posthog from "posthog-js";
import { Button } from "@/components/ui/button";

export default function SellerAlertPage() {
  return (
    <div className="min-h-screen bg-slate-50/50 py-10 px-4 md:px-8 flex justify-center items-center">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl shadow-slate-100 border border-slate-100 overflow-hidden transition-all duration-300 hover:shadow-2xl">
        {/* Banner dekoracyjny na górze */}
        <div className="h-2 bg-gradient-to-r from-rose-500 via-pink-500 to-orange-400" />
        
        <div className="p-6 md:p-8 space-y-8">
          {/* Header z metadanymi */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            <span className="bg-rose-50 text-rose-600 px-2.5 py-1 rounded-full border border-rose-100/50">
              Alert zwrotów
            </span>
            <span>•</span>
            <span>Maj 2026</span>
            <span>•</span>
            <span>Sukienki</span>
            <span>•</span>
            <span className="bg-slate-100 px-2 py-0.5 rounded">340 zamówień</span>
          </div>

          {/* Główna sekwencja powitalna */}
          <div className="space-y-2">
            <h2 className="text-slate-600 text-base font-normal">
              Cześć <span className="font-semibold text-slate-800">Kamil</span>, Twoje zwroty kosztowały Cię
            </h2>
            <div className="py-2 flex items-baseline">
              <span className="text-6xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-rose-600 via-pink-600 to-red-500 bg-clip-text text-transparent drop-shadow-sm">
                1680
              </span>
              <span className="text-3xl font-black text-rose-600 ml-2 tracking-wide uppercase">
                PLN
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-sm font-semibold text-rose-600 bg-rose-50/70 p-2.5 rounded-xl border border-rose-100/30">
              <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span>2.2× więcej niż podobni sprzedawcy • 28% zwrotów</span>
            </div>
          </div>

          {/* Sekcja porównania */}
          <div className="bg-slate-50 rounded-2xl p-4 md:p-5 border border-slate-100/80 space-y-4">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Porównanie z rynkiem</h3>
            
            {/* Ty */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-sm">
                <span className="font-bold text-slate-800">Ty</span>
                <span className="font-bold text-rose-600">1680 PLN (28%)</span>
              </div>
              <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-rose-500 to-red-500 h-full rounded-full transition-all duration-1000 w-[28%]" />
              </div>
            </div>

            {/* Podobni sprzedawcy */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-sm text-slate-500">
                <span>Podobni sprzedawcy • sukienki</span>
                <span className="font-medium text-slate-700">760 PLN (13%)</span>
              </div>
              <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden">
                <div className="bg-slate-400 h-full rounded-full transition-all duration-1000 w-[13%]" />
              </div>
            </div>
          </div>

          {/* Sekcja Rekomendowana akcja */}
          <div className="bg-amber-50/50 rounded-2xl p-5 border border-amber-100/60 flex gap-4">
            <div className="bg-amber-100/80 rounded-xl p-2.5 h-11 w-11 flex items-center justify-center text-amber-700 shrink-0">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-amber-900">Rekomendowana akcja</h4>
              <p className="text-sm text-amber-800 leading-relaxed font-medium">
                Dodaj tabelę rozmiarów do 12 produktów bez opisu dopasowania.
              </p>
            </div>
          </div>

          {/* Przyciski CTA */}
          <div className="flex flex-col gap-3 pt-2">
            <Link
              href="/seller/fix-products"
              className="w-full"
              onClick={() => posthog.capture("seller_fix_products_clicked", { return_cost_pln: 1680, return_rate_pct: 28 })}
            >
              <Button className="w-full py-6 text-base font-semibold bg-slate-900 hover:bg-slate-800 text-white rounded-xl shadow-lg shadow-slate-900/10 hover:shadow-xl transition-all duration-200">
                Popraw produkty
              </Button>
            </Link>
            <Link href="/" className="w-full">
              <Button variant="ghost" className="w-full py-6 text-sm font-medium text-slate-500 hover:text-slate-700 hover:bg-slate-100/60 rounded-xl transition-all duration-200">
                Później
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
