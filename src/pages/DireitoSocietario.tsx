import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { GoogleReviews } from '../components/GoogleReviews';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  Briefcase, 
  Scale, 
  ArrowRight, 
  ChevronDown, 
  MessageSquare,
  AlertOctagon,
  ShieldCheck,
  CheckCircle2,
  FileSignature,
  PieChart,
  Users,
  Compass
} from 'lucide-react';

export function DireitoSocietario() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Direito Societário e Estruturação de Negócios | Escritório Freitas",
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
    "areaServed": ["Salto de Pirapora", "Sorocaba", "Votorantim", "Araçoiaba da Serra", "Região Metropolitana de Sorocaba"],
    "serviceType": "Constituição de Empresas, Acordo de Sócios, Holdings e Planejamento Sucessório, Fusões e Aquisições (M&A)",
    "description": "Assessoria jurídica em organização societária, governança corporativa, Acordo de Sócios, constituição de Holdings familiares e operações de M&A.",
    "url": "https://escritoriofreitas.com.br/servicos/direito-empresarial/direito-societario"
  };

  const faqs = [
    {
      question: "Qual a diferença entre o Contrato Social e o Acordo de Sócios?",
      answer: "O Contrato Social é um documento público arquivado na Junta Comercial (JUCESP), que traz a estrutura básica da sociedade (objeto social, capital e administração). O Acordo de Sócios (art. 118 da Lei das S.A. aplicado às LTDAs) é um pacto parassocial estritamente confidencial, onde os sócios definem regras minuciosas sobre direito de preferência (Right of First Refusal), cláusulas de venda conjunta (Tag Along e Drag Along), critérios de apuração de haveres na saída ou falecimento de um sócio, quóruns qualificados de votação e resolução de impasses (deadlock)."
    },
    {
      question: "Como a criação de uma Holding Familiar protege o patrimônio e reduz custos de inventário?",
      answer: "A Holding Familiar e Patrimonial transfere os imóveis e participações dos patriarcas para uma pessoa jurídica controlada pela família. Por meio da doação de quotas com reserva de usufruto vitalício e cláusulas restritivas (incomunicabilidade, impenhorabilidade e inalienabilidade), evita-se o moroso e custoso inventário judicial, assegura-se expressiva economia tributária de ITCMD e IRPF na locação/venda e garante-se que o comando do negócio permaneça com os fundadores."
    },
    {
      question: "O que acontece se um dos sócios falecer e a empresa não tiver regras prévias de sucessão?",
      answer: "Pela regra padrão do Código Civil, na falta de disposição expressa, as quotas do falecido são liquidadas ou os herdeiros passam a exigir entrada na sociedade. Isso frequentemente provoca disputas familiares amargas, entrada de cônjuges e filhos inexperientes no comando e asfixia financeira para pagar a apuração de haveres de uma só vez. O Acordo de Sócios previne essa tragédia prevendo prazos elastecidos de pagamento e impedindo o ingresso forçado de herdeiros na gestão."
    },
    {
      question: "Como funciona a Due Diligence jurídica em operações de compra e venda de empresas (M&A)?",
      answer: "A Due Diligence é uma auditoria jurídica investigativa multidisciplinar realizada antes de fechar a compra ou fusão de um negócio. Analisamos minuciosamente passivos tributários, contingências trabalhistas ocultas, processos cíveis em curso, regularidade de marcas, contratos comerciais vigentes e certidões dos sócios. Esse levantamento gera uma matriz de riscos que embasa descontos no preço de compra (valuation) e cláusulas de retenção de preço (escrow account)."
    },
    {
      question: "Qual o melhor tipo societário para o meu modelo de negócio: LTDA, S.A. ou SPE?",
      answer: "A Sociedade Limitada (LTDA) oferece simplicidade e custos reduzidos de publicação, sendo ideal para a maioria das empresas e holdings. A Sociedade Anônima (S.A.) é recomendada para negócios que buscam captação de investidores externos ou emissão de debêntures. Já a Sociedade de Propósito Específico (SPE) é a ferramenta de eleição para empreendimentos imobiliários e parcerias com tempo delimitado, isolando os riscos da operação."
    }
  ];

  const problemas = [
    {
      icon: <AlertOctagon className="w-6 h-6 text-brand-primary" />,
      title: "Ausência de Acordo de Sócios e Impasses",
      desc: "Brigas entre sócios que paralisam a tomada de decisões da empresa por falta de regras pré-estabelecidas para desempate de votos e saída amigável."
    },
    {
      icon: <Users className="w-6 h-6 text-brand-primary" />,
      title: "Risco de Herdeiros Despreparados na Gestão",
      desc: "Falecimento de sócio sem planejamento sucessório, forçando a convivência diária com herdeiros ou dilapidação do caixa para pagar haveres."
    },
    {
      icon: <Briefcase className="w-6 h-6 text-brand-primary" />,
      title: "Compras e Fusões com Passivos Ocultos",
      desc: "Aquisição de empresas sem Due Diligence prévia, herdando dívidas trabalhistas, fiscais e multas ambientais impagáveis."
    },
    {
      icon: <Building2 className="w-6 h-6 text-brand-primary" />,
      title: "Tributação Excessiva sobre Patrimônio Familiar",
      desc: "Imóveis e ativos mantidos na pessoa física sujeitos a tributação máxima de aluguel (até 27,5%) e custos exorbitantes de inventário futuro."
    }
  ];

  const solucoes = [
    {
      numero: "01",
      titulo: "Constituição & Reestruturação Societária",
      desc: "Definição do melhor arranjo societário (LTDA, S.A., EIRELI/SLU, SPE) com redação de Contrato Social robusto, regras claras de representação e proteção contra desconsideração da personalidade jurídica."
    },
    {
      numero: "02",
      titulo: "Acordo de Sócios e Governança",
      desc: "Redação de pactos parassociais confidenciais prevendo cláusulas de Tag Along, Drag Along, Shotgun/Buy or Sell, quóruns de deliberação, avaliação de quotas e mediação de conflitos."
    },
    {
      numero: "03",
      titulo: "Planejamento Sucessório e Holdings",
      desc: "Criação de Holdings Patrimoniais e Familiares, doação de quotas com reserva de usufruto e cláusulas de incomunicabilidade e impenhorabilidade para transmissão pacífica de patrimônio."
    },
    {
      numero: "04",
      titulo: "Operações de M&A (Fusões e Aquisições)",
      desc: "Assessoria completa em compra, venda e incorporação de empresas: Due Diligence de passivos, Memorando de Entendimentos (MoU), Acordo de Confidencialidade (NDA) e Contrato Definitivo de Compra e Venda de Quotas (QPA)."
    }
  ];

  const passos = [
    {
      step: "01",
      title: "Mapeamento da Estrutura Atual",
      desc: "Analisamos o quadro de sócios, participações cruzadas, histórico familiar e os objetivos estratégicos da organização."
    },
    {
      step: "02",
      title: "Desenho da Arquitetura Societária",
      desc: "Desenhamos a modelagem jurídica mais eficiente, contemplando segurança patrimonial, sucessão e eficiência tributária."
    },
    {
      step: "03",
      title: "Redação dos Instrumentos & Pactos",
      desc: "Elaboramos contratos sociais, aditivos, acordos de sócios detalhados e atas de assembleia com máxima precisão técnica."
    },
    {
      step: "04",
      title: "Registro, Governança & Acompanhamento",
      desc: "Protocolo perante a Junta Comercial (JUCESP), Cartórios de Imóveis e acompanhamento contínuo das deliberações sociais."
    }
  ];

  return (
    <>
      <SEO 
        title="Direito Societário, Acordo de Sócios e Holdings | Escritório Freitas"
        description="Assessoria em estruturação societária, Acordo de Sócios, Holdings patrimoniais, planejamento sucessório e operações de M&A em Salto de Pirapora e Sorocaba."
        url="/servicos/direito-empresarial/direito-societario"
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
                <span className="text-brand-primary font-semibold">Direito Societário</span>
              </div>

              <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-[#333333] font-semibold leading-[1.2] mb-3.5 max-w-2xl tracking-tight">
                Direito Societário e Estruturação de Negócios
              </h1>

              <p className="font-gilroy text-sm sm:text-base md:text-[17px] text-[#555555] max-w-xl leading-relaxed mb-6 font-normal">
                Organização legal estratégica da empresa e do relacionamento entre os sócios. Construímos acordos de sócios seguros, holdings familiares e assessoramos fusões e aquisições com blindagem patrimonial.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8">
                <a 
                  href="https://wa.me/5515996662831?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20Direito%20Societ%C3%A1rio%20e%20Estrutura%C3%A7%C3%A3o%20de%20Neg%C3%B3cios%20para%20minha%20empresa."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-2.5 bg-brand-primary text-brand-surface font-gilroy text-xs uppercase tracking-widest px-6 py-3.5 hover:bg-black transition-colors duration-300"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Falar com Especialista Societário</span>
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
                  <FileSignature className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-poppins text-xs font-semibold text-[#333333] leading-snug">Acordo de Sócios</h4>
                    <p className="font-gilroy text-[11px] text-[#6c7279] leading-tight">Regras claras de governança, saída e sucessão</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Building2 className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-poppins text-xs font-semibold text-[#333333] leading-snug">Holdings Familiares</h4>
                    <p className="font-gilroy text-[11px] text-[#6c7279] leading-tight">Blindagem de patrimônio e transição sem inventário</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <PieChart className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-poppins text-xs font-semibold text-[#333333] leading-snug">M&A e Due Diligence</h4>
                    <p className="font-gilroy text-[11px] text-[#6c7279] leading-tight">Compra e venda de participações com auditoria de riscos</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-5 relative overflow-hidden hidden lg:block bg-[#222222]">
            <img 
              src="/equipe.jpg" 
              alt="Direito Societário — Escritório Freitas" 
              className="absolute inset-0 w-full h-full object-cover object-center grayscale-[15%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 border border-white/20 p-6 backdrop-blur-md bg-black/40">
              <span className="text-[10px] font-gilroy uppercase tracking-[0.25em] text-white/70 block mb-1">
                Governança & Arquitetura Societária
              </span>
              <span className="font-poppins text-brand-surface text-lg font-semibold mb-1.5 block">
                Alianças Societárias Sólidas
              </span>
              <p className="text-brand-surface/85 text-xs leading-relaxed font-gilroy">
                Uma empresa não pode prosperar sobre alicerces contratuais frágeis entre seus sócios. Desenhamos a estrutura corporativa para evitar brigas, perdas tributárias e descontinuidade dos negócios.
              </p>
            </div>
          </div>
        </div>
        
        {/* Sub-bar Hero */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 border-t border-[#333333]/10 divide-y md:divide-y-0 md:divide-x divide-[#333333]/10">
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">01 · Constituição</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Estrutura Jurídica</h3>
            <p className="text-xs text-[#555555] font-gilroy">Escolha entre LTDA, S.A., SPE e elaboração de estatutos.</p>
          </div>
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">02 · Governança</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Acordo de Sócios</h3>
            <p className="text-xs text-[#555555] font-gilroy">Pactos parassociais com regras de votação e saída de quotas.</p>
          </div>
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">03 · Sucessão</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Holdings Familiares</h3>
            <p className="text-xs text-[#555555] font-gilroy">Proteção do patrimônio e transmissão sem atritos hereditários.</p>
          </div>
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">04 · Fusões</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Operações de M&A</h3>
            <p className="text-xs text-[#555555] font-gilroy">Auditoria prévia (Due Diligence) e compra/venda de empresas.</p>
          </div>
        </div>
      </section>

      {/* 2. PROBLEMA */}
      <section className="py-24 px-6 lg:px-20 bg-brand-surface-alt/30 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <span className="font-gilroy text-[11px] uppercase tracking-[0.3em] text-brand-muted block mb-4">
              Riscos de Conflito Societário
            </span>
            <h2 className="font-poppins text-3xl md:text-5xl text-brand-primary leading-tight mb-6">
              A maioria das empresas fecha não por falta de clientes, mas por brigas entre sócios e desordem jurídica.
            </h2>
            <p className="font-gilroy text-lg text-brand-secondary leading-relaxed">
              Iniciar uma sociedade baseada apenas na confiança verbal é o caminho mais rápido para impasses destrutivos. Quando ocorrem desavenças ou falecimentos, a falta de documentos societários blindados destrói o valor da empresa.
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
                Segurança Corporativa & Governança
              </span>
              <h2 className="font-poppins text-3xl md:text-5xl text-brand-primary leading-tight mb-6">
                Como estruturamos e blindamos as relações societárias da sua empresa.
              </h2>
              <p className="font-gilroy text-base text-brand-secondary leading-relaxed mb-8">
                Criamos um ecossistema contratual e societário que protege os fundadores, prevê saídas organizadas, economiza tributos e atrai investidores com governança impecável.
              </p>
              <div className="p-6 bg-brand-surface-alt/40 border border-brand-primary/10 space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                  <span className="font-gilroy text-sm text-brand-primary font-medium">Previsão e desempate de conflitos (deadlock clauses)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                  <span className="font-gilroy text-sm text-brand-primary font-medium">Isolamento de patrimônio pessoal em Holdings</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                  <span className="font-gilroy text-sm text-brand-primary font-medium">Segurança jurídica chancelada em M&A e Due Diligence</span>
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
              Como funciona a consultoria societária
            </h2>
            <p className="font-gilroy text-brand-secondary text-base">
              Etapas claras para diagnosticar o modelo, redigir os acordos de governança e implementar a proteção patrimonial.
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
                A segurança de contar com quem domina o direito societário
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
              Perguntas frequentes sobre Direito Societário
            </h2>
            <p className="font-gilroy text-brand-secondary text-base">
              Esclareça dúvidas práticas sobre contratos sociais, acordos de sócios e proteção de patrimônio.
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
            Direito Societário · Governança & Sigilo Absoluto
          </span>
          <h2 className="font-poppins text-4xl sm:text-5xl md:text-6xl text-brand-surface leading-tight mb-8">
            Deseja estruturar sua sociedade ou blindar seu patrimônio?
          </h2>
          <p className="font-gilroy text-lg text-brand-surface/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Agende uma consulta estratégica com nossa equipe em Salto de Pirapora e Sorocaba para desenhar seu Acordo de Sócios ou estruturar sua Holding.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://wa.me/5515996662831?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20sobre%20Direito%20Societ%C3%A1rio%20e%20Acordo%20de%20S%C3%B3cios."
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
            <span>Atendimento Regional Salto de Pirapora e Sorocaba</span>
            <span>·</span>
            <span>Sigilo Profissional OAB</span>
          </div>
        </div>
      </section>
    </>
  );
}
