import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { allCategories } from '../data/culturalData';
import images from '../assets/images';

const categoryIcons: Record<string, string> = {
  Tarian: '💃',
  Kuliner: '🍜',
  Gunung: '⛰️',
  Tradisi: '🎭',
  KerajaanKuno: '🏛️',
  SukuAsli: '👥',
  CeritaRakyat: '📖',
  SitusSejarah: '🏰',
  Batik: '🎨',
  Pantai: '🏖️',
  Musik: '🎵',
  Warisan: '🏺'
};

const categoryDescriptions: Record<string, string> = {
  Tarian: 'Keindahan gerak dan ekspresi budaya Jawa Timur',
  Kuliner: 'Kelezatan cita rasa warisan leluhur',
  Gunung: 'Keagungan puncak-puncak megah',
  Tradisi: 'Ritual sakral yang turun-temurun',
  KerajaanKuno: 'Kejayaan peradaban masa lampau',
  SukuAsli: 'Kearifan suku-suku asli Jawa Timur',
  CeritaRakyat: 'Kisah-kisah legenda dan mitos lokal',
  SitusSejarah: 'Jejak sejarah yang tak terlupakan',
  Batik: 'Seni kain bermotif filosofis',
  Pantai: 'Pesona pesisir yang memukau',
  Musik: 'Harmoni suara tradisional',
  Warisan: 'Pusaka budaya tak ternilai'
};

const categoryImages: Record<string, string> = {
  Tarian: images.Agandrung,
  Kuliner: images.Blontongbalap,
  Gunung: images.Csemeru,
  Tradisi: images.Ekarapansapi,
  KerajaanKuno: images.Fmajapahit,
  SukuAsli: images.Gjawa,
  CeritaRakyat: images.Hsurabaya,
  SitusSejarah: images.Itrowulan,
  Batik: images.Dgajaholing,
  Pantai: images.Cbromo,
  Musik: images.Gosing,
  Warisan: images.Ipenataran,
};

const categoryColors: Record<string, { from: string; to: string; glow: string }> = {
  Tarian: { from: '#d97706', to: '#f59e0b', glow: 'shadow-amber-500/50' },
  Kuliner: { from: '#dc2626', to: '#ef4444', glow: 'shadow-red-500/50' },
  Gunung: { from: '#059669', to: '#10b981', glow: 'shadow-emerald-500/50' },
  Tradisi: { from: '#7c3aed', to: '#8b5cf6', glow: 'shadow-purple-500/50' },
  KerajaanKuno: { from: '#92400e', to: '#d97706', glow: 'shadow-amber-600/50' },
  SukuAsli: { from: '#166534', to: '#16a34a', glow: 'shadow-green-500/50' },
  CeritaRakyat: { from: '#7c2d12', to: '#dc2626', glow: 'shadow-red-600/50' },
  SitusSejarah: { from: '#374151', to: '#6b7280', glow: 'shadow-gray-500/50' },
  Batik: { from: '#be185d', to: '#ec4899', glow: 'shadow-pink-500/50' },
  Pantai: { from: '#0284c7', to: '#06b6d4', glow: 'shadow-cyan-500/50' },
  Musik: { from: '#b91c1c', to: '#f87171', glow: 'shadow-rose-500/50' },
  Warisan: { from: '#4f46e5', to: '#6366f1', glow: 'shadow-indigo-500/50' }
};

