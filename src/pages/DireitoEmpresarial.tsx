import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { GoogleReviews } from '../components/GoogleReviews';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Briefcase, 
  ShieldCheck, 
  ArrowRight, 
  ChevronDown, 
  CheckCircle2, 
  AlertTriangle, 
  TrendingUp, 
  MessageSquare,
  Users2,
  FileText,
  Building2,
  Lock
} from 'lucide-react';

export function DireitoEmpresarial() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Direito Empresarial em Salto de Pirapora e Região",
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
    "serviceType": "Assessoria Jurídica Empresarial e Societária",
    "description": "Assessoria jurídica preventiva e contenciosa para empresas, contratos comerciais, estruturação societária e recuperação de ativos em Salto de Pirapora e Sorocaba.",
    "url": "https://escritoriofreitas.com.br/servicos/direito-empresarial"
  };

  const faqs = [
    {
      question: "Por que minha empresa deve investir em assessoria preventiva antes de ter um problema?",
      answer: "Contratar o advogado apenas quando a citação judicial chega na porta custa em média de 3 a 5 vezes mais caro do que prevenir o litígio. A assessoria preventiva estrutura contratos blindados, alinha rotinas de fornecimento e relacionamento com clientes e evita que pequenas falhas operacionais comprometam o fluxo de caixa ou o patrimônio pessoal dos sócios."
    },
    {
      question: "O que é um Acordo de Sócios e por que ele é essencial?",
      answer: "O Acordo de Sócios é um instrumento parassocial que define regras claras de convivência e tomada de decisão não contempladas no contrato social: regras de saída ou falecimento de um sócio, critérios de avaliação da empresa (valuation), critérios de voto, direito de preferência e soluções para impasses, prevenindo conflitos destrutivos que possam fechar a empresa."
    },
    {
      question: "Como funciona a recuperação de crédito e cobrança empresarial?",
      answer: "Atuamos em duas fases complementares: primeiro, através de cobrança extrajudicial estratégica (notificações fundamentadas, renegociações com garantias reais e instrumentos de confissão de dívida executáveis); caso não haja acordo amigável, ingressamos prontamente com ações de execução de títulos de crédito e arresto de bens."
    },
    {
      question: "O escritório atende pequenas e médias empresas (PMEs) ou apenas grandes indústrias?",
      answer: "Atendemos empresas de diversos portes: desde indústrias e empresas de serviços consolidadas na região de Sorocaba e Salto de Pirapora, até PMEs em fase de expansão. Adaptamos nosso plano de suporte e formato de atuação às necessidades e à complexidade de cada negócio."
    },
    {
      question: "Como funciona o acompanhamento do dia a dia da empresa?",
      answer: "O jurídico passa a atuar como um verdadeiro braço estratégico do negócio: canal direto e ágil via WhatsApp corporativo para dúvidas do dia a dia, reuniões periódicas de alinhamento com a diretoria, revisão ágil de minutas contratuais e acompanhamento integral de eventuais litígios."
    }
  ];

  const problemas = [
    {
      icon: <FileText className="w-6 h-6 text-brand-primary" />,
      title: "Contratos Frágeis com Clientes e Fornecedores",
      desc: "Minutas informais ou copiadas da internet sem garantias de pagamento, cláusulas de rescisão desfavoráveis ou penalidades impossíveis de executar."
    },
    {
      icon: <Users2 className="w-6 h-6 text-brand-primary" />,
      title: "Divergências Societárias e Impasses",
      desc: "Desentendimentos entre sócios sem regras preestabelecidas sobre remuneração, retirada de sócios ou sucessão, paralisando a gestão da companhia."
    },
    {
      icon: <Lock className="w-6 h-6 text-brand-primary" />,
      title: "Risco ao Patrimônio Pessoal dos Sócios",
      desc: "Falta de governança que facilita a desconsideração da personalidade jurídica, atingindo diretamente contas bancárias e bens particulares dos sócios."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-brand-primary" />,
      title: "Inadimplência Elevada e Falta de Títulos Executivos",
      desc: "Vendas e prestações de serviços sem comprovação adequada de entrega e habite-se, tornando a cobrança judicial lenta e incerta."
    }
  ];

  const solucoes = [
    {
      numero: "01",
      titulo: "Assessoria Jurídica Preventiva & Contínua",
      descricao: "O jurídico participando ativamente da tomada de decisão: consultoria direta aos sócios e diretores para antecipar cenários e blindar rotinas."
    },
    {
      numero: "02",
      titulo: "Arquitetura & Revisão de Contratos Comerciais",
      descricao: "Elaboração de contratos de prestação de serviços, fornecimento, representação comercial, distribuição e sigilo (NDA) com garantias robustas."
    },
    {
      numero: "03",
      titulo: "Estruturação Societária & Acordos de Sócios",
      descricao: "Governança corporativa, constituição e alteração de sociedades, resolução de disputas internas e planejamento sucessório empresarial."
    },
    {
      numero: "04",
      titulo: "Recuperação de Créditos & Execução",
      descricao: "Cobrança rápida extrajudicial e contenciosa de duplicatas, notas promissórias e títulos não adimplidos para recompor o caixa da empresa."
    }
  ];

  const passos = [
    {
      step: "01",
      title: "Diagnóstico da Operação",
      desc: "Conversamos com os gestores para compreender o modelo de negócio, o fluxo de faturamento e as principais ameaças jurídicas."
    },
    {
      step: "02",
      title: "Mapeamento & Auditoria de Riscos",
      desc: "Analisamos contratos vigentes, rotinas com prestadores, histórico societário e contingências em aberto para definir prioridades."
    },
    {
      step: "03",
      title: "Blindagem e Padronização",
      desc: "Reformulamos instrumentos contratuais, instituímos rotinas de compliance e formalizamos proteções societárias adequadas."
    },
    {
      step: "04",
      title: "Parceria Estratégica Continuada",
      desc: "Sua liderança ganha um suporte jurídico ágil e de confiança para validar novas parcerias e defender os interesses da empresa."
    }
  ];

  return (
    <>
      <SEO 
        title="Advogado Empresarial em Salto de Pirapora e Região | Escritório Freitas"
        description="Assessoria jurídica empresarial estratégica para líderes e negócios em Salto de Pirapora e Sorocaba. Contratos comerciais, societário e prevenção de litígios."
        url="/servicos/direito-empresarial"
        schema={schema}
      />

      {/* 1. HERO — ADAPTADO ESPECIFICAMENTE PARA DIREITO EMPRESARIAL */}
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
                <span className="text-brand-primary font-semibold">Direito Empresarial</span>
              </div>

              <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-[#333333] font-semibold leading-[1.2] mb-3.5 max-w-2xl tracking-tight">
                Orientação jurídica estratégica para líderes e negócios.
              </h1>

              <p className="font-gilroy text-sm sm:text-base md:text-[17px] text-[#555555] max-w-xl leading-relaxed mb-6 font-normal">
                O jurídico deve participar da decisão — não apenas da solução. Protegemos suas operações corporativas, estruturamos contratos sólidos e blindamos a continuidade da sua empresa.
              </p>

              {/* Botões de Ação na Hero */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8">
                <a 
                  href="https://wa.me/5515996662831?text=Ol%C3%A1%2C%20gostaria%20de%20uma%20orienta%C3%A7%C3%A3o%20em%20Direito%20Empresarial."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-2.5 bg-brand-primary text-brand-surface font-gilroy text-xs uppercase tracking-widest px-6 py-3.5 hover:bg-black transition-colors duration-300"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Falar com Advogado Empresarial</span>
                </a>
                <a 
                  href="#como-funciona"
                  className="inline-flex justify-center items-center gap-2 border border-brand-primary/30 text-brand-primary font-gilroy text-xs uppercase tracking-widest px-5 py-3.5 hover:bg-brand-primary/5 transition-colors duration-300"
                >
                  <span>Nosso Método</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Indicadores Específicos de Direito Empresarial (sem repetição de +10 anos) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-5 border-t border-[#333333]/10">
                <div className="flex items-start gap-2.5">
                  <Briefcase className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-poppins text-xs font-semibold text-[#333333] leading-snug">Blindagem Contratual</h4>
                    <p className="font-gilroy text-[11px] text-[#6c7279] leading-tight">Instrumentos robustos para fechar negócios</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Users2 className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-poppins text-xs font-semibold text-[#333333] leading-snug">Direito Societário</h4>
                    <p className="font-gilroy text-[11px] text-[#6c7279] leading-tight">Acordo de sócios e governança preventiva</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <TrendingUp className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-poppins text-xs font-semibold text-[#333333] leading-snug">Decisão Estratégica</h4>
                    <p className="font-gilroy text-[11px] text-[#6c7279] leading-tight">Consultoria contínua para mitigar passivos</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-5 relative overflow-hidden hidden lg:block bg-[#222222]">
            <img 
              src="/equipe.jpg" 
              alt="Advocacia Empresarial — Escritório Freitas" 
              className="absolute inset-0 w-full h-full object-cover object-center grayscale-[15%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 border border-white/20 p-6 backdrop-blur-md bg-black/40">
              <span className="text-[10px] font-gilroy uppercase tracking-[0.25em] text-white/70 block mb-1">
                Especialidade Empresarial
              </span>
              <span className="font-poppins text-brand-surface text-lg font-semibold mb-1.5 block">
                Aliança Estratégica
              </span>
              <p className="text-brand-surface/85 text-xs leading-relaxed font-gilroy">
                Não somos apenas advogados para assinar papéis: entendemos a dinâmica do seu negócio para viabilizar decisões seguras e proteger o patrimônio da empresa.
              </p>
            </div>
          </div>
        </div>
        
        {/* Sub-bar Hero: 4 Pilares da Atuação Empresarial */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 border-t border-[#333333]/10 divide-y md:divide-y-0 md:divide-x divide-[#333333]/10">
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">01 · Consultoria</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Prevenção Jurídica</h3>
            <p className="text-xs text-[#555555] font-gilroy">Assessoria contínua para decisões corporativas.</p>
          </div>
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">02 · Contratos</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Elaboração Comercial</h3>
            <p className="text-xs text-[#555555] font-gilroy">Contratos com clientes, distribuidores e parceiros.</p>
          </div>
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">03 · Governança</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Direito Societário</h3>
            <p className="text-xs text-[#555555] font-gilroy">Acordo de sócios e resolução de divergências.</p>
          </div>
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">04 · Ativos</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Recuperação de Créditos</h3>
            <p className="text-xs text-[#555555] font-gilroy">Execuções e cobranças de títulos inadimplidos.</p>
          </div>
        </div>
      </section>

      {/* 2. PROVA SOCIAL — REPUTAÇÃO & GOOGLE REVIEWS */}
      <section className="py-20 px-6 lg:px-20 border-b border-brand-primary/10 bg-brand-surface">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div>
              <span className="font-gilroy text-[11px] uppercase tracking-[0.3em] text-brand-muted block mb-3">
                Credibilidade Regional · Salto de Pirapora & Sorocaba
              </span>
              <h2 className="font-poppins text-3xl md:text-4xl text-brand-primary">
                O que dizem empresários e clientes que nos procuram
              </h2>
            </div>
            <p className="font-gilroy text-sm text-brand-secondary max-w-md">
              Mais de 157 avaliações no Google que confirmam nosso comprometimento com a agilidade, ética e solidez nos negócios dos nossos clientes.
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
              Ameaças ao Negócio
            </span>
            <h2 className="font-poppins text-3xl md:text-5xl text-brand-primary leading-tight mb-6">
              Empreender sem respaldo jurídico é assumir riscos que podem inviabilizar sua operação.
            </h2>
            <p className="font-gilroy text-lg text-brand-secondary leading-relaxed">
              Decisões comerciais tomadas sem análise prévia de cláusulas, riscos trabalhistas acumulados e disputas societárias mal resolvidas ameaçam o futuro do seu empreendimento.
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
                  Vulnerabilidade Corporativa
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-brand-surface border-l-4 border-brand-primary flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="font-poppins text-lg text-brand-primary block mb-1">
                Sua empresa está fechando novos contratos ou passando por mudanças societárias?
              </span>
              <p className="font-gilroy text-sm text-brand-secondary">
                Conte com o apoio da nossa equipe jurídica para estruturar acordos sólidos e blindar suas operações.
              </p>
            </div>
            <a 
              href="https://wa.me/5515996662831?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20assessoria%20jur%C3%ADdica%20empresarial."
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap px-6 py-3.5 bg-brand-primary text-brand-surface font-gilroy text-xs uppercase tracking-widest hover:bg-black transition-colors"
            >
              Agendar Diagnóstico Inicial
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
                Proteção e Competitividade
              </span>
              <h2 className="font-poppins text-3xl md:text-5xl text-brand-primary leading-tight mb-6">
                Segurança jurídica para quem constrói, investe e empreende.
              </h2>
              <p className="font-gilroy text-base text-brand-secondary leading-relaxed mb-8">
                Atuamos como verdadeiros parceiros estratégicos do seu negócio. Não utilizamos soluções de prateleira: entendemos a sua operação para entregar respostas práticas, rápidas e fundamentadas.
              </p>

              <div className="space-y-6 pt-6 border-t border-brand-primary/10">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-poppins text-base text-brand-primary">Velocidade nas Respostas</h4>
                    <p className="font-gilroy text-xs text-brand-secondary leading-relaxed">
                      Atendimento direto para que seus negócios não fiquem travados aguardando pareceres burocráticos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-poppins text-base text-brand-primary">Blindagem Patrimonial</h4>
                    <p className="font-gilroy text-xs text-brand-secondary leading-relaxed">
                      Separação rígida e técnica entre patrimônio da empresa e patrimônio pessoal dos sócios e familiares.
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
              Fluxo Estruturado
            </span>
            <h2 className="font-poppins text-3xl md:text-5xl text-brand-primary mb-4">
              Como funciona nossa assessoria empresarial
            </h2>
            <p className="font-gilroy text-brand-secondary text-base">
              Abordagem transparente e alinhada às necessidades reais do seu dia a dia corporativo.
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
              Dúvidas sobre Direito Empresarial e Assessoria Jurídica
            </h2>
            <p className="font-gilroy text-brand-secondary text-base">
              Esclareça como atuamos para fortalecer e proteger a sua empresa.
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
            Assessoria de Alto Nível Regional
          </span>
          <h2 className="font-poppins text-4xl sm:text-5xl md:text-6xl text-brand-surface leading-tight mb-8">
            Pronto para colocar o jurídico como parceiro estratégico da sua empresa?
          </h2>
          <p className="font-gilroy text-lg text-brand-surface/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Agende uma reunião preliminar com nossos advogados em Salto de Pirapora ou receba atendimento direto em Sorocaba. Proteja suas decisões com mais de 10 anos de solidez.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://wa.me/5515996662831?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20conversa%20empresarial."
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
              <span>Ver Localização e Dados de Contato</span>
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-brand-surface/10 flex flex-wrap justify-center items-center gap-8 font-gilroy text-xs text-brand-surface/60">
            <span>Rua Maximiano Fidelis, 45 — Centro, Salto de Pirapora</span>
            <span>·</span>
            <span>Atendimento a Empresas de Sorocaba e Região</span>
            <span>·</span>
            <span>Sigilo & Governança Jurídica</span>
          </div>
        </div>
      </section>
    </>
  );
}
