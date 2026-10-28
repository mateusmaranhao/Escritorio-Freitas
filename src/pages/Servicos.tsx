import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export function Servicos() {
  return (
    <>
      <SEO 
        title="Áreas de Atuação Jurídica em Salto de Pirapora e Região | Escritório Freitas"
        description="O Escritório Freitas — Advogados Associados atua de forma especializada em Direito Trabalhista Empresarial, Direito Imobiliário e Direito Empresarial em Salto de Pirapora, Sorocaba e região."
        url="/servicos"
      />
      
      <main className="pt-40 pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="max-w-3xl mb-24">
            <span className="font-gilroy text-sm uppercase tracking-widest text-brand-secondary block mb-6">
              Nossa Atuação
            </span>
            <h1 className="font-poppins text-5xl md:text-6xl text-brand-primary leading-tight mb-8">
              Áreas de atuação
            </h1>
            <p className="font-gilroy text-xl text-brand-secondary leading-relaxed">
              O Escritório Freitas — Advogados Associados oferece orientação jurídica especializada para empresas, empregadores, líderes e condomínios em Salto de Pirapora, Sorocaba e região metropolitana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-primary/10">
            {/* Direito Trabalhista Empresarial */}
            <div className="bg-brand-surface p-10 lg:p-14 flex flex-col justify-between hover:bg-[#F9F9F9] transition-colors">
              <div>
                <span className="text-[10px] font-gilroy uppercase tracking-[0.25em] text-[#6c7279] block mb-3">01 · Empresas & RH</span>
                <h2 className="font-poppins text-2xl lg:text-3xl text-brand-primary mb-4">Direito Trabalhista Empresarial</h2>
                <p className="font-gilroy text-brand-secondary leading-relaxed mb-8 text-sm sm:text-base">
                  Orientação jurídica trabalhista e defesa combativa exclusiva para empresas, empregadores e gestores.
                </p>
                <div className="mb-12">
                  <strong className="block font-gilroy text-xs uppercase tracking-widest text-brand-primary mb-3">Principais Situações:</strong>
                  <ul className="flex flex-col gap-2.5 font-gilroy text-sm text-brand-secondary">
                    <li>• Auditoria preventiva de passivos de RH</li>
                    <li>• Defesa patronal em reclamações trabalhistas</li>
                    <li>• Rescisões e acordos com quitação ampla</li>
                  </ul>
                </div>
              </div>
              <Link to="/servicos/direito-patronal" className="inline-flex items-center gap-4 font-gilroy text-[13px] uppercase tracking-widest text-brand-primary hover:gap-6 transition-all duration-300">
                Conhecer Direito Trabalhista Empresarial <span className="text-xl">→</span>
              </Link>
            </div>

            {/* Direito Imobiliário */}
            <div className="bg-brand-surface p-10 lg:p-14 flex flex-col justify-between hover:bg-[#F9F9F9] transition-colors">
              <div>
                <span className="text-[10px] font-gilroy uppercase tracking-[0.25em] text-[#6c7279] block mb-3">02 · Patrimônio & Condomínios</span>
                <h2 className="font-poppins text-2xl lg:text-3xl text-brand-primary mb-4">Direito Imobiliário</h2>
                <p className="font-gilroy text-brand-secondary leading-relaxed mb-8 text-sm sm:text-base">
                  Segurança em transações imobiliárias, regularização documental e assessoria especializada para condomínios.
                </p>
                <div className="mb-12">
                  <strong className="block font-gilroy text-xs uppercase tracking-widest text-brand-primary mb-3">Principais Situações:</strong>
                  <ul className="flex flex-col gap-2.5 font-gilroy text-sm text-brand-secondary">
                    <li>• Due diligence de compra e venda</li>
                    <li>• Gestão de conflitos condominiais</li>
                    <li>• Regularização de matrículas e posse</li>
                  </ul>
                </div>
              </div>
              <Link to="/servicos/direito-imobiliario" className="inline-flex items-center gap-4 font-gilroy text-[13px] uppercase tracking-widest text-brand-primary hover:gap-6 transition-all duration-300">
                Conhecer Direito Imobiliário <span className="text-xl">→</span>
              </Link>
            </div>

            {/* Direito Empresarial */}
            <div className="bg-brand-surface p-10 lg:p-14 flex flex-col justify-between hover:bg-[#F9F9F9] transition-colors">
              <div>
                <span className="text-[10px] font-gilroy uppercase tracking-[0.25em] text-[#6c7279] block mb-3">03 · Negócios & Sociedades</span>
                <h2 className="font-poppins text-2xl lg:text-3xl text-brand-primary mb-4">Direito Empresarial</h2>
                <p className="font-gilroy text-brand-secondary leading-relaxed mb-8 text-sm sm:text-base">
                  Suporte jurídico estratégico para decisões corporativas, contratos comerciais e relações societárias.
                </p>
                <div className="mb-12">
                  <strong className="block font-gilroy text-xs uppercase tracking-widest text-brand-primary mb-3">Principais Situações:</strong>
                  <ul className="flex flex-col gap-2.5 font-gilroy text-sm text-brand-secondary">
                    <li>• Elaboração e revisão de contratos comerciais</li>
                    <li>• Acordos de sócios e reestruturação societária</li>
                    <li>• Gestão estratégica de riscos empresariais</li>
                  </ul>
                </div>
              </div>
              <Link to="/servicos/direito-empresarial" className="inline-flex items-center gap-4 font-gilroy text-[13px] uppercase tracking-widest text-brand-primary hover:gap-6 transition-all duration-300">
                Conhecer Direito Empresarial <span className="text-xl">→</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
