import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { allCategories } from '../data/culturalData';

const categoryIcons: Record<string, string> = {
  Tarian: '💃',
  Kuliner: '🍜',
  Gunung: '⛰️',
  Tradisi: '🎭',
  Kerajaan: '🏛️',
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
  Kerajaan: 'Kejayaan peradaban masa lampau',
  Batik: 'Seni kain bermotif filosofis',
  Pantai: 'Pesona pesisir yang memukau',
  Musik: 'Harmoni suara tradisional',
  Warisan: 'Pusaka budaya tak ternilai'
};

const categoryImages: Record<string, string> = {
  Tarian: '/images/tarian.jpg',
  Kuliner: '/images/kuliner.jpg',
  Gunung: '/images/gunung.jpg',
  Tradisi: '/images/tradisi.jpg',
  Kerajaan: '/images/kerajaan.jpg',
  Batik: '/images/batik.jpg',
  Pantai: '/images/pantai.jpg',
  Musik: '/images/musik.jpg',
  Warisan: '/images/warisan.jpg'
};

const categoryColors: Record<string, { primary: string; gradient: string; shadow: string }> = {
  Tarian: { 
    primary: '#8B4513', 
    gradient: 'from-amber-900/90 via-orange-800/80 to-transparent',
    shadow: 'shadow-amber-900/50'
  },
  Kuliner: { 
    primary: '#DC2626', 
    gradient: 'from-red-900/90 via-red-700/80 to-transparent',
    shadow: 'shadow-red-900/50'
  },
  Gunung: { 
    primary: '#059669', 
    gradient: 'from-emerald-900/90 via-teal-800/80 to-transparent',
    shadow: 'shadow-emerald-900/50'
  },
  Tradisi: { 
    primary: '#7C3AED', 
    gradient: 'from-purple-900/90 via-violet-800/80 to-transparent',
    shadow: 'shadow-purple-900/50'
  },
  Kerajaan: { 
    primary: '#D97706', 
    gradient: 'from-yellow-900/90 via-amber-700/80 to-transparent',
    shadow: 'shadow-yellow-900/50'
  },
  Batik: { 
    primary: '#BE185D', 
    gradient: 'from-pink-900/90 via-rose-800/80 to-transparent',
    shadow: 'shadow-pink-900/50'
  },
  Pantai: { 
    primary: '#0284C7', 
    gradient: 'from-cyan-900/90 via-blue-800/80 to-transparent',
    shadow: 'shadow-cyan-900/50'
  },
  Musik: { 
    primary: '#B91C1C', 
    gradient: 'from-rose-900/90 via-red-800/80 to-transparent',
    shadow: 'shadow-rose-900/50'
  },
  Warisan: { 
    primary: '#6366F1', 
    gradient: 'from-indigo-900/90 via-blue-900/80 to-transparent',
    shadow: 'shadow-indigo-900/50'
  }
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
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      {/* Hero Landing Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with parallax effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed transform scale-105"
          style={{ 
            backgroundImage: "url('/images/landing-bg.jpg')",
            filter: 'brightness(0.7)'
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/80 via-orange-900/70 to-red-900/60" />
        
        {/* Animated Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>

        {/* Content */}
        <div className={`relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-8 animate-pulse">
            <span className="text-2xl">🏛️</span>
            <span className="text-white/90 font-medium text-sm sm:text-base">Warisan Nusantara</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            <span className="text-white drop-shadow-2xl">Jelajahi Warisan</span>
            <br />
            <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-400 bg-clip-text text-transparent drop-shadow-lg animate-gradient">
              Budaya Jawa Timur
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-lg font-light">
            Temukan kekayaan <span className="font-semibold text-amber-300">{categories.length} kategori</span> budaya dan tradisi yang menjadi 
            <span className="font-semibold text-amber-300"> identitas masyarakat Jawa Timur</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16">
            <button
              onClick={() => handleCategoryClick('all')}
              className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-amber-900 font-bold text-lg rounded-xl shadow-2xl hover:shadow-amber-500/50 transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Mulai Penjelajahan
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button
              onClick={() => document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-semibold text-lg rounded-xl hover:bg-white/20 hover:border-white/50 transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Lihat Kategori
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <svg
              className="mx-auto text-white/70 hover:text-white transition-colors cursor-pointer"
              onClick={() => document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              width={32}
              height={32}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-amber-50 to-transparent" />
      </section>

      {/* Category Cards Section */}
      <section id="categories" className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-200 rounded-full px-6 py-2 text-amber-800 font-medium text-sm shadow-sm">
                <span className="text-xl">✨</span>
                Eksplorasi Budaya
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-900 via-orange-800 to-red-900 mb-6">
              Kategori Budaya
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
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
                  className={`group relative cursor-pointer rounded-2xl sm:rounded-3xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ 
                    transitionDelay: `${index * 50}ms`,
                    aspectRatio: '4/5'
                  }}
                >
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ 
                      backgroundImage: `url(${categoryImages[category] || '/images/default.jpg'})`,
                    }}
                  />

                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${colors.gradient} transition-opacity duration-500`} />
                  
                  {/* Hover Overlay */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${colors.primary}ee 0%, ${colors.primary}cc 100%)`
                    }}
                  />

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-between p-6 sm:p-8">
                    {/* Icon */}
                    <div className="flex justify-between items-start">
                      <div 
                        className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl backdrop-blur-md border-2 border-white/30 flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 ${colors.shadow}`}
                        style={{
                          backgroundColor: isHovered ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.1)',
                        }}
                      >
                        <span className="text-3xl sm:text-4xl">{categoryIcons[category]}</span>
                      </div>

                      {/* Arrow Icon */}
                      <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="space-y-3 transform transition-all duration-500 group-hover:translate-y-0 translate-y-4">
                      <div className="space-y-2">
                        <h3 className="text-3xl sm:text-4xl font-bold text-white drop-shadow-lg">
                          {category}
                        </h3>
                        <div 
                          className="h-1.5 rounded-full transition-all duration-500 group-hover:w-20 w-12"
                          style={{ backgroundColor: colors.primary }}
                        />
                      </div>
                      
                      <p className="text-white/90 text-base sm:text-lg leading-relaxed drop-shadow-md font-light">
                        {categoryDescriptions[category]}
                      </p>

                      {/* Explore Link */}
                      <div className="flex items-center gap-2 text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-100">
                        <span>Jelajahi sekarang</span>
                        <svg className="w-4 h-4 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Glassmorphism Border */}
                  <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-white/10 group-hover:border-white/30 transition-all duration-500 pointer-events-none" />
                  
                  {/* Shadow Effect */}
                  <div className={`absolute -inset-1 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-70 transition-opacity duration-500 blur-xl ${colors.shadow} -z-10`} />
                </div>
              );
            })}
          </div>

          {/* View All Card */}
          <div className="mt-8 sm:mt-12">
            <div
              onClick={() => handleCategoryClick('all')}
              className="group relative cursor-pointer rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-amber-100 via-orange-50 to-amber-50 border-2 border-dashed border-amber-300 hover:border-amber-500 p-8 sm:p-12 text-center transform transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl"
            >
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-xl">
                  <span className="text-4xl">🗺️</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-800 to-orange-700 mb-3">
                  Lihat Semua Kategori
                </h3>
                <p className="text-gray-600 text-base sm:text-lg mb-6">
                  Jelajahi seluruh koleksi warisan budaya Jawa Timur dalam satu halaman
                </p>
                <div className="inline-flex items-center gap-2 text-amber-700 font-semibold group-hover:gap-4 transition-all duration-300">
                  <span>Mulai Eksplorasi</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
              
              {/* Decorative Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CSS for gradient animation */}
      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-bounce,
          .animate-pulse,
          .animate-gradient {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default CategorySelection;
