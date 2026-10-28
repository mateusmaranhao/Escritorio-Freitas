import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { GoogleReviews } from '../components/GoogleReviews';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldAlert, 
  FileCheck2, 
  Scale, 
  ArrowRight, 
  ChevronDown, 
  CheckCircle2, 
  Building2, 
  MessageSquare,
  AlertTriangle,
  ShieldCheck,
  FileSignature,
  FileSpreadsheet,
  Gavel,
  ClipboardList,
  AlertOctagon,
  FileX2
} from 'lucide-react';

export function DefesaAdministrativa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Defesa Administrativa Trabalhista | Fiscalizações MTE, Autos de Infração e TAC",
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
    "serviceType": "Defesa Administrativa Trabalhista Patronal, Fiscalização MTE, Impugnação de Autos de Infração e TAC no MPT",
    "description": "Proteção jurídica da empresa diante de órgãos de fiscalização do governo. Acompanhamento de auditorias do Ministério do Trabalho e Emprego (MTE), impugnação de multas administrativas e negociação de Termo de Ajustamento de Conduta (TAC) com o MPT.",
    "url": "https://escritoriofreitas.com.br/servicos/direito-patronal/defesa-administrativa"
  };

  const faqs = [
    {
      question: "O que a empresa deve fazer imediatamente ao receber um Auto de Infração do Ministério do Trabalho (MTE)?",
      answer: "O primeiro passo é não pagar nem deixar o prazo decorrer sem contestação. O prazo legal para apresentar Defesa Administrativa perante a Superintendência Regional do Trabalho é de apenas 10 (dez) dias corridos a partir da ciência da notificação. Nossa equipe analisa prontamente a regularidade formal do auto (competência, descrição dos fatos, enquadramento na CLT/NRs), verifica se havia exigência legal de dupla visita prévia e redige a impugnação técnica para anular a penalidade ou reduzir substancialmente o seu valor."
    },
    {
      question: "Minha empresa é obrigada a assinar o TAC proposto pelo Ministério Público do Trabalho (MPT)?",
      answer: "Não. A assinatura de um Termo de Ajustamento de Conduta (TAC) é um ato estritamente voluntário. Porém, recusar sem fundamentação ou ignorar a audiência ministerial pode levar o Procurador do Trabalho a ajuizar uma Ação Civil Pública (ACP) com pedidos vultosos de indenização por dano moral coletivo. Por outro lado, assinar um TAC sem assessoria jurídica especializada é perigoso, pois o documento tem eficácia de título executivo extrajudicial e pode impor obrigações inviáveis com multas diárias (astreintes) pesadas. Nossa função é negociar cláusulas factíveis, prazos adequados à realidade da empresa e valores proporcionais."
    },
    {
      question: "Como funciona a regra da 'Dupla Visita' para empresas e em quais casos ela pode anular a multa?",
      answer: "Pelo artigo 55 da Lei Complementar nº 123/2006 (Estatuto da Micro e Pequena Empresa) e pelo artigo 627 da CLT, a fiscalização trabalhista deve ser prioritariamente orientadora em microempresas, empresas de pequeno porte (EPP), estabelecimentos novos com até 90 dias ou na vigência de nova legislação. Nesses casos, o Auditor Fiscal do Trabalho é obrigado a realizar uma primeira visita de orientação e fixar prazo para correção antes de lavrar qualquer auto. Se o auditor autuou a empresa na primeira inspeção sem observar esse critério, o auto de infração padece de vício insanável de nulidade."
    },
    {
      question: "Se o recurso administrativo for negado no Ministério do Trabalho, ainda é possível anular a penalidade?",
      answer: "Sim. As decisões da esfera administrativa não impedem o controle de legalidade pelo Poder Judiciário (art. 5º, XXXV da CF). Quando a Superintendência do Trabalho ou o Conselho de Recursos mantêm uma autuação arbitrária ou desproporcional, ajuizamos uma Ação Anulatória de Débito Fiscal perante a Justiça do Trabalho, com pedido de tutela provisória de urgência (liminar) para suspender a exigibilidade do débito e evitar que a empresa tenha seu CNPJ negativado no CADIN ou sofra execução fiscal."
    },
    {
      question: "O que acontece se a empresa for notificada para fiscalização e não apresentar os documentos exigidos?",
      answer: "O não atendimento à notificação do auditor fiscal ou a apresentação incompleta de documentos gera a lavratura automática de novos autos de infração por embaraço à fiscalização (art. 630 da CLT), além de multas individuais por cada item regulamentar não comprovado (PGR, PCMSO, LTCAT, controle de jornada, etc.). Por isso, organizamos e revisamos previamente todo o acervo documental da empresa antes de protocolar a resposta junto ao órgão fiscalizador."
    }
  ];

  const problemas = [
    {
      icon: <AlertOctagon className="w-6 h-6 text-brand-primary" />,
      title: "Multas Cumulativas e Valores Desproporcionais",
      desc: "Auditores fiscais aplicam penalidades multiplicadas por número de funcionários ou por item de Normas Regulamentadoras (NRs), gerando passivos surpresa de alto impacto financeiro."
    },
    {
      icon: <FileSignature className="w-6 h-6 text-brand-primary" />,
      title: "Propostas de TAC Abusivas ou Inexequíveis no MPT",
      desc: "Minutas de Termos de Ajustamento de Conduta com exigências operacionais impossíveis de cumprir em curto prazo e multas diárias (astreintes) que asfixiam a empresa."
    },
    {
      icon: <FileX2 className="w-6 h-6 text-brand-primary" />,
      title: "Prazos Curtos e Risco de Dívida Ativa da União",
      desc: "Notificações do MTE concedem prazos exíguos (geralmente 10 dias). A inércia ou defesa genérica provoca o trânsito em julgado administrativo e inscrição no CADIN/Dívida Ativa."
    },
    {
      icon: <Gavel className="w-6 h-6 text-brand-primary" />,
      title: "Desdobramento para Ações Civis Públicas (ACP)",
      desc: "Investigações ministeriais não solucionadas tecnicamente na fase de Inquérito Civil frequentemente evoluem para processos judiciais com indenizações coletivas vultosas."
    }
  ];

  const solucoes = [
    {
      numero: "01",
      titulo: "Fiscalizações do Trabalho (MTE)",
      descricao: "Acompanhamento estratégico integral de auditorias fiscais conduzidas pelo Ministério do Trabalho e Emprego. Análise prévia e saneamento de documentos (PGR, PCMSO, LTCAT, fichas de EPI, espelhos de ponto) e elaboração de respostas técnicas para neutralizar autuações antes da lavratura de multas."
    },
    {
      numero: "02",
      titulo: "Defesa contra Autos de Infração",
      descricao: "Impugnação e recursos administrativos rigorosos para cancelar ou reduzir autos de infração lavrados por auditores fiscais. Demonstração de vícios de forma, nulidade por inobservância da dupla visita orientadora, bis in idem e adequação da realidade fática às normas legais."
    },
    {
      numero: "03",
      titulo: "TAC (Termo de Ajustamento de Conduta) no MPT",
      descricao: "Defesa e representação combativa perante o Ministério Público do Trabalho em Notícias de Fato e Inquéritos Civis. Intermediação de acordos e negociação de cláusulas com cronogramas exequíveis para a operação da empresa, eliminando exigências abusivas e penalidades desmedidas."
    },
    {
      numero: "04",
      titulo: "Ações Anulatórias & Blindagem Judicial",
      descricao: "Patrocínio de Ações Anulatórias de Multa Administrativa perante a Justiça do Trabalho, com requerimento de liminares para suspender a cobrança fiscal, resguardar a emissão de Certidões Negativas (CNDT) e impedir penhoras operacionais."
    }
  ];

  const passos = [
    {
      step: "01",
      title: "Triagem Imediata & Análise de Prazos",
      desc: "Recebemos a notificação do MTE ou intimação do MPT e mapeamos imediatamente os prazos peremptórios de resposta, identificando vícios formais evidentes."
    },
    {
      step: "02",
      title: "Auditoria Probatória & Documental",
      desc: "Reunimos com agilidade os laudos de segurança (PGR/PCMSO), registros de ponto, acordos coletivos e comprovantes da empresa para embasar a justificativa fática."
    },
    {
      step: "03",
      title: "Protocolo de Impugnação Técnica",
      desc: "Redação de defesa administrativa estruturada com teses consolidadas da CLT, jurisprudência do TST e diretrizes de proporcionalidade da Lei da Liberdade Econômica."
    },
    {
      step: "04",
      title: "Acompanhamento & Negociação Institucional",
      desc: "Atuação presencial ou telemática em audiências de mediação no MPT, interposição de recursos em 2ª instância administrativa e proteção contínua da empresa."
    }
  ];

  return (
    <>
      <SEO 
        title="Defesa Administrativa Trabalhista: MTE, Autos de Infração e TAC | Escritório Freitas"
        description="Proteção jurídica para empresas em fiscalizações do Ministério do Trabalho (MTE), impugnação de autos de infração e negociação de TAC junto ao MPT em Salto de Pirapora e Sorocaba."
        url="/servicos/direito-patronal/defesa-administrativa"
        schema={schema}
      />

      {/* 1. HERO — ESPECÍFICA PARA DEFESA ADMINISTRATIVA */}
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
                <Link to="/servicos" className="hover:text-brand-primary">Áreas de Atuação</Link>
                <span>/</span>
                <Link to="/servicos/direito-patronal" className="hover:text-brand-primary">Direito Trabalhista Empresarial</Link>
                <span>/</span>
                <span className="text-brand-primary font-semibold">Defesa Administrativa</span>
              </div>

              <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-[#333333] font-semibold leading-[1.2] mb-3.5 max-w-2xl tracking-tight">
                Proteção da empresa diante de órgãos de fiscalização do governo.
              </h1>

              <p className="font-gilroy text-sm sm:text-base md:text-[17px] text-[#555555] max-w-xl leading-relaxed mb-6 font-normal">
                Atuação jurídica especializada em fiscalizações do Ministério do Trabalho e Emprego (MTE), impugnação fundamentada de autos de infração e negociação estratégica de Termos de Ajustamento de Conduta (TAC) com o Ministério Público do Trabalho (MPT).
              </p>

              {/* Botões de Ação na Hero */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8">
                <a 
                  href="https://wa.me/5515996662831?text=Ol%C3%A1%2C%20preciso%20de%20assessoria%20jur%C3%ADdica%20para%20minha%20empresa%20em%20uma%20fiscaliza%C3%A7%C3%A3o%20do%20MTE%20ou%20MPT."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-2.5 bg-brand-primary text-brand-surface font-gilroy text-xs uppercase tracking-widest px-6 py-3.5 hover:bg-black transition-colors duration-300"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Falar com Especialista em Defesa Fiscal</span>
                </a>
                <a 
                  href="#como-funciona"
                  className="inline-flex justify-center items-center gap-2 border border-brand-primary/30 text-brand-primary font-gilroy text-xs uppercase tracking-widest px-5 py-3.5 hover:bg-brand-primary/5 transition-colors duration-300"
                >
                  <span>Entenda a Metodologia</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Indicadores Específicos do Serviço */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-5 border-t border-[#333333]/10">
                <div className="flex items-start gap-2.5">
                  <ClipboardList className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-poppins text-xs font-semibold text-[#333333] leading-snug">Fiscalizações MTE</h4>
                    <p className="font-gilroy text-[11px] text-[#6c7279] leading-tight">Acompanhamento e suporte prévio em auditorias fiscais</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-poppins text-xs font-semibold text-[#333333] leading-snug">Autos de Infração</h4>
                    <p className="font-gilroy text-[11px] text-[#6c7279] leading-tight">Impugnação técnica para anulação ou redução de multas</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Scale className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-poppins text-xs font-semibold text-[#333333] leading-snug">Acordos & TAC no MPT</h4>
                    <p className="font-gilroy text-[11px] text-[#6c7279] leading-tight">Intermediação com prazos factíveis e sem cláusulas abusivas</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-5 relative overflow-hidden hidden lg:block bg-[#222222]">
            <img 
              src="/equipe.jpg" 
              alt="Defesa Administrativa Trabalhista Patronal — Escritório Freitas" 
              className="absolute inset-0 w-full h-full object-cover object-center grayscale-[15%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 border border-white/20 p-6 backdrop-blur-md bg-black/40">
              <span className="text-[10px] font-gilroy uppercase tracking-[0.25em] text-white/70 block mb-1">
                Direito Trabalhista Empresarial Especializado
              </span>
              <span className="font-poppins text-brand-surface text-lg font-semibold mb-1.5 block">
                Segurança Regulatória & Solidez
              </span>
              <p className="text-brand-surface/85 text-xs leading-relaxed font-gilroy">
                Não permita que autos de infração e exigências inexequíveis desestabilizem a operação da sua empresa. Atuamos com visão jurídica estratégica desde a primeira intimação fiscal.
              </p>
            </div>
          </div>
        </div>
        
        {/* Sub-bar Hero: 4 Pilares da Defesa Administrativa */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 border-t border-[#333333]/10 divide-y md:divide-y-0 md:divide-x divide-[#333333]/10">
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">01 · Auditorias</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Fiscalizações do Trabalho</h3>
            <p className="text-xs text-[#555555] font-gilroy">Acompanhamento e resposta técnica a auditorias fiscais do MTE.</p>
          </div>
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">02 · Impugnação</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Autos de Infração</h3>
            <p className="text-xs text-[#555555] font-gilroy">Defesa administrativa e recursos para cancelamento de multas.</p>
          </div>
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">03 · Negociação</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Acordos de TAC no MPT</h3>
            <p className="text-xs text-[#555555] font-gilroy">Intermediação com o Ministério Público para prazos factíveis.</p>
          </div>
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">04 · Blindagem</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Prevenção Regulatória</h3>
            <p className="text-xs text-[#555555] font-gilroy">Adequação de NRs e processos para impedir reincidências fiscais.</p>
          </div>
        </div>
      </section>

      {/* 2. PROBLEMA — OS RISCOS DA FISCALIZAÇÃO ADMINISTRATIVA */}
      <section className="py-24 px-6 lg:px-20 bg-brand-surface-alt/30 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <span className="font-gilroy text-[11px] uppercase tracking-[0.3em] text-brand-muted block mb-4">
              Cenário de Fiscalização do Trabalho
            </span>
            <h2 className="font-poppins text-3xl md:text-5xl text-brand-primary leading-tight mb-6">
              Autuações do governo e fiscalizações trabalhistas colocam em risco a saúde financeira do seu negócio.
            </h2>
            <p className="font-gilroy text-lg text-brand-secondary leading-relaxed">
              O processo administrativo trabalhista é implacável: os prazos de impugnação são curtos e a falta de defesa técnica imediata transforma autos de infração em execuções fiscais com penhora de contas e bloqueio de certidões.
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
                  Risco Mitigado com Defesa Técnica
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-brand-surface border-l-4 border-brand-primary flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="font-poppins text-lg text-brand-primary block mb-1">
                Sua empresa recebeu notificação do Ministério do Trabalho ou intimação do MPT?
              </span>
              <p className="font-gilroy text-sm text-brand-secondary">
                Não envie respostas de forma desacompanhada nem deixe o prazo expirar. A primeira manifestação administrativa fixa a estratégia e evita revelia ou confissão involuntária.
              </p>
            </div>
            <a 
              href="https://wa.me/5515996662831?text=Ol%C3%A1%2C%20recebi%20uma%20notifica%C3%A7%C3%A3o%20do%20MTE%20%2F%20MPT%20e%20preciso%20de%20an%C3%A1lise%20urgente."
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap px-6 py-3.5 bg-brand-primary text-brand-surface font-gilroy text-xs uppercase tracking-widest hover:bg-black transition-colors"
            >
              Solicitar Análise de Notificação
            </a>
          </div>
        </div>
      </section>

      {/* 3. SOLUÇÃO — COMO O ESCRITÓRIO FREITAS DEFENDE A SUA EMPRESA */}
      <section className="py-24 px-6 lg:px-20 bg-brand-surface border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <span className="font-gilroy text-[11px] uppercase tracking-[0.3em] text-brand-muted block mb-4">
                Nossa Atuação Técnica
              </span>
              <h2 className="font-poppins text-3xl md:text-5xl text-brand-primary leading-tight mb-6">
                Abordagem estratégica perante todos os órgãos de fiscalização do trabalho.
              </h2>
              <p className="font-gilroy text-base text-brand-secondary leading-relaxed mb-8">
                Nossa assessoria atua preventivamente e contenciosamente no contencioso administrativo. Conhecemos a fundo a rotina dos auditores fiscais e procuradores para construir defesas com sólido embasamento legal e probatório.
              </p>

              <div className="space-y-6 pt-6 border-t border-brand-primary/10">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-poppins text-base text-brand-primary">Auditoria Documental & Resposta Preventiva</h4>
                    <p className="font-gilroy text-xs text-brand-secondary leading-relaxed">
                      Triagem imediata de livros de registro, folhas de pagamento, laudos de segurança (PGR, PCMSO, LTCAT) e cartões de ponto antes do envio aos fiscais.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-poppins text-base text-brand-primary">Sustentação Técnica em Todas as Instâncias</h4>
                    <p className="font-gilroy text-xs text-brand-secondary leading-relaxed">
                      Defesas em 1ª instância (Superintendência do Trabalho), recursos ao Colegiado de Recursos e, se necessário, Ação Anulatória na Justiça do Trabalho.
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
              Como funciona a defesa administrativa
            </h2>
            <p className="font-gilroy text-brand-secondary text-base">
              Etapas claras para recepcionar a notificação, estruturar as provas e neutralizar penalidades financeiras.
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
                Autoridade Jurídica Comprovada · Salto de Pirapora e Região
              </span>
              <h2 className="font-poppins text-3xl md:text-4xl text-brand-primary">
                A segurança de contar com quem domina a defesa administrativa
              </h2>
            </div>
            <p className="font-gilroy text-sm text-brand-secondary max-w-md">
              Mais de 157 avaliações públicas no Google atestam a nossa dedicação, rigor processual e excelência na proteção do patrimônio de empresas e empregadores da região.
            </p>
          </div>

          <GoogleReviews />
        </div>
      </section>

      {/* 6. FAQ — PERGUNTAS FREQUENTES */}
      <section className="py-24 px-6 lg:px-20 bg-brand-surface border-b border-brand-primary/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-gilroy text-[11px] uppercase tracking-[0.3em] text-brand-muted block mb-3">
              Dúvidas Técnicas Frequentes
            </span>
            <h2 className="font-poppins text-3xl md:text-5xl text-brand-primary mb-4">
              Perguntas frequentes sobre Defesa Administrativa
            </h2>
            <p className="font-gilroy text-brand-secondary text-base">
              Esclareça como atuamos perante o Ministério do Trabalho e Ministério Público do Trabalho.
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
            Defesa Administrativa · Proteção Imediata & Sigilo Absoluto
          </span>
          <h2 className="font-poppins text-4xl sm:text-5xl md:text-6xl text-brand-surface leading-tight mb-8">
            Sua empresa foi notificada pelo MTE ou intimada pelo MPT?
          </h2>
          <p className="font-gilroy text-lg text-brand-surface/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Não deixe os prazos administrativos expirarem sem defesa técnica. Agende um atendimento de urgência com nossa equipe em Salto de Pirapora e região para proteger seu patrimônio e suas certidões.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://wa.me/5515996662831?text=Ol%C3%A1%2C%20preciso%20de%20assessoria%20jur%C3%ADdica%20urgente%20para%20defesa%20em%20fiscaliza%C3%A7%C3%A3o%20do%20MTE%20%2F%20MPT."
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
