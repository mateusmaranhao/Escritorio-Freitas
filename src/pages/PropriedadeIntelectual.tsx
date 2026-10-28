import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { GoogleReviews } from '../components/GoogleReviews';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  Award, 
  Scale, 
  ArrowRight, 
  ChevronDown, 
  MessageSquare,
  AlertTriangle,
  Lock,
  CheckCircle2,
  FileCheck2,
  Eye,
  FileBadge2,
  Binary
} from 'lucide-react';

export function PropriedadeIntelectual() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Propriedade Intelectual e Compliance | Marcas, Patentes, LGPD e Ética Corporativa",
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
    "serviceType": "Registro de Marcas no INPI, Registro de Software e Patentes, Adequação à LGPD, Código de Conduta e Compliance",
    "description": "Assessoria jurídica na proteção de ativos intangíveis e governança de conformidade: registro de marcas e patentes no INPI, programas de adequação à LGPD e compliance corporativo.",
    "url": "https://escritoriofreitas.com.br/servicos/direito-empresarial/propriedade-intelectual-compliance"
  };

  const faqs = [
    {
      question: "Qual o risco de operar uma empresa sem registrar a marca no INPI?",
      answer: "No Brasil, o direito de propriedade sobre uma marca decorre do primeiro registro válido concedido pelo INPI (critério de anterioridade). Ter o CNPJ registrado na Junta Comercial não garante exclusividade sobre o nome fantasia. Sem o registro no INPI, um concorrente ou terceiro de má-fé pode registrar a sua marca antes de você e notificá-lo judicialmente para suspender o uso imediatamente, forçando a troca de fachada, domínio, embalagens e gerando indenizações por uso indevido."
    },
    {
      question: "Como funciona a adequação de uma empresa à Lei Geral de Proteção de Dados (LGPD)?",
      answer: "O programa de adequação à LGPD (Lei nº 13.709/2018) mapeia todo o ciclo de vida dos dados pessoais tratados (Data Mapping) de clientes, fornecedores e empregados. Elaboramos Políticas de Privacidade externas, Políticas de Segurança da Informação internas, termos de consentimento e cláusulas de proteção de dados em contratos com terceiros, além de orientar o Encarregado de Dados (DPO) e preparar relatórios de impacto (RIPD) para afastar sanções da ANPD que podem atingir até R$ 50 milhões por infração."
    },
    {
      question: "O que é um Programa de Compliance Empresarial e como ele protege a diretoria?",
      answer: "Compliance é um conjunto de mecanismos internos de integridade, auditoria e incentivo à denúncia de irregularidades. Implementamos o Código de Ética e Conduta, canais seguros de denúncia anônima, investigações internas corporativas e políticas anticorrupção (Lei nº 12.846/2013). O programa mitiga fraudes de colaboradores, evita responsabilização objetiva dos administradores e atenua penalidades administrativas em até 4% do faturamento da empresa."
    },
    {
      question: "Como proteger softwares, aplicativos e metodologias exclusivas criadas pela empresa?",
      answer: "O código-fonte de softwares e aplicativos é protegido sob o regime de direito autoral regulado pela Lei de Software (Lei nº 9.609/1998). Realizamos o depósito de software perante o INPI, gerando a Certidão de Registro de Programa de Computador, que serve como prova cabal de titularidade perante investidores, licitações públicas ou ações de combate à pirataria e cópia não autorizada."
    },
    {
      question: "Quanto tempo dura o processo de registro de marca no INPI e qual a validade?",
      answer: "O processo dura em média de 8 a 14 meses, passando por exame formal, publicação na Revista da Propriedade Industrial (RPI) para oposição de terceiros e exame substantivo de mérito. Uma vez concedido pelo INPI, o certificado de registro de marca é válido por 10 (dez) anos em todo o território nacional, prorrogável indefinidamente por períodos iguais."
    }
  ];

  const problemas = [
    {
      icon: <AlertTriangle className="w-6 h-6 text-brand-primary" />,
      title: "Perda da Marca por Falta de Registro no INPI",
      desc: "Investir anos de trabalho no fortalecimento do nome e ser surpreendido por notificação judicial exigindo a mudança imediata de marca."
    },
    {
      icon: <Lock className="w-6 h-6 text-brand-primary" />,
      title: "Multas Pesadas da ANPD e Vazamento de Dados",
      desc: "Tratamento irregular de dados de clientes e funcionários na LGPD gerando processos indenizatórios e sanções regulatórias."
    },
    {
      icon: <Binary className="w-6 h-6 text-brand-primary" />,
      title: "Pirataria e Cópia Desleal de Softwares",
      desc: "Desenvolvimento de soluções tecnológicas sem proteção de código-fonte e segredo industrial, permitindo a cópia por ex-colaboradores."
    },
    {
      icon: <Scale className="w-6 h-6 text-brand-primary" />,
      title: "Fraudes Internas e Corrupção Corporativa",
      desc: "Desvios financeiros e condutas ilícitas no departamento de compras e vendas por ausência de um canal de denúncia e código ético."
    }
  ];

  const solucoes = [
    {
      numero: "01",
      titulo: "Registro de Marcas e Patentes no INPI",
      desc: "Busca prévia de viabilidade fonética e ideológica, protocolo do pedido, acompanhamento semanal da RPI, apresentação de oposições e defesas contra indeferimentos até a emissão do certificado definitivo."
    },
    {
      numero: "02",
      titulo: "Adequação Completa à LGPD",
      desc: "Diagnóstico e mapeamento de dados (Data Mapping), elaboração de Políticas de Privacidade, Termos de Uso, aditivos de tratamento de dados com fornecedores e assessoria ao encarregado (DPO)."
    },
    {
      numero: "03",
      titulo: "Programas de Compliance e Código de Ética",
      desc: "Estruturação de programas de integridade corporativa, manuais de boas práticas, implantação de canal de denúncia anônimo e condução de investigações internas independentes."
    },
    {
      numero: "04",
      titulo: "Proteção de Software e Trade Secrets",
      desc: "Depósito de programas de computador no INPI, contratos de licenciamento de tecnologia e acordos de blindagem de segredos de negócio (trade secrets) contra espionagem industrial."
    }
  ];

  const passos = [
    {
      step: "01",
      title: "Auditoria de Ativos & Conformidade",
      desc: "Mapeamos os ativos intangíveis da sua empresa (marcas, patentes, sistemas) e o fluxo de dados pessoais tratados."
    },
    {
      step: "02",
      title: "Pesquisa de Anterioridade & Riscos",
      desc: "Verificamos a disponibilidade das marcas no banco do INPI e os gaps regulatórios de privacidade e conduta."
    },
    {
      step: "03",
      title: "Protocolo e Implementação",
      desc: "Submissão dos pedidos no INPI e implementação de manuais de compliance, políticas de dados e termos contratuais."
    },
    {
      step: "04",
      title: "Monitoramento e Defesa Ativa",
      desc: "Vigilância contínua contra cópias da sua marca e suporte consultivo em investigações corporativas e LGPD."
    }
  ];

  return (
    <>
      <SEO 
        title="Propriedade Intelectual, Marcas INPI e Compliance | Escritório Freitas"
        description="Proteção de marcas e patentes no INPI, adequação à LGPD, programas de compliance e integridade corporativa em Salto de Pirapora e Sorocaba."
        url="/servicos/direito-empresarial/propriedade-intelectual-compliance"
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
                <span className="text-brand-primary font-semibold">Propriedade Intelectual</span>
              </div>

              <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-[#333333] font-semibold leading-[1.2] mb-3.5 max-w-2xl tracking-tight">
                Propriedade Intelectual e Compliance
              </h1>

              <p className="font-gilroy text-sm sm:text-base md:text-[17px] text-[#555555] max-w-xl leading-relaxed mb-6 font-normal">
                Proteção dos ativos intangíveis mais valiosos da sua empresa e garantia rigorosa de conformidade legal. Registramos marcas no INPI, adequamos sua operação à LGPD e implementamos compliance corporativo.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8">
                <a 
                  href="https://wa.me/5515996662831?text=Ol%C3%A1%2C%20preciso%20de%20assessoria%20para%20Registro%20de%20Marca%20no%20INPI%20ou%20adequa%C3%A7%C3%A3o%20%C3%A0%20LGPD."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-2.5 bg-brand-primary text-brand-surface font-gilroy text-xs uppercase tracking-widest px-6 py-3.5 hover:bg-black transition-colors duration-300"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Proteger Meus Ativos Agora</span>
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
                  <Award className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-poppins text-xs font-semibold text-[#333333] leading-snug">Marcas no INPI</h4>
                    <p className="font-gilroy text-[11px] text-[#6c7279] leading-tight">Exclusividade nacional de uso por 10 anos</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Lock className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-poppins text-xs font-semibold text-[#333333] leading-snug">LGPD & Privacidade</h4>
                    <p className="font-gilroy text-[11px] text-[#6c7279] leading-tight">Adequação jurídica contra multas e sanções</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-poppins text-xs font-semibold text-[#333333] leading-snug">Compliance & Ética</h4>
                    <p className="font-gilroy text-[11px] text-[#6c7279] leading-tight">Códigos de conduta e canais de integridade</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-5 relative overflow-hidden hidden lg:block bg-[#222222]">
            <img 
              src="/equipe.jpg" 
              alt="Propriedade Intelectual e Compliance — Escritório Freitas" 
              className="absolute inset-0 w-full h-full object-cover object-center grayscale-[15%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 border border-white/20 p-6 backdrop-blur-md bg-black/40">
              <span className="text-[10px] font-gilroy uppercase tracking-[0.25em] text-white/70 block mb-1">
                Ativos Intangíveis & Conformidade
              </span>
              <span className="font-poppins text-brand-surface text-lg font-semibold mb-1.5 block">
                Valorize & Proteja Sua Marca
              </span>
              <p className="text-brand-surface/85 text-xs leading-relaxed font-gilroy">
                Não arrisque perder a identidade do seu negócio ou sofrer autuações regulatórias severas. Blindamos suas criações e garantimos que sua empresa opere com os mais altos padrões de conformidade.
              </p>
            </div>
          </div>
        </div>
        
        {/* Sub-bar Hero */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 border-t border-[#333333]/10 divide-y md:divide-y-0 md:divide-x divide-[#333333]/10">
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">01 · Exclusividade</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Registro no INPI</h3>
            <p className="text-xs text-[#555555] font-gilroy">Proteção de nomes, logotipos, produtos e patentes.</p>
          </div>
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">02 · Proteção Digital</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Adequação à LGPD</h3>
            <p className="text-xs text-[#555555] font-gilroy">Mapeamento de dados e conformidade perante a ANPD.</p>
          </div>
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">03 · Governança</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Código de Conduta</h3>
            <p className="text-xs text-[#555555] font-gilroy">Canais de denúncia e prevenção a fraudes corporativas.</p>
          </div>
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">04 · Tecnologia</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Depósito de Software</h3>
            <p className="text-xs text-[#555555] font-gilroy">Proteção autoral de códigos-fonte e segredos comerciais.</p>
          </div>
        </div>
      </section>

      {/* 2. PROBLEMA */}
      <section className="py-24 px-6 lg:px-20 bg-brand-surface-alt/30 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <span className="font-gilroy text-[11px] uppercase tracking-[0.3em] text-brand-muted block mb-4">
              Vulnerabilidades de Marcas e Dados
            </span>
            <h2 className="font-poppins text-3xl md:text-5xl text-brand-primary leading-tight mb-6">
              A falta de proteção aos ativos intangíveis pode custar o nome e a reputação da sua empresa.
            </h2>
            <p className="font-gilroy text-lg text-brand-secondary leading-relaxed">
              Descuidar do registro no INPI ou ignorar a segurança dos dados de clientes expõe o negócio a litígios de contrafação, perda forçada de domínios e penalidades administrativas severas.
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
                Proteção Intangível & Integridade
              </span>
              <h2 className="font-poppins text-3xl md:text-5xl text-brand-primary leading-tight mb-6">
                Como resguardamos seus ativos e garantimos conformidade regulatória.
              </h2>
              <p className="font-gilroy text-base text-brand-secondary leading-relaxed mb-8">
                Unimos técnica registral de patentes e marcas a ferramentas modernas de auditoria de dados e compliance, blindando o patrimônio imaterial da sua empresa perante o mercado e os órgãos fiscalizadores.
              </p>
              <div className="p-6 bg-brand-surface-alt/40 border border-brand-primary/10 space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                  <span className="font-gilroy text-sm text-brand-primary font-medium">Busca prévia de viabilidade de marca em 24 horas</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                  <span className="font-gilroy text-sm text-brand-primary font-medium">Adequação prática à LGPD sem burocracia excessiva</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                  <span className="font-gilroy text-sm text-brand-primary font-medium">Canais de denúncia seguros com sigilo OAB</span>
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
              Como funciona nossa assessoria em Propriedade Intelectual
            </h2>
            <p className="font-gilroy text-brand-secondary text-base">
              Processo rigoroso para registrar marcas, adequar processos à LGPD e garantir a segurança do seu patrimônio.
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
                A segurança de contar com quem domina marcas e conformidade
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
              Perguntas frequentes sobre Marcas, LGPD e Compliance
            </h2>
            <p className="font-gilroy text-brand-secondary text-base">
              Entenda como proteger o nome da sua empresa e cumprir a legislação vigente.
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
            Propriedade Intelectual & Compliance · Segurança Absoluta
          </span>
          <h2 className="font-poppins text-4xl sm:text-5xl md:text-6xl text-brand-surface leading-tight mb-8">
            Deseja registrar sua marca ou adequar sua empresa à LGPD?
          </h2>
          <p className="font-gilroy text-lg text-brand-surface/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Faça uma pesquisa prévia gratuita de viabilidade da sua marca com nossa equipe em Salto de Pirapora e Sorocaba e blinde o futuro do seu negócio.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://wa.me/5515996662831?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20uma%20consulta%20de%20viabilidade%20para%20Registro%20de%20Marca%20no%20INPI."
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
