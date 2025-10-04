import { useState, useEffect } from 'react';
import { Menu, X, Home, Info, Mail, MapPin } from 'lucide-react';
import Modal from './components/Modal';
import { CulturalItem } from './data/culturalData';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation, useParams } from 'react-router-dom';
import CategorySelection from './components/CategorySelection';
import CategoryPage from './components/CategoryPage';

function App() {
  const [selectedItem, setSelectedItem] = useState<CulturalItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = (item: CulturalItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedItem(null), 300);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
        {/* Batik Pattern Background */}
        <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 0h2v20H9V0zm25.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm-20 20l1.732 1-10 17.32-1.732-1 10-17.32zM58.16 4.134l1 1.732-17.32 10-1-1.732 17.32-10zm-40 40l1 1.732-17.32 10-1-1.732 17.32-10zM80 9v2H60V9h20zM20 69v2H0v-2h20zm79.32-55l-1 1.732-17.32-10 1-1.732 17.32 10zm-80 80l-1 1.732-17.32-10 1-1.732 17.32 10zm96.546-75.84l-1.732 1-10-17.32 1.732-1 10 17.32zm-100 100l-1.732 1-10-17.32 1.732-1 10 17.32zM38.16 24.134l1 1.732-17.32 10-1-1.732 17.32-10zM60 29v2H40v-2h20zm19.32 5l-1 1.732-17.32-10 1-1.732 17.32 10zM40 49v2H20v-2h20zm19.32 5l-1 1.732-17.32-10 1-1.732 17.32 10zM20 89v2H0v-2h20zm60.134-44.84l1.732 1-10 17.32-1.732-1 10-17.32zm0 20l1.732 1-10 17.32-1.732-1 10-17.32zM100 49v2H80v-2h20zm-30 20v2H50v-2h20zm-50 0v2H0v-2h20zm39.32 5l-1 1.732-17.32-10 1-1.732 17.32 10zM80 89v2H60v-2h20zm-80 0v2H-20v-2h20zm139.32-55l-1 1.732-17.32-10 1-1.732 17.32 10zm-80 80l-1 1.732-17.32-10 1-1.732 17.32 10zm96.546-75.84l-1.732 1-10-17.32 1.732-1 10 17.32zm-100 100l-1.732 1-10-17.32 1.732-1 10 17.32z' fill='%238B4513' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Header */}
        <header 
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
            scrolled 
              ? 'bg-gradient-to-r from-amber-900/95 via-orange-900/95 to-red-900/95 backdrop-blur-lg shadow-2xl' 
              : 'bg-gradient-to-r from-amber-900/90 via-orange-900/90 to-red-900/90 backdrop-blur-md'
          }`}
        >
          {/* Decorative Top Border */}
          <div className="h-1 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20 lg:h-24">
              {/* Logo & Title */}
              <div className="flex items-center gap-3 sm:gap-4 group cursor-pointer" onClick={() => window.location.href = '/'}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl blur-md group-hover:blur-lg transition-all duration-300 opacity-75" />
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <span className="text-3xl sm:text-4xl filter drop-shadow-lg">🏛️</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-amber-100 to-yellow-200 tracking-tight drop-shadow-lg">
                    Budaya Jawa Timur
                  </h1>
                  <p className="text-xs sm:text-sm text-amber-200/90 font-medium tracking-wide">
                    ✨ Warisan Tak Ternilai Harganya
                  </p>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden relative p-3 text-white hover:bg-white/10 rounded-xl transition-all duration-300 group"
                aria-label="Toggle menu"
              >
                <div className="relative w-6 h-6">
                  <span className={`absolute top-0 left-0 w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-3' : ''}`} />
                  <span className={`absolute top-3 left-0 w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                  <span className={`absolute top-6 left-0 w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-3' : ''}`} />
                </div>
              </button>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-2">
                <NavLink icon={<Home size={18} />} href="/" label="Beranda" />
                <NavLink icon={<MapPin size={18} />} href="#kategori" label="Kategori" />
                <NavLink icon={<Info size={18} />} href="#tentang" label="Tentang" />
                <a
                  href="#kontak"
                  className="group relative px-6 py-3 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 text-amber-900 hover:from-yellow-300 hover:to-amber-400 rounded-xl transition-all duration-300 font-bold shadow-xl hover:shadow-yellow-500/50 transform hover:scale-105 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Mail size={18} />
                    Kontak
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-300 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </nav>
            </div>

            {/* Mobile Navigation */}
            <div 
              className={`lg:hidden overflow-hidden transition-all duration-500 ${
                isMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'
              }`}
            >
              <nav className="space-y-2 pt-2">
                <MobileNavLink icon={<Home size={18} />} href="/" label="Beranda" onClick={() => setIsMenuOpen(false)} />
                <MobileNavLink icon={<MapPin size={18} />} href="#kategori" label="Kategori" onClick={() => setIsMenuOpen(false)} />
                <MobileNavLink icon={<Info size={18} />} href="#tentang" label="Tentang" onClick={() => setIsMenuOpen(false)} />
                <a
                  href="#kontak"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-amber-900 hover:from-yellow-300 hover:to-amber-400 rounded-xl transition-all duration-300 font-bold shadow-lg"
                >
                  <Mail size={18} />
                  <span>Kontak</span>
                </a>
              </nav>
            </div>
          </div>

          {/* Decorative Bottom Border */}
          <div className="h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-30" />
        </header>

        {/* Main Content */}
        <main className="relative z-10 pt-20 lg:pt-24">
          <Routes>
            <Route path="/" element={<CategorySelection />} />
            <Route path="/:category" element={<CategoryPageWrapper openModal={openModal} />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Modal */}
        <Modal item={selectedItem} isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </Router>
  );
}

