import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { GoogleReviews } from '../components/GoogleReviews';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, 
  Handshake, 
  Scale, 
  ArrowRight, 
  ChevronDown, 
  MessageSquare,
  AlertTriangle,
  ShieldCheck,
  CheckCircle2,
  FileSignature,
  Truck,
  Building,
  Lock
} from 'lucide-react';

export function ContratosEmpresariais() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Contratos Empresariais | Elaboração, Revisão e Blindagem Comercial",
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
    "serviceType": "Contratos Comerciais, Fornecimento e Prestação de Serviços, NDAs e Parcerias, Locação Comercial e Ações Renovatórias",
    "description": "Assessoria jurídica na elaboração e revisão de contratos empresariais, NDAs, acordos de parceria comercial, contratos de distribuição, logística e locação não-residencial.",
    "url": "https://escritoriofreitas.com.br/servicos/direito-empresarial/contratos-empresariais"
  };

  const faqs = [
    {
      question: "Qual o risco de utilizar minutas de contratos padronizadas ou baixadas da internet?",
      answer: "Modelos genéricos da internet costumam conter cláusulas abusivas, nulas ou desatualizadas em relação à jurisprudência brasileira (como a Lei da Liberdade Econômica nº 13.874/2019). Eles não delimitam com precisão as obrigações de cada parte, SLAs, prazos de entrega, limites de responsabilidade (limitation of liability) e critérios de rescisão, deixando sua empresa desprotegida diante de inadimplência ou pedidos indenizatórios."
    },
    {
      question: "Como o contrato de confidencialidade (NDA) e não-concorrência protege o segredo do negócio?",
      answer: "Antes de compartilhar dados técnicos, carteiras de clientes, planilhas de custos ou processos industriais com futuros sócios, fornecedores ou investidores, é indispensável a assinatura de um Non-Disclosure Agreement (NDA). O instrumento define o que constitui informação sigilosa, o período de vigência da obrigação de sigilo e estipula multas pecuniárias expressivas e imediatas em caso de vazamento ou utilização indevida."
    },
    {
      question: "Como funciona a Ação Renovatória de Locação Comercial e quais os prazos?",
      answer: "A Lei de Locações (Lei nº 8.245/1991) garante ao comerciante o direito de renovar compulsoriamente seu contrato de aluguel para proteger o ponto comercial construído. Para isso, o contrato precisa ser escrito e por prazo determinado, a soma dos prazos ininterruptos deve ser de no mínimo 5 anos e o locatário deve estar no mesmo ramo há pelo menos 3 anos. O prazo da ação é decadencial: deve ser ajuizada rigorosamente entre 1 ano e 6 meses antes do fim do contrato vigente."
    },
    {
      question: "O que deve constar em um contrato seguro de prestação de serviços ou fornecimento?",
      answer: "Um instrumento robusto deve detalhar: escopo exato dos serviços, cronograma físico-financeiro, matriz de responsabilidades, critérios objetivos de aceite e recusa, multas contratuais proporcionais, hipóteses de rescisão imotivada com aviso prévio, cláusula anticorrupção e eleição de foro ou câmara de arbitragem competente."
    },
    {
      question: "Como o escritório auxilia na renegociação e rescisão de contratos desvantajosos?",
      answer: "Analisamos as cláusulas resolutivas, a ocorrência de caso fortuito ou força maior, onerosidade excessiva e quebra de boa-fé objetiva. Conduzimos notificações extrajudiciais fundamentadas e tratativas diretas para repactuar valores, prazos e condições comerciais sem que a empresa sofra a incidência de penalidades arbitrárias."
    }
  ];

  const problemas = [
    {
      icon: <AlertTriangle className="w-6 h-6 text-brand-primary" />,
      title: "Contratos Ambíguos e Falta de SLAs",
      desc: "Instrumentos vagos sem penalidades claras para atrasos de entrega de mercadorias, falhas técnicas e desvios de qualidade."
    },
    {
      icon: <Lock className="w-6 h-6 text-brand-primary" />,
      title: "Vazamento de Segredos e Concorrência Desleal",
      desc: "Compartilhamento de segredos industriais e métodos operacionais com parceiros sem assinatura prévia de NDAs blindados."
    },
    {
      icon: <Building className="w-6 h-6 text-brand-primary" />,
      title: "Perda do Ponto Comercial por Despejo",
      desc: "Inobservância do prazo decadencial da Ação Renovatória de Locação Comercial, culminando na perda de clientela histórica."
    },
    {
      icon: <Scale className="w-6 h-6 text-brand-primary" />,
      title: "Multas Rescisórias Abusivas e Risco de Caixa",
      desc: "Contratos de fornecedores com cláusulas de fidelidade leoninas que amarram a empresa a serviços de baixa qualidade."
    }
  ];

  const solucoes = [
    {
      numero: "01",
      titulo: "Contratos Operacionais do Dia a Dia",
      desc: "Elaboração e revisão minuciosa de contratos de prestação de serviços B2B, fornecimento contínuo de insumos, distribuição comercial, franquia e contratos de logística e transporte."
    },
    {
      numero: "02",
      titulo: "Parcerias Estratégicas, NDAs & MoUs",
      desc: "Redação de Acordos de Confidencialidade (NDA), Memorandos de Entendimento (MoU), cartas de intenção e contratos de Joint Venture para blindar dados estratégicos e parcerias com terceiros."
    },
    {
      numero: "03",
      titulo: "Locação Comercial e Ações Renovatórias",
      desc: "Negociação de aluguéis em galpões industriais, escritórios corporativos e shoppings centers, além do patrocínio de Ações Renovatórias e Revisionais de Aluguel perante a Justiça."
    },
    {
      numero: "04",
      titulo: "Gestão Contratual & Prevenção de Litígios",
      desc: "Auditoria preventiva em carteiras de contratos vigentes, padronização de minutas operacionais da empresa e formulação de notificações extrajudiciais resolutivas."
    }
  ];

  const passos = [
    {
      step: "01",
      title: "Alinhamento Comercial & Escopo",
      desc: "Compreendemos as particularidades da transação comercial, garantias exigidas e os principais riscos da operação."
    },
    {
      step: "02",
      title: "Redação Personalizada da Minuta",
      desc: "Elaboração do instrumento com cláusulas protetivas, limites de responsabilidade e penalidades proporcionais."
    },
    {
      step: "03",
      title: "Negociação com a Outra Parte",
      desc: "Intermediação jurídica com os advogados da contraparte para conciliar interesses e manter as garantias da sua empresa."
    },
    {
      step: "04",
      title: "Formalização & Gestão de Execução",
      desc: "Validação de assinaturas digitais, garantias reais ou fidejussórias e arquivamento seguro dos instrumentos."
    }
  ];

  return (
    <>
      <SEO 
        title="Contratos Empresariais e Locação Comercial | Escritório Freitas"
        description="Elaboração e revisão de contratos empresariais, NDAs, fornecimento, parcerias e locação comercial em Salto de Pirapora, Sorocaba e região."
        url="/servicos/direito-empresarial/contratos-empresariais"
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
                <span className="text-brand-primary font-semibold">Contratos Empresariais</span>
              </div>

              <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-[#333333] font-semibold leading-[1.2] mb-3.5 max-w-2xl tracking-tight">
                Contratos Empresariais
              </h1>

              <p className="font-gilroy text-sm sm:text-base md:text-[17px] text-[#555555] max-w-xl leading-relaxed mb-6 font-normal">
                Garantia de que as transações comerciais do seu dia a dia estejam perfeitamente blindadas e claras. Redigimos instrumentos sob medida que evitam inadimplência e preservam a margem de lucro do seu negócio.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8">
                <a 
                  href="https://wa.me/5515996662831?text=Ol%C3%A1%2C%20preciso%20de%20assessoria%20jur%C3%ADdica%20para%20elabora%C3%A7%C3%A3o%20ou%20revis%C3%A3o%20de%20Contrato%20Empresarial."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-2.5 bg-brand-primary text-brand-surface font-gilroy text-xs uppercase tracking-widest px-6 py-3.5 hover:bg-black transition-colors duration-300"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Analisar Meu Contrato Agora</span>
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
                  <FileText className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-poppins text-xs font-semibold text-[#333333] leading-snug">Contratos B2B</h4>
                    <p className="font-gilroy text-[11px] text-[#6c7279] leading-tight">Prestação de serviços, fornecimento e distribuição</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Lock className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-poppins text-xs font-semibold text-[#333333] leading-snug">NDAs & Parcerias</h4>
                    <p className="font-gilroy text-[11px] text-[#6c7279] leading-tight">Proteção de segredos e memorandos de entendimento</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Building className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-poppins text-xs font-semibold text-[#333333] leading-snug">Locação Comercial</h4>
                    <p className="font-gilroy text-[11px] text-[#6c7279] leading-tight">Blindagem de ponto comercial e ação renovatória</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-5 relative overflow-hidden hidden lg:block bg-[#222222]">
            <img 
              src="/equipe.jpg" 
              alt="Contratos Empresariais — Escritório Freitas" 
              className="absolute inset-0 w-full h-full object-cover object-center grayscale-[15%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 border border-white/20 p-6 backdrop-blur-md bg-black/40">
              <span className="text-[10px] font-gilroy uppercase tracking-[0.25em] text-white/70 block mb-1">
                Segurança Comercial & Negócios
              </span>
              <span className="font-poppins text-brand-surface text-lg font-semibold mb-1.5 block">
                Transações Sem Riscos Ocultos
              </span>
              <p className="text-brand-surface/85 text-xs leading-relaxed font-gilroy">
                Cada cláusula mal redigida representa um risco direto para o fluxo de caixa. Elaboramos instrumentos precisos para garantir o cumprimento estrito de prazos e pagamentos.
              </p>
            </div>
          </div>
        </div>
        
        {/* Sub-bar Hero */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 border-t border-[#333333]/10 divide-y md:divide-y-0 md:divide-x divide-[#333333]/10">
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">01 · Operações</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Contratos Operacionais</h3>
            <p className="text-xs text-[#555555] font-gilroy">Fornecimento de insumos, prestação de serviços e logística.</p>
          </div>
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">02 · Confidencialidade</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">NDAs & MoUs</h3>
            <p className="text-xs text-[#555555] font-gilroy">Acordos de confidencialidade e Joint Ventures seguras.</p>
          </div>
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">03 · Imóveis B2B</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Locação Comercial</h3>
            <p className="text-xs text-[#555555] font-gilroy">Galpões industriais, shoppings e ações renovatórias de ponto.</p>
          </div>
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">04 · Blindagem</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Rescisões Seguras</h3>
            <p className="text-xs text-[#555555] font-gilroy">Notificações e distratos sem multas e penalidades indevidas.</p>
          </div>
        </div>
      </section>

      {/* 2. PROBLEMA */}
      <section className="py-24 px-6 lg:px-20 bg-brand-surface-alt/30 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <span className="font-gilroy text-[11px] uppercase tracking-[0.3em] text-brand-muted block mb-4">
              Vulnerabilidades Contratuais Comerciais
            </span>
            <h2 className="font-poppins text-3xl md:text-5xl text-brand-primary leading-tight mb-6">
              Contratos mal redigidos são a principal causa de inadimplência e disputas judiciais desgastantes.
            </h2>
            <p className="font-gilroy text-lg text-brand-secondary leading-relaxed">
              Confiar em minutas genéricas deixa sua empresa refém de fornecedores que não entregam no prazo, clientes que atrasam pagamentos sem penalidade e parceiros que copiam seu modelo de negócio.
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
                Proteção e Equilíbrio Comercial
              </span>
              <h2 className="font-poppins text-3xl md:text-5xl text-brand-primary leading-tight mb-6">
                Como blindamos as relações comerciais da sua empresa.
              </h2>
              <p className="font-gilroy text-base text-brand-secondary leading-relaxed mb-8">
                Elaboramos contratos técnicos e objetivos que asseguram previsibilidade, definem regras claras para imprevistos e concedem força executiva imediata para cobrança de valores em aberto.
              </p>
              <div className="p-6 bg-brand-surface-alt/40 border border-brand-primary/10 space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                  <span className="font-gilroy text-sm text-brand-primary font-medium">Cláusulas de limitação de responsabilidade e garantias</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                  <span className="font-gilroy text-sm text-brand-primary font-medium">Força executiva extrajudicial (Art. 784, III do CPC)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                  <span className="font-gilroy text-sm text-brand-primary font-medium">Preservação integral do ponto comercial e locações</span>
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
              Como funciona nossa assessoria contratual
            </h2>
            <p className="font-gilroy text-brand-secondary text-base">
              Etapas claras para diagnosticar suas operações comerciais e redigir instrumentos jurídicos à prova de litígios.
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
                A segurança de contar com quem domina contratos empresariais
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
              Perguntas frequentes sobre Contratos Comerciais
            </h2>
            <p className="font-gilroy text-brand-secondary text-base">
              Tire suas dúvidas sobre elaboração, revisão e rescisão de contratos para empresas.
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
            Contratos Comerciais · Segurança Jurídica & Sigilo
          </span>
          <h2 className="font-poppins text-4xl sm:text-5xl md:text-6xl text-brand-surface leading-tight mb-8">
            Deseja redigir ou revisar um contrato comercial importante?
          </h2>
          <p className="font-gilroy text-lg text-brand-surface/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Submeta sua minuta para análise dos nossos especialistas em Direito Empresarial em Salto de Pirapora e Sorocaba e negocie com máxima segurança.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://wa.me/5515996662831?text=Ol%C3%A1%2C%20gostaria%20de%20enviar%20um%20contrato%20empresarial%20para%20an%C3%A1lise."
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
