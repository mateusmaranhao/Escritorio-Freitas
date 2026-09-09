import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export function Servicos() {
  return (
    <>
      <SEO 
        title="Áreas de Atuação Jurídica em Salto de Pirapora e Região | Escritório Freitas"
        description="O Escritório Freitas — Advogados Associados atua em diferentes áreas do Direito, oferecendo orientação jurídica para pessoas, empresários e condomínios em Salto de Pirapora, Sorocaba e região."
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
              O Escritório Freitas — Advogados Associados atua em diferentes áreas do Direito, oferecendo orientação jurídica para pessoas, empresários e condomínios em Salto de Pirapora, Sorocaba e região.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-brand-primary/10">
            {/* Direito Trabalhista */}
            <div className="bg-brand-surface p-12 lg:p-16 flex flex-col justify-between">
              <div>
                <h2 className="font-poppins text-3xl text-brand-primary mb-4">Direito Trabalhista</h2>
                <p className="font-gilroy text-brand-secondary leading-relaxed mb-8">
                  Orientação jurídica para relações de trabalho, atuando de forma preventiva e contenciosa.
                </p>
                <div className="mb-12">
                  <strong className="block font-gilroy text-xs uppercase tracking-widest text-brand-primary mb-3">Principais Situações:</strong>
                  <ul className="flex flex-col gap-2 font-gilroy text-sm text-brand-secondary">
                    <li>• Análise de contratos de trabalho</li>
                    <li>• Rescisões e direitos do trabalhador</li>
                    <li>• Prevenção de conflitos para empresas</li>
                  </ul>
                </div>
              </div>
              <Link to="/servicos/direito-trabalhista" className="inline-flex items-center gap-4 font-gilroy text-[13px] uppercase tracking-widest text-brand-primary hover:gap-6 transition-all duration-300">
                Conhecer Direito Trabalhista <span className="text-xl">→</span>
              </Link>
            </div>
            
            {/* Direito Previdenciário */}
            <div className="bg-brand-surface p-12 lg:p-16 flex flex-col justify-between">
              <div>
                <h2 className="font-poppins text-3xl text-brand-primary mb-4">Direito Previdenciário</h2>
                <p className="font-gilroy text-brand-secondary leading-relaxed mb-8">
                  Assessoria focada em benefícios previdenciários e questões relacionadas ao INSS.
                </p>
                <div className="mb-12">
                  <strong className="block font-gilroy text-xs uppercase tracking-widest text-brand-primary mb-3">Principais Situações:</strong>
                  <ul className="flex flex-col gap-2 font-gilroy text-sm text-brand-secondary">
                    <li>• Planejamento de aposentadoria</li>
                    <li>• Análise de benefícios negados</li>
                    <li>• Orientação sobre documentação</li>
                  </ul>
                </div>
              </div>
              <Link to="/servicos/direito-previdenciario" className="inline-flex items-center gap-4 font-gilroy text-[13px] uppercase tracking-widest text-brand-primary hover:gap-6 transition-all duration-300">
                Conhecer Direito Previdenciário <span className="text-xl">→</span>
              </Link>
            </div>

            {/* Direito Imobiliário */}
            <div className="bg-brand-surface p-12 lg:p-16 flex flex-col justify-between">
              <div>
                <h2 className="font-poppins text-3xl text-brand-primary mb-4">Direito Imobiliário</h2>
                <p className="font-gilroy text-brand-secondary leading-relaxed mb-8">
                  Segurança em transações imobiliárias e assessoria especializada para condomínios.
                </p>
                <div className="mb-12">
                  <strong className="block font-gilroy text-xs uppercase tracking-widest text-brand-primary mb-3">Principais Situações:</strong>
                  <ul className="flex flex-col gap-2 font-gilroy text-sm text-brand-secondary">
                    <li>• Análise de contratos de compra e venda</li>
                    <li>• Relações e conflitos condominiais</li>
                    <li>• Regularização de imóveis</li>
                  </ul>
                </div>
              </div>
              <Link to="/servicos/direito-imobiliario" className="inline-flex items-center gap-4 font-gilroy text-[13px] uppercase tracking-widest text-brand-primary hover:gap-6 transition-all duration-300">
                Conhecer Direito Imobiliário <span className="text-xl">→</span>
              </Link>
            </div>

            {/* Direito Empresarial */}
            <div className="bg-brand-surface p-12 lg:p-16 flex flex-col justify-between">
              <div>
                <h2 className="font-poppins text-3xl text-brand-primary mb-4">Direito Empresarial</h2>
                <p className="font-gilroy text-brand-secondary leading-relaxed mb-8">
                  Suporte jurídico estratégico para decisões, contratos e rotinas corporativas.
                </p>
                <div className="mb-12">
                  <strong className="block font-gilroy text-xs uppercase tracking-widest text-brand-primary mb-3">Principais Situações:</strong>
                  <ul className="flex flex-col gap-2 font-gilroy text-sm text-brand-secondary">
                    <li>• Elaboração e revisão de contratos</li>
                    <li>• Relações comerciais e societárias</li>
                    <li>• Gestão de riscos jurídicos</li>
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
