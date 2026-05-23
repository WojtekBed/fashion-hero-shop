"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function PlanSavedContent() {
  const searchParams = useSearchParams();
  const count = searchParams?.get("count") || "12";
  const savings = searchParams?.get("savings") || "1800";

  return (
    <div className="p-6 md:p-8 space-y-8 flex flex-col items-center text-center">
      {/* Animowany, duży zielony checkmark */}
      <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center border border-emerald-100 shadow-sm shadow-emerald-500/10">
        <svg className="w-10 h-10 animate-[ping_1.5s_ease-in-out_1] absolute opacity-10 bg-emerald-400 rounded-full w-20 h-20" viewBox="0 0 24 24" />
        <svg className="w-10 h-10 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      {/* Nagłówek */}
      <div className="space-y-2">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">Plan zapisany</h1>
        <p className="text-slate-600 text-sm leading-relaxed max-w-sm font-medium">
          Zaplanowałeś poprawę <span className="text-slate-900 font-bold bg-slate-100 px-2 py-0.5 rounded">{count}</span> produktów. <br />
          Szacowana oszczędność: <span className="text-rose-600 font-bold bg-rose-50 px-2 py-0.5 rounded border border-rose-100/50">{savings} PLN/mies</span>. Przypomnimy Ci za 7 dni.
        </p>
      </div>

      {/* Szary tekst pomocniczy */}
      <div className="bg-slate-50/80 rounded-2xl p-5 border border-slate-100/80 text-left w-full space-y-2">
        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Jak dodać tabelę rozmiarów?</h4>
        <p className="text-sm text-slate-600 leading-relaxed font-medium">
          Wejdź w <span className="font-semibold text-slate-800">Produkty</span> → wybierz produkt → zakładka <span className="font-semibold text-slate-800">Opis</span> → sekcja <span className="font-semibold text-slate-800">Rozmiarówka</span>.
        </p>
      </div>

      {/* Przyciski nawigacyjne */}
      <div className="w-full space-y-3 pt-4">
        {/* Outlined Button - Wróć do alertu (umieszczony NAD przyciskiem drugim) */}
        <Link href="/seller" className="block w-full">
          <Button variant="outline" className="w-full py-6 text-sm font-semibold border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl transition-all duration-200">
            ← Wróć do alertu
          </Button>
        </Link>

        {/* Ghost Button - Przejdź do produktów */}
        <div className="w-full text-center">
          <Button variant="ghost" disabled className="w-full py-4 text-sm font-medium text-slate-400 cursor-not-allowed rounded-xl flex flex-col items-center justify-center gap-0.5 opacity-60">
            <span className="font-semibold text-slate-600">Przejdź do produktów</span>
            <span className="text-[10px] text-slate-400">(funkcja niedostępna w tej wersji)</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function PlanSavedPage() {
  return (
    <div className="min-h-screen bg-slate-50/50 py-10 px-4 md:px-8 flex justify-center items-center">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl shadow-slate-100 border border-slate-100 overflow-hidden">
        <Suspense fallback={
          <div className="p-8 text-center text-sm font-medium text-slate-400 flex flex-col items-center justify-center gap-3">
            <div className="w-8 h-8 rounded-full border-2 border-slate-200 border-t-rose-500 animate-spin" />
            Ładowanie podsumowania...
          </div>
        }>
          <PlanSavedContent />
        </Suspense>
      </div>
    </div>
  );
}
