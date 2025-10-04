import React, { useState, useEffect } from 'react';
import { batikData, CulturalItem } from '../data/culturalData';

interface BatikPageProps {
  openModal?: (item: CulturalItem) => void;
}

const BatikPage: React.FC<BatikPageProps> = ({ openModal }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const items = batikData;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-pink-100 border border-pink-200 rounded-full px-6 py-2 mb-8">
            <span className="text-2xl">🎨</span>
            <span className="text-pink-800 font-medium">Tidak Ditemukan</span>
          </div>
          <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-900 to-rose-800">
            Batik Tidak Ditemukan
          </h2>
          <p className="text-lg text-gray-700 max-w-md mx-auto">
            Maaf, tidak ada item batik saat ini.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 py-16 px-4 relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23DB2777' fill-opacity='0.1'%3E%3Cpath d='M50 50c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm20-20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zM30 70c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-rose-100 border border-pink-200 rounded-full px-6 py-2 mb-8">
            <span className="text-2xl">🎨</span>
            <span className="text-pink-800 font-medium">Koleksi Batik</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-900 via-rose-800 to-pink-900 mb-6">
            Batik Tradisional
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Temukan {items.length} motif batik yang kaya akan makna dan keindahan Jawa Timur
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
                className={`group relative cursor-pointer rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{
                  transitionDelay: `${index * 50}ms`,
                  aspectRatio: '4/5'
                }}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.thumbnail})` }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500" />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/90 via-rose-800/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-6">
                  {/* Location Badge */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1 text-xs text-white font-medium">
                      📍 {item.location}
                    </div>

                    {/* Arrow Icon */}
                    <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-500">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="space-y-3 transform transition-all duration-500 group-hover:translate-y-0 translate-y-2">
                    <div className="space-y-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-lg line-clamp-2">
                        {item.title}
                      </h3>
                      <div className="h-1 w-12 bg-pink-400 rounded-full transition-all duration-500 group-hover:w-20" />
                    </div>

                    <p className="text-white/90 text-sm sm:text-base leading-relaxed drop-shadow-md line-clamp-3">
                      {item.shortDesc}
                    </p>

                    {/* Category Badge */}
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1 text-xs text-white font-medium">
                        🎨 {item.category}
                      </span>

                      {/* Year Badge */}
                      <span className="bg-pink-400/20 backdrop-blur-md border border-pink-400/30 rounded-full px-3 py-1 text-xs text-pink-100 font-medium">
                        {item.year}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Glassmorphism Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-white/10 group-hover:border-white/30 transition-all duration-500 pointer-events-none" />

                {/* Shadow Effect */}
                <div className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-xl bg-black/20 -z-10" />
              </div>
            );
          })}
        </div>

        {/* Back to Categories Button */}
        <div className="text-center mt-16">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white font-bold py-4 px-8 rounded-xl shadow-xl hover:shadow-pink-500/50 transform hover:scale-105 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Kembali ke Kategori
          </button>
        </div>
      </div>
    </div>
  );
};

export default BatikPage;
