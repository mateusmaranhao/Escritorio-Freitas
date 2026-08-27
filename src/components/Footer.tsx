import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-deep text-brand-surface pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Col 1 */}
        <div className="lg:col-span-1">
          <h2 className="font-serif text-2xl text-brand-surface mb-4">Escritório Freitas</h2>
          <p className="font-sans text-[13px] text-brand-surface/70 leading-relaxed">
            Advogados Associados.<br/>
            Advocacia em Salto de Pirapora, Sorocaba e região.
          </p>
        </div>

        {/* Col 2 */}
        <div>
          <h3 className="font-sans text-[11px] uppercase tracking-widest text-brand-surface/50 mb-6">Links Rápidos</h3>
          <ul className="flex flex-col gap-3">
            <li><Link to="/" className="font-sans text-[13px] text-brand-surface/80 hover:text-brand-surface transition-colors">Início</Link></li>
            <li><Link to="/sobre" className="font-sans text-[13px] text-brand-surface/80 hover:text-brand-surface transition-colors">Sobre</Link></li>
            <li><Link to="/servicos" className="font-sans text-[13px] text-brand-surface/80 hover:text-brand-surface transition-colors">Serviços</Link></li>
            <li><Link to="/contato" className="font-sans text-[13px] text-brand-surface/80 hover:text-brand-surface transition-colors">Contato</Link></li>
          </ul>
        </div>

        {/* Col 3 */}
        <div>
          <h3 className="font-sans text-[11px] uppercase tracking-widest text-brand-surface/50 mb-6">Áreas de Atuação</h3>
          <ul className="flex flex-col gap-3">
            <li><Link to="/servicos/direito-trabalhista" className="font-sans text-[13px] text-brand-surface/80 hover:text-brand-surface transition-colors">Direito Trabalhista</Link></li>
            <li><Link to="/servicos/direito-previdenciario" className="font-sans text-[13px] text-brand-surface/80 hover:text-brand-surface transition-colors">Direito Previdenciário</Link></li>
            <li><Link to="/servicos/direito-imobiliario" className="font-sans text-[13px] text-brand-surface/80 hover:text-brand-surface transition-colors">Direito Imobiliário</Link></li>
            <li><Link to="/servicos/direito-empresarial" className="font-sans text-[13px] text-brand-surface/80 hover:text-brand-surface transition-colors">Direito Empresarial</Link></li>
          </ul>
        </div>

        {/* Col 4 */}
        <div>
          <h3 className="font-sans text-[11px] uppercase tracking-widest text-brand-surface/50 mb-6">Contato</h3>
          <ul className="flex flex-col gap-4">
            <li className="font-sans text-[13px] text-brand-surface/80 leading-relaxed">
              R. Maximiano Fidelis, 45 - Centro<br/>
              Salto de Pirapora - SP<br/>
              18160-041
            </li>
            <li>
              <a href="https://wa.me/5515996662831" className="font-sans text-[13px] text-brand-surface/80 hover:text-brand-surface transition-colors block">
                (15) 99666-2831
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-20 border-t border-brand-surface/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-sans text-[11px] text-brand-surface/50">
          © {currentYear} Escritório Freitas — Advogados Associados. Todos os direitos reservados.
        </p>
        <div className="flex gap-6">
          <Link to="/politica-de-privacidade" className="font-sans text-[11px] text-brand-surface/50 hover:text-brand-surface transition-colors">Política de Privacidade</Link>
          <Link to="/termos-de-uso" className="font-sans text-[11px] text-brand-surface/50 hover:text-brand-surface transition-colors">Termos de Uso</Link>
          <Link to="/politica-de-cookies" className="font-sans text-[11px] text-brand-surface/50 hover:text-brand-surface transition-colors">Política de Cookies</Link>
        </div>
      </div>
    </footer>
  );
}