// Desktop Nav Link Component
function NavLink({ icon, href, label }: { icon: React.ReactNode; href: string; label: string }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === href || (href !== '/' && location.pathname.startsWith(href));

  const handleClick = (e: React.MouseEvent) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      e.preventDefault();
      navigate(href);
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`group relative px-4 py-2.5 rounded-xl transition-all duration-300 font-medium flex items-center gap-2 ${
        isActive
          ? 'bg-white/20 text-yellow-300'
          : 'text-white/90 hover:bg-white/10 hover:text-white'
      }`}
    >
      <span className="transform group-hover:scale-110 transition-transform duration-300">{icon}</span>
      <span>{label}</span>
      {isActive && (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full" />
      )}
    </a>
  );
}

// Mobile Nav Link Component
function MobileNavLink({ icon, href, label, onClick }: { icon: React.ReactNode; href: string; label: string; onClick: () => void }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === href;

  const handleClick = (e: React.MouseEvent) => {
    onClick();
    if (href.startsWith('#')) {
      e.preventDefault();
      setTimeout(() => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      e.preventDefault();
      navigate(href);
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
        isActive
          ? 'bg-white/20 text-yellow-300'
          : 'text-white/90 hover:bg-white/10 hover:text-white'
      }`}
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}

// Category Page Wrapper
function CategoryPageWrapper({ openModal }: { openModal: (item: CulturalItem) => void }) {
  const { category } = useParams<{ category: string }>();

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto py-16 px-4 text-center">
        <div className="text-6xl mb-4">🔍</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Kategori Tidak Ditemukan</h2>
        <p className="text-gray-600">Silakan pilih kategori yang tersedia.</p>
      </div>
    );
  }

  return <CategoryPage category={category} openModal={openModal} />;
}

// Footer Component
function Footer() {
  return (
    <footer className="relative mt-24 bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 text-white overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Border */}
        <div className="h-1 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 rounded-full mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center shadow-xl">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-xl font-bold text-yellow-300">Budaya Jawa Timur</h3>
            </div>
            <p className="text-white/80 leading-relaxed text-sm">
              Portal digital untuk melestarikan dan mengenalkan kekayaan budaya Jawa Timur kepada generasi masa kini dan mendatang.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-yellow-300 mb-4">Navigasi Cepat</h4>
            <ul className="space-y-2 text-sm">
              <FooterLink href="/">Beranda</FooterLink>
              <FooterLink href="#kategori">Kategori</FooterLink>
              <FooterLink href="#tentang">Tentang Kami</FooterLink>
              <FooterLink href="#kontak">Kontak</FooterLink>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-bold text-yellow-300 mb-4">Kategori Populer</h4>
            <ul className="space-y-2 text-sm">
              <FooterLink href="/tarian">💃 Tarian</FooterLink>
              <FooterLink href="/kuliner">🍜 Kuliner</FooterLink>
              <FooterLink href="/batik">🎨 Batik</FooterLink>
              <FooterLink href="/musik">🎵 Musik</FooterLink>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-yellow-300 mb-4">Hubungi Kami</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-white/80">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-yellow-400" />
                <span>Jawa Timur, Indonesia</span>
              </li>
              <li className="flex items-start gap-2 text-white/80">
                <Mail size={16} className="mt-1 flex-shrink-0 text-yellow-400" />
                <span>info@budayajatim.id</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-6">
              <SocialIcon>📘</SocialIcon>
              <SocialIcon>📷</SocialIcon>
              <SocialIcon>🐦</SocialIcon>
              <SocialIcon>▶️</SocialIcon>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>© 2025 Budaya Jawa Timur. Hak Cipta Dilindungi.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-yellow-400 transition-colors">Kebijakan Privasi</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">Syarat & Ketentuan</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a
        href={href}
        className="text-white/80 hover:text-yellow-400 hover:translate-x-1 inline-flex items-center gap-2 transition-all duration-300 group"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 group-hover:bg-yellow-400 transition-colors" />
        {children}
      </a>
    </li>
  );
}

function SocialIcon({ children }: { children: React.ReactNode }) {
  return (
    <a
      href="#"
      className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-xl transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-yellow-500/50"
    >
      {children}
    </a>
  );
}

export default App;
