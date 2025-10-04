import { X } from 'lucide-react';
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
      <div
        className="absolute inset-0 bg-[#2C1810] bg-opacity-90 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden animate-slideUp flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-11 h-11 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#800020] hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-90"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="relative h-72 overflow-hidden">
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810] via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <span className="inline-block px-4 py-1.5 bg-[#D4AF37] text-[#2C1810] rounded-full text-sm font-semibold uppercase tracking-wide mb-3">
              {item.category}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-shadow-lg">
              {item.title}
            </h2>
            <p className="flex items-center gap-2 text-lg opacity-90">
              <span>📍</span>
              {item.location}
            </p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-8">
          <div className="space-y-8">
            <div>
              <p className="text-lg leading-relaxed text-gray-700 text-justify">
                {item.fullDesc}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#8B4513] mb-4 flex items-center gap-2">
                <span>✨</span>
                Keunikan Utama
              </h3>
              <ul className="space-y-3">
                {item.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#FAF8F3] to-[#F5DEB3] border-l-4 border-[#8B4513] rounded-lg hover:translate-x-1 transition-transform"
                  >
                    <span className="text-[#D4AF37] font-bold text-lg">✦</span>
                    <span className="text-gray-800">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#8B4513] mb-4 flex items-center gap-2">
                <span>🖼️</span>
                Galeri
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {item.gallery.map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-video overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform cursor-pointer"
                  >
                    <img
                      src={image}
                      alt={`${item.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#8B4513] mb-4 flex items-center gap-2">
                <span>💡</span>
                Fakta Menarik
              </h3>
              <div className="grid gap-4">
                {item.funFacts.map((fact, index) => (
                  <div
                    key={index}
                    className="relative p-5 bg-gradient-to-br from-[#FFF9E6] to-[#FFE4B5] border-2 border-[#D4AF37] rounded-xl overflow-hidden"
                  >
                    <div className="absolute top-3 right-3 text-4xl opacity-20">
                      💡
                    </div>
                    <p className="text-gray-800 relative z-10">{fact}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#8B4513] mb-4 flex items-center gap-2">
                <span>🏛️</span>
                Makna Budaya
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 p-6 bg-[#FAF8F3] rounded-xl border-l-4 border-[#8B4513]">
                {item.culturalSignificance}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-[#F5DEB3] p-6 bg-[#FAF8F3] flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {item.relatedLinks.map((link, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white border border-[#D4AF37] rounded-full text-sm text-[#8B4513] hover:bg-[#8B4513] hover:text-white transition-all cursor-pointer"
              >
                {link}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
