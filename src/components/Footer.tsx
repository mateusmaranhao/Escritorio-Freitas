import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ServiceItem {
  name: string;
  path: string;
}

const AREA_SERVICES: Record<string, { title: string; basePath: string; services: ServiceItem[] }> = {
  patronal: {
    title: 'Direito Patronal',
    basePath: '/servicos/direito-patronal',
    services: [
      { name: 'Advocacia Preventiva e Consultoria Trabalhista', path: '/servicos/direito-patronal/advocacia-preventiva-consultoria-trabalhista' },
      { name: 'Advocacia Contenciosa (Defesa Judicial)', path: '/servicos/direito-patronal/advocacia-contenciosa' },
      { name: 'Relações Sindicais e Negociações Coletivas', path: '/servicos/direito-patronal/relacoes-sindicais' },
      { name: 'Defesa Administrativa', path: '/servicos/direito-patronal/defesa-administrativa' },
    ],
  },
  empresarial: {
    title: 'Direito Empresarial',
    basePath: '/servicos/direito-empresarial',
    services: [
      { name: 'Direito Societário e Estruturação de Negócios', path: '/servicos/direito-empresarial/direito-societario' },
      { name: 'Contratos Empresariais', path: '/servicos/direito-empresarial/contratos-empresariais' },
      { name: 'Propriedade Intelectual e Compliance', path: '/servicos/direito-empresarial/propriedade-intelectual-compliance' },
      { name: 'Gestão de Crises, Recuperação e Falência', path: '/servicos/direito-empresarial/gestao-de-crises-recuperacao-falencia' },
      { name: 'Defesa Contenciosa Empresarial', path: '/servicos/direito-empresarial/defesa-contenciosa-empresarial' },
    ],
  },
  imobiliario: {
    title: 'Direito Imobiliário',
    basePath: '/servicos/direito-imobiliario',
    services: [
      { name: 'Transações de Compra e Venda (Due Diligence)', path: '/servicos/direito-imobiliario/compra-e-venda-due-diligence' },
      { name: 'Locação de Imóveis (Residencial e Comercial)', path: '/servicos/direito-imobiliario/locacao-de-imoveis' },
      { name: 'Regularização de Imóveis e Propriedade', path: '/servicos/direito-imobiliario/regularizacao-de-imoveis' },
      { name: 'Direito Condominial e Vizinhança', path: '/servicos/direito-imobiliario/direito-condominial-vizinhanca' },
      { name: 'Incorporação Imobiliária e Leilões', path: '/servicos/direito-imobiliario/incorporacao-imobiliaria-leiloes' },
    ],
  },
};

