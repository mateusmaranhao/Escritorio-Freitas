import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { GoogleReviews } from '../components/GoogleReviews';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building, 
  Users, 
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
  Coins,
  Volume2
} from 'lucide-react';

export function DireitoCondominial() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Direito Condominial e Vizinhança | Assessoria para Síndicos e Moradores",
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
    "serviceType": "Cobrança de Cotas Condominiais, Assessoria Jurídica para Síndicos, Convenção de Condomínio e Ações de Vizinhança",
    "description": "Assessoria jurídica para condomínios residenciais e comerciais e resolução de conflitos de vizinhança. Cobrança de inadimplentes, revisão de convenção, assembleias e perícias de infiltração.",
    "url": "https://escritoriofreitas.com.br/servicos/direito-imobiliario/direito-condominial-vizinhanca"
  };

  const faqs = [
    {
      question: "Por que a cobrança de taxa de condomínio é tão rápida e pode penhorar o próprio imóvel de família?",
      answer: "O Código de Processo Civil (art. 784, X) elevou os créditos referentes às contribuições ordinárias ou extraordinárias de condomínio a Título Executivo Extrajudicial. O devedor é citado para pagar em apenas 3 (três) dias sob pena de penhora. Além disso, pelo caráter 'propter rem' da dívida, a jurisprudência do STJ e a Lei nº 8.009/90 excepcionam expressamente a impenhorabilidade do bem de família: o próprio apartamento ou casa do devedor pode ser penhorado e levado a leilão para quitar os débitos condominiais."
    },
    {
      question: "Como o escritório apoia o síndico na condução de assembleias polêmicas?",
      answer: "Participamos presencialmente ou por videoconferência em assembleias gerais ordinárias e extraordinárias de alta tensão (destituição de síndico, aprovação de obras voluptuárias ou reformas estruturais, aplicação de multas por conduta antissocial). Garantimos a estrita observância das regras de convocação, quóruns qualificados do Código Civil e redação límpida da ata assemblear, evitando anulações judiciais posteriores."
    },
    {
      question: "O que fazer diante de vizinho barulhento ou condômino antissocial?",
      answer: "O artigo 1.337, parágrafo único do Código Civil prevê a aplicação de multa de até 10 (dez) vezes o valor da cota condominial para o condômino com reiterado comportamento antissocial, deliberada por três quartos dos condôminos restantes. No âmbito do Direito de Vizinhança (art. 1.277 do CC), ingressamos com Ação Cominatória com pedido liminar (obrigação de não fazer com multa diária) e indenização por danos morais diante de perturbação reiterada do sossego, saúde e segurança."
    },
    {
      question: "Como resolver infiltrações entre apartamentos vizinhos quando o morador se recusa a consertar?",
      answer: "Se a infiltração decorre da rede vertical (coluna geral do edifício), a responsabilidade pelas obras é do condomínio. Se decorre da rede horizontal (ramal interno do apartamento superior), a obrigação é exclusiva do proprietário daquela unidade. Enviamos notificação extrajudicial com prazo perentório e, persistindo a recusa, ajuizamos Ação de Obrigação de Fazer cumulada com pedido de tutela de urgência para ingresso forçado de encanador/perito e reparação imediata dos estragos causados."
    },
    {
      question: "Como funciona a atualização da Convenção de Condomínio e do Regimento Interno?",
      answer: "Muitos condomínios ainda operam sob convenções da década de 70 ou 80, que não preveem assembleias virtuais, locações por aplicativo (Airbnb), pets de grande porte, vagas rotativas com veículos elétricos ou regras de delivery. Elaboramos a minuta de modernização e orientamos o processo de aprovação pelo quórum de 2/3 dos condôminos (art. 1.351 do CC) e registro no Cartório de Registro de Imóveis."
    }
  ];

  const problemas = [
    {
      icon: <Coins className="w-6 h-6 text-brand-primary" />,
      title: "Inadimplência Elevada que Asfixia as Contas",
      desc: "Moradores inadimplentes que forçam o aumento da taxa dos demais condôminos e impedem a manutenção preventiva do condomínio."
    },
    {
      icon: <Volume2 className="w-6 h-6 text-brand-primary" />,
      title: "Barulhos Excessivos e Morador Antissocial",
      desc: "Perturbação do sossego com festas contínuas, brigas e infrações reiteradas sem penalização técnica eficaz pela administração."
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-brand-primary" />,
      title: "Infiltrações e Danos entre Unidades Vizinhas",
      desc: "Vazamentos crônicos no teto e paredes com recusa do vizinho de cima em permitir vistoria ou arcar com as reformas necessárias."
    },
    {
      icon: <Building className="w-6 h-6 text-brand-primary" />,
      title: "Convenção Antiga e Decisões Anuladas em Juízo",
      desc: "Assembleias que votam matérias importantes sem o quórum legal e sofrem anulações judiciais onerosas promovidas por moradores."
    }
  ];

  const solucoes = [
    {
      numero: "01",
      titulo: "Cobrança de Cotas Condominiais",
      desc: "Cobrança extrajudicial amigável e Ação de Execução de Título Extrajudicial (Art. 784, X do CPC) com penhora célere de contas bancárias, veículos e do próprio imóvel devedor em hasta pública."
    },
    {
      numero: "02",
      titulo: "Assessoria Jurídica ao Síndico e Conselho",
      desc: "Consultoria preventiva para a administração condominial, acompanhamento em assembleias conturbadas, pareceres sobre uso de áreas comuns, contratos de prestadores de serviço e rescisões de terceirizadas."
    },
    {
      numero: "03",
      titulo: "Modernização de Convenção e Regimento",
      desc: "Revisão e atualização integral das normas condominiais: locações por temporada e Airbnb, assembleias híbridas/virtuais, animais domésticos e vagas de garagem, com registro em Cartório de Imóveis."
    },
    {
      numero: "04",
      titulo: "Resolução de Conflitos de Vizinhança",
      desc: "Ações cominatórias para cessação de barulho excessivo, ações de nunciação de obra nova por construções irregulares que afetam a estrutura vizinha e ressarcimento por infiltrações."
    }
  ];

  const passos = [
    {
      step: "01",
      title: "Diagnóstico da Demanda Condominial",
      desc: "Analisamos a convenção, a ata de eleição do síndico e a documentação comprobatória da infração ou débito."
    },
    {
      step: "02",
      title: "Notificação Extrajudicial com Prazo",
      desc: "Tentativa prévia de conciliação formal com advertência de incidência de multas diárias e encargos moratórios."
    },
    {
      step: "03",
      title: "Execução Judicial ou Tutela de Urgência",
      desc: "Ajuizamento com pedido de liminar para cessar a perturbação ou citação para pagamento em 3 dias."
    },
    {
      step: "04",
      title: "Restauração da Harmonia e Caixa",
      desc: "Garantia do recebimento integral das cotas em atraso ou cumprimento da sentença sob pena de penhora."
    }
  ];

  return (
    <>
      <SEO 
        title="Direito Condominial e Conflitos de Vizinhança | Escritório Freitas"
        description="Assessoria jurídica para condomínios e moradores: cobrança ágil de taxas atrasadas, assessoria a síndicos e ações de vizinhança em Salto de Pirapora e Sorocaba."
        url="/servicos/direito-imobiliario/direito-condominial-vizinhanca"
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
                <span className="text-brand-primary font-semibold">Direito Condominial</span>
              </div>

              <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-[#333333] font-semibold leading-[1.2] mb-3.5 max-w-2xl tracking-tight">
                Direito Condominial e Vizinhança
              </h1>

              <p className="font-gilroy text-sm sm:text-base md:text-[17px] text-[#555555] max-w-xl leading-relaxed mb-6 font-normal">
                Resolução célere de atritos e assessoria jurídica completa para condomínios residenciais e comerciais. Cobramos cotas atrasadas com penhora rápida, respaldamos síndicos e pacificamos litígios de vizinhança.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8">
                <a 
                  href="https://wa.me/5515996662831?text=Ol%C3%A1%2C%20preciso%20de%20assessoria%20jur%C3%ADdica%20para%20uma%20quest%C3%A3o%20condominial%20ou%20conflito%20de%20vizinhan%C3%A7a."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-2.5 bg-brand-primary text-brand-surface font-gilroy text-xs uppercase tracking-widest px-6 py-3.5 hover:bg-black transition-colors duration-300"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Falar com Especialista Condominial</span>
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
                  <Coins className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-poppins text-xs font-semibold text-[#333333] leading-snug">Cobrança de Cotas</h4>
                    <p className="font-gilroy text-[11px] text-[#6c7279] leading-tight">Execução judicial com penhora da própria unidade</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Building className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-poppins text-xs font-semibold text-[#333333] leading-snug">Apoio ao Síndico</h4>
                    <p className="font-gilroy text-[11px] text-[#6c7279] leading-tight">Convenções, regimentos e segurança em assembleias</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Volume2 className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-poppins text-xs font-semibold text-[#333333] leading-snug">Vizinhança & Barulho</h4>
                    <p className="font-gilroy text-[11px] text-[#6c7279] leading-tight">Cessação de perturbação e danos por infiltrações</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-5 relative overflow-hidden hidden lg:block bg-[#222222]">
            <img 
              src="/equipe.jpg" 
              alt="Direito Condominial — Escritório Freitas" 
              className="absolute inset-0 w-full h-full object-cover object-center grayscale-[15%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 border border-white/20 p-6 backdrop-blur-md bg-black/40">
              <span className="text-[10px] font-gilroy uppercase tracking-[0.25em] text-white/70 block mb-1">
                Harmonia Coletiva & Gestão Legal
              </span>
              <span className="font-poppins text-brand-surface text-lg font-semibold mb-1.5 block">
                Paz & Solvência Condominial
              </span>
              <p className="text-brand-surface/85 text-xs leading-relaxed font-gilroy">
                A convivência em condomínio exige regras jurídicas claras e aplicação firme da lei contra inadimplência e abusos. Protegemos a gestão do síndico e o sossego dos moradores.
              </p>
            </div>
          </div>
        </div>
        
        {/* Sub-bar Hero */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 border-t border-[#333333]/10 divide-y md:divide-y-0 md:divide-x divide-[#333333]/10">
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">01 · Caixa</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Cobrança Eficaz</h3>
            <p className="text-xs text-[#555555] font-gilroy">Recuperação rápida de taxas atrasadas sem onerar o condomínio.</p>
          </div>
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">02 · Governança</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Suporte ao Síndico</h3>
            <p className="text-xs text-[#555555] font-gilroy">Pareceres preventivos e condução jurídica de assembleias.</p>
          </div>
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">03 · Normas</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Convenção e Regimento</h3>
            <p className="text-xs text-[#555555] font-gilroy">Atualização para locações Airbnb, pets e reuniões online.</p>
          </div>
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">04 · Conflitos</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Ações de Vizinhança</h3>
            <p className="text-xs text-[#555555] font-gilroy">Soluções para infiltrações, barulho e condôminos antissociais.</p>
          </div>
        </div>
      </section>

      {/* 2. PROBLEMA */}
      <section className="py-24 px-6 lg:px-20 bg-brand-surface-alt/30 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <span className="font-gilroy text-[11px] uppercase tracking-[0.3em] text-brand-muted block mb-4">
              Atritos e Impasses Condominiais
            </span>
            <h2 className="font-poppins text-3xl md:text-5xl text-brand-primary leading-tight mb-6">
              Inadimplência de condôminos e desavenças cotidianas desgastam a gestão e desvalorizam o condomínio.
            </h2>
            <p className="font-gilroy text-lg text-brand-secondary leading-relaxed">
              O síndico não deve assumir sozinho o ônus de cobrar vizinhos nem agir sem respaldo jurídico formal. Decisões tomadas sem o quórum legal ou cobranças informais geram processos contra o condomínio e prejuízos orçamentários.
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
                Paz Social e Caixa Recuperado
              </span>
              <h2 className="font-poppins text-3xl md:text-5xl text-brand-primary leading-tight mb-6">
                Como nossa assessoria protege o condomínio e soluciona conflitos.
              </h2>
              <p className="font-gilroy text-base text-brand-secondary leading-relaxed mb-8">
                Assumimos todo o procedimento de cobrança e alinhamento normativo, deixando o síndico livre de desgastes pessoais e blindando as contas do edifício perante os moradores.
              </p>
              <div className="p-6 bg-brand-surface-alt/40 border border-brand-primary/10 space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                  <span className="font-gilroy text-sm text-brand-primary font-medium">Redução de até 70% na inadimplência condominial</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                  <span className="font-gilroy text-sm text-brand-primary font-medium">Cobrança judicial direta com penhora de bens</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                  <span className="font-gilroy text-sm text-brand-primary font-medium">Mediação de atritos de vizinhança sem litígios prolongados</span>
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
              Como funciona nossa atuação condominial
            </h2>
            <p className="font-gilroy text-brand-secondary text-base">
              Etapas claras para recuperar inadimplências, respaldar assembleias e garantir a convivência harmoniosa.
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
                A segurança de contar com quem domina o direito condominial
              </h2>
            </div>
            <p className="font-gilroy text-sm text-brand-secondary max-w-md">
              Mais de 157 avaliações públicas no Google atestam a nossa dedicação, rigor processual e excelência na proteção do patrimônio de condomínios e moradores da região.
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
              Perguntas frequentes sobre Condomínio e Vizinhança
            </h2>
            <p className="font-gilroy text-brand-secondary text-base">
              Esclareça dúvidas essenciais sobre cobrança de cotas, multas e direitos de vizinhança.
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
            Direito Condominial · Cobrança Eficiente & Harmonia
          </span>
          <h2 className="font-poppins text-4xl sm:text-5xl md:text-6xl text-brand-surface leading-tight mb-8">
            Seu condomínio precisa recuperar inadimplência ou resolver um conflito?
          </h2>
          <p className="font-gilroy text-lg text-brand-surface/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Converse com nossa equipe jurídica especializada em Direito Condominial em Salto de Pirapora e Sorocaba para estruturar a assessoria do seu condomínio.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://wa.me/5515996662831?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20assessoria%20jur%C3%ADdica%20para%20condom%C3%ADnios."
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
