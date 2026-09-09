import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { motion } from 'motion/react';

export function DireitoPrevidenciario() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Direito Previdenciário",
    "provider": {
      "@type": "LegalService",
      "name": "Escritório Freitas: Advogados Associados"
    },
    "areaServed": ["Salto de Pirapora", "Sorocaba"],
    "serviceType": "Direito Previdenciário",
    "url": "https://escritoriofreitas.com.br/servicos/direito-previdenciario"
  };

  return (
    <>
      <SEO 
        title="Advogado Previdenciário em Salto de Pirapora e Região | Escritório Freitas"
        description="Atuação em questões relacionadas à Previdência Social, planejamento e benefícios previdenciários."
        url="/servicos/direito-previdenciario"
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
            <span className="text-brand-primary">Direito Previdenciário</span>
          </nav>
        </div>

        {/* Hero & H1 */}
        <div className="max-w-7xl mx-auto px-6 lg:px-20 mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="font-gilroy text-sm uppercase tracking-widest text-brand-secondary block mb-6">
              Área de Atuação
            </span>
            <h1 className="font-poppins text-5xl md:text-6xl lg:text-7xl text-brand-primary leading-tight mb-8">
              Direito Previdenciário em Salto de Pirapora e Região
            </h1>
            <p className="font-gilroy text-xl text-brand-secondary max-w-3xl leading-relaxed">
              Atuação técnica em planejamento, análise de benefícios e orientações perante o INSS.
            </p>
          </motion.div>
        </div>

        {/* Content Body */}
        <div className="max-w-7xl mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 prose prose-lg text-brand-secondary">
            <h2 className="font-poppins text-3xl text-brand-primary mb-6">Planejamento e Segurança</h2>
            <p className="mb-6">
              O Direito Previdenciário é a área focada em garantir os direitos sociais aos cidadãos. Compreender as complexas regras da Previdência Social é fundamental para assegurar que anos de contribuição resultem no benefício adequado.
            </p>
            <p className="mb-10">
              Nossa equipe oferece análise criteriosa de toda a documentação, realizando o planejamento necessário para que o cliente tenha clareza sobre o momento ideal de requerer seu benefício e os requisitos que precisam ser preenchidos.
            </p>

            <h3 className="font-poppins text-2xl text-brand-primary mb-4">Situações Comuns</h3>
            <ul className="flex flex-col gap-3 mb-10 list-none pl-0">
              <li className="flex gap-3"><span className="text-brand-primary">•</span> Planejamento e simulação de aposentadoria.</li>
              <li className="flex gap-3"><span className="text-brand-primary">•</span> Análise de demandas previdenciárias e benefícios.</li>
              <li className="flex gap-3"><span className="text-brand-primary">•</span> Orientação sobre a documentação exigida pelo INSS.</li>
              <li className="flex gap-3"><span className="text-brand-primary">•</span> Avaliação técnica da situação contributiva do segurado.</li>
            </ul>

            <h3 className="font-poppins text-2xl text-brand-primary mb-4">Para quem é</h3>
            <p className="mb-10">
              Direcionado a trabalhadores e contribuintes que buscam organização, planejamento futuro ou que necessitam de análise especializada frente a questões previdenciárias e benefícios diversos.
            </p>

            <div className="bg-black/5 p-10 mt-12">
              <h4 className="font-poppins text-2xl text-brand-primary mb-4">Análise Cuidadosa</h4>
              <p className="mb-0">
                Não fazemos promessas de concessão de benefício. Nosso trabalho é técnico: analisamos o seu histórico, organizamos a documentação e orientamos qual é a melhor estratégia de acordo com as leis previdenciárias atuais.
              </p>
            </div>
          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-4">
            <div className="sticky top-40 bg-brand-deep p-10 text-brand-surface">
              <h3 className="font-poppins text-3xl mb-6">Precisa de orientação?</h3>
              <p className="font-gilroy text-sm text-brand-surface/70 mb-8 leading-relaxed">
                Organize seu futuro ou entenda sua situação atual com o suporte de profissionais.
              </p>
              <a 
                href="https://wa.me/5515996662831"
                target="_blank"
                rel="noopener noreferrer" 
                className="inline-block w-full text-center border border-brand-surface bg-brand-surface px-6 py-4 text-[12px] uppercase tracking-widest text-brand-deep hover:bg-transparent hover:text-brand-surface transition-colors duration-300"
              >
                Falar sobre uma questão previdenciária
              </a>
              
              <div className="mt-12 pt-8 border-t border-brand-surface/10">
                <h4 className="font-gilroy text-[11px] uppercase tracking-widest text-brand-surface/50 mb-4">Outras áreas</h4>
                <ul className="flex flex-col gap-3">
                  <li><Link to="/servicos/direito-trabalhista" className="font-gilroy text-[13px] hover:text-brand-surface/70 transition-colors">Direito Trabalhista</Link></li>
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
