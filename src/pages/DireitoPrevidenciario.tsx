import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { GoogleReviews } from '../components/GoogleReviews';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, 
  HelpCircle, 
  ShieldCheck, 
  ArrowRight, 
  ChevronDown, 
  CheckCircle2, 
  CalendarClock, 
  TrendingUp, 
  MessageSquare,
  AlertCircle,
  Clock,
  Award
} from 'lucide-react';

export function DireitoPrevidenciario() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Direito Previdenciário em Salto de Pirapora e Região",
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
    "serviceType": "Planejamento Previdenciário e Benefícios INSS",
    "description": "Assessoria especializada em Direito Previdenciário, planejamento de aposentadoria, revisão de benefícios e recursos contra o INSS em Salto de Pirapora e Sorocaba.",
    "url": "https://escritoriofreitas.com.br/servicos/direito-previdenciario"
  };

  const faqs = [
    {
      question: "Quando devo começar a planejar minha aposentadoria?",
      answer: "O ideal é iniciar o planejamento com 3 a 5 anos de antecedência da idade estimada. Isso permite corrigir inconsistências no CNIS (extrato de contribuições), resgatar certidões de vínculos antigos, comprovar tempo especial por insalubridade e escolher a regra de transição pós-Reforma mais vantajosa financeiramente."
    },
    {
      question: "Meu benefício foi negado pelo INSS. O que posso fazer?",
      answer: "Um indeferimento administrativo não é a palavra final. Muitas decisões do INSS são tomadas de forma automatizada por sistemas que não consideram provas materiais importantes. Analisamos a fundamentação da negativa e podemos ingressar com recurso administrativo ou ação judicial para comprovar o direito e requerer todos os valores retroativos desde a data de entrada do requerimento."
    },
    {
      question: "Tempo de trabalho rural ou com insalubridade ainda pode ser convertido?",
      answer: "Sim. O tempo trabalhado na lavoura em regime de economia familiar e o trabalho em condições nocivas à saúde (insalubres ou perigosas) prestado antes da Reforma da Previdência (novembro de 2019) conferem acréscimo no tempo de contribuição ou direito à aposentadoria especial, mediante a apresentação de laudos técnicos (PPP e LTCAT)."
    },
    {
      question: "Vocês atendem apenas aposentadorias ou outros benefícios?",
      answer: "Atendemos todas as demandas previdenciárias: aposentadoria por idade, tempo de contribuição, aposentadoria especial, benefício por incapacidade temporária ou permanente (auxílio por incapacidade/aposentadoria por invalidez), pensão por morte, auxílio-reclusão e Benefício de Prestação Continuada (BPC/LOAS)."
    },
    {
      question: "O atendimento pode ser feito a distância?",
      answer: "Sim. Clientes de Sorocaba, Salto de Pirapora e outras regiões podem realizar todo o processo pelo WhatsApp e chamadas seguras, enviando extratos e documentos em PDF. Para quem prefere o contato face a face, nosso escritório físico no Centro de Salto de Pirapora está sempre de portas abertas."
    }
  ];

  const problemas = [
    {
      icon: <CalendarClock className="w-6 h-6 text-brand-primary" />,
      title: "Regras de Transição Confusas",
      desc: "A Reforma da Previdência criou múltiplas regras de pedágio e pontuação. Escolher a regra errada pode adiar sua aposentadoria em anos ou reduzir drasticamente o valor mensal."
    },
    {
      icon: <AlertCircle className="w-6 h-6 text-brand-primary" />,
      title: "Vínculos Ausentes no CNIS",
      desc: "Empresas que não repassaram as contribuições ou registros rasurados na carteira de trabalho deixam lacunas no INSS que travam a contagem do tempo de contribuição."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-brand-primary" />,
      title: "Cálculo de RMI Prejudicado",
      desc: "Requerer a aposentadoria sem simulação prévia pode fazer você aceitar um valor vitalício consideravelmente menor do que teria direito com os devidos descartes e acertos."
    },
    {
      icon: <FileText className="w-6 h-6 text-brand-primary" />,
      title: "Indeferimentos Automáticos",
      desc: "Negativas do INSS decorrentes de falhas na juntada de documentos ou de perícias médicas apressadas que ignoram a real gravidade do estado de saúde do segurado."
    }
  ];

  const solucoes = [
    {
      numero: "01",
      titulo: "Planejamento Previdenciário Completo",
      descricao: "Simulação matemática e jurídica de todos os cenários possíveis para identificar a data ideal e a maior renda mensal inicial para o seu benefício."
    },
    {
      numero: "02",
      titulo: "Acerto de Vínculos & Tempo Especial",
      descricao: "Regularização do extrato previdenciário (CNIS), averbação de período rural, serviço militar e conversão de tempo especial com laudos PPP e LTCAT."
    },
    {
      numero: "03",
      titulo: "Requerimento Estratégico no INSS",
      descricao: "Elaboração de petição administrativa fundamentada com dossiê probatório completo, minimizando o risco de exigências e demoras desnecessárias."
    },
    {
      numero: "04",
      titulo: "Ações Judiciais & Recursos Técnicos",
      descricao: "Defesa combativa contra decisões injustas do INSS perante a Justiça Federal, com cobrança rigorosa dos valores atrasados desde o primeiro pedido."
    }
  ];

  const passos = [
    {
      step: "01",
      title: "Triagem & Envio do Extrato (CNIS)",
      desc: "Você entra em contato conosco pelo WhatsApp. Solicitamos o seu extrato do Meu INSS para uma primeira checagem técnica."
    },
    {
      step: "02",
      title: "Auditoria Criteriosa do Histórico",
      desc: "Analisamos cada vínculo, contribuição, carteira de trabalho e períodos sem recolhimento para mapear direitos reais."
    },
    {
      step: "03",
      title: "Apresentação dos Cenários Reais",
      desc: "Mostramos com transparência quando você pode se aposentar, qual será o valor estimado e se vale a pena aguardar ou pedir imediatamente."
    },
    {
      step: "04",
      title: "Protocolo & Condução Diligente",
      desc: "Cuidamos de cada etapa perante o INSS ou na Justiça Federal, mantendo você sempre a par do andamento da sua causa."
    }
  ];

  return (
    <>
      <SEO 
        title="Advogado Previdenciário em Salto de Pirapora e Região | Escritório Freitas"
        description="Planejamento previdenciário, aposentadorias, revisão de benefícios e recursos contra o INSS em Salto de Pirapora e Sorocaba. Proteja seus anos de contribuição."
        url="/servicos/direito-previdenciario"
        schema={schema}
      />

      {/* 1. HERO — ADAPTADO ESPECIFICAMENTE PARA DIREITO PREVIDENCIÁRIO */}
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
                <span className="text-brand-primary font-semibold">Direito Previdenciário</span>
              </div>

              <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-[#333333] font-semibold leading-[1.2] mb-3.5 max-w-2xl tracking-tight">
                Planejamento e proteção para o seu futuro previdenciário.
              </h1>

              <p className="font-gilroy text-sm sm:text-base md:text-[17px] text-[#555555] max-w-xl leading-relaxed mb-6 font-normal">
                Análise criteriosa de benefícios, aposentadorias e orientações perante o INSS. Garanta que décadas de contribuição resultem no benefício com a maior renda mensal possível.
              </p>

              {/* Botões de Ação na Hero */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8">
                <a 
                  href="https://wa.me/5515996662831?text=Ol%C3%A1%2C%20gostaria%20de%20uma%20orienta%C3%A7%C3%A3o%20em%20Direito%20Previdenci%C3%A1rio."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-2.5 bg-brand-primary text-brand-surface font-gilroy text-xs uppercase tracking-widest px-6 py-3.5 hover:bg-black transition-colors duration-300"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Analisar Meu Benefício</span>
                </a>
                <a 
                  href="#como-funciona"
                  className="inline-flex justify-center items-center gap-2 border border-brand-primary/30 text-brand-primary font-gilroy text-xs uppercase tracking-widest px-5 py-3.5 hover:bg-brand-primary/5 transition-colors duration-300"
                >
                  <span>Como Funciona o Planejamento</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Indicadores Específicos de Direito Previdenciário (sem repetição de +10 anos) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-5 border-t border-[#333333]/10">
                <div className="flex items-start gap-2.5">
                  <CalendarClock className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-poppins text-xs font-semibold text-[#333333] leading-snug">Planejamento & Simulação</h4>
                    <p className="font-gilroy text-[11px] text-[#6c7279] leading-tight">Escolha da regra de transição mais vantajosa</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <FileText className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-poppins text-xs font-semibold text-[#333333] leading-snug">Correção de CNIS</h4>
                    <p className="font-gilroy text-[11px] text-[#6c7279] leading-tight">Acerto de vínculos e períodos sem registro</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-poppins text-xs font-semibold text-[#333333] leading-snug">Concessão & Revisão</h4>
                    <p className="font-gilroy text-[11px] text-[#6c7279] leading-tight">Ações contra negativas indevidas do INSS</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-5 relative overflow-hidden hidden lg:block bg-[#222222]">
            <img 
              src="/equipe.jpg" 
              alt="Advocacia Previdenciária — Escritório Freitas" 
              className="absolute inset-0 w-full h-full object-cover object-center grayscale-[15%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 border border-white/20 p-6 backdrop-blur-md bg-black/40">
              <span className="text-[10px] font-gilroy uppercase tracking-[0.25em] text-white/70 block mb-1">
                Especialidade Previdenciária
              </span>
              <span className="font-poppins text-brand-surface text-lg font-semibold mb-1.5 block">
                Cálculo & Planejamento Real
              </span>
              <p className="text-brand-surface/85 text-xs leading-relaxed font-gilroy">
                Não fazemos promessas irrealistas: calculamos cenários com base na legislação atual para você tomar a decisão mais vantajosa para o seu patrimônio.
              </p>
            </div>
          </div>
        </div>
        
        {/* Sub-bar Hero: 4 Áreas de Atuação Previdenciária */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 border-t border-[#333333]/10 divide-y md:divide-y-0 md:divide-x divide-[#333333]/10">
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">01 · Simulação</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Planejamento de Aposentadoria</h3>
            <p className="text-xs text-[#555555] font-gilroy">Estudo das regras de transição mais favoráveis.</p>
          </div>
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">02 · Revisão</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Acerto de CNIS & Vínculos</h3>
            <p className="text-xs text-[#555555] font-gilroy">Inclusão de períodos de contribuição omitidos.</p>
          </div>
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">03 · Especiais</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Tempo Rural & Insalubre</h3>
            <p className="text-xs text-[#555555] font-gilroy">Conversão de atividades especiais com laudos.</p>
          </div>
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">04 · Contencioso</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Benefícios Negados</h3>
            <p className="text-xs text-[#555555] font-gilroy">Ações judiciais perante a Justiça Federal.</p>
          </div>
        </div>
      </section>

      {/* 2. PROVA SOCIAL — REPUTAÇÃO & GOOGLE REVIEWS */}
      <section className="py-20 px-6 lg:px-20 border-b border-brand-primary/10 bg-brand-surface">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div>
              <span className="font-gilroy text-[11px] uppercase tracking-[0.3em] text-brand-muted block mb-3">
                Histórico de Dedicação · Salto de Pirapora & Região
              </span>
              <h2 className="font-poppins text-3xl md:text-4xl text-brand-primary">
                A segurança de quem tem atendimento de excelência
              </h2>
            </div>
            <p className="font-gilroy text-sm text-brand-secondary max-w-md">
              Clientes que confiaram no Escritório Freitas para destravar suas pendências previdenciárias e garantir os seus direitos conquistados ao longo da vida.
            </p>
          </div>

          <GoogleReviews />
        </div>
      </section>

      {/* 3. PROBLEMA — O QUE ESTÁ EM JOGO */}
      <section className="py-24 px-6 lg:px-20 bg-brand-surface-alt/30 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <span className="font-gilroy text-[11px] uppercase tracking-[0.3em] text-brand-muted block mb-4">
              Os Riscos Previdenciários
            </span>
            <h2 className="font-poppins text-3xl md:text-5xl text-brand-primary leading-tight mb-6">
              Pedir a aposentadoria sem planejar pode significar perder milhares de reais todos os anos.
            </h2>
            <p className="font-gilroy text-lg text-brand-secondary leading-relaxed">
              O sistema previdenciário brasileiro é um dos mais complexos do mundo. Pequenos erros no cadastro ou no momento do protocolo podem custar muito caro.
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
                  Risco Evitável com Análise
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-brand-surface border-l-4 border-brand-primary flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="font-poppins text-lg text-brand-primary block mb-1">
                Está em dúvida se já atingiu o tempo ou se deve aceitar o cálculo do INSS?
              </span>
              <p className="font-gilroy text-sm text-brand-secondary">
                Não aceite uma decisão sem auditoria técnica. Conheça as opções que a legislação oferece para o seu caso específico.
              </p>
            </div>
            <a 
              href="https://wa.me/5515996662831?text=Ol%C3%A1%2C%20gostaria%20de%20uma%20an%C3%A1lise%20previdenci%C3%A1ria."
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap px-6 py-3.5 bg-brand-primary text-brand-surface font-gilroy text-xs uppercase tracking-widest hover:bg-black transition-colors"
            >
              Consultar Situação
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
                Nossa Solução Técnica
              </span>
              <h2 className="font-poppins text-3xl md:text-5xl text-brand-primary leading-tight mb-6">
                Rigor analítico para garantir a melhor concessão possível.
              </h2>
              <p className="font-gilroy text-base text-brand-secondary leading-relaxed mb-8">
                Combinamos experiência jurídica e cálculos minuciosos para que cada mês de contribuição seja valorizado de acordo com as melhores teses aplicáveis ao seu histórico.
              </p>

              <div className="space-y-6 pt-6 border-t border-brand-primary/10">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-poppins text-base text-brand-primary">Sem Promessas Fáceis</h4>
                    <p className="font-gilroy text-xs text-brand-secondary leading-relaxed">
                      Trabalhamos com transparência: você saberá exatamente as chances, prazos estimados e valores previstos com base na lei.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-poppins text-base text-brand-primary">Resgate de Direitos Ocultos</h4>
                    <p className="font-gilroy text-xs text-brand-secondary leading-relaxed">
                      Investigamos períodos especiais, insalubridade, tempo rural na infância e contribuições descontinuadas que aumentam seu tempo.
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

      {/* 5. COMO FUNCIONA — ETAPAS DO PLANEJAMENTO */}
      <section id="como-funciona" className="py-24 px-6 lg:px-20 bg-brand-surface-alt/20 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-gilroy text-[11px] uppercase tracking-[0.3em] text-brand-muted block mb-3">
              Processo de Atendimento
            </span>
            <h2 className="font-poppins text-3xl md:text-5xl text-brand-primary mb-4">
              Como funciona o acompanhamento previdenciário
            </h2>
            <p className="font-gilroy text-brand-secondary text-base">
              Etapas estruturadas para assegurar a melhor estratégia antes de protocolar qualquer pedido.
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
              Perguntas Frequentes
            </span>
            <h2 className="font-poppins text-3xl md:text-5xl text-brand-primary mb-4">
              Dúvidas comuns sobre INSS e Aposentadorias
            </h2>
            <p className="font-gilroy text-brand-secondary text-base">
              Respostas diretas e esclarecedoras para ajudar no seu planejamento.
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
            Atendimento Personalizado
          </span>
          <h2 className="font-poppins text-4xl sm:text-5xl md:text-6xl text-brand-surface leading-tight mb-8">
            Quer saber quando e como você pode se aposentar com segurança?
          </h2>
          <p className="font-gilroy text-lg text-brand-surface/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Envie sua mensagem pelo WhatsApp. Nossa equipe jurídica em Salto de Pirapora analisará sua documentação para orientar o melhor caminho.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://wa.me/5515996662831?text=Ol%C3%A1%2C%20gostaria%20de%20uma%20orienta%C3%A7%C3%A3o%20em%20Direito%20Previdenci%C3%A1rio."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-surface text-brand-deep font-gilroy text-xs uppercase tracking-widest px-8 py-5 hover:bg-white transition-colors duration-300 font-semibold"
            >
              <MessageSquare className="w-4 h-4 text-brand-deep" />
              <span>Falar com Advogado Previdenciário</span>
            </a>
            <Link 
              to="/contato"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 border border-brand-surface/30 text-brand-surface font-gilroy text-xs uppercase tracking-widest px-8 py-5 hover:bg-brand-surface/10 transition-colors duration-300"
            >
              <span>Ver Localização do Escritório</span>
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-brand-surface/10 flex flex-wrap justify-center items-center gap-8 font-gilroy text-xs text-brand-surface/60">
            <span>Rua Maximiano Fidelis, 45 — Centro, Salto de Pirapora</span>
            <span>·</span>
            <span>Atendimento Regional em Sorocaba</span>
            <span>·</span>
            <span>Análise Técnica sem Compromisso</span>
          </div>
        </div>
      </section>
    </>
  );
}
