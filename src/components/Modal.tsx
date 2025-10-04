import { X, MapPin, Sparkles, ImageIcon, Lightbulb, Landmark } from 'lucide-react';
import { useEffect } from 'react';
import { CulturalItem } from '../data/culturalData';

interface ModalProps {
  item: CulturalItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ item, isOpen, onClose }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen || !item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
      {/* Dark Luxury Backdrop with Glassmorphism */}
      <div
        className="absolute inset-0 bg-slate-900/95 backdrop-blur-xl"
        onClick={onClose}
      />

      {/* Modal Container with Premium Dark Styling */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-gradient-to-br from-slate-900 via-amber-950 to-slate-900 rounded-3xl shadow-2xl overflow-hidden animate-slideUp flex flex-col border border-amber-500/20">
        {/* Premium Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-12 h-12 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 backdrop-blur-md border border-amber-500/30 rounded-full shadow-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-amber-500 hover:to-yellow-500 text-amber-200 hover:text-slate-900 transition-all duration-500 hover:scale-110 hover:rotate-90 group"
          aria-label="Close modal"
        >
          <X size={20} className="group-hover:scale-110 transition-transform" />
        </button>

        {/* Hero Image Section with Dark Gradient */}
        <div className="relative h-72 overflow-hidden">
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent" />
          
          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            {/* Category Badge with Gradient */}
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 rounded-full text-sm font-bold uppercase tracking-wide mb-3 shadow-lg shadow-amber-500/50">
              {item.category}
            </span>
            
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 drop-shadow-2xl">
              {item.title}
            </h2>
            
            <p className="flex items-center gap-2 text-lg text-amber-100/90 font-medium">
              <MapPin size={20} className="text-amber-400" />
              {item.location}
            </p>
          </div>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-gradient-to-b from-transparent to-slate-900/50">
          <div className="space-y-8">
            {/* Description Section with Glassmorphism */}
            <div className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl">
              <p className="text-lg leading-relaxed text-amber-100/90">
                {item.fullDesc}
              </p>
            </div>

            {/* Keunikan Utama Section */}
            <div>
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-300 mb-4 flex items-center gap-2">
                <Sparkles size={24} className="text-yellow-400" />
                Keunikan Utama
              </h3>
              <ul className="space-y-3">
                {item.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="group flex items-start gap-3 p-4 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 backdrop-blur-sm border-l-4 border-amber-500 rounded-xl hover:translate-x-2 hover:from-amber-500/20 hover:to-yellow-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20"
                  >
                    <span className="text-amber-400 font-bold text-lg group-hover:scale-125 transition-transform">✦</span>
                    <span className="text-amber-100/90">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Galeri Section */}
            <div>
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-300 mb-4 flex items-center gap-2">
                <ImageIcon size={24} className="text-yellow-400" />
                Galeri
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {item.gallery.map((image, index) => (
                  <div
                    key={index}
                    className="group relative aspect-video overflow-hidden rounded-xl shadow-lg hover:shadow-amber-500/50 transition-all duration-500"
                  >
                    <img
                      src={image}
                      alt={`${item.title} ${index + 1}`}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Image Number Badge */}
                    <div className="absolute top-2 right-2 w-8 h-8 bg-amber-500/90 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-900 font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {index + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Fakta Menarik Section */}
            <div>
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-300 mb-4 flex items-center gap-2">
                <Lightbulb size={24} className="text-yellow-400" />
                Fakta Menarik
              </h3>
              <div className="grid gap-4">
                {item.funFacts.map((fact, index) => (
                  <div
                    key={index}
                    className="group relative p-5 bg-gradient-to-br from-amber-500/10 via-yellow-500/5 to-amber-500/10 backdrop-blur-sm border border-amber-500/20 hover:border-amber-400/40 rounded-xl overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-amber-500/20 hover:translate-x-1"
                  >
                    <div className="absolute top-3 right-3 text-4xl opacity-10 group-hover:opacity-20 transition-opacity">
                      💡
                    </div>
                    <p className="text-amber-100/90 relative z-10 leading-relaxed">{fact}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Makna Budaya Section */}
            <div>
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-300 mb-4 flex items-center gap-2">
                <Landmark size={24} className="text-yellow-400" />
                Makna Budaya
              </h3>
              <div className="relative p-6 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 backdrop-blur-sm border-l-4 border-amber-500 rounded-xl overflow-hidden">
                {/* Decorative Pattern */}
                <div className="absolute inset-0 opacity-[0.03]">
                  <div 
                    className="w-full h-full"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                  />
                </div>
                <p className="text-lg leading-relaxed text-amber-100/90 relative z-10">
                  {item.culturalSignificance}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section with Tags */}
        <div className="border-t border-amber-500/20 p-6 bg-gradient-to-r from-slate-900/80 via-amber-950/50 to-slate-900/80 backdrop-blur-sm">
          <div className="flex flex-wrap gap-2">
            {item.relatedLinks.map((link, index) => (
              <span
                key={index}
                className="group px-4 py-2 bg-white/5 backdrop-blur-sm border border-amber-500/30 hover:border-amber-400/50 rounded-full text-sm text-amber-200 hover:text-amber-100 hover:bg-gradient-to-r hover:from-amber-500/20 hover:to-yellow-500/20 transition-all duration-300 cursor-pointer hover:scale-105 shadow-lg hover:shadow-amber-500/30"
              >
                {link}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }

        /* Custom Scrollbar */
        .overflow-y-auto::-webkit-scrollbar {
          width: 8px;
        }

        .overflow-y-auto::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.3);
          border-radius: 10px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #d97706, #f59e0b);
          border-radius: 10px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #f59e0b, #fbbf24);
        }
      `}</style>
    </div>
  );
}
