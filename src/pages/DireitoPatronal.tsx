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
  Building2, 
  MessageSquare,
  AlertTriangle,
  FolderGit2,
  ShieldCheck,
  FileSignature,
  FileSpreadsheet,
  Gavel
} from 'lucide-react';

export function DireitoPatronal() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Direito Trabalhista Empresarial em Salto de Pirapora e Região | Escritório Freitas",
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
    "serviceType": "Direito Trabalhista Empresarial, Compliance Trabalhista e Defesa de Empresas",
    "description": "Assessoria jurídica em Direito Trabalhista Empresarial para empresas e empregadores. Auditoria preventiva, redução de passivos, rescisões estratégicas e defesa combativa perante a Justiça do Trabalho.",
    "url": "https://escritoriofreitas.com.br/servicos/direito-patronal"
  };

  const faqs = [
    {
      question: "O que é o Direito Trabalhista Empresarial e para quem ele é indicado?",
      answer: "O Direito Trabalhista Empresarial é o ramo da advocacia trabalhista dedicado exclusivamente à defesa dos interesses de empregadores, empresas, indústrias, comércios e gestores. Seu foco é blindar a operação contra passivos trabalhistas, orientar contratações e demissões seguras, adequar rotinas de RH à CLT e defender a empresa com vigor técnico em qualquer reclamação judicial ou fiscalização do Ministério do Trabalho."
    },
    {
      question: "Por que investir em assessoria preventiva custa muito menos do que defender processos judiciais?",
      answer: "A imensa maioria das condenações trabalhistas decorre de pequenos descuidos rotineiros que poderiam ter sido corrigidos a custo zero: horas extras não registradas com precisão, falta de entrega comprovada de EPIs, descrição defasada de cargos ou rescisões mal formalizadas. A consultoria preventiva audita esses pontos antes que se transformem em processos judiciais de dezenas ou centenas de milhares de reais."
    },
    {
      question: "Minha empresa acabou de receber uma notificação da Justiça do Trabalho. Qual o primeiro passo?",
      answer: "O primeiro passo é contatar imediatamente nossa equipe para analisar a inicial e o prazo de resposta (geralmente exíguo). Reuniremos toda a documentação comprobatória (cartões de ponto, recibos, comunicações internas) e traçaremos a melhor estratégia de contestação, instrução de testemunhas e sustentação oral, reduzindo ao máximo a exposição patrimonial da empresa."
    },
    {
      question: "Como funciona a homologação judicial de acordos extrajudiciais (Art. 855-B da CLT)?",
      answer: "Com a Reforma Trabalhista, tornou-se possível firmar um acordo extrajudicial entre empresa e colaborador e submetê-lo à homologação do juiz do trabalho. Uma vez homologado, o acordo confere quitação ampla e definitiva sobre o contrato de trabalho extinto, impedindo que o ex-funcionário acione a empresa novamente na Justiça."
    },
    {
      question: "O escritório atende empresas de quais portes e cidades?",
      answer: "Atendemos desde micro e pequenas empresas até médias e grandes indústrias e redes varejistas sediadas em Salto de Pirapora, Sorocaba, Votorantim e toda a região metropolitana. Realizamos reuniões presenciais em nossa sede física e disponibilizamos canal direto e ágil via WhatsApp e videoconferência para os diretores e equipes de RH."
    }
  ];

  const problemas = [
    {
      icon: <AlertTriangle className="w-6 h-6 text-brand-primary" />,
      title: "Passivos Ocultos e Controle Frágil de Jornada",
      desc: "Espelhos de ponto inconsistentes, horas extras informais e intervalos suprimidos criam passivos que se multiplicam silenciosamente e estouram no caixa da empresa."
    },
    {
      icon: <FileSignature className="w-6 h-6 text-brand-primary" />,
      title: "Contratos Desatualizados e PJotização Arriscada",
      desc: "Contratos copiados da internet e contratações de pessoas jurídicas (PJ) sem os devidos requisitos legais geram risco iminente de reconhecimento de vínculo de emprego."
    },
    {
      icon: <Users className="w-6 h-6 text-brand-primary" />,
      title: "Rescisões Traumáticas e Danos Morais",
      desc: "Desligamentos mal conduzidos ou com divergência de cálculos abrem margem para ações com pedidos indenizatórios abusivos por assédio moral ou dispensa discriminatória."
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-brand-primary" />,
      title: "Fiscalizações do MTE e Notificações do MPT",
      desc: "Auditorias fiscais, autuações surpresa e termos de ajustamento de conduta (TAC) do Ministério Público do Trabalho que paralisam a gestão e geram multas pesadas."
    }
  ];

  const solucoes = [
    {
      numero: "01",
      titulo: "Auditoria & Compliance Trabalhista Patronal",
      descricao: "Diagnóstico profundo de toda a folha de pagamento, rotinas de admissão, controle de jornada, adicionais de insalubridade e periculosidade para estancar riscos antes de qualquer litígio."
    },
    {
      numero: "02",
      titulo: "Elaboração de Políticas & Contratos Estratégicos",
      descricao: "Elaboração sob medida de regimentos internos, políticas de uso de ferramentas e celulares corporativos, acordos de banco de horas, teletrabalho e cláusulas de sigilo (NDA)."
    },
    {
      numero: "03",
      titulo: "Gestão Segura de Rescisões & Acordos Homologados",
      descricao: "Condução jurídica de desligamentos sensíveis de altos executivos e celebração de transações extrajudiciais com homologação judicial e quitação definitiva das obrigações."
    },
    {
      numero: "04",
      titulo: "Defesa Contenciosa Combativa em Todas as Instâncias",
      descricao: "Atuação enérgica em reclamações trabalhistas perante as Varas do Trabalho, Tribunais Regionais (TRT-15) e Tribunal Superior do Trabalho (TST), com produção de provas técnicas e sustentação."
    }
  ];

  const passos = [
    {
      step: "01",
      title: "Diagnóstico de Riscos & Auditoria",
      desc: "Mapeamos os principais gargalos operacionais da sua empresa e a exposição financeira decorrente das rotinas atuais de contratação e gestão."
    },
    {
      step: "02",
      title: "Plano de Saneamento & Adequação",
      desc: "Estruturamos as correções contratuais e operacionais prioritárias, alinhando a empresa às súmulas e jurisprudências mais recentes."
    },
    {
      step: "03",
      title: "Blindagem de Contratos & Rotinas de RH",
      desc: "Implementamos termos aditivos, controle rigoroso de jornada e orientamos a liderança para que as rotinas diárias não gerem novos passivos."
    },
    {
      step: "04",
      title: "Defesa Imediata & Acompanhamento Contínuo",
      desc: "Disponibilidade ágil para responder a dúvidas operacionais do dia a dia e defender a empresa com precisão cirúrgica em eventuais ações."
    }
  ];

  return (
    <>
      <SEO 
        title="Advogado Trabalhista Empresarial em Salto de Pirapora e Sorocaba | Escritório Freitas"
        description="Advocacia em Direito Trabalhista Empresarial para empresas e empregadores. Auditoria preventiva, redução de passivos trabalhistas, contratos e defesa contenciosa especializada."
        url="/servicos/direito-patronal"
        schema={schema}
      />

      {/* 1. HERO — ESPECÍFICA PARA DIREITO TRABALHISTA EMPRESARIAL */}
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
                <span className="text-brand-primary font-semibold">Direito Trabalhista Empresarial</span>
              </div>

              <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-[#333333] font-semibold leading-[1.2] mb-3.5 max-w-2xl tracking-tight">
                Blindagem jurídica e gestão preventiva de passivos para a sua empresa.
              </h1>

              <p className="font-gilroy text-sm sm:text-base md:text-[17px] text-[#555555] max-w-xl leading-relaxed mb-6 font-normal">
                Consultoria trabalhista patronal de excelência: defendemos com rigor técnico os interesses de empresários, diretores e gestores de recursos humanos perante a Justiça do Trabalho e órgãos fiscalizadores.
              </p>

              {/* Botões de Ação na Hero */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8">
                <a 
                  href="https://wa.me/5515996662831?text=Ol%C3%A1%2C%20gostaria%20de%20uma%20orienta%C3%A7%C3%A3o%20em%20Direito%20Trabalhista%20Empresarial%20para%20minha%20empresa."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-2.5 bg-brand-primary text-brand-surface font-gilroy text-xs uppercase tracking-widest px-6 py-3.5 hover:bg-black transition-colors duration-300"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Falar com Advogado Trabalhista Empresarial</span>
                </a>
                <a 
                  href="#como-funciona"
                  className="inline-flex justify-center items-center gap-2 border border-brand-primary/30 text-brand-primary font-gilroy text-xs uppercase tracking-widest px-5 py-3.5 hover:bg-brand-primary/5 transition-colors duration-300"
                >
                  <span>Entenda a Metodologia</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Indicadores Específicos de Direito Trabalhista Empresarial */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-5 border-t border-[#333333]/10">
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-poppins text-xs font-semibold text-[#333333] leading-snug">Auditoria & Compliance</h4>
                    <p className="font-gilroy text-[11px] text-[#6c7279] leading-tight">Mitigação prévia de passivos e multas de RH</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <FileSpreadsheet className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-poppins text-xs font-semibold text-[#333333] leading-snug">Rescisões Estratégicas</h4>
                    <p className="font-gilroy text-[11px] text-[#6c7279] leading-tight">Acordos homologados com quitação ampla</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Gavel className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-poppins text-xs font-semibold text-[#333333] leading-snug">Defesa Combativa</h4>
                    <p className="font-gilroy text-[11px] text-[#6c7279] leading-tight">Representação técnica perante Varas e TRT-15</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-5 relative overflow-hidden hidden lg:block bg-[#222222]">
            <img 
              src="/equipe.jpg" 
              alt="Advocacia Trabalhista Patronal — Escritório Freitas" 
              className="absolute inset-0 w-full h-full object-cover object-center grayscale-[15%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 border border-white/20 p-6 backdrop-blur-md bg-black/40">
              <span className="text-[10px] font-gilroy uppercase tracking-[0.25em] text-white/70 block mb-1">
                Especialidade Patronal
              </span>
              <span className="font-poppins text-brand-surface text-lg font-semibold mb-1.5 block">
                Proteção Ativa do Negócio
              </span>
              <p className="text-brand-surface/85 text-xs leading-relaxed font-gilroy">
                Não permita que passivos trabalhistas desequilibrem o crescimento da sua empresa. Atuamos com visão de negócios para trazer previsibilidade e segurança contratual ao seu patrimônio.
              </p>
            </div>
          </div>
        </div>
        
        {/* Sub-bar Hero: 4 Pilares da Atuação Patronal */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 border-t border-[#333333]/10 divide-y md:divide-y-0 md:divide-x divide-[#333333]/10">
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">01 · Consultoria</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Auditoria Preventiva</h3>
            <p className="text-xs text-[#555555] font-gilroy">Identificação e correção de pontos cegos na folha e jornada.</p>
          </div>
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">02 · Estruturação</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Políticas Corporativas</h3>
            <p className="text-xs text-[#555555] font-gilroy">Regimentos internos, teletrabalho e normas de conduta.</p>
          </div>
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">03 · Rescisão Segura</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Homologação Judicial</h3>
            <p className="text-xs text-[#555555] font-gilroy">Acordos extrajudiciais que dão fim definitivo a conflitos.</p>
          </div>
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">04 · Contencioso</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Defesa Patronal Firme</h3>
            <p className="text-xs text-[#555555] font-gilroy">Contestação técnica, instrução probatória e recursos ao TRT.</p>
          </div>
        </div>
      </section>

      {/* 2. PROBLEMA — OS RISCOS REAIS PARA O EMPREGADOR */}
      <section className="py-24 px-6 lg:px-20 bg-brand-surface-alt/30 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <span className="font-gilroy text-[11px] uppercase tracking-[0.3em] text-brand-muted block mb-4">
              Cenário de Riscos Corporativos
            </span>
            <h2 className="font-poppins text-3xl md:text-5xl text-brand-primary leading-tight mb-6">
              A indefinição nas rotinas de trabalho gera passivos que desestabilizam o caixa da empresa.
            </h2>
            <p className="font-gilroy text-lg text-brand-secondary leading-relaxed">
              No Brasil, a legislação trabalhista é complexa e as condenações na Justiça do Trabalho frequentemente penalizam empresas por meros detalhes documentais ou falhas operacionais não monitoradas.
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
                  Passivo Neutralizado com Prevenção
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-brand-surface border-l-4 border-brand-primary flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="font-poppins text-lg text-brand-primary block mb-1">
                Sua empresa quer auditar suas rotinas ou precisa responder a uma ação?
              </span>
              <p className="font-gilroy text-sm text-brand-secondary">
                Não tome decisões precipitadas nem compareça a audiências sem orientação patronal especializada. Uma avaliação inicial estratégica resguarda seu patrimônio.
              </p>
            </div>
            <a 
              href="https://wa.me/5515996662831?text=Ol%C3%A1%2C%20preciso%20de%20uma%20an%C3%A1lise%20de%20Direito%20Patronal%20para%20minha%20empresa."
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap px-6 py-3.5 bg-brand-primary text-brand-surface font-gilroy text-xs uppercase tracking-widest hover:bg-black transition-colors"
            >
              Solicitar Análise de Empresa
            </a>
          </div>
        </div>
      </section>

      {/* 3. SOLUÇÃO — COMO O ESCRITÓRIO FREITAS BLINDA SUA EMPRESA */}
      <section className="py-24 px-6 lg:px-20 bg-brand-surface border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <span className="font-gilroy text-[11px] uppercase tracking-[0.3em] text-brand-muted block mb-4">
                Nossa Solução Patronal
              </span>
              <h2 className="font-poppins text-3xl md:text-5xl text-brand-primary leading-tight mb-6">
                Abordagem estratégica focada em prevenção, segurança e defesa combativa.
              </h2>
              <p className="font-gilroy text-base text-brand-secondary leading-relaxed mb-8">
                Nossa atuação vai além de redigir defesas após o processo ser ajuizado: compreendemos o modelo de negócios da sua empresa para criar protocolos que impedem novos litígios e conferem segurança às lideranças.
              </p>

              <div className="space-y-6 pt-6 border-t border-brand-primary/10">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-poppins text-base text-brand-primary">Consultoria Contínua para RH e Diretoria</h4>
                    <p className="font-gilroy text-xs text-brand-secondary leading-relaxed">
                      Respostas rápidas para decisões diárias de contratação, remuneração variável, advertências, suspensões e rescisões complexas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-poppins text-base text-brand-primary">Defesa Contenciosa Especializada</h4>
                    <p className="font-gilroy text-xs text-brand-secondary leading-relaxed">
                      Acompanhamento pessoal de advogados seniores em audiências, perícias técnicas (insalubridade/periculosidade) e recursos aos Tribunais.
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

      {/* 4. COMO FUNCIONA / METODOLOGIA DE ATUAÇÃO */}
      <section id="como-funciona" className="py-24 px-6 lg:px-20 bg-brand-surface-alt/20 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-gilroy text-[11px] uppercase tracking-[0.3em] text-brand-muted block mb-3">
              Metodologia de Atuação
            </span>
            <h2 className="font-poppins text-3xl md:text-5xl text-brand-primary mb-4">
              Como funciona o suporte patronal
            </h2>
            <p className="font-gilroy text-brand-secondary text-base">
              Etapas claras para diagnosticar, blindar e defender a sua operação corporativa com máxima eficiência.
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

      {/* 5. PROVA SOCIAL — REPUTAÇÃO & GOOGLE REVIEWS */}
      <section className="py-20 px-6 lg:px-20 border-b border-brand-primary/10 bg-brand-surface">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div>
              <span className="font-gilroy text-[11px] uppercase tracking-[0.3em] text-brand-muted block mb-3">
                Confiança Empresarial Comprovada · Salto de Pirapora e Região
              </span>
              <h2 className="font-poppins text-3xl md:text-4xl text-brand-primary">
                A credibilidade de quem confia na proteção de seus negócios
              </h2>
            </div>
            <p className="font-gilroy text-sm text-brand-secondary max-w-md">
              Mais de 157 avaliações públicas no Google atestam a nossa dedicação, rigor técnico e excelência no suporte jurídico a empresas e gestores da região.
            </p>
          </div>

          {/* Componente oficial de Avaliações */}
          <GoogleReviews />
        </div>
      </section>

      {/* 6. FAQ — PERGUNTAS FREQUENTES */}
      <section className="py-24 px-6 lg:px-20 bg-brand-surface border-b border-brand-primary/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-gilroy text-[11px] uppercase tracking-[0.3em] text-brand-muted block mb-3">
              Dúvidas Recorrentes de Empregadores
            </span>
            <h2 className="font-poppins text-3xl md:text-5xl text-brand-primary mb-4">
              Perguntas frequentes sobre Direito Trabalhista Empresarial
            </h2>
            <p className="font-gilroy text-brand-secondary text-base">
              Esclareça como estruturamos a proteção jurídica para o seu negócio.
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
            Assessoria Patronal · Confidencialidade Absoluta
          </span>
          <h2 className="font-poppins text-4xl sm:text-5xl md:text-6xl text-brand-surface leading-tight mb-8">
            Precisa de blindagem trabalhista ou defesa para a sua empresa?
          </h2>
          <p className="font-gilroy text-lg text-brand-surface/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Agende uma conversa estratégica com nossos especialistas em Salto de Pirapora e Sorocaba para proteger seu negócio contra passivos evitáveis.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://wa.me/5515996662831?text=Ol%C3%A1%2C%20gostaria%20de%20uma%20orienta%C3%A7%C3%A3o%20em%20Direito%20Patronal%20para%20minha%20empresa."
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
            <span>Atendimento Corporativo Regional</span>
            <span>·</span>
            <span>Sigilo Profissional OAB</span>
          </div>
        </div>
      </section>
    </>
  );
}
