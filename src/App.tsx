import { useState, useEffect } from 'react';
import { Menu, X, Home, Info, Mail, MapPin, Star, ChevronRight, Facebook, Instagram, Twitter, Youtube, Phone } from 'lucide-react';
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
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900 relative overflow-hidden">
        {/* Animated Batik Pattern Background */}
        <div className="fixed inset-0 opacity-[0.08] pointer-events-none z-0">
          <div 
            className="w-full h-full animate-pulse-slow"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M81.28 88H68.413l19.298 19.298L81.28 88zm2.107 0h13.226L90 107.838 83.387 88zm15.334 0h12.866l-19.298 19.298L98.72 88zm-32.927-2.207L73.586 78h32.827l.5.5 7.294 7.293L115.414 87l-24.707 24.707-.707.707L64.586 87l1.207-1.207zm2.62.207L74 80.414 79.586 86H68.414zm16 0L90 80.414 95.586 86H84.414zm16 0L106 80.414 111.586 86h-11.172zm-8-6h11.173L98 85.586 92.414 80zM82 85.586L87.586 80H76.414L82 85.586zM17.414 0L.707 16.707 0 17.414V0h17.414zM4.28 0L0 12.838V0h4.28zm10.306 0L2.288 12.298 6.388 0h8.198zM180 17.414L162.586 0H180v17.414zM165.414 0l12.298 12.298L173.612 0h-8.198zM180 12.838L175.72 0H180v12.838zM0 163h16.413l.5.5 7.294 7.293L25.414 172l-8 8H0v-17zm0 10h6.613l-2.334 7H0v-7zm14.586 7l7-7H8.72l-2.333 7h8.2zM0 165.414L5.586 171H0v-5.586zM10.414 171L16 165.414 21.586 171H10.414zm-8-6h11.172L8 170.586 2.414 165zM180 163h-16.413l-7.794 7.793-1.207 1.207 8 8H180v-17zm-14.586 17l-7-7h12.865l2.333 7h-8.2zM180 173h-6.613l2.334 7H180v-7zm-21.586-2l5.586-5.586 5.586 5.586h-11.172zM180 165.414L174.414 171H180v-5.586zm-8 5.172l5.586-5.586h-11.172l5.586 5.586zM152.933 25.653l1.414 1.414-33.94 33.942-1.416-1.416 33.943-33.94zm1.414 127.28l-1.414 1.414-33.942-33.94 1.416-1.416 33.94 33.943zm-127.28 1.414l-1.414-1.414 33.94-33.942 1.416 1.416-33.943 33.94zm-1.414-127.28l1.414-1.414 33.942 33.94-1.416 1.416-33.94-33.943zM0 85c2.21 0 4 1.79 4 4s-1.79 4-4 4v-8zm180 0c-2.21 0-4 1.79-4 4s1.79 4 4 4v-8zM90 0c0 2.21-1.79 4-4 4s-4-1.79-4-4h8zm0 180c0-2.21-1.79-4-4-4s-4 1.79-4 4h8z' fill='%23d97706' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Gradient Overlay */}
        <div className="fixed inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40 pointer-events-none z-0" />

        {/* Header */}
        <header 
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
            scrolled 
              ? 'bg-gradient-to-r from-slate-900/98 via-amber-900/98 to-slate-900/98 backdrop-blur-xl shadow-2xl border-b border-amber-500/20' 
              : 'bg-gradient-to-r from-slate-900/80 via-amber-900/80 to-slate-900/80 backdrop-blur-md'
          }`}
        >
          {/* Decorative Top Border with Animation */}
          <div className="h-1 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 animate-gradient-x" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20 lg:h-24">
              {/* Logo & Title */}
              <div className="flex items-center gap-3 sm:gap-4 group cursor-pointer" onClick={() => window.location.href = '/'}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-75 group-hover:opacity-100" />
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-500 via-yellow-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <span className="text-3xl sm:text-4xl filter drop-shadow-2xl animate-float">🏛️</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 tracking-tight drop-shadow-2xl animate-gradient-x">
                    S E K A W A N
                  </h1>
                  <p className="text-xs sm:text-sm text-amber-300/90 font-medium tracking-wider flex items-center gap-1.5">
                    <Star size={12} className="text-yellow-400 fill-yellow-400 animate-pulse" />
                    Inovasi Budaya Jawa Timur
                  </p>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden relative p-3 text-amber-200 hover:bg-white/10 rounded-xl transition-all duration-300 group"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-2">
                <NavLink icon={<Home size={18} />} href="/" label="Beranda" />
                <NavLink icon={<MapPin size={18} />} href="#categories" label="Kategori" />
                <a
                  href="#kontak"
                  className="group relative px-6 py-3 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 text-slate-900 hover:from-yellow-400 hover:to-amber-400 rounded-xl transition-all duration-500 font-bold shadow-2xl hover:shadow-yellow-500/50 transform hover:scale-105 overflow-hidden"
                >
                    <span
                    onClick={() => window.open('https://forms.gle/NKsBh8dHgajXbm1NA', '_blank')}
                    className="relative z-10 flex items-center gap-2 cursor-pointer"
                    >
                    <Mail size={18} />
                    Kritik & Saran
                    </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-amber-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
                <MobileNavLink icon={<MapPin size={18} />} href="#categories" label="Kategori" onClick={() => setIsMenuOpen(false)} />
                <a
                  href="#kontak"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 hover:from-yellow-400 hover:to-amber-400 rounded-xl transition-all duration-300 font-bold shadow-lg"
                >
                  <Mail size={18} />
                  <span>Kontak</span>
                </a>
              </nav>
            </div>
          </div>

          {/* Decorative Bottom Border */}
          <div className="h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50" />
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
      // If we're not on the home page, navigate to home first
      if (location.pathname !== '/') {
        navigate('/');
        // Wait for navigation to complete, then scroll
        setTimeout(() => {
          const element = document.querySelector(href);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      e.preventDefault();
      navigate(href);
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`group relative px-4 py-2.5 rounded-xl transition-all duration-500 font-medium flex items-center gap-2 ${
        isActive
          ? 'bg-amber-500/20 text-amber-300 shadow-lg shadow-amber-500/20'
          : 'text-amber-200/90 hover:bg-white/10 hover:text-amber-100'
      }`}
    >
      <span className="transform group-hover:scale-110 transition-transform duration-300">{icon}</span>
      <span>{label}</span>
      {isActive && (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full" />
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
      // If we're not on the home page, navigate to home first
      if (location.pathname !== '/') {
        navigate('/');
        // Wait for navigation to complete, then scroll
        setTimeout(() => {
          const element = document.querySelector(href);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        setTimeout(() => {
          const element = document.querySelector(href);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    } else {
      e.preventDefault();
      navigate(href);
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-500 font-medium ${
        isActive
          ? 'bg-amber-500/20 text-amber-300 shadow-lg shadow-amber-500/20'
          : 'text-amber-200/90 hover:bg-white/10 hover:text-amber-100'
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
        <div className="text-6xl mb-4 animate-bounce">🔍</div>
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-300 mb-2">Kategori Tidak Ditemukan</h2>
        <p className="text-amber-100/70">Silakan pilih kategori yang tersedia.</p>
      </div>
    );
  }

  return <CategoryPage category={category} openModal={openModal} />;
}

// Footer Component
function Footer() {
  return (
    <footer className="relative mt-24 bg-gradient-to-br from-slate-900 via-amber-950 to-slate-900 text-white overflow-hidden border-t border-amber-500/20">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Border */}
        <div className="h-1 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 rounded-full mb-12 animate-gradient-x" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-xl transform hover:scale-110 hover:rotate-12 transition-all duration-500">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-400">S E K A W A N</h3>
            </div>
            <p className="text-white/70 leading-relaxed text-sm">
              Inovasi untuk melestarikan dan mengenalkan kekayaan budaya Jawa Timur kepada generasi masa kini dan mendatang.
            </p>
            <div className="flex gap-3 mt-6">
              <SocialIcon href="#"><Facebook size={18} /></SocialIcon>
              <SocialIcon href="#"><Instagram size={18} /></SocialIcon>
              <SocialIcon href="#"><Twitter size={18} /></SocialIcon>
              <SocialIcon href="#"><Youtube size={18} /></SocialIcon>
            </div>
          </div>


          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-amber-300 mb-4 flex items-center gap-2">
              <ChevronRight size={18} className="text-yellow-400" />
              Hubungi Saya
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-white/70 hover:text-amber-300 transition-colors duration-300">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-amber-400" />
                <span>Jawa Timur, Indonesia</span>
              </li>
              <li className="flex items-start gap-2 text-white/70 hover:text-amber-300 transition-colors duration-300">
                <Mail size={16} className="mt-1 flex-shrink-0 text-amber-400" />
                <span>fauzandimasprasojo@gmail.com</span>
              </li>
              <li className="flex items-start gap-2 text-white/70 hover:text-amber-300 transition-colors duration-300">
                <Phone size={16} className="mt-1 flex-shrink-0 text-amber-400" />
                <span>081252004108</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p className="flex items-center gap-2">
              © 2025 Fauzan Dimas Prasojo
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-amber-400 transition-colors duration-300">Kebijakan Privasi</a>
              <a href="#" className="hover:text-amber-400 transition-colors duration-300">Syarat & Ketentuan</a>
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
        className="text-white/70 hover:text-amber-400 hover:translate-x-2 inline-flex items-center gap-2 transition-all duration-300 group"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-amber-500/50 group-hover:bg-amber-400 group-hover:scale-150 transition-all duration-300" />
        {children}
      </a>
    </li>
  );
}

function SocialIcon({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="w-10 h-10 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 backdrop-blur-sm border border-amber-500/20 hover:border-amber-500/50 flex items-center justify-center text-amber-300 hover:text-amber-200 transform hover:scale-110 hover:-translate-y-1 hover:rotate-6 transition-all duration-500 shadow-lg hover:shadow-amber-500/50"
    >
      {children}
    </a>
  );
}

export default App;