const CategorySelection: React.FC = () => {
  const navigate = useNavigate();
  const categories = Object.keys(allCategories);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCategoryClick = (category: string) => {
    if (category === 'all') {
      navigate('/all');
    } else {
      navigate(`/${category.toLowerCase()}`);
    }
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
      {/* Hero Landing Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="fixed inset-0 opacity-[0.08] pointer-events-none">
          <div 
            className="w-full h-full animate-pulse-slow"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M81.28 88H68.413l19.298 19.298L81.28 88zm2.107 0h13.226L90 107.838 83.387 88zm15.334 0h12.866l-19.298 19.298L98.72 88zm-32.927-2.207L73.586 78h32.827l.5.5 7.294 7.293L115.414 87l-24.707 24.707-.707.707L64.586 87l1.207-1.207zm2.62.207L74 80.414 79.586 86H68.414zm16 0L90 80.414 95.586 86H84.414zm16 0L106 80.414 111.586 86h-11.172zm-8-6h11.173L98 85.586 92.414 80zM82 85.586L87.586 80H76.414L82 85.586z' fill='%23d97706' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Parallax Background Image with Dark Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1555400082-6b4e1c6d4e6e?q=80&w=2000)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/98 via-amber-900/95 to-slate-900/98" />
        </div>
        
        {/* Content */}
        <div className={`relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Luxury Badge with Glassmorphism */}
          <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-amber-500/30 rounded-full px-6 py-3 mb-8 shadow-2xl hover:shadow-amber-500/30 transition-all duration-500 hover:scale-105">
            <span className="text-2xl animate-float">🏛️</span>
            <span className="text-amber-200 font-semibold text-sm sm:text-base tracking-wide">Warisan Adiluhung Nusantara</span>
          </div>

          {/* Main Heading with Gradient Animation */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            <span className="text-white drop-shadow-2xl">Jelajahi Keindahan</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 drop-shadow-2xl animate-gradient-x">
              Budaya Jawa Timur
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-amber-100/90 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            Temukan kekayaan budaya dan tradisi yang menjadi 
            <span className="font-bold text-yellow-400"> identitas masyarakat Jawa Timur</span>
          </p>

          {/* Premium CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16">
            <button
              onClick={() => handleCategoryClick('all')}
              className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-yellow-400 hover:via-amber-400 hover:to-yellow-500 text-slate-900 font-bold text-lg rounded-xl shadow-2xl hover:shadow-amber-500/50 transform hover:scale-105 transition-all duration-500 overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Mulai Penjelajahan
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-amber-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
            
            <button
              onClick={() => document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-8 py-4 bg-white/5 backdrop-blur-md border-2 border-amber-500/30 hover:border-amber-400/50 text-amber-200 hover:text-amber-100 font-semibold text-lg rounded-xl hover:bg-white/10 transform hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-amber-500/30"
            >
              Lihat Kategori
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce cursor-pointer" onClick={() => document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })}>
            <div className="w-6 h-10 border-2 border-amber-500/50 rounded-full flex justify-center mx-auto hover:border-amber-400 transition-colors">
              <div className="w-1.5 h-3 bg-amber-500 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Category Cards Section */}
      <section id="categories" className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-black/20 to-transparent">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 backdrop-blur-md border border-amber-500/30 rounded-full px-6 py-3 text-amber-300 font-semibold text-sm shadow-xl hover:shadow-amber-500/20 transition-all duration-500 hover:scale-105">
                <span className="text-xl animate-pulse">✨</span>
                Eksplorasi Budaya
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 mb-6 animate-gradient-x">
              Kategori Budaya
            </h2>
            <p className="text-lg sm:text-xl text-amber-100/80 max-w-2xl mx-auto leading-relaxed">
              Pilih kategori untuk menyelami kearifan lokal dan tradisi yang telah diwariskan turun-temurun
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {categories.map((category, index) => {
              const colors = categoryColors[category] || categoryColors['Warisan'];
              const isHovered = hoveredCard === category;
              
              return (
                <div
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  onMouseEnter={() => setHoveredCard(category)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`group relative cursor-pointer rounded-2xl sm:rounded-3xl overflow-hidden transform transition-all duration-700 hover:scale-[1.05] hover:-translate-y-2 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ 
                    transitionDelay: `${index * 50}ms`,
                    aspectRatio: '4/5'
                  }}
                >
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-125"
                    style={{ 
                      backgroundImage: `url(${categoryImages[category]})`,
                    }}
                  />

                  {/* Base Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/60 to-transparent transition-opacity duration-700" />
                  
                  {/* Luxury Hover Overlay with Color */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 backdrop-blur-sm"
                    style={{
                      background: `linear-gradient(to top, ${colors.from}f0, ${colors.to}90, transparent)`
                    }}
                  />

                  {/* Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div 
                      className="absolute inset-0 blur-2xl"
                      style={{
                        background: `linear-gradient(to top, ${colors.from}40, transparent)`
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-between p-6 sm:p-8 z-10">
                    {/* Icon & Arrow */}
                    <div className="flex justify-between items-start">
                      <div 
                        className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/5 backdrop-blur-md border-2 border-white/10 group-hover:border-white/30 flex items-center justify-center transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-12 shadow-xl ${colors.glow} group-hover:shadow-2xl`}
                      >
                        <span className="text-3xl sm:text-4xl">{categoryIcons[category]}</span>
                      </div>

                      {/* Arrow Icon */}
                      <div className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 group-hover:border-amber-400/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-700 shadow-lg">
                        <svg className="w-5 h-5 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="space-y-3 transform transition-all duration-700 group-hover:translate-y-0 translate-y-4">
                      <div className="space-y-2">
                        <h3 className="text-3xl sm:text-4xl font-bold text-white group-hover:text-amber-100 drop-shadow-2xl transition-colors duration-500">
                          {category}
                        </h3>
                        <div 
                          className="h-1.5 rounded-full transition-all duration-700 group-hover:w-24 w-12 shadow-lg"
                          style={{ 
                            background: `linear-gradient(to right, ${colors.from}, ${colors.to})`,
                            boxShadow: isHovered ? `0 0 20px ${colors.from}80` : 'none'
                          }}
                        />
                      </div>
                      
                      <p className="text-white/80 group-hover:text-amber-100/90 text-base sm:text-lg leading-relaxed drop-shadow-lg transition-colors duration-500">
                        {categoryDescriptions[category]}
                      </p>

                      {/* Explore Link */}
                      <div className="flex items-center gap-2 text-amber-200 font-semibold text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-700 delay-100">
                        <span>Jelajahi sekarang</span>
                        <svg className="w-4 h-4 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Premium Glass Border */}
                  <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-white/5 group-hover:border-white/20 transition-all duration-700 pointer-events-none" />
                  
                  {/* Outer Glow Shadow */}
                  <div 
                    className={`absolute -inset-1 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl -z-10 ${colors.glow}`}
                  />
                </div>
              );
            })}
          </div>

          {/* View All Card */}
          <div className="mt-8 sm:mt-12">
            <div
              onClick={() => handleCategoryClick('all')}
              className="group relative cursor-pointer rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-amber-500/10 via-yellow-500/5 to-amber-500/10 backdrop-blur-sm border-2 border-dashed border-amber-500/30 hover:border-amber-400/50 p-8 sm:p-12 text-center transform transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-500/20"
            >
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 shadow-2xl group-hover:shadow-amber-500/50">
                  <span className="text-4xl">🗺️</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-300 mb-3">
                  Lihat Semua Kategori
                </h3>
                <p className="text-amber-100/70 text-base sm:text-lg mb-6">
                  Jelajahi seluruh koleksi warisan budaya Jawa Timur dalam satu halaman
                </p>
                <div className="inline-flex items-center gap-2 text-amber-300 font-semibold group-hover:gap-4 transition-all duration-300">
                  <span>Mulai Eksplorasi</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
              
              {/* Decorative Pattern */}
              <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategorySelection;
