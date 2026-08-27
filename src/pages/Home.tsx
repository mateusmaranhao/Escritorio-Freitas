import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

const HomeSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Escritório Freitas: Advogados Associados",
  "description": "Escritório de Advocacia especializado na proteção jurídica de empresários e condomínios com mais de 10 anos de experiência.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "R. Maximiano Fidelis, 45 - Centro",
    "addressLocality": "Salto de Pirapora",
    "addressRegion": "SP",
    "postalCode": "18160-041",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -23.6485,
    "longitude": -47.5739
  },
  "telephone": "+55-15-99666-2831",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "157"
  },
  "areaServed": ["Salto de Pirapora", "Sorocaba"],
  "priceRange": "$$$"
};

export function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Quais áreas do Direito o Escritório Freitas atende?",
      answer: "Atuamos principalmente em Direito Trabalhista, Previdenciário, Imobiliário e Empresarial, focando em orientação e segurança jurídica para nossos clientes."
    },
    {
      question: "Onde fica o Escritório Freitas?",
      answer: "Nosso escritório está localizado na Rua Maximiano Fidelis, 45, no Centro de Salto de Pirapora - SP."
    },
    {
      question: "O escritório atende clientes de Sorocaba?",
      answer: "Sim, atendemos clientes de Sorocaba, Salto de Pirapora e demais cidades da região, oferecendo suporte jurídico especializado."
    },
    {
      question: "Como funciona o primeiro contato?",
      answer: "O primeiro contato tem o objetivo de entender a sua demanda de forma clara e objetiva, para que possamos orientar sobre os caminhos jurídicos adequados com transparência e responsabilidade."
    }
  ];

  return (
    <>
      <SEO 
        title="Escritório Freitas | Advocacia em Salto de Pirapora e Região"
        description="Escritório Freitas — Advogados Associados. Advocacia em Salto de Pirapora, Sorocaba e região, com mais de 10 anos de experiência em Direito Trabalhista, Previdenciário, Imobiliário e Empresarial."
        url="/"
        schema={HomeSchema}
      />
      
      {/* 12. HERO DA HOME */}
      <section className="relative flex flex-col bg-white border-b border-[#333333]/10">
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-0 relative min-h-[70vh]">
          <div className="lg:col-span-7 flex flex-col justify-center px-6 py-16 lg:px-12 lg:pl-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-[11px] uppercase tracking-[0.4em] text-[#555555] mb-6 block">Advocacia em Salto de Pirapora : SP</span>
              <h1 className="font-serif text-5xl md:text-7xl text-[#333333] leading-[1.1] mb-8">
                Proteção jurídica para quem constrói e lidera.
              </h1>
              <p className="text-[#555555] text-lg max-w-lg leading-relaxed mb-10 tracking-tight">
                Especialistas na defesa de interesses empresariais e condominiais. Mais de uma década de rigor jurídico e parceria estratégica regional.
              </p>
              <div className="flex items-center gap-6">
                <div className="flex flex-col">
                  <span className="text-3xl font-serif text-[#333333]">+10</span>
                  <span className="text-[9px] uppercase tracking-widest text-[#555555]">Anos de Experiência</span>
                </div>
                <div className="w-[1px] h-10 bg-[#333333]/20"></div>
                <div className="flex flex-col">
                  <div className="flex gap-1 mb-1">
                    <svg className="w-3 h-3 fill-[#333333]" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                    <svg className="w-3 h-3 fill-[#333333]" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                    <svg className="w-3 h-3 fill-[#333333]" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                    <svg className="w-3 h-3 fill-[#333333]" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                    <svg className="w-3 h-3 fill-[#333333]" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  </div>
                  <span className="text-[9px] uppercase tracking-widest text-[#555555]">157 Avaliações Google</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-5 relative overflow-hidden hidden lg:block bg-[#222222]">
            <img 
              src="/equipe.jpg" 
              alt="Equipe Escritório Freitas" 
              className="absolute inset-0 w-full h-full object-cover object-center grayscale-[20%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-12 left-12 right-12 border border-white/20 p-8 backdrop-blur-md bg-black/30">
              <span className="font-serif text-white text-2xl mb-2 block">Compromisso Legal</span>
              <p className="text-white/80 text-xs leading-relaxed">
                Atendimento pautado pela análise cuidadosa de cada situação, buscando compreender o contexto para orientar decisões de forma clara e responsável.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 border-t border-[#333333]/10 divide-y md:divide-y-0 md:divide-x divide-[#333333]/10">
          <Link to="/servicos/direito-trabalhista" className="p-8 group cursor-pointer hover:bg-[#F9F9F9] transition-colors">
            <span className="text-[9px] uppercase tracking-widest text-[#555555] mb-3 block">01</span>
            <h3 className="font-serif text-xl mb-2 text-[#333333]">Direito Trabalhista</h3>
            <p className="text-[10px] text-[#555555] uppercase tracking-wider">Prevenção de conflitos corporativos</p>
          </Link>
          <Link to="/servicos/direito-empresarial" className="p-8 group cursor-pointer hover:bg-[#F9F9F9] transition-colors">
            <span className="text-[9px] uppercase tracking-widest text-[#555555] mb-3 block">02</span>
            <h3 className="font-serif text-xl mb-2 text-[#333333]">Direito Empresarial</h3>
            <p className="text-[10px] text-[#555555] uppercase tracking-wider">Orientação para líderes e negócios</p>
          </Link>
          <Link to="/servicos/direito-imobiliario" className="p-8 group cursor-pointer hover:bg-[#F9F9F9] transition-colors">
            <span className="text-[9px] uppercase tracking-widest text-[#555555] mb-3 block">03</span>
            <h3 className="font-serif text-xl mb-2 text-[#333333]">Direito Imobiliário</h3>
            <p className="text-[10px] text-[#555555] uppercase tracking-wider">Gestão e relações condominiais</p>
          </Link>
          <Link to="/servicos/direito-previdenciario" className="p-8 group cursor-pointer hover:bg-[#F9F9F9] transition-colors">
            <span className="text-[9px] uppercase tracking-widest text-[#555555] mb-3 block">04</span>
            <h3 className="font-serif text-xl mb-2 text-[#333333]">Direito Previdenciário</h3>
            <p className="text-[10px] text-[#555555] uppercase tracking-wider">Segurança para seu futuro</p>
          </Link>
        </div>
      </section>

      {/* 13. HOME — SEÇÃO DE AUTORIDADE */}
      <section className="py-24 px-6 lg:px-20 bg-brand-surface border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div className="max-w-2xl">
            <h3 className="font-serif text-3xl md:text-5xl text-brand-primary mb-6 leading-tight">
              Mais de 10 anos de experiência na advocacia
            </h3>
            <p className="font-sans text-lg text-brand-secondary leading-relaxed">
              Experiência jurídica construída com responsabilidade, atenção aos detalhes e compromisso com cada demanda.
            </p>
          </div>
          <div className="text-right">
            <span className="block font-serif text-6xl md:text-8xl text-brand-primary">+10 anos</span>
            <span className="block font-sans text-sm uppercase tracking-widest text-brand-secondary mt-2">de experiência</span>
          </div>
        </div>
      </section>

      {/* 14. HOME — POSICIONAMENTO */}
      <section className="py-32 px-6 lg:px-20 bg-brand-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200" 
              alt="Reunião profissional" 
              className="w-full h-auto object-cover aspect-[4/5] grayscale opacity-90"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="font-serif text-4xl md:text-5xl text-brand-primary leading-tight mb-8">
              Direito com estratégia, proximidade e responsabilidade.
            </h3>
            <p className="font-sans text-lg text-brand-secondary leading-relaxed">
              O Escritório Freitas — Advogados Associados oferece atendimento jurídico pautado pela análise cuidadosa de cada situação, buscando compreender o contexto de pessoas, empresas e condomínios para orientar decisões de forma clara e responsável.
            </p>
          </div>
        </div>
      </section>

      {/* 15. HOME — ÁREAS DE ATUAÇÃO */}
      <section className="py-32 px-6 lg:px-20 bg-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 max-w-3xl">
            <h3 className="font-serif text-4xl md:text-5xl text-brand-primary leading-tight mb-6">
              Áreas de atuação
            </h3>
            <p className="font-sans text-lg text-brand-secondary leading-relaxed">
              Conheça as principais áreas em que o Escritório Freitas atua para oferecer orientação jurídica especializada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-brand-primary/10">
            {/* Bloco 1 */}
            <div className="bg-brand-surface p-12 lg:p-16 group hover:bg-black/5 transition-colors duration-500 flex flex-col justify-between">
              <div>
                <h4 className="font-serif text-3xl text-brand-primary mb-4">Direito Trabalhista</h4>
                <p className="font-sans text-brand-secondary leading-relaxed mb-12">
                  Orientação jurídica para relações de trabalho, prevenção de conflitos e questões trabalhistas envolvendo empresas e trabalhadores.
                </p>
              </div>
              <Link to="/servicos/direito-trabalhista" className="inline-flex items-center gap-4 font-sans text-[13px] uppercase tracking-widest text-brand-primary group-hover:gap-6 transition-all duration-300">
                Conhecer Direito Trabalhista <span className="text-xl">→</span>
              </Link>
            </div>
            
            {/* Bloco 2 */}
            <div className="bg-brand-surface p-12 lg:p-16 group hover:bg-black/5 transition-colors duration-500 flex flex-col justify-between">
              <div>
                <h4 className="font-serif text-3xl text-brand-primary mb-4">Direito Previdenciário</h4>
                <p className="font-sans text-brand-secondary leading-relaxed mb-12">
                  Atuação em questões relacionadas à Previdência Social, benefícios previdenciários e orientação jurídica para diferentes situações.
                </p>
              </div>
              <Link to="/servicos/direito-previdenciario" className="inline-flex items-center gap-4 font-sans text-[13px] uppercase tracking-widest text-brand-primary group-hover:gap-6 transition-all duration-300">
                Conhecer Direito Previdenciário <span className="text-xl">→</span>
              </Link>
            </div>

            {/* Bloco 3 */}
            <div className="bg-brand-surface p-12 lg:p-16 group hover:bg-black/5 transition-colors duration-500 flex flex-col justify-between">
              <div>
                <h4 className="font-serif text-3xl text-brand-primary mb-4">Direito Imobiliário</h4>
                <p className="font-sans text-brand-secondary leading-relaxed mb-12">
                  Assessoria jurídica em questões relacionadas a imóveis, contratos, relações condominiais e demais demandas do setor imobiliário.
                </p>
              </div>
              <Link to="/servicos/direito-imobiliario" className="inline-flex items-center gap-4 font-sans text-[13px] uppercase tracking-widest text-brand-primary group-hover:gap-6 transition-all duration-300">
                Conhecer Direito Imobiliário <span className="text-xl">→</span>
              </Link>
            </div>

            {/* Bloco 4 */}
            <div className="bg-brand-surface p-12 lg:p-16 group hover:bg-black/5 transition-colors duration-500 flex flex-col justify-between">
              <div>
                <h4 className="font-serif text-3xl text-brand-primary mb-4">Direito Empresarial</h4>
                <p className="font-sans text-brand-secondary leading-relaxed mb-12">
                  Orientação jurídica para empresas e empresários em decisões, contratos, relações comerciais e questões relacionadas à atividade empresarial.
                </p>
              </div>
              <Link to="/servicos/direito-empresarial" className="inline-flex items-center gap-4 font-sans text-[13px] uppercase tracking-widest text-brand-primary group-hover:gap-6 transition-all duration-300">
                Conhecer Direito Empresarial <span className="text-xl">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 16. HOME — FOCO EM EMPRESAS E CONDOMÍNIOS */}
      <section className="py-32 px-6 lg:px-20 bg-brand-surface">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h3 className="font-serif text-4xl md:text-5xl text-brand-primary leading-tight mb-8">
                Segurança jurídica para quem precisa tomar decisões.
              </h3>
              <p className="font-sans text-lg text-brand-secondary leading-relaxed">
                Empresas e condomínios lidam diariamente com contratos, relações de trabalho, patrimônio, responsabilidades e decisões que exigem atenção jurídica. O Escritório Freitas oferece orientação para ajudar seus clientes a compreender riscos, possibilidades e caminhos jurídicos.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div>
                <h4 className="font-serif text-2xl text-brand-primary mb-6 pb-4 border-b border-brand-primary/10">Para empresas</h4>
                <ul className="flex flex-col gap-3 font-sans text-brand-secondary">
                  <li className="flex items-start gap-2"><span className="text-brand-primary mt-1">•</span> orientação jurídica</li>
                  <li className="flex items-start gap-2"><span className="text-brand-primary mt-1">•</span> contratos</li>
                  <li className="flex items-start gap-2"><span className="text-brand-primary mt-1">•</span> relações trabalhistas</li>
                  <li className="flex items-start gap-2"><span className="text-brand-primary mt-1">•</span> questões empresariais</li>
                  <li className="flex items-start gap-2"><span className="text-brand-primary mt-1">•</span> prevenção de conflitos</li>
                </ul>
              </div>
              <div>
                <h4 className="font-serif text-2xl text-brand-primary mb-6 pb-4 border-b border-brand-primary/10">Para condomínios</h4>
                <ul className="flex flex-col gap-3 font-sans text-brand-secondary">
                  <li className="flex items-start gap-2"><span className="text-brand-primary mt-1">•</span> questões condominiais</li>
                  <li className="flex items-start gap-2"><span className="text-brand-primary mt-1">•</span> contratos</li>
                  <li className="flex items-start gap-2"><span className="text-brand-primary mt-1">•</span> responsabilidades</li>
                  <li className="flex items-start gap-2"><span className="text-brand-primary mt-1">•</span> relações com prestadores</li>
                  <li className="flex items-start gap-2"><span className="text-brand-primary mt-1">•</span> orientação jurídica</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 17. HOME — DIFERENCIAIS */}
      <section className="py-32 px-6 lg:px-20 bg-brand-deep text-brand-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h4 className="font-serif text-2xl mb-4 text-white">Experiência</h4>
            <p className="font-sans text-brand-surface/70 leading-relaxed">
              Mais de 10 anos de atuação e experiência acumulada na advocacia.
            </p>
          </div>
          <div>
            <h4 className="font-serif text-2xl mb-4 text-white">Atendimento próximo</h4>
            <p className="font-sans text-brand-surface/70 leading-relaxed">
              Cada demanda é analisada considerando seu contexto e suas particularidades.
            </p>
          </div>
          <div>
            <h4 className="font-serif text-2xl mb-4 text-white">Responsabilidade</h4>
            <p className="font-sans text-brand-surface/70 leading-relaxed">
              Atuação pautada por seriedade, ética e atenção aos detalhes.
            </p>
          </div>
          <div>
            <h4 className="font-serif text-2xl mb-4 text-white">Conhecimento jurídico</h4>
            <p className="font-sans text-brand-surface/70 leading-relaxed">
              Atuação concentrada em áreas estratégicas do Direito para pessoas, empresas e condomínios.
            </p>
          </div>
        </div>
      </section>

      {/* 18. HOME — AVALIAÇÕES */}
      <section className="py-24 px-6 lg:px-20 border-y border-brand-primary/10 flex flex-col md:flex-row justify-between items-center gap-12 bg-brand-surface">
        <div className="max-w-xl">
          <h3 className="font-serif text-3xl md:text-4xl text-brand-primary mb-6 leading-tight">
            A confiança de quem já conhece nosso trabalho.
          </h3>
          <p className="font-sans text-base text-brand-secondary leading-relaxed">
            A experiência de nossos clientes destaca características como profissionalismo, responsabilidade, dedicação, atenção, competência e parceria.
          </p>
        </div>
        
        <div className="flex flex-col items-start md:items-end gap-4 shrink-0">
          <div className="flex items-baseline gap-4">
            <span className="font-serif text-5xl md:text-6xl text-brand-primary">5,0</span>
            <div className="flex gap-1 text-brand-primary">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              ))}
            </div>
          </div>
          <p className="font-sans text-xs uppercase tracking-[0.15em] text-brand-secondary">
            157 avaliações no Google
          </p>
        </div>
      </section>

      {/* 19. HOME — LOCAL SEO */}
      <section className="py-32 px-6 lg:px-20 bg-brand-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h3 className="font-serif text-4xl md:text-5xl text-brand-primary leading-tight mb-8">
              Advocacia em Salto de Pirapora, Sorocaba e região
            </h3>
            <p className="font-sans text-lg text-brand-secondary leading-relaxed mb-10">
              Com endereço no Centro de Salto de Pirapora, o Escritório Freitas — Advogados Associados atende clientes de Salto de Pirapora, Sorocaba e cidades da região, oferecendo orientação jurídica em diferentes áreas do Direito.
            </p>
            <div className="mb-10 font-sans text-brand-primary">
              <p className="font-medium mb-1">Endereço:</p>
              <p className="text-brand-secondary">R. Maximiano Fidelis, 45 - Centro<br/>Salto de Pirapora - SP, 18160-041</p>
            </div>
            <a 
              href="https://goo.gl/maps/" // Using a generic link since the exact place ID isn't provided, client will update
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-brand-primary px-8 py-4 text-[13px] uppercase tracking-widest text-brand-primary hover:bg-brand-primary hover:text-white transition-colors duration-500"
            >
              Como chegar
            </a>
          </div>
          
          <div className="w-full aspect-square lg:aspect-auto lg:h-[600px] bg-brand-surface border border-brand-primary/10 overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.7770857398183!2d-47.57685652467261!3d-23.648834464796347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c5f3408f9c1647%3A0xc32d1844a49c9527!2sR.%20Maximiano%20Fidelis%2C%2045%20-%20Centro%2C%20Salto%20de%20Pirapora%20-%20SP%2C%2018160-041!5e0!3m2!1spt-BR!2sbr!4v1714421111111!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* 20. HOME — FAQ */}
      <section className="py-32 px-6 lg:px-20 bg-brand-surface border-t border-brand-primary/10">
        <div className="max-w-3xl mx-auto">
          <h3 className="font-serif text-4xl text-brand-primary text-center mb-16">
            Dúvidas Frequentes
          </h3>
          
          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-brand-primary/10 bg-white">
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer hover:bg-black/5 transition-colors"
                >
                  <h4 className="font-serif text-2xl text-brand-primary">{faq.question}</h4>
                  <span className="text-brand-primary ml-4">
                    {openFaq === index ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    )}
                  </span>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 border-t border-brand-primary/5">
                        <p className="font-sans text-brand-secondary leading-relaxed mt-4">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 21. HOME — CTA FINAL */}
      <section className="py-32 px-6 lg:px-20 bg-brand-deep text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="font-serif text-4xl md:text-5xl text-brand-surface mb-8">
            Precisa de orientação jurídica?
          </h3>
          <p className="font-sans text-lg text-brand-surface/70 leading-relaxed mb-12">
            Converse com o Escritório Freitas e explique sua situação. Nossa equipe poderá orientar você sobre os próximos passos e a área jurídica adequada para sua demanda.
          </p>
          <a 
            href="https://wa.me/5515996662831" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-brand-surface bg-brand-surface px-10 py-5 text-[13px] uppercase tracking-widest text-brand-deep hover:bg-transparent hover:text-brand-surface transition-colors duration-500"
          >
            Falar com o Escritório
          </a>
        </div>
      </section>
    </>
  );
}
