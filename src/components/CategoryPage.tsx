import React, { useState, useEffect } from 'react';
import { allCategories, CulturalItem } from '../data/culturalData';

interface CategoryPageProps {
  category: string;
  openModal?: (item: CulturalItem) => void;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ category, openModal }) => {
  // Normalize category to match keys in allCategories
  const normalizedCategory = category.charAt(0).toUpperCase() + category.slice(1);

  // If category is 'all', show all items from all categories
  const items: CulturalItem[] = normalizedCategory === 'All'
    ? Object.values(allCategories).flat()
    : (allCategories as any)[normalizedCategory] || [];

  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900 py-16 px-4 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="fixed inset-0 opacity-[0.05] pointer-events-none">
          <div 
            className="w-full h-full animate-pulse-slow"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 backdrop-blur-sm border border-amber-500/20 rounded-full px-6 py-3 mb-8 shadow-xl">
            <span className="text-3xl animate-bounce">😔</span>
            <span className="text-amber-300 font-semibold">Tidak Ditemukan</span>
          </div>
          <p className="text-lg text-amber-100/70 max-w-md mx-auto">
            Maaf, tidak ada item untuk kategori ini saat ini.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900 py-16 px-4 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="fixed inset-0 opacity-[0.05] pointer-events-none">
        <div 
          className="w-full h-full animate-pulse-slow"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 0h2v20H9V0zm25.134.84l1.732 1-10 17.32-1.732-1 10-17.32zM58.16 4.134l1 1.732-17.32 10-1-1.732 17.32-10zM80 9v2H60V9h20z' fill='%23d97706' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 backdrop-blur-md border border-amber-500/30 rounded-full px-6 py-3 mb-8 shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 hover:scale-105">
            <span className="text-2xl animate-pulse">✨</span>
            <span className="text-amber-300 font-semibold tracking-wide">Koleksi Budaya</span>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-amber-100/80 max-w-2xl mx-auto leading-relaxed">
            Temukan <span className="text-yellow-400 font-bold">{items.length}</span> item budaya yang menakjubkan
          </p>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {items.map((item, index) => {
            const isHovered = hoveredCard === item.id;

            return (
              <div
                key={item.id}
                onClick={() => openModal && openModal(item)}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative cursor-pointer rounded-2xl overflow-hidden transform transition-all duration-700 hover:scale-[1.05] hover:-translate-y-2 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{
                  transitionDelay: `${index * 50}ms`,
                  aspectRatio: '4/5'
                }}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-125"
                  style={{ backgroundImage: `url(${item.thumbnail})` }}
                />

                {/* Base Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/60 to-transparent transition-opacity duration-700" />

                {/* Luxury Hover Overlay with Glassmorphism */}
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/95 via-orange-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 backdrop-blur-sm" />

                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/20 via-transparent to-transparent blur-xl" />
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-6 z-10">
                  {/* Location Badge with Glassmorphism */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 group-hover:border-amber-400/30 rounded-full px-3 py-1.5 text-xs text-amber-100 font-medium shadow-lg transition-all duration-500 group-hover:bg-amber-500/10">
                      <span className="flex items-center gap-1.5">
                        <span className="text-amber-400">📍</span>
                        {item.location}
                      </span>
                    </div>

                    {/* Arrow Icon with Glow */}
                    <div className="w-9 h-9 rounded-full bg-white/5 backdrop-blur-md border border-white/10 group-hover:border-amber-400/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-3 group-hover:translate-x-0 transition-all duration-500 shadow-lg group-hover:shadow-amber-500/50">
                      <svg className="w-4 h-4 text-amber-300 group-hover:text-amber-200 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="space-y-3 transform transition-all duration-700 group-hover:translate-y-0 translate-y-2">
                    <div className="space-y-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-2xl line-clamp-2 group-hover:text-amber-100 transition-colors duration-500">
                        {item.title}
                      </h3>
                      {/* Animated Underline */}
                      <div className="h-1 w-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full transition-all duration-700 group-hover:w-24 group-hover:shadow-lg group-hover:shadow-amber-500/50" />
                    </div>

                    <p className="text-white/80 group-hover:text-amber-100/90 text-sm sm:text-base leading-relaxed drop-shadow-lg line-clamp-3 transition-colors duration-500">
                      {item.shortDesc}
                    </p>

                    {/* Category & Year Badges */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 bg-white/5 backdrop-blur-md border border-white/10 group-hover:border-amber-400/30 rounded-full px-3 py-1.5 text-xs text-amber-100 font-medium shadow-lg transition-all duration-500 group-hover:bg-amber-500/10">
                        {item.category}
                      </span>

                      {/* Year Badge with Glow */}
                      <span className="bg-gradient-to-r from-amber-500/10 to-yellow-500/10 backdrop-blur-md border border-amber-400/20 group-hover:border-amber-400/50 rounded-full px-3 py-1.5 text-xs text-amber-200 font-semibold shadow-lg transition-all duration-500 group-hover:shadow-amber-500/30">
                        {item.year}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Premium Glass Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-white/5 group-hover:border-amber-400/30 transition-all duration-700 pointer-events-none" />

                {/* Outer Glow Shadow */}
                <div className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl bg-gradient-to-t from-amber-500/20 via-yellow-500/10 to-transparent -z-10" />
              </div>
            );
          })}
        </div>

        {/* Back to Categories Button */}
        <div className="text-center mt-16 animate-fade-in-up">
          <button
            onClick={() => window.history.back()}
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-yellow-400 hover:via-amber-400 hover:to-yellow-500 text-slate-900 font-bold py-4 px-8 rounded-xl shadow-2xl hover:shadow-amber-500/50 transform hover:scale-105 transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Kembali ke Kategori
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-amber-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