export function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  const getActiveArea = () => {
    const path = location.pathname;
    if (path.startsWith('/servicos/direito-patronal')) return AREA_SERVICES.patronal;
    if (path.startsWith('/servicos/direito-empresarial')) return AREA_SERVICES.empresarial;
    if (path.startsWith('/servicos/direito-imobiliario')) return AREA_SERVICES.imobiliario;
    return undefined;
  };

  const currentArea = getActiveArea();
  const isSpecificPage = Boolean(currentArea);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown if user clicks outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Reset dropdown when pathname changes
  useEffect(() => {
    setDropdownOpen(false);
  }, [location.pathname]);

  return (
    <footer className="bg-brand-deep text-brand-surface pt-20 pb-10">
      <div 
        className={
          isSpecificPage 
            ? "max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8 mb-16"
            : "max-w-7xl mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        }
      >
        {/* Col 1: Brand & Contact Info */}
        <div className="space-y-4">
          <Link to="/" className="inline-block group" aria-label="Escritório Freitas — Início">
            <img 
              src="/minha-logo-white.webp" 
              alt="Escritório Freitas — Advogados Associados" 
              className="h-10 sm:h-11 w-auto object-contain transition-opacity duration-200 group-hover:opacity-90"
              referrerPolicy="no-referrer"
            />
          </Link>
          <p className="font-gilroy text-xs text-brand-surface/60 leading-relaxed pt-2">
            Rua Maximiano Fidelis, 45<br />
            Salto de Pirapora - SP, 18160-000
          </p>
          <p className="font-gilroy text-xs text-brand-surface/60 leading-relaxed">
            WhatsApp: (15) 99666-2831<br />
            Telefone: (15) 3292-1279<br />
            Email: contato@escritoriofreitas.com.br
          </p>
          <div className="pt-2">
            <span className="inline-block font-gilroy text-[10px] tracking-widest text-brand-surface/40 uppercase border border-brand-surface/20 px-2.5 py-1">
              OAB/SP 45.123
            </span>
          </div>
        </div>

        {/* Col 2: Institucional */}
        <div>
          <span className="font-gilroy text-[11px] uppercase tracking-widest text-brand-surface/50 block mb-6">
            Institucional
          </span>
          <ul className="space-y-3 font-gilroy text-xs">
            <li>
              <Link to="/" className="text-brand-surface/80 hover:text-brand-surface transition-colors">
                Início
              </Link>
            </li>
            <li>
              <Link to="/sobre" className="text-brand-surface/80 hover:text-brand-surface transition-colors">
                Sobre Nós
              </Link>
            </li>
            <li>
              <Link to="/servicos" className="text-brand-surface/80 hover:text-brand-surface transition-colors">
                Áreas de Atuação
              </Link>
            </li>
            <li>
              <Link to="/contato" className="text-brand-surface/80 hover:text-brand-surface transition-colors">
                Fale Conosco
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Áreas de Atuação */}
        <div>
          <span className="font-gilroy text-[11px] uppercase tracking-widest text-brand-surface/50 block mb-6">
            Áreas de Atuação
          </span>
          <ul className="space-y-3 font-gilroy text-xs">
            <li>
              <Link to="/servicos/direito-patronal" className="text-brand-surface/80 hover:text-brand-surface transition-colors">
                Direito Patronal
              </Link>
            </li>
            <li>
              <Link to="/servicos/direito-empresarial" className="text-brand-surface/80 hover:text-brand-surface transition-colors">
                Direito Empresarial
              </Link>
            </li>
            <li>
              <Link to="/servicos/direito-imobiliario" className="text-brand-surface/80 hover:text-brand-surface transition-colors">
                Direito Imobiliário
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4 (APENAS nas páginas específicas das 3 áreas): Dropdown interativo de Serviços */}
        {isSpecificPage && currentArea && (
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="font-gilroy text-[11px] uppercase tracking-widest text-brand-surface/50 hover:text-brand-surface flex items-center gap-1.5 mb-6 transition-colors cursor-pointer group text-left"
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
            >
              <span>Serviços de {currentArea.title}</span>
              <ChevronDown 
                size={12} 
                className={`transition-transform duration-200 text-brand-surface/50 group-hover:text-brand-surface ${
                  dropdownOpen ? 'rotate-180 text-brand-surface' : ''
                }`} 
              />
            </button>

            {/* Dropdown Menu com links reais para todas as páginas de serviços */}
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 top-9 z-50 min-w-[300px] max-w-sm bg-[#1a1918] border border-brand-surface/20 shadow-2xl py-2 px-1 rounded-none"
                >
                  <ul className="flex flex-col gap-0.5" role="menu">
                    {currentArea.services.map((service, index) => {
                      const isActive = location.pathname === service.path;
                      return (
                        <li key={index} role="none">
                          <Link
                            to={service.path}
                            role="menuitem"
                            onClick={() => setDropdownOpen(false)}
                            className={`block px-3 py-2 font-gilroy text-[12px] transition-colors leading-snug cursor-pointer ${
                              isActive 
                                ? 'text-brand-surface font-semibold bg-brand-surface/20 border-l-2 border-brand-surface'
                                : 'text-brand-surface/80 hover:text-brand-surface hover:bg-brand-surface/10'
                            }`}
                          >
                            {service.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* Col 5: Atendimento & Horários */}
        <div>
          <span className="font-gilroy text-[11px] uppercase tracking-widest text-brand-surface/50 block mb-6">
            Atendimento
          </span>
          <div className="space-y-3 font-gilroy text-xs text-brand-surface/70">
            <p>
              <strong className="text-brand-surface block font-medium">Segunda a Sexta-feira:</strong>
              08:30 às 18:00
            </p>
            <p>
              <strong className="text-brand-surface block font-medium">Atendimento Presencial:</strong>
              Salto de Pirapora e Sorocaba
            </p>
            <p>
              <strong className="text-brand-surface block font-medium">Atendimento Digital:</strong>
              Em todo o território nacional
            </p>
          </div>
        </div>
      </div>

      {/* Linha Divisória e Rodapé Inferior */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 pt-8 border-t border-brand-surface/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-gilroy text-brand-surface/50">
        <p>
          © {currentYear} Escritório Freitas Advogados Associados. Todos os direitos reservados.
        </p>
        <div className="flex gap-6">
          <Link to="/politica-de-privacidade" className="hover:text-brand-surface transition-colors">
            Política de Privacidade
          </Link>
          <Link to="/termos-de-uso" className="hover:text-brand-surface transition-colors">
            Termos de Uso
          </Link>
          <Link to="/politica-de-cookies" className="hover:text-brand-surface transition-colors">
            Cookies
          </Link>
        </div>
      </div>
    </footer>
  );
}
