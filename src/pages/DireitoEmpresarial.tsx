import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { motion } from 'motion/react';

export function DireitoEmpresarial() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Direito Empresarial",
    "provider": {
      "@type": "LegalService",
      "name": "Escritório Freitas: Advogados Associados"
    },
    "areaServed": ["Salto de Pirapora", "Sorocaba"],
    "serviceType": "Direito Empresarial",
    "url": "https://escritoriofreitas.com.br/servicos/direito-empresarial"
  };

  return (
    <>
      <SEO 
        title="Advogado Empresarial em Salto de Pirapora e Região | Escritório Freitas"
        description="Orientação jurídica para empresas e empresários em decisões, contratos e relações comerciais."
        url="/servicos/direito-empresarial"
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
            <span className="text-brand-primary">Direito Empresarial</span>
          </nav>
        </div>

        {/* Hero & H1 */}
        <div className="max-w-7xl mx-auto px-6 lg:px-20 mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-brand-primary leading-tight mb-8">
              Direito Empresarial em Salto de Pirapora e Região
            </h1>
            <p className="font-sans text-xl text-brand-secondary max-w-3xl leading-relaxed">
              Orientação estratégica para empresas, prevenindo litígios e estruturando relações comerciais com segurança.
            </p>
          </motion.div>
        </div>

        {/* Content Body */}
        <div className="max-w-7xl mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 prose prose-lg text-brand-secondary">
            <h2 className="font-serif text-3xl text-brand-primary mb-6">Parceria Estratégica</h2>
            <p className="mb-6">
              A condução de um negócio exige respaldo legal contínuo. O Direito Empresarial tem como objetivo proporcionar o suporte jurídico necessário para que empresários tomem decisões estruturadas e com riscos mitigados.
            </p>
            <p className="mb-10">
              Nossa abordagem prioriza a prevenção. Atuamos ao lado da gestão da empresa, revisando rotinas, elaborando contratos sólidos e oferecendo direcionamento técnico para que o foco permaneça no desenvolvimento e crescimento sustentável da atividade empresarial.
            </p>

            <h3 className="font-serif text-2xl text-brand-primary mb-4">Áreas de Apoio</h3>
            <ul className="flex flex-col gap-3 mb-10 list-none pl-0">
              <li className="flex gap-3"><span className="text-brand-primary">•</span> Orientação jurídica continuada para empresários.</li>
              <li className="flex gap-3"><span className="text-brand-primary">•</span> Elaboração e estruturação de contratos comerciais.</li>
              <li className="flex gap-3"><span className="text-brand-primary">•</span> Estratégias preventivas e prevenção de conflitos societários.</li>
              <li className="flex gap-3"><span className="text-brand-primary">•</span> Avaliação de responsabilidades legais da empresa.</li>
            </ul>

            <h3 className="font-serif text-2xl text-brand-primary mb-4">Para quem é</h3>
            <p className="mb-10">
              Destinado a empresas, empreendedores e gestores corporativos que compreendem que o suporte jurídico especializado é um ativo essencial para a profissionalização e segurança da operação.
            </p>

            <div className="bg-black/5 p-10 mt-12">
              <h4 className="font-serif text-2xl text-brand-primary mb-4">Nosso método</h4>
              <p className="mb-0">
                Atendimento personalizado, focado em compreender a realidade do seu negócio. Não utilizamos soluções genéricas; cada orientação jurídica leva em conta o modelo de negócio da sua empresa e o mercado em que está inserida.
              </p>
            </div>
          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-4">
            <div className="sticky top-40 bg-brand-deep p-10 text-brand-surface">
              <h3 className="font-serif text-3xl mb-6">Precisa de orientação?</h3>
              <p className="font-sans text-sm text-brand-surface/70 mb-8 leading-relaxed">
                Garanta a segurança jurídica das suas operações empresariais com assessoria especializada.
              </p>
              <a 
                href="https://wa.me/5515996662831"
                target="_blank"
                rel="noopener noreferrer" 
                className="inline-block w-full text-center border border-brand-surface bg-brand-surface px-6 py-4 text-[12px] uppercase tracking-widest text-brand-deep hover:bg-transparent hover:text-brand-surface transition-colors duration-300"
              >
                Falar sobre uma questão empresarial
              </a>
              
              <div className="mt-12 pt-8 border-t border-brand-surface/10">
                <h4 className="font-sans text-[11px] uppercase tracking-widest text-brand-surface/50 mb-4">Outras áreas</h4>
                <ul className="flex flex-col gap-3">
                  <li><Link to="/servicos/direito-trabalhista" className="font-sans text-[13px] hover:text-brand-surface/70 transition-colors">Direito Trabalhista</Link></li>
                  <li><Link to="/servicos/direito-previdenciario" className="font-sans text-[13px] hover:text-brand-surface/70 transition-colors">Direito Previdenciário</Link></li>
                  <li><Link to="/servicos/direito-imobiliario" className="font-sans text-[13px] hover:text-brand-surface/70 transition-colors">Direito Imobiliário</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
