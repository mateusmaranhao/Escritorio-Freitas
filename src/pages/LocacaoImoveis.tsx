import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { GoogleReviews } from '../components/GoogleReviews';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Key, 
  Home, 
  Scale, 
  ArrowRight, 
  ChevronDown, 
  MessageSquare,
  AlertTriangle,
  ShieldCheck,
  CheckCircle2,
  FileCheck2,
  Gavel,
  ShieldAlert,
  Building,
  RefreshCcw,
  AlertOctagon
} from 'lucide-react';

export function LocacaoImoveis() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Locação de Imóveis Residencial e Comercial | Escritório Freitas",
    "provider": {
      "@type": "LegalService",
      "name": "Escritório Freitas: Advogados Associados",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua João de Góes, nº 117 - Centro",
        "addressLocality": "Salto de Pirapora",
        "addressRegion": "SP",
        "postalCode": "18160-043",
        "addressCountry": "BR"
      },
      "telephone": "+55 15 99666-2831"
    },
    "areaServed": ["Salto de Pirapora", "Sorocaba", "Votorantim", "Araçoiaba da Serra", "Região Metropolitana de Sorocaba"],
    "serviceType": "Contratos de Locação Residencial e Comercial, Ação de Despejo Liminar, Ação Revisional e Ação Renovatória de Aluguel",
    "description": "Assessoria jurídica especializada na gestão de locações e ações locatícias (Lei 8.245/91). Contratos com garantias sólidas, despejo por falta de pagamento e revisional de aluguel.",
    "url": "https://escritoriofreitas.com.br/servicos/direito-imobiliario/locacao-de-imoveis"
  };

  const faqs = [
    {
      question: "Como funciona a concessão de liminar para Despejo em 15 dias sem ouvir o inquilino?",
      answer: "Pelo artigo 59, § 1º, IX da Lei do Inquilinato (Lei nº 8.245/1991), é possível obter decisão liminar para desocupação do imóvel no prazo improrrogável de 15 (quinze) dias, independentemente de audiência prévia, nas ações de despejo por falta de pagamento de aluguel e encargos em contratos desprovidos de garantia (ou quando a garantia tiver sido extinta ou for insuficiente), mediante caução em juízo correspondente a 3 meses de aluguel."
    },
    {
      question: "Quais são as melhores garantias locatícias para proteger o locador contra inadimplência?",
      answer: "A legislação veda a exigência de mais de uma modalidade de garantia sob pena de nulidade e contravenção penal (art. 43, II). As garantias mais seguras são o Seguro-Fiança (gerenciado por seguradora de primeira linha, que arca com aluguéis, IPTU e condomínio sem carência), a Fiança com renúncia expressa ao benefício de ordem e outorga uxória, o Título de Capitalização e a Caução Imobiliária averbada na matrícula do bem do garante."
    },
    {
      question: "Quando pode ser requerida a Ação Revisional de Aluguel?",
      answer: "A Ação Revisional de Aluguel (art. 19 da Lei nº 8.245/91) pode ser proposta tanto pelo locador quanto pelo locatário após 3 (três) anos de vigência do contrato ou do último acordo de alteração do valor. Seu objetivo é adequar o aluguel ao preço real de mercado quando ocorrer valorização ou desvalorização acentuada da região, podendo o juiz fixar de pronto um aluguel provisório no início do processo."
    },
    {
      question: "O inquilino pode sublocar o imóvel ou transferir o ponto comercial para terceiros?",
      answer: "Não, salvo se houver consentimento prévio e por escrito do locador (art. 13 da Lei nº 8.245/91). A cessão da locação, sublocação ou empréstimo do imóvel sem anuência expressa configura infração contratual grave, ensejando a rescisão imediata do contrato e despejo dos ocupantes, com cobrança da multa rescisória integral."
    },
    {
      question: "Como o escritório auxilia na realização de vistorias de entrada e saída seguras?",
      answer: "O laudo de vistoria inicial e final é a prova técnica que resguarda ambas as partes contra disputas indenizatórias. Assessoramos na elaboração de termos de vistoria detalhados, com registro fotográfico e memorial descritivo assinado pelo locatário e fiadores, prevenindo recusas injustificadas de entrega de chaves e cobranças indevidas de reformas e pinturas."
    }
  ];

  const problemas = [
    {
      icon: <AlertOctagon className="w-6 h-6 text-brand-primary" />,
      title: "Inadimplência Cumulada de Aluguel e IPTU",
      desc: "Inquilino que atrasa sucessivos meses de aluguel e deixa condomínio e IPTU acumularem, ameaçando a penhora do próprio imóvel."
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-brand-primary" />,
      title: "Garantias Frágeis ou Fiadores Insolventes",
      desc: "Contratos com caução em dinheiro insuficiente ou fiadores que alienaram seus bens sem conhecimento do locador."
    },
    {
      icon: <Gavel className="w-6 h-6 text-brand-primary" />,
      title: "Demora Excessiva na Retomada do Imóvel",
      desc: "Ações de despejo ajuizadas sem técnica processual ou fundamentação liminar, arrastando-se por anos enquanto o imóvel se deteriora."
    },
    {
      icon: <RefreshCcw className="w-6 h-6 text-brand-primary" />,
      title: "Descompasso com o Valor de Mercado",
      desc: "Contratos comerciais defasados com aluguéis irrisórios que prejudicam o retorno financeiro do investidor imobiliário."
    }
  ];

  const solucoes = [
    {
      numero: "01",
      titulo: "Contratos de Locação sob Medida",
      desc: "Redação de contratos de locação residencial, comercial, built-to-suit ou por temporada, com estipulação de garantias sólidas (seguro-fiança, fiador com imóvel próprio, caução), multas e regras para benfeitorias."
    },
    {
      numero: "02",
      titulo: "Ação de Despejo com Pedido Liminar",
      desc: "Ajuizamento célere de Ação de Despejo por falta de pagamento com pedido de liminar de desocupação em 15 dias (art. 59, § 1º, IX da Lei 8.245/91), cumulada com execução dos fiadores e devedores."
    },
    {
      numero: "03",
      titulo: "Ação Revisional e Renovatória",
      desc: "Defesa e propositura de Ação Revisional para adequação do valor locatício à realidade de mercado e patrocínio de Ações Renovatórias de imóveis comerciais para resguardo do ponto comercial."
    },
    {
      numero: "04",
      titulo: "Notificações Extrajudiciais & Vistorias",
      desc: "Notificações premonitórias para constituição em mora, encerramento de contrato com prazo indeterminado, exoneração de fiança e mediação na devolução das chaves e quitação de reparos."
    }
  ];

  const passos = [
    {
      step: "01",
      title: "Análise do Contrato & Inadimplência",
      desc: "Examinamos o contrato de locação vigente, planilha de débitos, garantias contratadas e notificações prévias."
    },
    {
      step: "02",
      title: "Notificação Premonitória Formal",
      desc: "Envio de notificação extrajudicial com prazo fatal para purga da mora ou desocupação voluntária do imóvel."
    },
    {
      step: "03",
      title: "Ajuizamento do Despejo ou Revisional",
      desc: "Protocolo da ação competente com pedido de tutela de urgência ou fixação de aluguel provisório."
    },
    {
      step: "04",
      title: "Execução, Desocupação & Cobrança",
      desc: "Cumprimento do mandado pelo oficial de justiça e cobrança judicial dos valores em atraso contra locatário e fiadores."
    }
  ];

  return (
    <>
      <SEO 
        title="Locação de Imóveis, Despejo e Ação Revisional | Escritório Freitas"
        description="Assessoria jurídica em locação residencial e comercial: contratos sob medida, ação de despejo com liminar e revisional de aluguel em Salto de Pirapora e Sorocaba."
        url="/servicos/direito-imobiliario/locacao-de-imoveis"
        schema={schema}
      />

      {/* 1. HERO */}
      <section className="relative flex flex-col bg-brand-surface border-b border-[#333333]/10">
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-0 relative">
          <div className="lg:col-span-7 flex flex-col justify-center px-6 pt-6 pb-10 sm:pt-8 sm:pb-12 lg:py-12 lg:px-12 lg:pl-16 xl:pl-20">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-2 font-gilroy text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#6c7279] mb-3">
                <Link to="/" className="hover:text-brand-primary">Início</Link>
                <span>/</span>
                <Link to="/servicos" className="hover:text-brand-primary">Áreas de Atuação</Link>
                <span>/</span>
                <Link to="/servicos/direito-imobiliario" className="hover:text-brand-primary">Direito Imobiliário</Link>
                <span>/</span>
                <span className="text-brand-primary font-semibold">Locação de Imóveis</span>
              </div>

              <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-[#333333] font-semibold leading-[1.2] mb-3.5 max-w-2xl tracking-tight">
                Locação de Imóveis (Residencial e Comercial)
              </h1>

              <p className="font-gilroy text-sm sm:text-base md:text-[17px] text-[#555555] max-w-xl leading-relaxed mb-6 font-normal">
                Atuação técnica na gestão e resolução rápida de conflitos em contratos de aluguel. Redigimos instrumentos com garantias robustas, ajuizamos ações de despejo com liminar e revisamos aluguéis ao valor de mercado.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8">
                <a 
                  href="https://wa.me/5515996662831?text=Ol%C3%A1%2C%20preciso%20de%20assessoria%20jur%C3%ADdica%20para%20uma%20quest%C3%A3o%20de%20loca%C3%A7%C3%A3o%20ou%20a%C3%A7%C3%A3o%20de%20despejo."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-2.5 bg-brand-primary text-brand-surface font-gilroy text-xs uppercase tracking-widest px-6 py-3.5 hover:bg-black transition-colors duration-300"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Falar com Advogado de Locação</span>
                </a>
                <a 
                  href="#como-funciona"
                  className="inline-flex justify-center items-center gap-2 border border-brand-primary/30 text-brand-primary font-gilroy text-xs uppercase tracking-widest px-5 py-3.5 hover:bg-brand-primary/5 transition-colors duration-300"
                >
                  <span>Entenda a Metodologia</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-5 border-t border-[#333333]/10">
                <div className="flex items-start gap-2.5">
                  <Key className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-poppins text-xs font-semibold text-[#333333] leading-snug">Contratos Blindados</h4>
                    <p className="font-gilroy text-[11px] text-[#6c7279] leading-tight">Garantias locatícias sólidas e vistorias rigorosas</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Gavel className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-poppins text-xs font-semibold text-[#333333] leading-snug">Despejo com Liminar</h4>
                    <p className="font-gilroy text-[11px] text-[#6c7279] leading-tight">Desocupação em 15 dias e cobrança de aluguéis</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <RefreshCcw className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-poppins text-xs font-semibold text-[#333333] leading-snug">Revisionais de Valor</h4>
                    <p className="font-gilroy text-[11px] text-[#6c7279] leading-tight">Adequação justa aos preços atuais de mercado</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-5 relative overflow-hidden hidden lg:block bg-[#222222]">
            <img 
              src="/equipe.jpg" 
              alt="Locação de Imóveis — Escritório Freitas" 
              className="absolute inset-0 w-full h-full object-cover object-center grayscale-[15%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 border border-white/20 p-6 backdrop-blur-md bg-black/40">
              <span className="text-[10px] font-gilroy uppercase tracking-[0.25em] text-white/70 block mb-1">
                Lei do Inquilinato (Lei 8.245/91)
              </span>
              <span className="font-poppins text-brand-surface text-lg font-semibold mb-1.5 block">
                Rentabilidade Sem Inadimplência
              </span>
              <p className="text-brand-surface/85 text-xs leading-relaxed font-gilroy">
                Imóveis alugados devem gerar renda com tranquilidade, e não prejuízos acumulados com condomínio e IPTU atrasados. Atuamos com rapidez jurídica para preservar seu investimento.
              </p>
            </div>
          </div>
        </div>
        
        {/* Sub-bar Hero */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 border-t border-[#333333]/10 divide-y md:divide-y-0 md:divide-x divide-[#333333]/10">
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">01 · Instrumentos</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Contratos Sob Medida</h3>
            <p className="text-xs text-[#555555] font-gilroy">Locações comerciais e residenciais com garantias eficazes.</p>
          </div>
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">02 · Retomada</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Ações de Despejo</h3>
            <p className="text-xs text-[#555555] font-gilroy">Desocupação por falta de pagamento ou infração contratual.</p>
          </div>
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">03 · Mercado</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Ação Revisional</h3>
            <p className="text-xs text-[#555555] font-gilroy">Reajuste judicial de aluguéis defasados com perícia técnica.</p>
          </div>
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">04 · Ponto Comercial</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Ação Renovatória</h3>
            <p className="text-xs text-[#555555] font-gilroy">Proteção do ponto de comércio e renovação compulsória.</p>
          </div>
        </div>
      </section>

      {/* 2. PROBLEMA */}
      <section className="py-24 px-6 lg:px-20 bg-brand-surface-alt/30 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <span className="font-gilroy text-[11px] uppercase tracking-[0.3em] text-brand-muted block mb-4">
              Riscos na Locação Imobiliária
            </span>
            <h2 className="font-poppins text-3xl md:text-5xl text-brand-primary leading-tight mb-6">
              Inadimplência de aluguel e danos ao imóvel destroem o rendimento do patrimônio.
            </h2>
            <p className="font-gilroy text-lg text-brand-secondary leading-relaxed">
              Sem um contrato bem amarrado e assistência jurídica rápida, o proprietário acumula prejuízos astronômicos com contas não pagas, enquanto o inquilino inadimplente permanece no imóvel sem consequências.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problemas.map((item, index) => (
              <div 
                key={index}
                className="bg-brand-surface p-8 border border-brand-primary/10 flex flex-col justify-between hover:border-brand-primary/30 transition-all duration-300"
              >
                <div>
                  <div className="w-12 h-12 bg-brand-primary/5 flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <h3 className="font-poppins text-xl text-brand-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="font-gilroy text-sm text-brand-secondary leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SOLUÇÃO */}
      <section className="py-24 px-6 lg:px-20 bg-brand-surface border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="font-gilroy text-[11px] uppercase tracking-[0.3em] text-brand-muted block mb-4">
                Proteção e Segurança Locatícia
              </span>
              <h2 className="font-poppins text-3xl md:text-5xl text-brand-primary leading-tight mb-6">
                Como garantimos a segurança da sua locação e a cobrança dos aluguéis.
              </h2>
              <p className="font-gilroy text-base text-brand-secondary leading-relaxed mb-8">
                Atuamos com instrumentos modernos e ferramentas processuais da Lei do Inquilinato para reaver imóveis com celeridade e recuperar valores devidos diretamente dos devedores e seus garantidores.
              </p>
              <div className="p-6 bg-brand-surface-alt/40 border border-brand-primary/10 space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                  <span className="font-gilroy text-sm text-brand-primary font-medium">Despejo liminar ágil sem protelações</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                  <span className="font-gilroy text-sm text-brand-primary font-medium">Cobrança cumulada com execução dos fiadores</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                  <span className="font-gilroy text-sm text-brand-primary font-medium">Contratos compatíveis com as exigências dos tribunais</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {solucoes.map((sol, index) => (
                <div 
                  key={index}
                  className="p-8 border border-brand-primary/10 bg-brand-surface hover:border-brand-primary/30 transition-all duration-300"
                >
                  <span className="font-poppins text-3xl font-light text-brand-primary/30 block mb-4">
                    {sol.numero}
                  </span>
                  <h3 className="font-poppins text-xl text-brand-primary mb-3">
                    {sol.titulo}
                  </h3>
                  <p className="font-gilroy text-sm text-brand-secondary leading-relaxed">
                    {sol.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. METODOLOGIA */}
      <section id="como-funciona" className="py-24 px-6 lg:px-20 bg-brand-surface-alt/20 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-gilroy text-[11px] uppercase tracking-[0.3em] text-brand-muted block mb-3">
              Metodologia de Atuação
            </span>
            <h2 className="font-poppins text-3xl md:text-5xl text-brand-primary mb-4">
              Como funciona nossa assessoria em locação
            </h2>
            <p className="font-gilroy text-brand-secondary text-base">
              Roteiro eficiente para notificar, recuperar a posse do imóvel e executar os valores em aberto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {passos.map((p, i) => (
              <div key={i} className="relative flex flex-col p-8 bg-brand-surface border border-brand-primary/10">
                <span className="font-poppins text-4xl text-brand-primary/20 mb-4 font-bold block">{p.step}</span>
                <h3 className="font-poppins text-lg text-brand-primary mb-3">{p.title}</h3>
                <p className="font-gilroy text-sm text-brand-secondary leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROVA SOCIAL */}
      <section className="py-20 px-6 lg:px-20 border-b border-brand-primary/10 bg-brand-surface">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div>
              <span className="font-gilroy text-[11px] uppercase tracking-[0.3em] text-brand-muted block mb-3">
                Autoridade Jurídica Comprovada · Salto de Pirapora e Região
              </span>
              <h2 className="font-poppins text-3xl md:text-4xl text-brand-primary">
                A segurança de contar com quem domina a Lei do Inquilinato
              </h2>
            </div>
            <p className="font-gilroy text-sm text-brand-secondary max-w-md">
              Mais de 157 avaliações públicas no Google atestam a nossa dedicação, rigor processual e excelência na proteção do patrimônio de empresas e proprietários da região.
            </p>
          </div>

          <GoogleReviews />
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="py-24 px-6 lg:px-20 bg-brand-surface border-b border-brand-primary/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-gilroy text-[11px] uppercase tracking-[0.3em] text-brand-muted block mb-3">
              Dúvidas Técnicas Frequentes
            </span>
            <h2 className="font-poppins text-3xl md:text-5xl text-brand-primary mb-4">
              Perguntas frequentes sobre Locação e Despejo
            </h2>
            <p className="font-gilroy text-brand-secondary text-base">
              Esclareça dúvidas práticas sobre retomada de imóvel, cobrança de aluguéis e renovação comercial.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index}
                  className="border border-brand-primary/10 bg-brand-surface transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full py-6 px-6 sm:px-8 text-left flex justify-between items-center gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-poppins text-lg sm:text-xl text-brand-primary font-medium">
                      {faq.question}
                    </span>
                    <ChevronDown 
                      className={`w-5 h-5 text-brand-primary shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 sm:px-8 pb-6 font-gilroy text-sm sm:text-base text-brand-secondary leading-relaxed border-t border-brand-primary/5 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. CTA FINAL */}
      <section className="py-24 px-6 lg:px-20 bg-brand-deep text-brand-surface relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <span className="font-gilroy text-[11px] uppercase tracking-[0.4em] text-brand-surface/60 block mb-4">
            Locação & Ações Locatícias · Agilidade & Sigilo
          </span>
          <h2 className="font-poppins text-4xl sm:text-5xl md:text-6xl text-brand-surface leading-tight mb-8">
            Inquilino atrasou o aluguel ou precisa redigir um contrato seguro?
          </h2>
          <p className="font-gilroy text-lg text-brand-surface/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Consulte nossa equipe especializada em Direito Imobiliário em Salto de Pirapora e Sorocaba para ajuizar seu despejo ou revisar seu instrumento locatício.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://wa.me/5515996662831?text=Ol%C3%A1%2C%20preciso%20de%20assessoria%20jur%C3%ADdica%20para%20despejo%20ou%20contrato%20de%20loca%C3%A7%C3%A3o."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-surface text-brand-deep font-gilroy text-xs uppercase tracking-widest px-8 py-5 hover:bg-white transition-colors duration-300 font-semibold"
            >
              <MessageSquare className="w-4 h-4 text-brand-deep" />
              <span>Falar pelo WhatsApp Agora</span>
            </a>
            <Link 
              to="/contato"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 border border-brand-surface/30 text-brand-surface font-gilroy text-xs uppercase tracking-widest px-8 py-5 hover:bg-brand-surface/10 transition-colors duration-300"
            >
              <span>Ver Endereço e Telefone</span>
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-brand-surface/10 flex flex-wrap justify-center items-center gap-8 font-gilroy text-xs text-brand-surface/60">
            <span>Rua João de Góes, nº 117 — Centro, Salto de Pirapora</span>
            <span>·</span>
            <span>Atendimento Regional Salto de Pirapora e Sorocaba</span>
            <span>·</span>
            <span>Sigilo Profissional OAB</span>
          </div>
        </div>
      </section>
    </>
  );
}
