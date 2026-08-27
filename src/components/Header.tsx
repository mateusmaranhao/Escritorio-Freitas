import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { clsx } from 'clsx';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Sobre', path: '/sobre' },
  ];

  const serviceLinks = [
    { name: 'Direito Trabalhista', path: '/servicos/direito-trabalhista' },
    { name: 'Direito Previdenciário', path: '/servicos/direito-previdenciario' },
    { name: 'Direito Imobiliário', path: '/servicos/direito-imobiliario' },
    { name: 'Direito Empresarial', path: '/servicos/direito-empresarial' },
    { name: 'Ver todos os serviços', path: '/servicos' },
  ];

  return (
    <header 
      className={clsx(
        'w-full h-20 px-6 lg:px-12 border-b border-[#333333]/10 flex items-center justify-between sticky top-0 bg-white z-50 transition-all duration-300',
        isScrolled ? 'shadow-sm' : ''
      )}
    >
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-brand-primary flex items-center justify-center">
          <span className="text-white font-bold text-xs">F</span>
        </div>
        <Link to="/" className="uppercase tracking-[0.3em] font-medium text-sm text-brand-primary hidden sm:block" aria-label="Home">
          Escritório Freitas
        </Link>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex items-center gap-8 text-[11px] uppercase tracking-widest font-medium">
        <Link to="/" className="hover:text-brand-secondary transition-colors">INÍCIO</Link>
        <Link to="/sobre" className="hover:text-brand-secondary transition-colors">SOBRE</Link>
        
        <div 
          className="relative group"
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
        >
          <button 
            className="flex items-center gap-1 hover:text-brand-secondary transition-colors py-2 uppercase"
            onClick={() => setServicesOpen(!servicesOpen)}
            aria-expanded={servicesOpen}
          >
            SERVIÇOS <ChevronDown size={14} className={clsx("transition-transform duration-300", servicesOpen && "rotate-180")} />
          </button>
          
          <AnimatePresence>
            {servicesOpen && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 mt-0 w-64 bg-white border border-brand-primary/10 shadow-sm"
              >
                <ul className="py-2">
                  {serviceLinks.map((link) => (
                    <li key={link.path}>
                      <Link 
                        to={link.path} 
                        className="block px-6 py-3 font-sans text-[11px] uppercase tracking-widest text-brand-secondary hover:text-brand-primary hover:bg-black/5 transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <Link to="/contato" className="hover:text-brand-secondary transition-colors">CONTATO</Link>
      </nav>

      <div className="flex items-center gap-4">
        <a 
          href="/contato" 
          className="hidden lg:inline-block border border-brand-primary px-6 py-2 text-[10px] uppercase tracking-[0.2em] font-semibold text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-300"
        >
          Agendar Consultoria
        </a>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2 text-brand-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-brand-surface border-b border-brand-primary/10 overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-4 gap-4">
              <Link to="/sobre" className="font-sans text-[14px] uppercase tracking-widest py-2 border-b border-brand-primary/5">
                SOBRE
              </Link>
              <div className="py-2 border-b border-brand-primary/5">
                <span className="font-sans text-[14px] uppercase tracking-widest block mb-4 text-brand-primary">SERVIÇOS</span>
                <ul className="flex flex-col gap-3 pl-4">
                  {serviceLinks.map((link) => (
                    <li key={link.path}>
                      <Link to={link.path} className="font-sans text-[14px] text-brand-secondary block">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <Link to="/contato" className="font-sans text-[14px] uppercase tracking-widest py-2">
                CONTATO
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
