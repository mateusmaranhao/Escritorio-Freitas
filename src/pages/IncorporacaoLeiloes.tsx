import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { GoogleReviews } from '../components/GoogleReviews';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Gavel, 
  Building2, 
  Scale, 
  ArrowRight, 
  ChevronDown, 
  MessageSquare,
  AlertTriangle,
  ShieldCheck,
  CheckCircle2,
  FileCheck2,
  FileSpreadsheet,
  Coins,
  BadgePercent,
  Layers,
  Landmark
} from 'lucide-react';

export function IncorporacaoLeiloes() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Incorporação Imobiliária, Loteamentos e Assessoria em Leilões | Escritório Freitas",
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
    "serviceType": "Memorial de Incorporação Imobiliária (Lei 4.591/64), Loteamentos (Lei 6.766/79), Arrematação em Leilões Judiciais e Imissão na Posse",
    "description": "Assessoria jurídica estratégica para construtoras, loteadoras e arrematantes de leilão. Registro de memorial de incorporação, patrimônio de afetação e desocupação pós-leilão.",
    "url": "https://escritoriofreitas.com.br/servicos/direito-imobiliario/incorporacao-imobiliaria-leiloes"
  };

  const faqs = [
    {
      question: "Por que uma construtora não pode vender unidades na planta antes de registrar o Memorial de Incorporação?",
      answer: "O artigo 32 da Lei nº 4.591/1964 proíbe expressamente a comercialização ou oferta de unidades autônomas na planta antes do arquivamento do Memorial de Incorporação no Cartório de Registro de Imóveis (CRI). A venda precoce sem registro constitui contravenção e crime contra a economia popular (art. 65), além de expor a construtora à devolução em dobro ou anulação dos contratos com indenizações pesadas. Elaboramos todo o acervo técnico e documental exigido para aprovação do registro em cartório."
    },
    {
      question: "O que é o Patrimônio de Afetação e quais são os benefícios tributários para a incorporadora (RET)?",
      answer: "A instituição do Patrimônio de Afetação (art. 31-A da Lei 4.591/64) segrega o terreno e as receitas da obra do patrimônio geral da construtora, tornando o empreendimento imune à falência da empresa. Além da máxima segurança transmitida aos compradores, o patrimônio de afetação habilita a incorporadora ao Regime Especial de Tributação (RET), reduzindo drasticamente a carga tributária unificada (IRPJ, CSLL, PIS e COFINS) para apenas 4% da receita auferida."
    },
    {
      question: "Quais são os principais riscos ao arrematar um imóvel em Leilão Judicial ou Extrajudicial?",
      answer: "Arrematar em leilão pode render lucros de 40% a 60% sobre o valor de mercado, mas exige análise prévia minuciosa do edital e dos autos do processo. Os riscos mais graves incluem: nulidade de intimação de coproprietários ou cônjuge, existência de credor hipotecário não intimado, débitos fiscais e de IPTU que não constam como sub-rogados no preço, condomínio acumulado e ocupantes com contratos de locação antigos com cláusula de vigência averbada."
    },
    {
      question: "Como funciona a desocupação do imóvel após a arrematação em leilão (Imissão na Posse)?",
      answer: "No Leilão Judicial, expedida a Carta de Arrematação pelo juiz, requeremos no próprio processo a expedição imediata do Mandado de Imissão na Posse com ordem de arrombamento e reforço policial se necessário, desocupando o imóvel de forma rápida. No Leilão Extrajudicial (Lei nº 9.514/1997 - alienação fiduciária), ajuizamos Ação de Reintegração de Posse com pedido de liminar para desocupação compulsória em até 60 dias."
    },
    {
      question: "Como o escritório assessora a aprovação e regularização de Loteamentos (Lei nº 6.766/1979)?",
      answer: "Assessoramos a loteadora desde a fase de Due Diligence da gleba bruta, passando pelos estudos de viabilidade ambiental (CETESB), GRAPROHAB, termo de compromisso de obras de infraestrutura com a Prefeitura Municipal, até a elaboração do contrato padrão de venda de lotes e registro especial no CRI."
    }
  ];

  const problemas = [
    {
      icon: <AlertTriangle className="w-6 h-6 text-brand-primary" />,
      title: "Arrematação de Leilão Anulada por Vício Processual",
      desc: "Comprar um imóvel em hasta pública e ver o leilão ser anulado por falta de intimação prévia do devedor ou de credor fiduciário."
    },
    {
      icon: <Building2 className="w-6 h-6 text-brand-primary" />,
      title: "Impedimento de Vendas por Falta de Memorial",
      desc: "Lançamento imobiliário paralisado pelo cartório por exigências técnicas pendentes no registro da incorporação."
    },
    {
      icon: <Coins className="w-6 h-6 text-brand-primary" />,
      title: "Dívidas Ocultas de IPTU e Condomínio do Leilão",
      desc: "Edital falho que não transfere a responsabilidade das dívidas para o valor arrematado, surpreendendo o investidor com custos extras."
    },
    {
      icon: <Gavel className="w-6 h-6 text-brand-primary" />,
      title: "Dificuldade na Desocupação do Imóvel Ocupado",
      desc: "Arrematar o bem e não conseguir tomar posse devido a recursos protelatórios e embargos à arrematação do antigo morador."
    }
  ];

  const solucoes = [
    {
      numero: "01",
      titulo: "Memorial de Incorporação Imobiliária",
      desc: "Elaboração completa do dossiê do art. 32 da Lei 4.591/64: certidões de idoneidade, títulos de domínio, memorial descritivo, cálculo de áreas das frações ideais (quadros NBR 12.721), minuta da convenção e registro no CRI."
    },
    {
      numero: "02",
      titulo: "Patrimônio de Afetação & RET (4%)",
      desc: "Constituição formal do patrimônio de afetação na matrícula do empreendimento e adesão ao Regime Especial de Tributação (RET) junto à Receita Federal para expressiva economia tributária para a construtora."
    },
    {
      numero: "03",
      titulo: "Auditoria Prévia em Editais de Leilão",
      desc: "Due Diligence completa do edital de leilão, autos do processo de origem, cadeia de intimações, débitos propter rem, passivos tributários e viabilidade de lucro líquido na revenda."
    },
    {
      numero: "04",
      titulo: "Desocupação Célere & Imissão na Posse",
      desc: "Atuação jurídica imediata pós-arrematação para registro da Carta de Arrematação, expedição e cumprimento do Mandado de Imissão na Posse perante oficiais de justiça para entrega das chaves ao arrematante."
    }
  ];

  const passos = [
    {
      step: "01",
      title: "Análise de Viabilidade do Negócio",
      desc: "Avaliamos a gleba do empreendimento ou auditamos o processo judicial do imóvel levado a leilão."
    },
    {
      step: "02",
      title: "Saneamento de Riscos e Documentos",
      desc: "Expedição de certidões, superação de exigências ambientais/cartorárias e parecer de risco para o investidor."
    },
    {
      step: "03",
      title: "Registro Cartorário ou Arrematação",
      desc: "Protocolo do Memorial de Incorporação no CRI ou lance assistido com pagamento seguro em juízo."
    },
    {
      step: "04",
      title: "Venda das Unidades ou Imissão na Posse",
      desc: "Liberação formal para venda na planta ou desocupação do imóvel para comercialização com lucro."
    }
  ];

  return (
    <>
      <SEO 
        title="Incorporação Imobiliária e Assessoria em Leilões | Escritório Freitas"
        description="Assessoria jurídica para construtoras, memorial de incorporação (Lei 4.591/64), loteamentos e arrematação em leilões em Salto de Pirapora e Sorocaba."
        url="/servicos/direito-imobiliario/incorporacao-imobiliaria-leiloes"
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
                <Link to="/servicos/direito-imobiliario" className="hover:text-brand-primary">Direito Imobiliário</Link>
                <span>/</span>
                <span className="text-brand-primary font-semibold">Incorporação e Leilões</span>
              </div>

              <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-[#333333] font-semibold leading-[1.2] mb-3.5 max-w-2xl tracking-tight">
                Incorporação Imobiliária e Leilões de Imóveis
              </h1>

              <p className="font-gilroy text-sm sm:text-base md:text-[17px] text-[#555555] max-w-xl leading-relaxed mb-6 font-normal">
                Área avançada voltada para construtoras, incorporadoras e investidores. Estruturamos loteamentos e memoriais de incorporação e assessoramos a arrematação segura em leilões judiciais com imissão na posse célere.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8">
                <a 
                  href="https://wa.me/5515996662831?text=Ol%C3%A1%2C%20preciso%20de%20assessoria%20jur%C3%ADdica%20para%20Incorpora%C3%A7%C3%A3o%20Imobili%C3%A1ria%20ou%20Leil%C3%A3o%20de%20Im%C3%B3vel."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-2.5 bg-brand-primary text-brand-surface font-gilroy text-xs uppercase tracking-widest px-6 py-3.5 hover:bg-black transition-colors duration-300"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Falar com Especialista em Incorporação</span>
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
                  <Layers className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-poppins text-xs font-semibold text-[#333333] leading-snug">Memorial de Incorporação</h4>
                    <p className="font-gilroy text-[11px] text-[#6c7279] leading-tight">Registro no CRI para venda legal de unidades na planta</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Gavel className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-poppins text-xs font-semibold text-[#333333] leading-snug">Assessoria em Leilões</h4>
                    <p className="font-gilroy text-[11px] text-[#6c7279] leading-tight">Análise de editais e desocupação com mandado célere</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <BadgePercent className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-poppins text-xs font-semibold text-[#333333] leading-snug">RET & Afetação</h4>
                    <p className="font-gilroy text-[11px] text-[#6c7279] leading-tight">Patrimônio de afetação com tributação reduzida a 4%</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-5 relative overflow-hidden hidden lg:block bg-[#222222]">
            <img 
              src="/equipe.jpg" 
              alt="Incorporação Imobiliária e Leilões — Escritório Freitas" 
              className="absolute inset-0 w-full h-full object-cover object-center grayscale-[15%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 border border-white/20 p-6 backdrop-blur-md bg-black/40">
              <span className="text-[10px] font-gilroy uppercase tracking-[0.25em] text-white/70 block mb-1">
                Engenharia Jurídica Imobiliária
              </span>
              <span className="font-poppins text-brand-surface text-lg font-semibold mb-1.5 block">
                Grandes Negócios Sem Sobressaltos
              </span>
              <p className="text-brand-surface/85 text-xs leading-relaxed font-gilroy">
                Incorporações e arrematações em leilão envolvem montantes vultosos e regulamentação rígida. Garantimos o rigor técnico para que sua construtora ou investimento lucre com segurança jurídica absoluta.
              </p>
            </div>
          </div>
        </div>
        
        {/* Sub-bar Hero */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 border-t border-[#333333]/10 divide-y md:divide-y-0 md:divide-x divide-[#333333]/10">
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">01 · Construtoras</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Incorporação (Lei 4.591)</h3>
            <p className="text-xs text-[#555555] font-gilroy">Registro do memorial, convenção de condomínio e NBR 12.721.</p>
          </div>
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">02 · Economia</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Patrimônio de Afetação</h3>
            <p className="text-xs text-[#555555] font-gilroy">Blindagem contra falência e alíquota RET unificada a 4%.</p>
          </div>
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">03 · Investimento</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Auditoria de Leilões</h3>
            <p className="text-xs text-[#555555] font-gilroy">Análise prévia de editais, processos cíveis e riscos de nulidade.</p>
          </div>
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">04 · Posse</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Imissão na Posse Célere</h3>
            <p className="text-xs text-[#555555] font-gilroy">Desocupação compulsória e entrega das chaves ao arrematante.</p>
          </div>
        </div>
      </section>

      {/* 2. PROBLEMA */}
      <section className="py-24 px-6 lg:px-20 bg-brand-surface-alt/30 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <span className="font-gilroy text-[11px] uppercase tracking-[0.3em] text-brand-muted block mb-4">
              Riscos na Incorporação e Arrematações
            </span>
            <h2 className="font-poppins text-3xl md:text-5xl text-brand-primary leading-tight mb-6">
              Erros no registro da incorporação travam as vendas e leilões mal analisados geram prejuízos irreversíveis.
            </h2>
            <p className="font-gilroy text-lg text-brand-secondary leading-relaxed">
              Vender imóveis na planta sem o registro do memorial é crime contra a economia popular e causa a paralisação das obras. No mundo dos leilões, arrematar sem Due Diligence do processo acarreta a herança de dívidas milionárias e anos brigando para desocupar o imóvel.
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
                Estruturação de Alto Nível
              </span>
              <h2 className="font-poppins text-3xl md:text-5xl text-brand-primary leading-tight mb-6">
                Como viabilizamos incorporações e arrematações com alta rentabilidade.
              </h2>
              <p className="font-gilroy text-base text-brand-secondary leading-relaxed mb-8">
                Cuidamos de toda a interface jurídica perante os Cartórios de Registro de Imóveis, prefeituras e Varas Judiciais, permitindo que a construtora lance seus empreendimentos com velocidade e o investidor arremate com total segurança.
              </p>
              <div className="p-6 bg-brand-surface-alt/40 border border-brand-primary/10 space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                  <span className="font-gilroy text-sm text-brand-primary font-medium">Aprovação de memorial no cartório sem devoluções</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                  <span className="font-gilroy text-sm text-brand-primary font-medium">Redução de tributos para 4% com RET e Afetação</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                  <span className="font-gilroy text-sm text-brand-primary font-medium">Desocupação célere e lucro garantido no leilão</span>
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
              Como funciona nossa assessoria em incorporação e leilão
            </h2>
            <p className="font-gilroy text-brand-secondary text-base">
              Etapas estruturadas desde o estudo do terreno ou edital até o registro final e imissão na posse.
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
                A segurança de contar com quem domina incorporações e leilões
              </h2>
            </div>
            <p className="font-gilroy text-sm text-brand-secondary max-w-md">
              Mais de 157 avaliações públicas no Google atestam a nossa dedicação, rigor processual e excelência na proteção do patrimônio de construtoras e investidores da região.
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
              Perguntas frequentes sobre Incorporação e Leilões
            </h2>
            <p className="font-gilroy text-brand-secondary text-base">
              Esclareça dúvidas essenciais sobre memorial de incorporação, RET e arrematações judiciais.
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
            Incorporação Imobiliária & Leilões · Inteligência Jurídica
          </span>
          <h2 className="font-poppins text-4xl sm:text-5xl md:text-6xl text-brand-surface leading-tight mb-8">
            Vai lançar um empreendimento ou arrematar um imóvel em leilão?
          </h2>
          <p className="font-gilroy text-lg text-brand-surface/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Consulte nossos especialistas em Direito Imobiliário em Salto de Pirapora e Sorocaba para estruturar seu memorial de incorporação ou auditar o edital de leilão.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://wa.me/5515996662831?text=Ol%C3%A1%2C%20preciso%20de%20assessoria%20jur%C3%ADdica%20para%20incorpora%C3%A7%C3%A3o%20imobili%C3%A1ria%20ou%20leil%C3%A3o."
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
