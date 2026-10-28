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
  AlertOctagon,
  ShieldCheck,
  CheckCircle2,
  FileCheck2,
  Coins,
  ShieldAlert,
  Building2,
  Target
} from 'lucide-react';

export function DefesaContenciosaEmpresarial() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Defesa Contenciosa Empresarial | Cobrança Judicial e Disputas Comerciais",
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
    "serviceType": "Execução de Títulos Extrajudiciais, Cobrança de Inadimplentes, Defesa contra Concorrência Desleal e Litígios com Fornecedores",
    "description": "Representação jurídica combativa da empresa em disputas judiciais cíveis, comerciais e procedimentos arbitrais. Recuperação de créditos inadimplidos e defesa patrimonial.",
    "url": "https://escritoriofreitas.com.br/servicos/direito-empresarial/defesa-contenciosa-empresarial"
  };

  const faqs = [
    {
      question: "Qual a vantagem de executar um crédito por meio de Título Executivo Extrajudicial?",
      answer: "A Ação de Execução de Título Extrajudicial (art. 784 do CPC) é o meio mais rápido e eficaz de cobrar uma dívida comercial. Ela dispensa a demorada fase inicial de conhecimento: o devedor é citado diretamente para pagar a dívida no prazo de apenas 3 (três) dias, sob pena de penhora imediata de contas bancárias (SisbaJud), veículos (RenaJud) e imóveis (InfoJud). Duplicatas mercantis com comprovante de entrega, contratos assinados por duas testemunhas e notas promissórias possuem essa eficácia."
    },
    {
      question: "O que fazer se um concorrente estiver praticando concorrência desleal ou desvio de clientela?",
      answer: "A prática de concorrência desleal é ilícito civil e crime tipificado no art. 195 da Lei nº 9.279/1996 (uso indevido de segredos industriais, falsas declarações depreciativas sobre seus produtos ou aliciamento desleal de colaboradores e clientes). Ingressamos com Ação Cominatória com pedido de tutela provisória de urgência (liminar) para cessação imediata da conduta lesiva, busca e apreensão de materiais e fixação de indenização por perdas, danos emergentes e lucros cessantes."
    },
    {
      question: "Como o escritório localiza bens de devedores que utilizam 'laranjas' ou ocultam patrimônio?",
      answer: "Utilizamos ferramentas avançadas de inteligência investigativa patrimonial: rastreamento de veículos, imóveis em nome de familiares, participação em empresas coligadas e offshores. Diante de indícios de ocultação dolosa, postulamos judicialmente a Desconsideração Inversa da Personalidade Jurídica para atingir o patrimônio das empresas ligadas ao devedor ou penhorar quotas sociais."
    },
    {
      question: "Como a empresa deve se defender de processos indenizatórios movidos por fornecedores ou clientes?",
      answer: "Construímos contestações sólidas demonstrando a excludente de responsabilidade (culpa exclusiva de terceiro ou da própria contraparte), ausência de nexo causal, excesso de execução e exceção do contrato não cumprido (exceptio non adimpleti contractus - art. 476 do Código Civil). Apresentamos reconvenção quando a parte contrária também causou prejuízos à sua empresa."
    },
    {
      question: "Qual a diferença entre litígio judicial e procedimento arbitral em contratos empresariais?",
      answer: "Se o contrato contiver uma Cláusula Compromissória Arbitral válida (Lei nº 9.307/1996), a competência para julgar a disputa é exclusiva da Câmara de Arbitragem eleita, afastando o Poder Judiciário. A arbitragem oferece sigilo total dos autos, árbitros especialistas na matéria do litígio e rapidez de julgamento. Nossa equipe atua na representação da empresa em câmaras arbitrais de prestígio em todo o Brasil."
    }
  ];

  const problemas = [
    {
      icon: <AlertOctagon className="w-6 h-6 text-brand-primary" />,
      title: "Inadimplência Crônica de Clientes B2B",
      desc: "Valores significativos represados em notas fiscais e contratos não pagos, prejudicando o fluxo de caixa e o cumprimento de metas."
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-brand-primary" />,
      title: "Concorrência Desleal e Roubo de Clientela",
      desc: "Ex-parceiros ou concorrentes utilizando sua marca, aliciando clientes e propagando difamações comerciais lesivas."
    },
    {
      icon: <Gavel className="w-6 h-6 text-brand-primary" />,
      title: "Ações Indenizatórias e Penhoras de Surpresa",
      desc: "Processos cíveis ajuizados por clientes ou fornecedores cobrando multas desproporcionais e requerendo bloqueios bancários."
    },
    {
      icon: <Target className="w-6 h-6 text-brand-primary" />,
      title: "Devedores Profissionais e Bens Ocultados",
      desc: "Devedores que transferem imóveis e veículos para terceiros visando frustrar a cobrança e lesar os credores de boa-fé."
    }
  ];

  const solucoes = [
    {
      numero: "01",
      titulo: "Ações de Execução & Cobrança de Crédito",
      desc: "Recuperação célere de valores inadimplidos via Ação de Execução de Título Extrajudicial ou Ação Monitória, com bloqueios em contas (SisbaJud), penhora de faturamento e constrição de bens móveis e imóveis."
    },
    {
      numero: "02",
      titulo: "Combate à Concorrência Desleal",
      desc: "Medidas liminares de urgência para impedir o desvio ilegal de clientela, violação de trade dress, uso não autorizado de segredo industrial e requerimento de indenização por lucros cessantes."
    },
    {
      numero: "03",
      titulo: "Defesa em Disputas Comerciais Complexas",
      desc: "Patrocínio da empresa em ações rescisórias contratuais, litígios com fornecedores estratégicos, ações de responsabilidade civil e controvérsias com distribuidores perante a Justiça Estadual e Tribunais."
    },
    {
      numero: "04",
      titulo: "Arbitragem Comercial & Mediação",
      desc: "Representação técnica da empresa perante as principais Câmaras de Arbitragem do país, unindo sigilo de negócio, agilidade e sustentação oral por especialistas do direito empresarial."
    }
  ];

  const passos = [
    {
      step: "01",
      title: "Análise da Prova & Liquidez",
      desc: "Avaliamos a liquidez, certeza e exigibilidade dos títulos e documentos da disputa comercial."
    },
    {
      step: "02",
      title: "Investigação Patrimonial Prévia",
      desc: "Mapeamos a existência de bens e saúde financeira da contraparte para garantir a efetividade da ação."
    },
    {
      step: "03",
      title: "Medidas Cautelares ou Resposta",
      desc: "Protocolamos a execução com pedido de arresto prévio ou apresentamos contestação técnica combativa."
    },
    {
      step: "04",
      title: "Execução, Penhora & Liquidação",
      desc: "Acompanhamento obstinado até a penhora e conversão em dinheiro depositado em favor da sua empresa."
    }
  ];

  return (
    <>
      <SEO 
        title="Defesa Contenciosa Empresarial e Cobrança Judicial | Escritório Freitas"
        description="Representação em disputas judiciais, execução de títulos, combate à concorrência desleal e recuperação de créditos em Salto de Pirapora e Sorocaba."
        url="/servicos/direito-empresarial/defesa-contenciosa-empresarial"
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
                <Link to="/servicos/direito-empresarial" className="hover:text-brand-primary">Direito Empresarial</Link>
                <span>/</span>
                <span className="text-brand-primary font-semibold">Defesa Contenciosa</span>
              </div>

              <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-[#333333] font-semibold leading-[1.2] mb-3.5 max-w-2xl tracking-tight">
                Defesa Contenciosa Empresarial
              </h1>

              <p className="font-gilroy text-sm sm:text-base md:text-[17px] text-[#555555] max-w-xl leading-relaxed mb-6 font-normal">
                Representação enérgica da sua empresa em disputas judiciais cíveis, comerciais e procedimentos arbitrais. Recuperamos créditos de clientes inadimplentes e blindamos a empresa contra pedidos indenizatórios abusivos.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8">
                <a 
                  href="https://wa.me/5515996662831?text=Ol%C3%A1%2C%20preciso%20de%20assessoria%20jur%C3%ADdica%20para%20uma%20a%C3%A7%C3%A3o%20de%20cobran%C3%A7a%20ou%20disputa%20comercial."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-2.5 bg-brand-primary text-brand-surface font-gilroy text-xs uppercase tracking-widest px-6 py-3.5 hover:bg-black transition-colors duration-300"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Falar com Especialista Contencioso</span>
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
                    <h4 className="font-poppins text-xs font-semibold text-[#333333] leading-snug">Cobrança e Execução</h4>
                    <p className="font-gilroy text-[11px] text-[#6c7279] leading-tight">Recuperação rápida de créditos inadimplidos</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Gavel className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-poppins text-xs font-semibold text-[#333333] leading-snug">Disputas Comerciais</h4>
                    <p className="font-gilroy text-[11px] text-[#6c7279] leading-tight">Defesa contra processos de fornecedores e parceiros</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldAlert className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-poppins text-xs font-semibold text-[#333333] leading-snug">Concorrência Desleal</h4>
                    <p className="font-gilroy text-[11px] text-[#6c7279] leading-tight">Medidas liminares contra desvio de clientela</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-5 relative overflow-hidden hidden lg:block bg-[#222222]">
            <img 
              src="/equipe.jpg" 
              alt="Defesa Contenciosa Empresarial — Escritório Freitas" 
              className="absolute inset-0 w-full h-full object-cover object-center grayscale-[15%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 border border-white/20 p-6 backdrop-blur-md bg-black/40">
              <span className="text-[10px] font-gilroy uppercase tracking-[0.25em] text-white/70 block mb-1">
                Litígios Comerciais & Arbitragem
              </span>
              <span className="font-poppins text-brand-surface text-lg font-semibold mb-1.5 block">
                Combate Obstinado por Resultados
              </span>
              <p className="text-brand-surface/85 text-xs leading-relaxed font-gilroy">
                Não encare litígios comerciais de forma passiva. Agimos com velocidade e inteligência patrimonial para rastrear bens, desarmar manobras ilícitas e resguardar o patrimônio da sua empresa.
              </p>
            </div>
          </div>
        </div>
        
        {/* Sub-bar Hero */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 border-t border-[#333333]/10 divide-y md:divide-y-0 md:divide-x divide-[#333333]/10">
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">01 · Créditos</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Execução de Títulos</h3>
            <p className="text-xs text-[#555555] font-gilroy">Cobrança ágil de duplicatas, cheques e contratos assinados.</p>
          </div>
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">02 · Proteção</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Concorrência Desleal</h3>
            <p className="text-xs text-[#555555] font-gilroy">Ações para cessar cópias de marca e desvio de clientela.</p>
          </div>
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">03 · Contratos</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Disputas com Fornecedores</h3>
            <p className="text-xs text-[#555555] font-gilroy">Defesa contra rescisões unilaterais e multas desmedidas.</p>
          </div>
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">04 · Investigação</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Rastreamento de Bens</h3>
            <p className="text-xs text-[#555555] font-gilroy">Localização de ativos de devedores e desconsideração jurídica.</p>
          </div>
        </div>
      </section>

      {/* 2. PROBLEMA */}
      <section className="py-24 px-6 lg:px-20 bg-brand-surface-alt/30 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <span className="font-gilroy text-[11px] uppercase tracking-[0.3em] text-brand-muted block mb-4">
              Cenário de Conflitos Comerciais
            </span>
            <h2 className="font-poppins text-3xl md:text-5xl text-brand-primary leading-tight mb-6">
              Devedores que não pagam e concorrentes desleais drenam a rentabilidade da sua empresa.
            </h2>
            <p className="font-gilroy text-lg text-brand-secondary leading-relaxed">
              Cobranças meramente amigáveis frequentemente resultam em tempo perdido e prescrição de dívidas. Enquanto isso, devedores blindam patrimônio e concorrentes usam expedientes ilícitos para capturar sua carteira de clientes.
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
                Recuperação & Eficácia Jurídica
              </span>
              <h2 className="font-poppins text-3xl md:text-5xl text-brand-primary leading-tight mb-6">
                Como defendemos e recuperamos os valores da sua empresa.
              </h2>
              <p className="font-gilroy text-base text-brand-secondary leading-relaxed mb-8">
                Combinamos atuação processual cirúrgica, medidas cautelares imediatas e inteligência patrimonial para garantir que a vitória judicial resulte em dinheiro depositado na conta da empresa.
              </p>
              <div className="p-6 bg-brand-surface-alt/40 border border-brand-primary/10 space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                  <span className="font-gilroy text-sm text-brand-primary font-medium">Celeridade na constrição de contas e veículos</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                  <span className="font-gilroy text-sm text-brand-primary font-medium">Medidas liminares urgentes contra concorrência desleal</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                  <span className="font-gilroy text-sm text-brand-primary font-medium">Atuação especializada perante tribunais estaduais e arbitragem</span>
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
              Como funciona o contencioso comercial
            </h2>
            <p className="font-gilroy text-brand-secondary text-base">
              Roteiro estruturado para acionar o Judiciário, penhorar bens e blindar a empresa em litígios comerciais.
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
                A segurança de contar com quem domina litígios comerciais
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
              Perguntas frequentes sobre Cobrança e Contencioso Comercial
            </h2>
            <p className="font-gilroy text-brand-secondary text-base">
              Entenda como funciona a recuperação judicial de créditos e defesa da sua empresa.
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
            Defesa Contenciosa Empresarial · Agilidade & Sigilo
          </span>
          <h2 className="font-poppins text-4xl sm:text-5xl md:text-6xl text-brand-surface leading-tight mb-8">
            Precisa cobrar um crédito em aberto ou defender sua empresa em juízo?
          </h2>
          <p className="font-gilroy text-lg text-brand-surface/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Consulte nossa equipe especializada em Direito Empresarial em Salto de Pirapora e Sorocaba para acionar a Justiça ou traçar sua estratégia defensiva.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://wa.me/5515996662831?text=Ol%C3%A1%2C%20preciso%20de%20assessoria%20jur%C3%ADdica%20para%20uma%20a%C3%A7%C3%A3o%20de%20execu%C3%A7%C3%A3o%20ou%20defesa%20comercial."
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
