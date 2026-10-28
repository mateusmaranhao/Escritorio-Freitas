import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { GoogleReviews } from '../components/GoogleReviews';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Gavel, 
  Scale, 
  ArrowRight, 
  ChevronDown, 
  MessageSquare,
  FileSpreadsheet,
  AlertOctagon,
  ShieldCheck,
  CheckCircle2,
  Calculator,
  Award,
  Users2,
  FileCheck2
} from 'lucide-react';

export function AdvocaciaContenciosa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Advocacia Contenciosa Trabalhista Patronal | Defesa Judicial da Empresa",
    "provider": {
      "@type": "LegalService",
      "name": "Escritório Freitas: Advogados Associados",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua Maximiano Fidelis, 45",
        "addressLocality": "Salto de Pirapora",
        "addressRegion": "SP",
        "postalCode": "18160-000",
        "addressCountry": "BR"
      },
      "telephone": "+55 15 99666-2831"
    },
    "areaServed": ["Salto de Pirapora", "Sorocaba", "Votorantim", "Araçoiaba da Serra", "Região Metropolitana de Sorocaba"],
    "serviceType": "Defesa em Reclamações Trabalhistas, Audiências e Recursos nos Tribunais, Cálculos e Contingenciamento",
    "description": "Defesa combativa da empresa em processos judiciais trabalhistas. Elaboração de contestações, condução de audiências, sustentações orais no TRT/TST e perícias judiciais.",
    "url": "https://escritoriofreitas.com.br/servicos/direito-patronal/advocacia-contenciosa"
  };

  const faqs = [
    {
      question: "O que a empresa deve fazer ao receber uma notificação de Reclamação Trabalhista?",
      answer: "O envio imediato da notificação com a petição inicial aos advogados é fundamental. Os prazos na Justiça do Trabalho para juntada de contestação e documentos são preclusivos. Analisamos detalhadamente cada pedido do reclamante, solicitamos prontamente o histórico do colaborador (espelhos de ponto, holerites, TRCT, ASO e advertências) e traçamos a estratégia probatória e testemunhal para a audiência."
    },
    {
      question: "Como o escritório atua em audiências inaugurais e de instrução?",
      answer: "A audiência de instrução é a fase decisiva da Reclamatória Trabalhista. Realizamos reunião prévia com o preposto da empresa e as testemunhas para alinhamento fático rigoroso e verídico. Na sessão, exercemos impugnação imediata de perguntas capciosas, contraditamos testemunhas suspeitas e realizamos perguntas precisas para demonstrar as inconsistências da petição inicial perante o juiz."
    },
    {
      question: "Qual a importância do cálculo judicial e contingentamento de riscos?",
      answer: "Reclamações trabalhistas frequentemente trazem valores astronômicos inflados por pedidos improcedentes. Nossa equipe de liquidação realiza a perícia contábil dos pedidos para quantificar o risco real (provável, possível ou remoto). Isso permite à diretoria provisionar o caixa com precisão e avaliar se é vantajoso celebrar um acordo econômico na primeira oportunidade ou levar a disputa até as instâncias superiores."
    },
    {
      question: "Como é feita a defesa técnica em perícias médicas de insalubridade e periculosidade?",
      answer: "Em pedidos que envolvam insalubridade, periculosidade ou doença ocupacional, elaboramos quesitos técnicos estratégicos e indicamos assistente técnico de confiança para acompanhar a vistoria pericial no local de trabalho. Apresentamos impugnação fundamentada ao laudo pericial caso o perito cometa equívocos conceituais ou ignore as NRs e os EPIs comprovadamente entregues."
    },
    {
      question: "Se a empresa sofrer uma sentença desfavorável na 1ª Vara, é possível reverter no Tribunal (TRT/TST)?",
      answer: "Sim. Interpomos Recursos Ordinários para o Tribunal Regional do Trabalho (TRT15) e Recursos de Revista perante o Tribunal Superior do Trabalho (TST) em Brasília. Realizamos sustentações orais perante os desembargadores e ministros, focando na reforma de condenações ilegais, exclusão de horas extras indevidas e redução de indenizações por danos morais desproporcionais."
    }
  ];

  const problemas = [
    {
      icon: <AlertOctagon className="w-6 h-6 text-brand-primary" />,
      title: "Pedidos Exorbitantes e Descolados da Realidade",
      desc: "Reclamatórias com pedidos acumulados de horas extras, equiparação salarial e danos morais calculados em cifras que comprometem o capital de giro."
    },
    {
      icon: <Gavel className="w-6 h-6 text-brand-primary" />,
      title: "Revelia ou Confissão Ficta por Falha em Audiência",
      desc: "Ausência injustificada, preposto despreparado ou falta de documentos que provocam a aceitação tácita de todas as alegações do ex-funcionário."
    },
    {
      icon: <FileSpreadsheet className="w-6 h-6 text-brand-primary" />,
      title: "Laudos Periciais Desfavoráveis sem Contestação",
      desc: "Falta de assistente técnico ou de impugnação técnica a laudos periciais de insalubridade e periculosidade que geram condenações retroativas."
    },
    {
      icon: <Calculator className="w-6 h-6 text-brand-primary" />,
      title: "Execuções e Bloqueios Judiciais Imediatos (SisbaJud)",
      desc: "Contas bancárias corporativas penhoradas repentinamente por ausência de impugnação aos cálculos de liquidação de sentença."
    }
  ];

  const solucoes = [
    {
      numero: "01",
      titulo: "Defesa em Reclamações Trabalhistas",
      desc: "Construção de contestações combativas, com arguição de prescrição bienal e quinquenal, inépcia da petição inicial, juntada ordenada de provas e impugnação item por item dos pedidos formulados pelo reclamante."
    },
    {
      numero: "02",
      titulo: "Audiências e Sustentações Orais",
      desc: "Representação incisiva em audiências inaugurais, de conciliação e de instrução. Preparação técnica de prepostos e testemunhas, além de sustentações orais perante os colegiados do TRT-15 (Campinas) e TST (Brasília)."
    },
    {
      numero: "03",
      titulo: "Cálculos Judiciais e Contingenciamento",
      desc: "Avaliação pericial contábil de cada processo para mensurar a exposição real de caixa da empresa, categorizando riscos (perda provável, possível ou remota) e orientando negociações de acordos vantajosos."
    },
    {
      numero: "04",
      titulo: "Fase Recursal e Acompanhamento de Perícias",
      desc: "Elaboração de quesitos periciais, acompanhamento de diligências in loco e interposição de Recursos Ordinários, Agravos de Instrumento e Recursos de Revista com análise de jurisprudência pacificada."
    }
  ];

  const passos = [
    {
      step: "01",
      title: "Análise Imediata da Petição Inicial",
      desc: "Recebemos a notificação judicial, mapeamos os riscos financeiros e solicitamos o prontuário completo do colaborador junto ao RH."
    },
    {
      step: "02",
      title: "Elaboração da Contestação e Provas",
      desc: "Redação de defesa personalizada com cruzamento de holerites, espelhos de ponto, recibos e relatórios de auditoria."
    },
    {
      step: "03",
      title: "Alinhamento com Preposto e Testemunhas",
      desc: "Reunião preliminar de preparação para a audiência, garantindo segurança fática e precisão nos depoimentos perante o juiz."
    },
    {
      step: "04",
      title: "Atuação em Audiência e Recursos",
      desc: "Defesa enérgica na sala de audiência, impugnações em ata e interposição tempestiva de recursos nos tribunais superiores."
    }
  ];

  return (
    <>
      <SEO 
        title="Advocacia Contenciosa Trabalhista Patronal | Escritório Freitas"
        description="Defesa judicial especializada para empresas em reclamatórias trabalhistas: contestações, audiências, recursos no TRT/TST e perícias em Salto de Pirapora e Sorocaba."
        url="/servicos/direito-patronal/advocacia-contenciosa"
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
                <Link to="/servicos/direito-patronal" className="hover:text-brand-primary">Direito Trabalhista Empresarial</Link>
                <span>/</span>
                <span className="text-brand-primary font-semibold">Advocacia Contenciosa</span>
              </div>

              <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-[#333333] font-semibold leading-[1.2] mb-3.5 max-w-2xl tracking-tight">
                Advocacia Contenciosa (Defesa Judicial Trabalhista)
              </h1>

              <p className="font-gilroy text-sm sm:text-base md:text-[17px] text-[#555555] max-w-xl leading-relaxed mb-6 font-normal">
                Quando a sua empresa já está sendo processada, assumimos a sua defesa técnica com rigor combativo, sustentação oral qualificada e estratégia financeira para neutralizar condenações infundadas.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8">
                <a 
                  href="https://wa.me/5515996662831?text=Ol%C3%A1%2C%20minha%20empresa%20recebeu%20uma%20Reclama%C3%A7%C3%A3o%20Trabalhista%20e%20preciso%20de%20defesa%20judicial%20urgente."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-2.5 bg-brand-primary text-brand-surface font-gilroy text-xs uppercase tracking-widest px-6 py-3.5 hover:bg-black transition-colors duration-300"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Defesa Judicial Imediata</span>
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
                  <Gavel className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-poppins text-xs font-semibold text-[#333333] leading-snug">Defesa Combativa</h4>
                    <p className="font-gilroy text-[11px] text-[#6c7279] leading-tight">Contestações sólidas e recursos em todas as instâncias</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Users2 className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-poppins text-xs font-semibold text-[#333333] leading-snug">Audiências & Provas</h4>
                    <p className="font-gilroy text-[11px] text-[#6c7279] leading-tight">Alinhamento de prepostos e inquirição de testemunhas</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Calculator className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-poppins text-xs font-semibold text-[#333333] leading-snug">Contingenciamento</h4>
                    <p className="font-gilroy text-[11px] text-[#6c7279] leading-tight">Perícia contábil para acordos vantajosos e provisão</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-5 relative overflow-hidden hidden lg:block bg-[#222222]">
            <img 
              src="/equipe.jpg" 
              alt="Defesa Contenciosa Trabalhista Patronal — Escritório Freitas" 
              className="absolute inset-0 w-full h-full object-cover object-center grayscale-[15%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 border border-white/20 p-6 backdrop-blur-md bg-black/40">
              <span className="text-[10px] font-gilroy uppercase tracking-[0.25em] text-white/70 block mb-1">
                Contencioso Trabalhista Estratégico
              </span>
              <span className="font-poppins text-brand-surface text-lg font-semibold mb-1.5 block">
                Defesa Incisiva da Sua Empresa
              </span>
              <p className="text-brand-surface/85 text-xs leading-relaxed font-gilroy">
                Não enfrente o Judiciário Trabalhista com defesas genéricas. Tratamos cada processo como único para desarticular pedidos indevidos e resguardar o patrimônio do seu negócio.
              </p>
            </div>
          </div>
        </div>
        
        {/* Sub-bar Hero */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 border-t border-[#333333]/10 divide-y md:divide-y-0 md:divide-x divide-[#333333]/10">
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">01 · Contestações</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Reclamações Trabalhistas</h3>
            <p className="text-xs text-[#555555] font-gilroy">Defesas técnicas com vasta comprovação documental e fática.</p>
          </div>
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">02 · Representação</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Audiências & Instrução</h3>
            <p className="text-xs text-[#555555] font-gilroy">Condução de depoimentos e sustentações perante juízes e relatores.</p>
          </div>
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">03 · Finanças</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Cálculos & Provisão</h3>
            <p className="text-xs text-[#555555] font-gilroy">Quantificação real do passivo para provisionamento e acordos.</p>
          </div>
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">04 · Instâncias</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Recursos no TRT e TST</h3>
            <p className="text-xs text-[#555555] font-gilroy">Reformas de decisões desfavoráveis com teses consolidadas.</p>
          </div>
        </div>
      </section>

      {/* 2. PROBLEMA */}
      <section className="py-24 px-6 lg:px-20 bg-brand-surface-alt/30 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <span className="font-gilroy text-[11px] uppercase tracking-[0.3em] text-brand-muted block mb-4">
              Cenário Litigioso Trabalhista
            </span>
            <h2 className="font-poppins text-3xl md:text-5xl text-brand-primary leading-tight mb-6">
              Processos trabalhistas mal conduzidos esgotam o caixa da empresa e geram execuções financeiras surpresa.
            </h2>
            <p className="font-gilroy text-lg text-brand-secondary leading-relaxed">
              O rito processual trabalhista impõe prazos curtos e ônus probatório severo ao empregador. Uma contestação padronizada ou depoimento inseguro em audiência culmina em condenações que poderiam ter sido facilmente evitadas.
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
                Atuação Defensiva de Alta Precisão
              </span>
              <h2 className="font-poppins text-3xl md:text-5xl text-brand-primary leading-tight mb-6">
                Como defendemos os interesses e o caixa da sua empresa.
              </h2>
              <p className="font-gilroy text-base text-brand-secondary leading-relaxed mb-8">
                Combinamos análise contábil dos pedidos, preparação minuciosa de audiência e recursos técnicos de alto nível para demonstrar a lisura dos atos patronais e afastar condenações descabidas.
              </p>
              <div className="p-6 bg-brand-surface-alt/40 border border-brand-primary/10 space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                  <span className="font-gilroy text-sm text-brand-primary font-medium">Contestações personalizadas sem modelos genéricos</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                  <span className="font-gilroy text-sm text-brand-primary font-medium">Equipe contábil dedicada para cálculo do passivo</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                  <span className="font-gilroy text-sm text-brand-primary font-medium">Atuação combativa perante o TRT-15 e TST</span>
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
              Como funciona nossa defesa judicial
            </h2>
            <p className="font-gilroy text-brand-secondary text-base">
              Roteiro transparente para recepcionar o processo, produzir provas conclusivas e alcançar o melhor resultado econômico.
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
                A segurança de contar com quem domina a defesa contenciosa patronal
              </h2>
            </div>
            <p className="font-gilroy text-sm text-brand-secondary max-w-md">
              Mais de 157 avaliações públicas no Google atestam a nossa dedicação, rigor processual e excelência na proteção do patrimônio de empresas e empregadores da região.
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
              Perguntas frequentes sobre Defesa Judicial Patronal
            </h2>
            <p className="font-gilroy text-brand-secondary text-base">
              Esclareça dúvidas práticas sobre processos trabalhistas movidos contra sua empresa.
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
            Contencioso Patronal · Defesa Imediata & Prazos Peremptórios
          </span>
          <h2 className="font-poppins text-4xl sm:text-5xl md:text-6xl text-brand-surface leading-tight mb-8">
            Sua empresa foi notificada pela Justiça do Trabalho?
          </h2>
          <p className="font-gilroy text-lg text-brand-surface/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Envie a petição inicial agora mesmo para análise técnica de urgência com nossa equipe em Salto de Pirapora e Sorocaba. Não arrisque o patrimônio da sua empresa.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://wa.me/5515996662831?text=Ol%C3%A1%2C%20preciso%20de%20defesa%20em%20uma%20Reclama%C3%A7%C3%A3o%20Trabalhista%20urgente."
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
            <span>Rua Maximiano Fidelis, 45 — Centro, Salto de Pirapora</span>
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
