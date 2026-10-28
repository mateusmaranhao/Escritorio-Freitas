import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { GoogleReviews } from '../components/GoogleReviews';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, 
  Handshake, 
  Scale, 
  ArrowRight, 
  ChevronDown, 
  MessageSquare,
  AlertTriangle,
  ShieldCheck,
  CheckCircle2,
  FileCheck2,
  Flame,
  ShieldAlert,
  Building2
} from 'lucide-react';

export function RelacoesSindicais() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Relações Sindicais e Negociações Coletivas Patronais",
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
    "serviceType": "Acordos Coletivos de Trabalho (ACT), Convenções Coletivas (CCT), Gestão de Greves e Dissídios Coletivos",
    "description": "Atuação estratégica e negociação patronal com sindicatos laborais. Mediação de Acordos Coletivos de Trabalho (ACT), gestão de greves e paralisações, e defesa em dissídios coletivos.",
    "url": "https://escritoriofreitas.com.br/servicos/direito-patronal/relacoes-sindicais"
  };

  const faqs = [
    {
      question: "Qual a diferença prática entre Convenção Coletiva (CCT) e Acordo Coletivo de Trabalho (ACT)?",
      answer: "A Convenção Coletiva de Trabalho (CCT) é celebrada entre o sindicato patronal da categoria econômica e o sindicato dos trabalhadores, aplicando-se a todas as empresas do setor. Já o Acordo Coletivo de Trabalho (ACT) é pactuado diretamente entre a sua empresa específica e o sindicato laboral. Com a prevalência do 'negociado sobre o legislado' (art. 611-A da CLT), o ACT permite desenhar regras personalizadas de banco de horas, escalas de trabalho, benefícios e PLR perfeitamente adaptadas à sua realidade fabril ou comercial."
    },
    {
      question: "O que a empresa deve fazer em caso de ameaça iminente ou deflagração de greve?",
      answer: "A Lei de Greve (Lei nº 7.783/1989) exige pré-aviso obrigatório de 48 horas (ou 72 horas em atividades essenciais), assembleia válida e tentativa prévia de negociação pacífica. Diante de piquetes ilegais, bloqueio de portões ou cerceamento do direito de quem deseja trabalhar, ajuizamos imediatamente uma Ação de Interdito Proibitório com pedido liminar para desobstruir os acessos da empresa sob pena de multa diária, além de suscitar Dissídio Coletivo de Greve perante o TRT."
    },
    {
      question: "Como o escritório auxilia na negociação de Banco de Horas e Escalas Especiais via ACT?",
      answer: "A formalização de banco de horas anual e regimes diferenciados de revezamento (como 12x36, turnos ininterruptos ou escalas fabris) ganha blindagem jurídica máxima quando chancelada por Acordo Coletivo de Trabalho. Conduzimos as rodadas de negociação com a diretoria do sindicato, redigimos minutas equilibradas e submetemos a proposta à assembleia dos trabalhadores para homologação segura no sistema Mediador do MTE."
    },
    {
      question: "A contribuição assistencial e a taxa negocial dos sindicatos são obrigatórias?",
      answer: "O STF fixou a constitucionalidade da contribuição assistencial mesmo para empregados não sindicalizados, desde que assegurado o amplo direito de oposição. Orientamos a empresa na estrita observância dos prazos e procedimentos legais para recepção das cartas de oposição dos colaboradores, evitando conflitos com o sindicato laboral e cobranças indevidas de passivos em folha."
    },
    {
      question: "Como funciona a defesa da empresa em Dissídios Coletivos de Natureza Econômica ou Jurídica?",
      answer: "Quando a negociação coletiva atinge um impasse insolúvel (frustração das tratativas), o sindicato pode ajuizar um Dissídio Coletivo perante o Tribunal Regional do Trabalho. Nossa equipe formula a contestação patronal, demonstrando com laudos contábeis a capacidade financeira real da empresa ou setor, repelindo cláusulas abusivas e sustentando a tese patronal na sessão de julgamento do Pleno do TRT."
    }
  ];

  const problemas = [
    {
      icon: <AlertTriangle className="w-6 h-6 text-brand-primary" />,
      title: "Cláusulas Coletivas Incompatíveis com a Operação",
      desc: "Convenções genéricas que engessam escalas fabris, estabelecem pisos inviáveis e não atendem ao dinamismo do seu segmento."
    },
    {
      icon: <Flame className="w-6 h-6 text-brand-primary" />,
      title: "Paralisações Repentinas e Piquetes Ilícitos",
      desc: "Bloqueio de portões e impedimento da entrada de insumos e colaboradores dispostos a trabalhar durante movimentos paredistas."
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-brand-primary" />,
      title: "Passivos por Descumprimento de CCT",
      desc: "Multas normativas pesadas cobradas por sindicatos trabalhistas em ações de cumprimento por desvios involuntários em benefícios."
    },
    {
      icon: <Scale className="w-6 h-6 text-brand-primary" />,
      title: "Dissídios Coletivos com Aumentos Acima da Inflação",
      desc: "Imposição judicial de reajustes salariais desproporcionais e manutenção forçada de cláusulas históricas danosas à competitividade."
    }
  ];

  const solucoes = [
    {
      numero: "01",
      titulo: "Acordos Coletivos de Trabalho (ACT)",
      descricao: "Elaboração de minutas estratégicas e condução direta de mesas redondas com o sindicato profissional para aprovação de ACTs específicos da sua empresa: flexibilização de jornada, banco de horas, teletrabalho e PLR."
    },
    {
      numero: "02",
      titulo: "Gestão de Greves e Conflitos Sindicais",
      descricao: "Atendimento imediato em paralisações. Verificação dos requisitos formais da Lei nº 7.783/89 e ajuizamento célere de Interdito Proibitório com pedido de liminar para garantir o acesso físico à empresa e a integridade do patrimônio."
    },
    {
      numero: "03",
      titulo: "Consultoria em Enquadramento Sindical",
      descricao: "Estudo técnico sobre a atividade econômica preponderante da empresa para definir com precisão qual sindicato patronal e laboral é o legítimo representante, cessando cobranças indevidas de múltiplos sindicatos."
    },
    {
      numero: "04",
      titulo: "Defesa em Dissídios e Ações de Cumprimento",
      descricao: "Patrocínio da empresa em Dissídios Coletivos perante o Tribunal Regional do Trabalho e defesa combativa contra Ações de Cumprimento de multas normativas ajuizadas pelo sindicato de trabalhadores."
    }
  ];

  const passos = [
    {
      step: "01",
      title: "Mapeamento das Pautas & Demandas",
      desc: "Examinamos as exigências sindicais e confrontamos com as necessidades operacionais e orçamentárias da sua empresa."
    },
    {
      step: "02",
      title: "Mesa de Negociação Patronal",
      desc: "Representamos a diretoria em rodadas técnicas com o sindicato profissional, construindo concessões recíprocas sustentáveis."
    },
    {
      step: "03",
      title: "Redação & Homologação no MTE",
      desc: "Formalização do Acordo Coletivo com redação jurídica segura e submissão no sistema Mediador para validade erga omnes."
    },
    {
      step: "04",
      title: "Acompanhamento & Gestão Preventiva",
      desc: "Suporte na aplicação prática das cláusulas negociadas e monitoramento contínuo para evitar queixas ou dissídios futuros."
    }
  ];

  return (
    <>
      <SEO 
        title="Relações Sindicais e Negociações Coletivas Patronais | Escritório Freitas"
        description="Assessoria patronal em negociações sindicais, elaboração de Acordos Coletivos (ACT), gestão de greves e interdito proibitório em Salto de Pirapora e Sorocaba."
        url="/servicos/direito-patronal/relacoes-sindicais"
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
                <span className="text-brand-primary font-semibold">Relações Sindicais</span>
              </div>

              <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-[#333333] font-semibold leading-[1.2] mb-3.5 max-w-2xl tracking-tight">
                Relações Sindicais e Negociações Coletivas
              </h1>

              <p className="font-gilroy text-sm sm:text-base md:text-[17px] text-[#555555] max-w-xl leading-relaxed mb-6 font-normal">
                Atuação estratégica na relação da empresa com os sindicatos. Conduzimos negociações coletivas de alto impacto, instituímos Acordos Coletivos sob medida e resguardamos sua operação em greves e conflitos.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8">
                <a 
                  href="https://wa.me/5515996662831?text=Ol%C3%A1%2C%20preciso%20de%20assessoria%20jur%C3%ADdica%20para%20negocia%C3%A7%C3%A3o%20coletiva%20ou%20gest%C3%A3o%20de%20crise%20com%20sindicato."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-2.5 bg-brand-primary text-brand-surface font-gilroy text-xs uppercase tracking-widest px-6 py-3.5 hover:bg-black transition-colors duration-300"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Falar com Especialista Sindical</span>
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
                  <Handshake className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-poppins text-xs font-semibold text-[#333333] leading-snug">Acordos Coletivos</h4>
                    <p className="font-gilroy text-[11px] text-[#6c7279] leading-tight">Regras personalizadas de jornada, banco e benefícios</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldAlert className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-poppins text-xs font-semibold text-[#333333] leading-snug">Gestão de Greves</h4>
                    <p className="font-gilroy text-[11px] text-[#6c7279] leading-tight">Interdito proibitório e desobstrução imediata de portões</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Scale className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-poppins text-xs font-semibold text-[#333333] leading-snug">Dissídios no TRT</h4>
                    <p className="font-gilroy text-[11px] text-[#6c7279] leading-tight">Defesa patronal contra reajustes e cláusulas inviáveis</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-5 relative overflow-hidden hidden lg:block bg-[#222222]">
            <img 
              src="/equipe.jpg" 
              alt="Relações Sindicais Patronais — Escritório Freitas" 
              className="absolute inset-0 w-full h-full object-cover object-center grayscale-[15%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 border border-white/20 p-6 backdrop-blur-md bg-black/40">
              <span className="text-[10px] font-gilroy uppercase tracking-[0.25em] text-white/70 block mb-1">
                Estratégia Coletiva Patronal
              </span>
              <span className="font-poppins text-brand-surface text-lg font-semibold mb-1.5 block">
                Equilíbrio & Força Negocial
              </span>
              <p className="text-brand-surface/85 text-xs leading-relaxed font-gilroy">
                Não fique refém de imposições sindicais descoladas da sua realidade. Representamos sua empresa com firmeza técnica para pactuar regras justas e proteger a continuidade dos negócios.
              </p>
            </div>
          </div>
        </div>
        
        {/* Sub-bar Hero */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 border-t border-[#333333]/10 divide-y md:divide-y-0 md:divide-x divide-[#333333]/10">
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">01 · Negociação</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Acordos de Trabalho (ACT)</h3>
            <p className="text-xs text-[#555555] font-gilroy">Pactuação de jornada, banco de horas e flexibilidade fabril.</p>
          </div>
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">02 · Proteção</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Interdito Proibitório</h3>
            <p className="text-xs text-[#555555] font-gilroy">Medidas de urgência contra piquetes e bloqueios de entrada.</p>
          </div>
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">03 · Tribunais</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Dissídios Coletivos</h3>
            <p className="text-xs text-[#555555] font-gilroy">Sustentação patronal perante o pleno do TRT e TST.</p>
          </div>
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">04 · Enquadramento</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Definição da Categoria</h3>
            <p className="text-xs text-[#555555] font-gilroy">Determinação precisa da representatividade sindical legítima.</p>
          </div>
        </div>
      </section>

      {/* 2. PROBLEMA */}
      <section className="py-24 px-6 lg:px-20 bg-brand-surface-alt/30 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <span className="font-gilroy text-[11px] uppercase tracking-[0.3em] text-brand-muted block mb-4">
              Cenário Sindical & Conflitos Coletivos
            </span>
            <h2 className="font-poppins text-3xl md:text-5xl text-brand-primary leading-tight mb-6">
              Conflitos sindicais e convenções inadequadas paralisam a fábrica e geram passivos coletivos vultosos.
            </h2>
            <p className="font-gilroy text-lg text-brand-secondary leading-relaxed">
              Sem representação patronal técnica em mesas de negociação, a empresa é obrigada a aceitar condições prejudiciais ou enfrenta piquetes ilegais que impedem o fluxo de produção e entregas a clientes.
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
                Poder Negocial Patronal
              </span>
              <h2 className="font-poppins text-3xl md:text-5xl text-brand-primary leading-tight mb-6">
                Como nossa assessoria equilibra a balança com os sindicatos.
              </h2>
              <p className="font-gilroy text-base text-brand-secondary leading-relaxed mb-8">
                Combinamos experiência em direito coletivo do trabalho com visão empresarial para conduzir conversas difíceis, evitar paralisações e formular instrumentos jurídicos que garantam a paz social na empresa.
              </p>
              <div className="p-6 bg-brand-surface-alt/40 border border-brand-primary/10 space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                  <span className="font-gilroy text-sm text-brand-primary font-medium">Prevalência do negociado sobre o legislado (Art. 611-A CLT)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                  <span className="font-gilroy text-sm text-brand-primary font-medium">Resposta judicial imediata em menos de 24h em greves</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                  <span className="font-gilroy text-sm text-brand-primary font-medium">Segurança jurídica homologada perante o MTE</span>
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
                    {sol.descricao}
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
              Como funciona nossa atuação sindical
            </h2>
            <p className="font-gilroy text-brand-secondary text-base">
              Processo metódico que conduz a empresa desde o diagnóstico de pautas até o registro formal do acordo coletivo.
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
                A segurança de contar com quem domina relações sindicais patronais
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
              Perguntas frequentes sobre Relações Sindicais
            </h2>
            <p className="font-gilroy text-brand-secondary text-base">
              Esclareça dúvidas práticas sobre acordos coletivos, convenções e gerenciamento de paralisações.
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
            Negociação Patronal Estratégica · Sigilo & Eficiência
          </span>
          <h2 className="font-poppins text-4xl sm:text-5xl md:text-6xl text-brand-surface leading-tight mb-8">
            Precisa negociar com o sindicato ou enfrentar uma greve iminente?
          </h2>
          <p className="font-gilroy text-lg text-brand-surface/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Consulte nossa equipe especializada em Direito Trabalhista Empresarial em Salto de Pirapora e Sorocaba para construir acordos sólidos e proteger a operação da sua empresa.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://wa.me/5515996662831?text=Ol%C3%A1%2C%20preciso%20de%20assessoria%20jur%C3%ADdica%20para%20uma%20quest%C3%A3o%20sindical%20na%20minha%20empresa."
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
