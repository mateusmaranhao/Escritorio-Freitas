import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { GoogleReviews } from '../components/GoogleReviews';
import { motion, AnimatePresence } from 'motion/react';
import { 
  AlertTriangle, 
  RefreshCw, 
  Scale, 
  ArrowRight, 
  ChevronDown, 
  MessageSquare,
  AlertOctagon,
  ShieldCheck,
  CheckCircle2,
  FileSpreadsheet,
  Gavel,
  Landmark,
  UserX
} from 'lucide-react';

export function GestaoCrises() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Gestão de Crises, Recuperação e Falência | Escritório Freitas",
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
    "serviceType": "Recuperação Judicial e Extrajudicial, Reestruturação de Dívidas Bancárias, Processo Falimentar e Dissolução de Sociedade",
    "description": "Assessoria jurídica em momentos de crise financeira severa ou litígios graves entre sócios: Recuperação Judicial (Lei 11.101/05), repactuação com credores, blindagem de patrimônio e dissolução societária.",
    "url": "https://escritoriofreitas.com.br/servicos/direito-empresarial/gestao-de-crises-recuperacao-falencia"
  };

  const faqs = [
    {
      question: "O que é o 'Stay Period' na Recuperação Judicial e como ele protege a empresa?",
      answer: "O deferimento do processamento da Recuperação Judicial (art. 6º da Lei nº 11.101/2005) concede o chamado 'Stay Period': uma moratória legal de 180 dias (prorrogável por igual período) em que todas as execuções, penhoras e bloqueios judiciais contra a empresa ficam imediatamente suspensos. Isso devolve o fôlego ao fluxo de caixa, impede o leilão de máquinas essenciais à produção e abre a janela necessária para aprovação do Plano de Recuperação junto aos credores."
    },
    {
      question: "Qual a diferença entre Recuperação Judicial e Recuperação Extrajudicial?",
      answer: "A Recuperação Extrajudicial é uma negociação direta e mais célere entre a empresa devedora e determinadas classes de credores (geralmente bancos e fornecedores estratégicos), sem envolver a totalidade dos débitos. Uma vez atingido o quórum de adesão legal (mais da metade dos créditos abrangidos), o plano é levado ao juiz apenas para homologação, vinculando inclusive os credores dissidentes com custos e desgaste de imagem muito menores."
    },
    {
      question: "Como funciona a Dissolução Parcial de Sociedade quando os sócios entram em conflito?",
      answer: "Quando a 'affectio societatis' (vontade de cooperar) é rompida de forma irreversível, o sócio retirante ou os remanescentes podem requerer a Dissolução Parcial de Sociedade (arts. 599 a 609 do CPC). Conduzimos a ação judicial ou acordo extrajudicial com balanço especial de determinação para avaliação justa do valor patrimonial da empresa (valuation) e parcelamento legal dos haveres, impedindo que a saída do sócio quebre a saúde financeira do negócio."
    },
    {
      question: "O patrimônio pessoal dos sócios pode ser protegido durante a crise financeira?",
      answer: "Sim, desde que a gestão societária tenha sido pautada pela boa-fé e separação patrimonial. A Lei de Liberdade Econômica restringiu a desconsideração da personalidade jurídica (art. 50 do Código Civil), exigindo comprovação inequívoca de fraude deliberada ou confusão patrimonial. Nossa atuação preventiva e contenciosa afasta a responsabilização pessoal dos sócios e administradores perante execuções bancárias e fiscais."
    },
    {
      question: "Quando a autofalência é a saída juridicamente mais responsável para a empresa?",
      answer: "Quando a dívida se torna comprovadamente impagável e a operação não tem mais viabilidade econômica, o pedido voluntário de autofalência conduzido com assessoria jurídica encerra o ciclo de forma transparente. Isso estanca a incidência desenfreada de juros bancários, organiza o pagamento equânime dos credores na ordem da lei e encerra as obrigações do empresário no prazo legal, evitando a configuração de crimes falimentares."
    }
  ];

  const problemas = [
    {
      icon: <AlertOctagon className="w-6 h-6 text-brand-primary" />,
      title: "Bloqueios Bancários Imediatos (SisbaJud)",
      desc: "Execuções de dívidas bancárias e fornecedores que congelam o caixa da empresa, impossibilitando o pagamento de salários e tributos."
    },
    {
      icon: <UserX className="w-6 h-6 text-brand-primary" />,
      title: "Ruptura Irreversível entre os Sócios",
      desc: "Brigas que paralisam assinaturas bancárias, emissão de notas fiscais e travam as decisões mais básicas do negócio."
    },
    {
      icon: <Landmark className="w-6 h-6 text-brand-primary" />,
      title: "Juros Abusivos e Asfixia de Caixa",
      desc: "Contratos de empréstimos e rolagem de dívidas bancárias com encargos predatórios que corroem todo o lucro operacional."
    },
    {
      icon: <Gavel className="w-6 h-6 text-brand-primary" />,
      title: "Risco de Falência Decretada por Credor",
      desc: "Pedidos de falência com base em títulos protestados (Art. 94 da Lei 11.101/05) exigindo resposta defensiva imediata."
    }
  ];

  const solucoes = [
    {
      numero: "01",
      titulo: "Recuperação Judicial (Lei nº 11.101/05)",
      desc: "Elaboração da petição inicial com perícia contábil prévia, obtenção do Stay Period (suspensão de penhoras e execuções), estruturação do Plano de Recuperação Judicial (PRJ) e defesa em Assembleia Geral de Credores."
    },
    {
      numero: "02",
      titulo: "Recuperação Extrajudicial & Repactuação",
      desc: "Mediação de acordos coletivos com instituições financeiras e principais fornecedores para desconto substancial da dívida (haircut), carências de até 24 meses e homologação perante a Vara Empresarial."
    },
    {
      numero: "03",
      titulo: "Dissolução de Sociedade & Haveres",
      desc: "Condução de saídas consensuais ou Ação de Dissolução Parcial de Sociedade, com perícia contábil para apuração de haveres justa e fixação de parcelamento que não asfixie a empresa continuadora."
    },
    {
      numero: "04",
      titulo: "Processo Falimentar & Blindagem dos Sócios",
      desc: "Representação em pedidos de falência ajuizados por credores, formulação de depósitos elisivos e condução responsável de autofalência com proteção ao patrimônio pessoal e fiscal dos administradores."
    }
  ];

  const passos = [
    {
      step: "01",
      title: "Diagnóstico Econômico & Jurídico",
      desc: "Analisamos o endividamento total, ativos penhorados, fluxo de caixa e o grau de litigiosidade entre os sócios."
    },
    {
      step: "02",
      title: "Definição do Rito Estratégico",
      desc: "Escolhemos entre repactuação extrajudicial, pedido de Recuperação Judicial ou ação de dissolução societária."
    },
    {
      step: "03",
      title: "Medidas de Urgência & Blindagem",
      desc: "Ajuizamento de medidas cautelares para destrancar contas bancárias, sustar leilões e suspender execuções em curso."
    },
    {
      step: "04",
      title: "Reestruturação & Acordo Final",
      desc: "Aprovação do plano de pagamento com carências e deságios, devolvendo viabilidade e perenidade ao empreendimento."
    }
  ];

  return (
    <>
      <SEO 
        title="Gestão de Crises, Recuperação Judicial e Dissolução | Escritório Freitas"
        description="Assessoria jurídica em recuperação judicial e extrajudicial, reestruturação de dívidas e dissolução de sociedade em Salto de Pirapora e Sorocaba."
        url="/servicos/direito-empresarial/gestao-de-crises-recuperacao-falencia"
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
                <span className="text-brand-primary font-semibold">Gestão de Crises</span>
              </div>

              <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-[#333333] font-semibold leading-[1.2] mb-3.5 max-w-2xl tracking-tight">
                Gestão de Crises, Recuperação e Falência
              </h1>

              <p className="font-gilroy text-sm sm:text-base md:text-[17px] text-[#555555] max-w-xl leading-relaxed mb-6 font-normal">
                Atuação técnica combativa em momentos de dificuldade financeira aguda ou litígios graves entre sócios. Reestruturamos dívidas com bancos e credores, suspendemos execuções e preservamos a atividade da empresa.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8">
                <a 
                  href="https://wa.me/5515996662831?text=Ol%C3%A1%2C%20minha%20empresa%20est%C3%A1%20enfrentando%20uma%20crise%20financeira%20ou%20lit%C3%ADgio%20societ%C3%A1rio%20e%20preciso%20de%20orienta%C3%A7%C3%A3o."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-2.5 bg-brand-primary text-brand-surface font-gilroy text-xs uppercase tracking-widest px-6 py-3.5 hover:bg-black transition-colors duration-300"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Atendimento de Urgência</span>
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
                  <RefreshCw className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-poppins text-xs font-semibold text-[#333333] leading-snug">Recuperação Judicial</h4>
                    <p className="font-gilroy text-[11px] text-[#6c7279] leading-tight">Suspensão de penhoras e renegociação em massa</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <UserX className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-poppins text-xs font-semibold text-[#333333] leading-snug">Dissolução Societária</h4>
                    <p className="font-gilroy text-[11px] text-[#6c7279] leading-tight">Resolução de impasses e apuração de haveres</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-poppins text-xs font-semibold text-[#333333] leading-snug">Proteção dos Sócios</h4>
                    <p className="font-gilroy text-[11px] text-[#6c7279] leading-tight">Blindagem legal do patrimônio pessoal dos administradores</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-5 relative overflow-hidden hidden lg:block bg-[#222222]">
            <img 
              src="/equipe.jpg" 
              alt="Gestão de Crises e Recuperação Judicial — Escritório Freitas" 
              className="absolute inset-0 w-full h-full object-cover object-center grayscale-[15%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 border border-white/20 p-6 backdrop-blur-md bg-black/40">
              <span className="text-[10px] font-gilroy uppercase tracking-[0.25em] text-white/70 block mb-1">
                Superação de Crises & Turnaround
              </span>
              <span className="font-poppins text-brand-surface text-lg font-semibold mb-1.5 block">
                Preservação da Atividade Empresarial
              </span>
              <p className="text-brand-surface/85 text-xs leading-relaxed font-gilroy">
                Momentos de crise exigem sangue frio, precisão processual e visão estratégica. Agimos com rapidez para proteger as contas da empresa e negociar prazos que permitem a retomada do crescimento.
              </p>
            </div>
          </div>
        </div>
        
        {/* Sub-bar Hero */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 border-t border-[#333333]/10 divide-y md:divide-y-0 md:divide-x divide-[#333333]/10">
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">01 · Moratória</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Recuperação Judicial</h3>
            <p className="text-xs text-[#555555] font-gilroy">Suspensão de 180 dias de execuções e aprovação de plano.</p>
          </div>
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">02 · Bancos</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Repactuação de Dívidas</h3>
            <p className="text-xs text-[#555555] font-gilroy">Negociação extrajudicial com deságios e carências estendidas.</p>
          </div>
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">03 · Sócios</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Dissolução de Sociedade</h3>
            <p className="text-xs text-[#555555] font-gilroy">Saída de sócios sem destruição do capital de giro da empresa.</p>
          </div>
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">04 · Liquidação</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Encerramento Legal</h3>
            <p className="text-xs text-[#555555] font-gilroy">Autofalência e encerramento com extinção formal das dívidas.</p>
          </div>
        </div>
      </section>

      {/* 2. PROBLEMA */}
      <section className="py-24 px-6 lg:px-20 bg-brand-surface-alt/30 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <span className="font-gilroy text-[11px] uppercase tracking-[0.3em] text-brand-muted block mb-4">
              Cenário de Crise & Insolvência
            </span>
            <h2 className="font-poppins text-3xl md:text-5xl text-brand-primary leading-tight mb-6">
              A inércia diante de dívidas impagáveis destrói o negócio e atinge o patrimônio pessoal dos sócios.
            </h2>
            <p className="font-gilroy text-lg text-brand-secondary leading-relaxed">
              Ignorar os primeiros sinais de crise ou adiar a reestruturação judicial faz com que credores bancários tomem a dianteira, executem garantias reais, bloqueiem contas pelo SisbaJud e requeiram a falência da empresa.
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
                Reestruturação & Solvência
              </span>
              <h2 className="font-poppins text-3xl md:text-5xl text-brand-primary leading-tight mb-6">
                Como resgatamos e reorganizamos sua empresa em momentos críticos.
              </h2>
              <p className="font-gilroy text-base text-brand-secondary leading-relaxed mb-8">
                Utilizamos todos os instrumentos previstos na Lei de Recuperação de Empresas para blindar a operação contra penhoras, renegociar dívidas com prazos elastecidos e deságios significativos, devolvendo o equilíbrio financeiro.
              </p>
              <div className="p-6 bg-brand-surface-alt/40 border border-brand-primary/10 space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                  <span className="font-gilroy text-sm text-brand-primary font-medium">Suspensão imediata de execuções judiciais (Stay Period)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                  <span className="font-gilroy text-sm text-brand-primary font-medium">Carências de 12 a 24 meses para início de pagamentos</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                  <span className="font-gilroy text-sm text-brand-primary font-medium">Proteção à residência e patrimônio da família dos sócios</span>
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
              Como funciona nossa gestão de crises
            </h2>
            <p className="font-gilroy text-brand-secondary text-base">
              Etapas calculadas para proteger a operação, estancar sangramentos de caixa e pactuar o plano de recuperação.
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
                A segurança de contar com quem domina recuperação e gestão de crises
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
              Perguntas frequentes sobre Recuperação e Crises
            </h2>
            <p className="font-gilroy text-brand-secondary text-base">
              Entenda como a legislação protege a continuidade do negócio em momentos de aperto financeiro.
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
            Recuperação Judicial & Gestão de Crises · Sigilo Absoluto
          </span>
          <h2 className="font-poppins text-4xl sm:text-5xl md:text-6xl text-brand-surface leading-tight mb-8">
            Sua empresa está sob pressão financeira ou litígio societário?
          </h2>
          <p className="font-gilroy text-lg text-brand-surface/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Não espere as contas serem bloqueadas ou o pedido de falência ser protocolado. Agende uma consulta confidencial e imediata com nossa equipe em Salto de Pirapora e Sorocaba.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://wa.me/5515996662831?text=Ol%C3%A1%2C%20preciso%20de%20orienta%C3%A7%C3%A3o%20urgente%20para%20reestrutura%C3%A7%C3%A3o%20financeira%20ou%20dissolu%C3%A7%C3%A3o%20de%20sociedade."
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
