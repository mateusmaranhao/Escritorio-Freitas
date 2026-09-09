import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { motion } from 'motion/react';

export function DireitoTrabalhista() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Direito Trabalhista",
    "provider": {
      "@type": "LegalService",
      "name": "Escritório Freitas: Advogados Associados"
    },
    "areaServed": ["Salto de Pirapora", "Sorocaba"],
    "serviceType": "Direito Trabalhista",
    "url": "https://escritoriofreitas.com.br/servicos/direito-trabalhista"
  };

  return (
    <>
      <SEO 
        title="Advogado Trabalhista em Salto de Pirapora e Região | Escritório Freitas"
        description="Orientação jurídica para relações de trabalho, prevenção de conflitos e questões trabalhistas envolvendo empresas e trabalhadores."
        url="/servicos/direito-trabalhista"
        schema={schema}
      />
      
      <main className="pt-32 pb-32">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-6 lg:px-20 py-8">
          <nav className="font-gilroy text-[11px] uppercase tracking-widest text-brand-secondary flex gap-2">
            <Link to="/" className="hover:text-brand-primary">Home</Link>
            <span>/</span>
            <Link to="/servicos" className="hover:text-brand-primary">Serviços</Link>
            <span>/</span>
            <span className="text-brand-primary">Direito Trabalhista</span>
          </nav>
        </div>

        {/* Hero & H1 */}
        <div className="max-w-7xl mx-auto px-6 lg:px-20 mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="font-gilroy text-sm uppercase tracking-widest text-brand-secondary block mb-6">
              Área de Atuação
            </span>
            <h1 className="font-poppins text-5xl md:text-6xl lg:text-7xl text-brand-primary leading-tight mb-8">
              Direito Trabalhista em Salto de Pirapora e Região
            </h1>
            <p className="font-gilroy text-xl text-brand-secondary max-w-3xl leading-relaxed">
              Orientação jurídica preventiva e contenciosa para relações de trabalho, buscando segurança e alinhamento legal para empresas e trabalhadores.
            </p>
          </motion.div>
        </div>

        {/* Content Body */}
        <div className="max-w-7xl mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 prose prose-lg text-brand-secondary">
            <h2 className="font-poppins text-3xl text-brand-primary mb-6">A importância do Direito Trabalhista</h2>
            <p className="mb-6">
              As relações de trabalho são dinâmicas e exigem acompanhamento constante das legislações vigentes. O Direito Trabalhista atua justamente na mediação e no estabelecimento de limites e direitos entre empregadores e empregados.
            </p>
            <p className="mb-10">
              Nossa atuação visa prevenir conflitos trabalhistas por meio de orientações claras e análises rigorosas de contratos, além de atuar em demandas onde seja necessário o restabelecimento do equilíbrio e o cumprimento das obrigações legais.
            </p>

            <h3 className="font-poppins text-2xl text-brand-primary mb-4">Principais Situações</h3>
            <ul className="flex flex-col gap-3 mb-10 list-none pl-0">
              <li className="flex gap-3"><span className="text-brand-primary">•</span> Análise e elaboração de contratos de trabalho.</li>
              <li className="flex gap-3"><span className="text-brand-primary">•</span> Orientação sobre direitos e deveres na rescisão contratual.</li>
              <li className="flex gap-3"><span className="text-brand-primary">•</span> Questões trabalhistas empresariais e compliance preventivo.</li>
              <li className="flex gap-3"><span className="text-brand-primary">•</span> Prevenção de conflitos e mediação em relações trabalhistas.</li>
            </ul>

            <h3 className="font-poppins text-2xl text-brand-primary mb-4">Para quem é</h3>
            <p className="mb-10">
              O serviço é direcionado tanto para empresários que buscam estruturar suas relações de trabalho de forma segura e responsável, prevenindo passivos, quanto para trabalhadores que necessitam de avaliação sobre situações específicas ocorridas durante ou ao término do contrato de trabalho.
            </p>

            <div className="bg-black/5 p-10 mt-12">
              <h4 className="font-poppins text-2xl text-brand-primary mb-4">Como funciona o atendimento</h4>
              <p className="mb-0">
                O primeiro passo é uma conversa inicial onde analisamos o contexto, os documentos e as particularidades da relação de trabalho. Com base nessa avaliação, propomos o melhor caminho jurídico, com transparência sobre os cenários e sem promessas irrealistas.
              </p>
            </div>
          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-4">
            <div className="sticky top-40 bg-brand-deep p-10 text-brand-surface">
              <h3 className="font-poppins text-3xl mb-6">Precisa de orientação?</h3>
              <p className="font-gilroy text-sm text-brand-surface/70 mb-8 leading-relaxed">
                Nossa equipe está pronta para avaliar sua situação trabalhista de forma técnica e responsável.
              </p>
              <a 
                href="https://wa.me/5515996662831"
                target="_blank"
                rel="noopener noreferrer" 
                className="inline-block w-full text-center border border-brand-surface bg-brand-surface px-6 py-4 text-[12px] uppercase tracking-widest text-brand-deep hover:bg-transparent hover:text-brand-surface transition-colors duration-300"
              >
                Falar sobre uma questão trabalhista
              </a>
              
              <div className="mt-12 pt-8 border-t border-brand-surface/10">
                <h4 className="font-gilroy text-[11px] uppercase tracking-widest text-brand-surface/50 mb-4">Outras áreas</h4>
                <ul className="flex flex-col gap-3">
                  <li><Link to="/servicos/direito-previdenciario" className="font-gilroy text-[13px] hover:text-brand-surface/70 transition-colors">Direito Previdenciário</Link></li>
                  <li><Link to="/servicos/direito-imobiliario" className="font-gilroy text-[13px] hover:text-brand-surface/70 transition-colors">Direito Imobiliário</Link></li>
                  <li><Link to="/servicos/direito-empresarial" className="font-gilroy text-[13px] hover:text-brand-surface/70 transition-colors">Direito Empresarial</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
