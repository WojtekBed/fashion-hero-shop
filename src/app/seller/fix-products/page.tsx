"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ProductItem {
  id: number;
  name: string;
  returnRate: number;
  savings: number;
}

const ALL_PRODUCTS: ProductItem[] = [
  { id: 1, name: "Sukienka midi w kwiaty", returnRate: 42, savings: 210 },
  { id: 2, name: "Sukienka letnia boho", returnRate: 38, savings: 190 },
  { id: 3, name: "Sukienka koktajlowa czarna", returnRate: 35, savings: 175 },
  { id: 4, name: "Sukienka wrap czerwona", returnRate: 31, savings: 155 },
  { id: 5, name: "Sukienka maxi w paski", returnRate: 29, savings: 145 },
  { id: 6, name: "Sukienka plisowana zielona", returnRate: 27, savings: 135 },
  { id: 7, name: "Sukienka jeansowa sportowa", returnRate: 26, savings: 130 },
  { id: 8, name: "Sukienka koszulowa beżowa", returnRate: 24, savings: 120 },
  { id: 9, name: "Sukienka mini z falbaną", returnRate: 22, savings: 110 },
  { id: 10, name: "Sukienka wieczorowa granatowa", returnRate: 20, savings: 100 },
  { id: 11, name: "Sukienka dzianinowa dopasowana", returnRate: 18, savings: 90 },
  { id: 12, name: "Sukienka koktajlowa koronkowa", returnRate: 17, savings: 85 },
];

export default function FixProductsPage() {
  const [selectedIds, setSelectedIds] = useState<number[]>(ALL_PRODUCTS.map((p) => p.id));
  const [showAll, setShowAll] = useState(false);

  // Toggle single product checkbox
  const handleToggle = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Toggle all checkboxes
  const handleToggleAll = () => {
    if (selectedIds.length === ALL_PRODUCTS.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(ALL_PRODUCTS.map((p) => p.id));
    }
  };

  const visibleProducts = showAll ? ALL_PRODUCTS : ALL_PRODUCTS.slice(0, 5);
  const selectedCount = selectedIds.length;
  const totalSavings = ALL_PRODUCTS.filter((p) => selectedIds.includes(p.id)).reduce(
    (sum, p) => sum + p.savings,
    0
  );

  return (
    <div className="min-h-screen bg-slate-50/50 pb-24 pt-6 px-4 md:px-8 flex justify-center items-start">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl shadow-slate-100 border border-slate-100 overflow-hidden relative">
        
        {/* Przycisk Wróć */}
        <div className="p-4 border-b border-slate-100 flex items-center">
          <Link href="/seller" className="inline-flex items-center text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors">
            <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Wróć
          </Link>
        </div>

        <div className="p-6 md:p-8 space-y-6">
          {/* Header */}
          <div className="space-y-1">
            <h1 className="text-2xl font-extrabold text-slate-950 tracking-tight">
              12 produktów bez tabeli rozmiarów
            </h1>
            <p className="text-sm font-medium text-slate-400">
              Najczęstszy powód zwrotu w Twojej kategorii
            </p>
          </div>

          {/* Opcja zaznacz wszystko */}
          <div
            onClick={handleToggleAll}
            className="flex items-center justify-between bg-slate-50 p-4 rounded-2xl border border-slate-100/85 cursor-pointer hover:bg-slate-100/55 transition-all duration-200"
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${
                  selectedIds.length === ALL_PRODUCTS.length
                    ? "bg-rose-500 border-rose-500 text-white shadow-sm shadow-rose-500/20"
                    : "border-slate-300 bg-white"
                }`}
              >
                {selectedIds.length === ALL_PRODUCTS.length && (
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <span className="text-sm font-extrabold text-slate-800">
                Zaznacz wszystkie produkty
              </span>
            </div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider bg-white border border-slate-100 px-2 py-0.5 rounded-lg">
              {selectedIds.length} z {ALL_PRODUCTS.length}
            </span>
          </div>

          {/* Lista produktów */}
          <div className="space-y-3">
            {visibleProducts.map((product) => {
              const isChecked = selectedIds.includes(product.id);
              return (
                <div
                  key={product.id}
                  onClick={() => handleToggle(product.id)}
                  className={`flex items-center justify-between p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
                    isChecked
                      ? "border-rose-200 bg-rose-50/20 shadow-sm"
                      : "border-slate-100 bg-white hover:bg-slate-50/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {/* Custom Checkbox */}
                    <div
                      className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${
                        isChecked
                          ? "bg-rose-500 border-rose-500 text-white shadow-sm shadow-rose-500/20"
                          : "border-slate-300 bg-white"
                      }`}
                    >
                      {isChecked && (
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>

                    <div className="space-y-0.5">
                      <span className="text-sm font-bold text-slate-800 leading-tight block">
                        {product.name}
                      </span>
                      <span className="text-xs text-rose-500 bg-rose-50 px-1.5 py-0.5 rounded font-bold">
                        Zwroty: {product.returnRate}%
                      </span>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-sm font-extrabold text-slate-800 block">
                      +{product.savings} PLN
                    </span>
                    <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider block">
                      / mies.
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Przycisk Pokaż Więcej */}
          {!showAll && (
            <button
              onClick={() => setShowAll(true)}
              className="w-full py-3.5 text-sm font-bold text-slate-600 hover:text-slate-800 border border-slate-200 rounded-2xl hover:bg-slate-50 transition-all duration-200 flex items-center justify-center gap-1.5 shadow-sm"
            >
              Pokaż więcej 7 produktów
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          )}
        </div>

        {/* Sticky bottom bar */}
        <div className="sticky bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-slate-100 p-5 md:p-6 shadow-2xl space-y-4">
          <div className="flex justify-between items-center text-sm">
            <div className="space-y-0.5">
              <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">
                Zaznaczono
              </span>
              <span className="font-extrabold text-slate-800">
                {selectedCount} z 12
              </span>
            </div>
            <div className="text-right space-y-0.5">
              <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">
                Szacowana oszczędność
              </span>
              <span className="font-black text-rose-600 text-lg">
                {totalSavings} PLN<span className="text-xs font-normal text-slate-500">/mies.</span>
              </span>
            </div>
          </div>

          <Link href={`/seller/plan-saved?count=${selectedCount}&savings=${totalSavings}`} className="block w-full">
            <Button
              disabled={selectedCount === 0}
              className="w-full py-6 text-base font-semibold bg-slate-900 hover:bg-slate-800 text-white rounded-xl shadow-lg shadow-slate-900/10 hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none"
            >
              Zatwierdzam plan poprawy
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
