import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { GoogleReviews } from '../components/GoogleReviews';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldAlert, 
  FileCheck2, 
  Briefcase, 
  Users, 
  Scale, 
  ArrowRight, 
  ChevronDown, 
  CheckCircle2, 
  Clock, 
  Building2, 
  MessageSquare,
  AlertTriangle,
  FolderGit2
} from 'lucide-react';

export function DireitoTrabalhista() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Direito Trabalhista em Salto de Pirapora e Região",
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
    "areaServed": ["Salto de Pirapora", "Sorocaba", "Votorantim", "Araçoiaba da Serra"],
    "serviceType": "Direito Trabalhista Preventivo e Contencioso",
    "description": "Assessoria e defesa jurídica em Direito Trabalhista para empresas e trabalhadores. Prevenção de passivos, rescisões, contratos e contencioso.",
    "url": "https://escritoriofreitas.com.br/servicos/direito-trabalhista"
  };

  const faqs = [
    {
      question: "O escritório atende empresas e também trabalhadores?",
      answer: "Sim. Nossa equipe atua em duas frentes com total ética e independência técnica: no suporte preventivo e contencioso para empresas (estruturação de contratos, compliance e redução de passivos trabalhistas) e na defesa pontual de direitos individuais de trabalhadores em situações de rescisão irregular, horas extras não quitadas ou descumprimento de acordos."
    },
    {
      question: "Qual o prazo para ingressar com uma ação trabalhista?",
      answer: "A legislação estabelece o prazo prescricional de 2 anos após o término do vínculo de trabalho (rescisão) para reivindicar direitos dos últimos 5 anos trabalhados. Por isso, quanto mais cedo você buscar orientação técnica, mais preservadas estarão as provas e documentos necessários."
    },
    {
      question: "Como funciona a assessoria preventiva para empresas?",
      answer: "Realizamos uma auditoria das rotinas trabalhistas da empresa, analisando contratos de admissão, controle de jornada, pagamento de adicionais (insalubridade/periculosidade) e processos de desligamento. Nosso objetivo é blindar o negócio e evitar que pequenas falhas operacionais se transformem em processos judiciais caros."
    },
    {
      question: "O atendimento pode ser presencial ou online?",
      answer: "Ambos. Temos sede física em Salto de Pirapora - SP para reuniões presenciais e também realizamos atendimentos virtuais com agilidade para clientes de Sorocaba e de toda a região, com troca segura de documentos em ambiente confidencial."
    },
    {
      question: "Quais documentos preciso levar para a primeira conversa?",
      answer: "Recomendamos separar a Carteira de Trabalho (física ou digital), extrato analítico do FGTS, termos de rescisão contratual (TRCT), holerites recentes e quaisquer comprovantes relacionados à sua dúvida (mensagens, e-mails ou contratos). Caso não tenha tudo em mãos, avaliamos o que estiver disponível e orientamos como obter o restante."
    }
  ];

  const problemas = [
    {
      icon: <AlertTriangle className="w-6 h-6 text-brand-primary" />,
      title: "Passivos Ocultos e Multas Inesperadas",
      desc: "Falhas na folha de pagamento, horas extras mal computadas ou classificação errônea de funções geram contingências acumuladas que desestabilizam o caixa da empresa."
    },
    {
      icon: <FileCheck2 className="w-6 h-6 text-brand-primary" />,
      title: "Rescisões Contratuais Conflituosas",
      desc: "Divergências no cálculo de verbas rescisórias, justa causa contestada ou falta de homologação correta abrem brechas para ações imediatas na Justiça do Trabalho."
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-brand-primary" />,
      title: "Contratos Frágeis e Desatualizados",
      desc: "Modelos genéricos da internet que ignoram convenções coletivas da categoria regional, expondo o empregador a autuações fiscais e penalidades severas."
    },
    {
      icon: <Users className="w-6 h-6 text-brand-primary" />,
      title: "Desgaste Emocional e Relações Rompidas",
      desc: "Conflitos entre líderes e colaboradores que poderiam ser resolvidos com mediação técnica preventiva acabam em litígios prolongados de alto custo moral e financeiro."
    }
  ];

  const solucoes = [
    {
      numero: "01",
      titulo: "Auditoria & Compliance Trabalhista",
      descricao: "Diagnóstico profundo das rotinas da empresa para identificar e corrigir vulnerabilidades antes que virem processos judiciais."
    },
    {
      numero: "02",
      titulo: "Elaboração e Revisão de Contratos",
      descricao: "Elaboração personalizada de contratos individuais, acordos de confidencialidade, banco de horas e termos de teletrabalho conforme a CLT atualizada."
    },
    {
      numero: "03",
      titulo: "Gestão Estratégica de Rescisões",
      descricao: "Condução e validação jurídica de demissões, acordos mútuos e homologações com segurança absoluta para evitar questionamentos posteriores."
    },
    {
      numero: "04",
      titulo: "Defesa Contenciosa & Recursos",
      descricao: "Representação combativa e técnica em reclamatórias trabalhistas, audiências de conciliação, instrução e recursos nos Tribunais Regionais e TST."
    }
  ];

  const passos = [
    {
      step: "01",
      title: "Contato & Triagem Confidencial",
      desc: "Você nos chama pelo WhatsApp ou telefone. Ouvimos o resumo do seu caso para direcionar o atendimento correto sem perda de tempo."
    },
    {
      step: "02",
      title: "Análise Documental & Jurídica",
      desc: "Examinamos minuciosamente contratos, holerites, termos e normas coletivas para verificar direitos, riscos e cenários reais."
    },
    {
      step: "03",
      title: "Definição do Plano Estratégico",
      desc: "Apresentamos a você com clareza o caminho mais seguro: negociação preventiva, ajuste interno ou representação judicial firme."
    },
    {
      step: "04",
      title: "Atuação Diligente & Atualizações",
      desc: "Iniciamos a condução do caso com acompanhamento próximo, mantendo você informado sobre cada andamento sem jargões desnecessários."
    }
  ];

  return (
    <>
      <SEO 
        title="Advogado Trabalhista em Salto de Pirapora e Região | Escritório Freitas"
        description="Especialistas em Direito Trabalhista para empresas e trabalhadores em Salto de Pirapora e Sorocaba. Prevenção de passivos, rescisões e defesa técnica."
        url="/servicos/direito-trabalhista"
        schema={schema}
      />

      {/* 1. HERO — ADAPTADO ESPECIFICAMENTE PARA DIREITO TRABALHISTA */}
      <section className="relative flex flex-col bg-brand-surface border-b border-[#333333]/10">
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-0 relative">
          <div className="lg:col-span-7 flex flex-col justify-center px-6 pt-6 pb-10 sm:pt-8 sm:pb-12 lg:py-12 lg:px-12 lg:pl-16 xl:pl-20">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Breadcrumb / Kicker */}
              <div className="flex items-center gap-2 font-gilroy text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#6c7279] mb-3">
                <Link to="/" className="hover:text-brand-primary">Início</Link>
                <span>/</span>
                <Link to="/servicos" className="hover:text-brand-primary">Serviços</Link>
                <span>/</span>
                <span className="text-brand-primary font-semibold">Direito Trabalhista</span>
              </div>

              <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-[#333333] font-semibold leading-[1.2] mb-3.5 max-w-2xl tracking-tight">
                Segurança jurídica para relações de trabalho sólidas.
              </h1>

              <p className="font-gilroy text-sm sm:text-base md:text-[17px] text-[#555555] max-w-xl leading-relaxed mb-6 font-normal">
                Orientação preventiva para empresas reduzirem passivos e defesa técnica para trabalhadores garantirem verbas rescisórias, horas extras e rescisões justas.
              </p>

              {/* Botões de Ação na Hero */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8">
                <a 
                  href="https://wa.me/5515996662831?text=Ol%C3%A1%2C%20gostaria%20de%20uma%20orienta%C3%A7%C3%A3o%20em%20Direito%20Trabalhista."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-2.5 bg-brand-primary text-brand-surface font-gilroy text-xs uppercase tracking-widest px-6 py-3.5 hover:bg-black transition-colors duration-300"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Falar com Advogado Trabalhista</span>
                </a>
                <a 
                  href="#como-funciona"
                  className="inline-flex justify-center items-center gap-2 border border-brand-primary/30 text-brand-primary font-gilroy text-xs uppercase tracking-widest px-5 py-3.5 hover:bg-brand-primary/5 transition-colors duration-300"
                >
                  <span>Entenda o Processo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Indicadores Específicos de Direito Trabalhista (sem repetição de +10 anos) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-5 border-t border-[#333333]/10">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-poppins text-xs font-semibold text-[#333333] leading-snug">Auditoria Preventiva</h4>
                    <p className="font-gilroy text-[11px] text-[#6c7279] leading-tight">Mitigação de riscos e passivos ocultos</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <FileCheck2 className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-poppins text-xs font-semibold text-[#333333] leading-snug">Rescisões & Contratos</h4>
                    <p className="font-gilroy text-[11px] text-[#6c7279] leading-tight">Cálculos exatos e validação técnica</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Scale className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-poppins text-xs font-semibold text-[#333333] leading-snug">Defesa Combativa</h4>
                    <p className="font-gilroy text-[11px] text-[#6c7279] leading-tight">Atuação firme em audiências e TRT</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-5 relative overflow-hidden hidden lg:block bg-[#222222]">
            <img 
              src="/equipe.jpg" 
              alt="Advocacia Trabalhista — Escritório Freitas" 
              className="absolute inset-0 w-full h-full object-cover object-center grayscale-[15%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 border border-white/20 p-6 backdrop-blur-md bg-black/40">
              <span className="text-[10px] font-gilroy uppercase tracking-[0.25em] text-white/70 block mb-1">
                Especialidade Trabalhista
              </span>
              <span className="font-poppins text-brand-surface text-lg font-semibold mb-1.5 block">
                Equilíbrio & Rigor Legal
              </span>
              <p className="text-brand-surface/85 text-xs leading-relaxed font-gilroy">
                Relações trabalhistas exigem precisão técnica: orientamos cada passo para evitar litígios desnecessários e assegurar o pleno respeito aos direitos de ambas as partes.
              </p>
            </div>
          </div>
        </div>
        
        {/* Sub-bar Hero: 4 Pilares da Atuação Trabalhista */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 border-t border-[#333333]/10 divide-y md:divide-y-0 md:divide-x divide-[#333333]/10">
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">01 · Consultoria</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Prevenção Corporativa</h3>
            <p className="text-xs text-[#555555] font-gilroy">Mitigação de passivos antes do litígio surgir.</p>
          </div>
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">02 · Contratos</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Elaboração Rigorosa</h3>
            <p className="text-xs text-[#555555] font-gilroy">Regras claras alinhadas às convenções coletivas.</p>
          </div>
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">03 · Rescisão</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Cálculo & Homologação</h3>
            <p className="text-xs text-[#555555] font-gilroy">Verificação detalhada de verbas rescisórias.</p>
          </div>
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">04 · Contencioso</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Defesa Estratégica</h3>
            <p className="text-xs text-[#555555] font-gilroy">Atuação consistente em todas as instâncias judiciais.</p>
          </div>
        </div>
      </section>

      {/* 2. PROVA SOCIAL — REPUTAÇÃO & GOOGLE REVIEWS */}
      <section className="py-20 px-6 lg:px-20 border-b border-brand-primary/10 bg-brand-surface">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div>
              <span className="font-gilroy text-[11px] uppercase tracking-[0.3em] text-brand-muted block mb-3">
                Confiança Comprovada · Salto de Pirapora e Região
              </span>
              <h2 className="font-poppins text-3xl md:text-4xl text-brand-primary">
                A opinião de quem já confiou em nossa atuação
              </h2>
            </div>
            <p className="font-gilroy text-sm text-brand-secondary max-w-md">
              Mais de 157 avaliações públicas no Google atestam nosso compromisso com clareza técnica, ética e proximidade humana no trato das causas.
            </p>
          </div>

          {/* Componente oficial de Avaliações */}
          <GoogleReviews />
        </div>
      </section>

      {/* 3. PROBLEMA — O QUE ESTÁ EM JOGO */}
      <section className="py-24 px-6 lg:px-20 bg-brand-surface-alt/30 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <span className="font-gilroy text-[11px] uppercase tracking-[0.3em] text-brand-muted block mb-4">
              Diagnóstico de Riscos
            </span>
            <h2 className="font-poppins text-3xl md:text-5xl text-brand-primary leading-tight mb-6">
              A indefinição nas relações de trabalho custa caro e gera insegurança.
            </h2>
            <p className="font-gilroy text-lg text-brand-secondary leading-relaxed">
              Legislações trabalhistas são minuciosas e mudam com frequência. Deixar decisões ao acaso ou esperar o conflito eclodir gera prejuízos acumulados e desgastes irreversíveis.
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
                <div className="pt-6 mt-6 border-t border-brand-primary/5 text-[11px] font-gilroy text-brand-muted uppercase tracking-wider">
                  Impacto Evitável com Orientação
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-brand-surface border-l-4 border-brand-primary flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="font-poppins text-lg text-brand-primary block mb-1">
                Está vivenciando alguma dessas incertezas agora?
              </span>
              <p className="font-gilroy text-sm text-brand-secondary">
                Não assine documentos sem uma avaliação jurídica criteriosa. Uma conversa inicial esclarece os caminhos legítimos.
              </p>
            </div>
            <a 
              href="https://wa.me/5515996662831?text=Ol%C3%A1%2C%20preciso%20de%20ajuda%20com%20uma%20quest%C3%A3o%20trabalhista."
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap px-6 py-3.5 bg-brand-primary text-brand-surface font-gilroy text-xs uppercase tracking-widest hover:bg-black transition-colors"
            >
              Pedir Análise de Caso
            </a>
          </div>
        </div>
      </section>

      {/* 4. SOLUÇÃO — COMO O ESCRITÓRIO FREITAS RESOLVE */}
      <section className="py-24 px-6 lg:px-20 bg-brand-surface border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <span className="font-gilroy text-[11px] uppercase tracking-[0.3em] text-brand-muted block mb-4">
                Nossa Solução
              </span>
              <h2 className="font-poppins text-3xl md:text-5xl text-brand-primary leading-tight mb-6">
                Abordagem técnica focada em prevenção e solidez probatória.
              </h2>
              <p className="font-gilroy text-base text-brand-secondary leading-relaxed mb-8">
                Nossa atuação vai além de responder processos: desenhamos estratégias para proteger seu patrimônio e garantir que cada decisão tomada respeite rigorosamente o ordenamento jurídico.
              </p>

              <div className="space-y-6 pt-6 border-t border-brand-primary/10">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-poppins text-base text-brand-primary">Para Empresários & Gestores</h4>
                    <p className="font-gilroy text-xs text-brand-secondary leading-relaxed">
                      Estruturação segura das relações de trabalho, prevenção de contingências e consultoria para contratações e demissões estratégicas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-poppins text-base text-brand-primary">Para Trabalhadores</h4>
                    <p className="font-gilroy text-xs text-brand-secondary leading-relaxed">
                      Avaliação técnica detalhada de rescisões contratuais, horas extras, adicionais e restituição de direitos violados.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {solucoes.map((sol, idx) => (
                <div key={idx} className="p-8 bg-brand-surface-alt/40 border border-brand-primary/10 hover:border-brand-primary/30 transition-all">
                  <span className="font-poppins text-2xl text-brand-primary/40 block mb-3">{sol.numero}</span>
                  <h3 className="font-poppins text-xl text-brand-primary mb-3">{sol.titulo}</h3>
                  <p className="font-gilroy text-sm text-brand-secondary leading-relaxed">{sol.descricao}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. COMO FUNCIONA — ETAPAS TRANSPARENTES */}
      <section id="como-funciona" className="py-24 px-6 lg:px-20 bg-brand-surface-alt/20 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-gilroy text-[11px] uppercase tracking-[0.3em] text-brand-muted block mb-3">
              Passo a Passo
            </span>
            <h2 className="font-poppins text-3xl md:text-5xl text-brand-primary mb-4">
              Como funciona o nosso atendimento
            </h2>
            <p className="font-gilroy text-brand-secondary text-base">
              Processo claro, sem promessas vazias, conduzido com seriedade e acompanhamento constante.
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

      {/* 6. FAQ — PERGUNTAS FREQUENTES */}
      <section className="py-24 px-6 lg:px-20 bg-brand-surface border-b border-brand-primary/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-gilroy text-[11px] uppercase tracking-[0.3em] text-brand-muted block mb-3">
              Dúvidas Recorrentes
            </span>
            <h2 className="font-poppins text-3xl md:text-5xl text-brand-primary mb-4">
              Perguntas frequentes sobre Direito Trabalhista
            </h2>
            <p className="font-gilroy text-brand-secondary text-base">
              Transparência desde o primeiro instante para você tomar decisões informadas.
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

      {/* 7. CTA FINAL — CONVERSÃO DIRETA */}
      <section className="py-24 px-6 lg:px-20 bg-brand-deep text-brand-surface relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <span className="font-gilroy text-[11px] uppercase tracking-[0.4em] text-brand-surface/60 block mb-4">
            Atendimento Rápido & Confidencial
          </span>
          <h2 className="font-poppins text-4xl sm:text-5xl md:text-6xl text-brand-surface leading-tight mb-8">
            Precisa de orientação técnica sobre uma questão trabalhista?
          </h2>
          <p className="font-gilroy text-lg text-brand-surface/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Nossa equipe em Salto de Pirapora e Sorocaba está à disposição para analisar seu cenário com ética, rapidez e rigor legal.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://wa.me/5515996662831?text=Ol%C3%A1%2C%20gostaria%20de%20uma%20orienta%C3%A7%C3%A3o%20em%20Direito%20Trabalhista."
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
            <span>Atendimento Regional em Sorocaba</span>
            <span>·</span>
            <span>Sigilo Profissional OAB</span>
          </div>
        </div>
      </section>
    </>
  );
}
