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

      {/* 14. HOME — JURÍDICO EMPRESARIAL PREVENTIVO */}
      <section className="py-32 px-6 lg:px-20 bg-brand-surface">
        <div className="max-w-7xl mx-auto">
          {/* Cabeçalho da Seção */}
          <div className="max-w-3xl mb-20">
            <span className="font-sans text-sm uppercase tracking-widest text-brand-secondary block mb-6">
              Jurídico Empresarial Preventivo
            </span>
            <h3 className="font-serif text-4xl md:text-5xl text-brand-primary leading-tight mb-8">
              Sua empresa não precisa de um advogado apenas quando o problema aparece.
            </h3>
            <div className="font-sans text-lg text-brand-secondary leading-relaxed space-y-4">
              <p>
                Empresas que crescem tomam decisões todos os dias. Contratam, demitem, assinam contratos, negociam com fornecedores, admitem sócios e expandem suas operações. Cada uma dessas decisões pode criar, ou evitar, um passivo.
              </p>
              <p>
                Quando o jurídico entra apenas depois que o problema acontece, boa parte do custo já foi definida por terceiros. A assessoria jurídica preventiva muda essa lógica: antecipa riscos, orienta decisões e coloca a segurança jurídica dentro da rotina da empresa.
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-brand-primary/10 mb-20">
            {/* Card 01 */}
            <div className="bg-brand-surface p-12 lg:p-16 group hover:bg-black/5 transition-colors duration-500">
              <span className="text-[11px] font-sans uppercase tracking-widest text-brand-secondary mb-4 block">01</span>
              <h4 className="font-serif text-2xl text-brand-primary mb-4">Contratações e desligamentos</h4>
              <p className="font-sans text-brand-secondary leading-relaxed">
                Decisões trabalhistas tomadas no improviso podem custar caro. Uma contratação mal estruturada ou um desligamento conduzido sem orientação pode se transformar, anos depois, em uma reclamação trabalhista.
              </p>
            </div>
            
            {/* Card 02 */}
            <div className="bg-brand-surface p-12 lg:p-16 group hover:bg-black/5 transition-colors duration-500">
              <span className="text-[11px] font-sans uppercase tracking-widest text-brand-secondary mb-4 block">02</span>
              <h4 className="font-serif text-2xl text-brand-primary mb-4">Contratos sem análise jurídica</h4>
              <p className="font-sans text-brand-secondary leading-relaxed">
                Assinar rápido pode significar assumir riscos por anos. Cláusulas desequilibradas, multas excessivas, garantias insuficientes ou obrigações que passam despercebidas podem comprometer uma relação comercial antes mesmo de ela começar.
              </p>
            </div>

            {/* Card 03 */}
            <div className="bg-brand-surface p-12 lg:p-16 group hover:bg-black/5 transition-colors duration-500">
              <span className="text-[11px] font-sans uppercase tracking-widest text-brand-secondary mb-4 block">03</span>
              <h4 className="font-serif text-2xl text-brand-primary mb-4">Entrada e saída de sócios</h4>
              <p className="font-sans text-brand-secondary leading-relaxed">
                O melhor momento para definir as regras da sociedade é antes do conflito. Participação societária, responsabilidades, distribuição de resultados e regras para entrada e saída precisam estar claras. Sem isso, decisões simples podem se transformar em disputas complexas.
              </p>
            </div>

            {/* Card 04 */}
            <div className="bg-brand-surface p-12 lg:p-16 group hover:bg-black/5 transition-colors duration-500">
              <span className="text-[11px] font-sans uppercase tracking-widest text-brand-secondary mb-4 block">04</span>
              <h4 className="font-serif text-2xl text-brand-primary mb-4">Crescimento sem estrutura jurídica</h4>
              <p className="font-sans text-brand-secondary leading-relaxed">
                Sua empresa cresceu. A estrutura jurídica cresceu junto? Mais faturamento, funcionários, contratos e operações também significam novos riscos. O crescimento precisa ser acompanhado por uma estrutura societária, contratual e trabalhista compatível com o novo momento da empresa.
              </p>
            </div>
          </div>

          {/* Fechamento */}
          <div className="max-w-3xl">
            <h4 className="font-serif text-3xl text-brand-primary mb-6 leading-tight">
              O jurídico deve participar da decisão — não apenas da solução.
            </h4>
            <p className="font-sans text-lg text-brand-secondary leading-relaxed mb-8">
              Assessoria jurídica preventiva significa ter orientação especializada antes de assinar, contratar, negociar ou tomar decisões que possam impactar o futuro da empresa.
            </p>
            <Link to="/servicos/direito-empresarial" className="inline-flex items-center gap-4 font-sans text-[13px] uppercase tracking-widest text-brand-primary hover:gap-6 transition-all duration-300">
              Conheça nossa assessoria jurídica empresarial <span className="text-xl">→</span>
            </Link>
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

      {/* 17. HOME — COMO ATUAMOS */}
      <section className="py-32 px-6 lg:px-20 bg-brand-deep text-brand-surface">
        <div className="max-w-7xl mx-auto">
          {/* Cabeçalho */}
          <div className="max-w-3xl mb-20">
            <span className="font-sans text-sm uppercase tracking-widest text-brand-surface/60 block mb-6">
              Como atuamos
            </span>
            <h3 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-8">
              Quatro mudanças quando o jurídico passa a fazer parte da operação.
            </h3>
            <div className="font-sans text-lg text-brand-surface/80 leading-relaxed space-y-4">
              <p>
                Não acreditamos em um jurídico que aparece apenas quando surge um problema.
              </p>
              <p>
                Atuamos de forma próxima à empresa, entendendo sua operação, antecipando riscos e transformando decisões do dia a dia em decisões mais seguras, previsíveis e bem estruturadas.
              </p>
            </div>
          </div>

          {/* Grid 2x2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 mb-20">
            {/* 01 */}
            <div className="bg-brand-deep p-12 lg:p-16 hover:bg-white/5 transition-colors duration-500">
              <span className="text-[11px] font-sans uppercase tracking-widest text-brand-surface/50 mb-4 block">01 — Jurídico presente antes da decisão</span>
              <h4 className="font-serif text-2xl text-white mb-4">Um departamento jurídico sob medida para a sua empresa.</h4>
              <p className="font-sans text-brand-surface/70 leading-relaxed mb-4">
                Participamos das decisões antes que elas sejam tomadas, oferecendo orientação estratégica para encontrar soluções seguras e viáveis — com foco em prevenir conflitos, e não simplesmente judicializá-los.
              </p>
              <p className="font-sans text-brand-surface/70 leading-relaxed">
                Na prática: escopo e honorários são definidos previamente, trazendo previsibilidade de custos e clareza sobre o trabalho contratado.
              </p>
            </div>
            
            {/* 02 */}
            <div className="bg-brand-deep p-12 lg:p-16 hover:bg-white/5 transition-colors duration-500">
              <span className="text-[11px] font-sans uppercase tracking-widest text-brand-surface/50 mb-4 block">02 — Menos risco. Mais eficiência</span>
              <h4 className="font-serif text-2xl text-white mb-4">Prevenção e redução do custo trabalhista.</h4>
              <p className="font-sans text-brand-surface/70 leading-relaxed mb-4">
                Analisamos contratos, processos internos e rotinas trabalhistas para identificar pontos de risco e oportunidades de melhoria.
              </p>
              <p className="font-sans text-brand-surface/70 leading-relaxed">
                Atuamos tanto na prevenção quanto na resolução de conflitos, incluindo admissões, desligamentos, acordos individuais e coletivos e defesa em ações trabalhistas.
              </p>
            </div>

            {/* 03 */}
            <div className="bg-brand-deep p-12 lg:p-16 hover:bg-white/5 transition-colors duration-500">
              <span className="text-[11px] font-sans uppercase tracking-widest text-brand-surface/50 mb-4 block">03 — Especialistas que entendem a sua realidade</span>
              <h4 className="font-serif text-2xl text-white mb-4">Atendimento próximo, personalizado e orientado à solução.</h4>
              <p className="font-sans text-brand-surface/70 leading-relaxed mb-4">
                Empresários precisam de respostas que façam sentido para a realidade do negócio — não de respostas jurídicas desconectadas da operação.
              </p>
              <p className="font-sans text-brand-surface/70 leading-relaxed">
                Por isso, os profissionais responsáveis pelo seu caso acompanham de perto cada demanda, entendendo o contexto antes de propor o caminho.
              </p>
            </div>

            {/* 04 */}
            <div className="bg-brand-deep p-12 lg:p-16 hover:bg-white/5 transition-colors duration-500">
              <span className="text-[11px] font-sans uppercase tracking-widest text-brand-surface/50 mb-4 block">04 — Decisões formalizadas</span>
              <h4 className="font-serif text-2xl text-white mb-4">Transformamos acordos em segurança jurídica.</h4>
              <p className="font-sans text-brand-surface/70 leading-relaxed mb-4">
                Uma decisão tomada em reunião, um acordo com fornecedor ou uma nova política interna só gera segurança quando está corretamente formalizada.
              </p>
              <p className="font-sans text-brand-surface/70 leading-relaxed mb-4">
                Estruturamos e documentamos essas decisões para que o que foi combinado exista também como prova e tenha validade jurídica.
              </p>
              <p className="font-sans text-brand-surface/70 leading-relaxed">
                Da reunião de sócios ao contrato com fornecedor. Da política interna à regra de comissionamento.
              </p>
            </div>
          </div>

          {/* Fechamento */}
          <div className="max-w-3xl">
            <h4 className="font-serif text-3xl text-white mb-8 leading-tight">
              Mais do que resolver problemas jurídicos, ajudamos sua empresa a tomar decisões melhores.
            </h4>
            <Link to="/contato" className="inline-flex items-center gap-4 font-sans text-[13px] uppercase tracking-widest text-white hover:gap-6 transition-all duration-300">
              Fale com nossa equipe <span className="text-xl">→</span>
            </Link>
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
