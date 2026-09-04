import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { motion } from 'motion/react';

export function DireitoImobiliario() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Direito Imobiliário",
    "provider": {
      "@type": "LegalService",
      "name": "Escritório Freitas: Advogados Associados"
    },
    "areaServed": ["Salto de Pirapora", "Sorocaba"],
    "serviceType": "Direito Imobiliário",
    "url": "https://escritoriofreitas.com.br/servicos/direito-imobiliario"
  };

  return (
    <>
      <SEO 
        title="Advogado Imobiliário em Salto de Pirapora e Região | Escritório Freitas"
        description="Assessoria jurídica em questões relacionadas a imóveis, contratos, relações condominiais e demais demandas do setor imobiliário."
        url="/servicos/direito-imobiliario"
        schema={schema}
      />
      
      <main className="pt-32 pb-32">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-6 lg:px-20 py-8">
          <nav className="font-sans text-[11px] uppercase tracking-widest text-brand-secondary flex gap-2">
            <Link to="/" className="hover:text-brand-primary">Home</Link>
            <span>/</span>
            <Link to="/servicos" className="hover:text-brand-primary">Serviços</Link>
            <span>/</span>
            <span className="text-brand-primary">Direito Imobiliário</span>
          </nav>
        </div>

        {/* Hero & H1 */}
        <div className="max-w-7xl mx-auto px-6 lg:px-20 mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="font-sans text-sm uppercase tracking-widest text-brand-secondary block mb-6">
              Área de Atuação
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-brand-primary leading-tight mb-8">
              Direito Imobiliário em Salto de Pirapora e Região
            </h1>
            <p className="font-sans text-xl text-brand-secondary max-w-3xl leading-relaxed">
              Segurança jurídica para transações imobiliárias, análise contratual e assessoria completa para condomínios.
            </p>
          </motion.div>
        </div>

        {/* Content Body */}
        <div className="max-w-7xl mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 prose prose-lg text-brand-secondary">
            <h2 className="font-serif text-3xl text-brand-primary mb-6">Proteção para o seu Patrimônio</h2>
            <p className="mb-6">
              Transações imobiliárias envolvem altos valores e decisões importantes. O Direito Imobiliário atua para mitigar riscos, garantindo que contratos de compra, venda, locação ou estruturação de negócios imobiliários sejam feitos com total respaldo legal.
            </p>
            <p className="mb-10">
              Também oferecemos sólida assessoria preventiva para a gestão de condomínios, orientando síndicos e administradoras sobre responsabilidades, relações com prestadores de serviço e prevenção de conflitos.
            </p>

            <h3 className="font-serif text-2xl text-brand-primary mb-4">Situações Atendidas</h3>
            <ul className="flex flex-col gap-3 mb-10 list-none pl-0">
              <li className="flex gap-3"><span className="text-brand-primary">•</span> Análise rigorosa e redação de contratos de compra e venda.</li>
              <li className="flex gap-3"><span className="text-brand-primary">•</span> Assessoria jurídica contínua e preventiva para condomínios.</li>
              <li className="flex gap-3"><span className="text-brand-primary">•</span> Avaliação de responsabilidades e prevenção de conflitos imobiliários.</li>
              <li className="flex gap-3"><span className="text-brand-primary">•</span> Orientação em questões e rotinas do setor imobiliário.</li>
            </ul>

            <h3 className="font-serif text-2xl text-brand-primary mb-4">Para quem é</h3>
            <p className="mb-10">
              Voltado para investidores, proprietários, imobiliárias e síndicos de condomínios que demandam segurança técnica e legal em suas operações e na gestão do patrimônio.
            </p>

            <div className="bg-black/5 p-10 mt-12">
              <h4 className="font-serif text-2xl text-brand-primary mb-4">Foco na Prevenção</h4>
              <p className="mb-0">
                A melhor estratégia imobiliária é a preventiva. Analisamos detalhadamente a documentação de imóveis e os termos de cada acordo antes de sua assinatura, reduzindo drasticamente as chances de litígios futuros.
              </p>
            </div>
          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-4">
            <div className="sticky top-40 bg-brand-deep p-10 text-brand-surface">
              <h3 className="font-serif text-3xl mb-6">Precisa de orientação?</h3>
              <p className="font-sans text-sm text-brand-surface/70 mb-8 leading-relaxed">
                Fale conosco antes de tomar decisões importantes sobre imóveis ou gestão condominial.
              </p>
              <a 
                href="https://wa.me/5515996662831"
                target="_blank"
                rel="noopener noreferrer" 
                className="inline-block w-full text-center border border-brand-surface bg-brand-surface px-6 py-4 text-[12px] uppercase tracking-widest text-brand-deep hover:bg-transparent hover:text-brand-surface transition-colors duration-300"
              >
                Falar sobre uma questão imobiliária
              </a>
              
              <div className="mt-12 pt-8 border-t border-brand-surface/10">
                <h4 className="font-sans text-[11px] uppercase tracking-widest text-brand-surface/50 mb-4">Outras áreas</h4>
                <ul className="flex flex-col gap-3">
                  <li><Link to="/servicos/direito-trabalhista" className="font-sans text-[13px] hover:text-brand-surface/70 transition-colors">Direito Trabalhista</Link></li>
                  <li><Link to="/servicos/direito-previdenciario" className="font-sans text-[13px] hover:text-brand-surface/70 transition-colors">Direito Previdenciário</Link></li>
                  <li><Link to="/servicos/direito-empresarial" className="font-sans text-[13px] hover:text-brand-surface/70 transition-colors">Direito Empresarial</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
