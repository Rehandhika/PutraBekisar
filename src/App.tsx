import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Modal from './components/Modal';
import { allCategories, CulturalItem } from './data/culturalData';

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

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<CulturalItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = Object.keys(allCategories);

  const getFilteredItems = (): CulturalItem[] => {
    if (selectedCategory === 'all') {
      return Object.values(allCategories).flat();
    }
    return allCategories[selectedCategory as keyof typeof allCategories] || [];
  };

  const openModal = (item: CulturalItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedItem(null), 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF8F3] via-white to-[#F5DEB3]">
      <header className="sticky top-0 z-40 bg-gradient-to-r from-[#8B4513] via-[#A0522D] to-[#800020] shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl">🏛️</span>
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                  Budaya Jawa Timur
                </h1>
                <p className="text-sm text-[#F5DEB3] hidden sm:block">
                  Warisan Budaya Tak Ternilai
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <nav className="hidden md:flex items-center gap-4">
              <a
                href="#tentang"
                className="px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-colors font-medium"
              >
                Tentang
              </a>
              <a
                href="#kategori"
                className="px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-colors font-medium"
              >
                Kategori
              </a>
              <a
                href="#kontak"
                className="px-4 py-2 bg-[#D4AF37] text-[#2C1810] hover:bg-[#F5DEB3] rounded-lg transition-colors font-semibold shadow-lg"
              >
                Kontak
              </a>
            </nav>
          </div>

          {isMenuOpen && (
            <nav className="md:hidden pb-4 space-y-2 animate-fadeIn">
              <a
                href="#tentang"
                className="block px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                Tentang
              </a>
              <a
                href="#kategori"
                className="block px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                Kategori
              </a>
              <a
                href="#kontak"
                className="block px-4 py-2 bg-[#D4AF37] text-[#2C1810] hover:bg-[#F5DEB3] rounded-lg transition-colors font-semibold"
              >
                Kontak
              </a>
            </nav>
          )}
        </div>
      </header>

      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM4QjQ1MTMiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6TTI2IDM0YzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6bTAtMTBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00ek00NiAzNGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6bTAtMTBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] bg-repeat" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-[#2C1810] mb-6 leading-tight">
            Jelajahi Kekayaan
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B4513] to-[#800020]">
              Budaya Jawa Timur
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            9 kategori budaya dengan 36 item warisan leluhur yang memukau.
            Temukan keajaiban tarian, kuliner, gunung, tradisi, dan masih banyak
            lagi.
          </p>
        </div>
      </section>

      <section id="kategori" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-[#2C1810] mb-4">
              Kategori Budaya
            </h3>
            <p className="text-lg text-gray-600">
              Pilih kategori untuk menjelajahi lebih dalam
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-full font-semibold transition-all shadow-lg ${
                selectedCategory === 'all'
                  ? 'bg-[#8B4513] text-white scale-105'
                  : 'bg-white text-[#8B4513] hover:bg-[#FAF8F3]'
              }`}
            >
              🌟 Semua
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all shadow-lg ${
                  selectedCategory === category
                    ? 'bg-[#8B4513] text-white scale-105'
                    : 'bg-white text-[#8B4513] hover:bg-[#FAF8F3]'
                }`}
              >
                {categoryIcons[category]} {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {getFilteredItems().map((item) => (
              <div
                key={item.id}
                onClick={() => openModal(item)}
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-[#D4AF37] text-[#2C1810] rounded-full text-xs font-bold uppercase">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <h4 className="text-white font-bold text-lg mb-1 line-clamp-1">
                      {item.title}
                    </h4>
                    <p className="text-white/90 text-sm flex items-center gap-1">
                      📍 {item.location}
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {item.shortDesc}
                  </p>
                  <button className="mt-4 w-full py-2 bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white rounded-lg font-semibold hover:from-[#A0522D] hover:to-[#8B4513] transition-all">
                    Lihat Detail
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tentang" className="py-20 px-4 bg-gradient-to-r from-[#8B4513] to-[#800020]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h3 className="text-4xl font-bold mb-6">Tentang Budaya Jawa Timur</h3>
          <p className="text-xl leading-relaxed mb-8">
            Jawa Timur adalah provinsi yang kaya akan keragaman budaya, dari tarian
            tradisional yang megah, kuliner yang menggugah selera, gunung-gunung yang
            menjulang tinggi, hingga tradisi sakral yang diwariskan turun-temurun.
            Website ini hadir untuk melestarikan dan memperkenalkan kekayaan budaya
            Jawa Timur kepada generasi masa kini dan mendatang.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-5xl mb-4">9️⃣</div>
              <h4 className="text-2xl font-bold mb-2">9 Kategori</h4>
              <p className="text-white/80">Beragam aspek budaya</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-5xl mb-4">3️⃣6️⃣</div>
              <h4 className="text-2xl font-bold mb-2">36 Item</h4>
              <p className="text-white/80">Warisan budaya berharga</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-5xl mb-4">🏛️</div>
              <h4 className="text-2xl font-bold mb-2">UNESCO</h4>
              <p className="text-white/80">Warisan dunia terdaftar</p>
            </div>
          </div>
        </div>
      </section>

      <footer id="kontak" className="bg-[#2C1810] text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center">
              <span className="text-2xl">🏛️</span>
            </div>
            <h3 className="text-2xl font-bold">Budaya Jawa Timur</h3>
          </div>
          <p className="text-[#F5DEB3] mb-8 max-w-2xl mx-auto">
            Mari lestarikan budaya Jawa Timur untuk generasi mendatang. Setiap tradisi,
            tarian, dan warisan adalah harta karun yang harus dijaga.
          </p>
          <div className="border-t border-white/20 pt-8">
            <p className="text-sm text-white/60">
              © 2025 Budaya Jawa Timur. Warisan untuk Indonesia.
            </p>
          </div>
        </div>
      </footer>

      <Modal item={selectedItem} isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
