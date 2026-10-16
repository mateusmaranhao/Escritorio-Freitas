import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { GoogleReviews } from '../components/GoogleReviews';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  Search, 
  Scale, 
  ArrowRight, 
  ChevronDown, 
  MessageSquare,
  AlertTriangle,
  ShieldCheck,
  CheckCircle2,
  FileCheck2,
  Home,
  FileText,
  AlertOctagon,
  Undo2
} from 'lucide-react';

export function CompraVendaDueDiligence() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Compra e Venda de Imóveis e Due Diligence Imobiliária | Escritório Freitas",
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
    "serviceType": "Due Diligence Imobiliária, Auditoria de Riscos na Compra, Contratos de Promessa de Compra e Venda e Distrato Imobiliário",
    "description": "Assessoria jurídica preventiva indispensável na compra e venda de imóveis de médio e alto padrão. Auditoria de certidões, contratos blindados e distrato imobiliário.",
    "url": "https://escritoriofreitas.com.br/servicos/direito-imobiliario/compra-e-venda-due-diligence"
  };

  const faqs = [
    {
      question: "Por que a Due Diligence Imobiliária é indispensável antes de pagar o sinal ou assinar o contrato?",
      answer: "No Direito Imobiliário brasileiro vigora o princípio da boa-fé, mas o comprador é obrigado a demonstrar cautela mínima (diligência prévia). Se o vendedor possuir dívidas trabalhistas, execuções fiscais ou processos cíveis em andamento, a venda pode ser declarada ineficaz por Fraude à Execução (Súmula 375 do STJ e art. 792 do CPC). Nesse cenário, o imóvel é penhorado e levado a leilão pelo juiz, e o comprador perde o bem e o dinheiro pago. A Due Diligence mapeia esse risco antes de você transferir qualquer quantia."
    },
    {
      question: "Quantos anos para trás a auditoria investiga o imóvel e os antigos proprietários?",
      answer: "A pesquisa padrão investiga os proprietários atuais e retroage de 10 a 20 anos na cadeia dominial (vendedores anteriores). Isso é crucial para verificar se não houve doação inoficiosa, herdeiro preterido, indisponibilidade averbada ou débitos ambientais e de IPTU que acompanham a coisa (propter rem)."
    },
    {
      question: "Como funciona o Distrato Imobiliário na devolução de imóvel comprado na planta?",
      answer: "A Lei do Distrato (Lei nº 13.786/2018) disciplina a rescisão do contrato de compra de imóvel na planta. Se o comprador desistir por razões financeiras, a construtora pode reter até 25% dos valores pagos (ou até 50% caso o empreendimento possua patrimônio de afetação), devendo devolver o saldo restante de forma atualizada. Por outro lado, se a construtora atrasar a entrega da obra por mais de 180 dias corridos, o comprador tem direito à devolução de 100% de tudo o que pagou, com correção monetária, juros de mora e multa contratual."
    },
    {
      question: "O corretor de imóveis ou a imobiliária já não faz essa verificação jurídica?",
      answer: "Não com a profundidade necessária. A função do corretor é aproximar as partes e mediar a transação comercial (com comissão atrelada ao fechamento do negócio). Apenas o advogado imobiliário possui o dever ético e a capacitação técnica para emitir um Relatório de Due Diligence independente, apontando com isenção se o negócio é juridicamente seguro ou se traz risco iminente de perda patrimonial."
    },
    {
      question: "Quais certidões e documentos são analisados na Due Diligence?",
      answer: "Examinamos mais de 25 certidões: Matrícula atualizada de inteiro teor com certidão de ônus e ações reipersecutórias no CRI, certidões de distribuição de ações cíveis, fiscais e de família (Justiça Estadual e Federal), certidões negativas trabalhistas (TRT e TST), certidões de falência e recuperação, débitos municipais de IPTU, declaração de quitação de débitos condominiais e regularidade ambiental."
    }
  ];

  const problemas = [
    {
      icon: <AlertOctagon className="w-6 h-6 text-brand-primary" />,
      title: "Risco de Perda do Imóvel por Fraude à Execução",
      desc: "Comprar um imóvel cujo vendedor tinha processos em andamento e ver o bem ser penhorado pela Justiça para pagar dívidas alheias."
    },
    {
      icon: <FileText className="w-6 h-6 text-brand-primary" />,
      title: "Contratos de Gaveta e Promessas Falhas",
      desc: "Minutas com cláusulas ambíguas sobre posse, prazos de escritura e multas rescisórias abusivas que prendem o comprador."
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-brand-primary" />,
      title: "Dívidas Ocultas de Condomínio e IPTU",
      desc: "Débitos 'propter rem' acumulados de anos que são cobrados diretamente do novo proprietário após a lavratura da escritura."
    },
    {
      icon: <Undo2 className="w-6 h-6 text-brand-primary" />,
      title: "Retenção Abusiva em Distrato de Imóvel na Planta",
      desc: "Construtoras que exigem reter 60% a 80% do dinheiro investido pelo comprador quando há desistência ou atraso da obra."
    }
  ];

  const solucoes = [
    {
      numero: "01",
      titulo: "Auditoria de Riscos (Due Diligence)",
      desc: "Emissão de parecer jurídico conclusivo com varredura de processos judiciais de toda a cadeia de proprietários, averiguações no Registro de Imóveis, certidões fiscais e verificação de passivos trabalhistas e de família."
    },
    {
      numero: "02",
      titulo: "Contratos de Compra e Venda Blindados",
      desc: "Redação personalizada de Instrumentos Particulares de Promessa de Compra e Venda, estipulando condições suspensivas, arras penitenciais, vistorias obrigatórias e garantias sólidas de quitação."
    },
    {
      numero: "03",
      titulo: "Assessoria no Distrato Imobiliário",
      desc: "Representação em rescisões de contratos de imóveis na planta (Lei 13.786/18), garantindo o reembolso imediato com correção ou recuperação integral de 100% dos valores em caso de atraso na entrega das chaves."
    },
    {
      numero: "04",
      titulo: "Acompanhamento em Cartório e Escritura",
      desc: "Análise minuciosa da minuta da Escritura Pública de Compra e Venda no Tabelionato de Notas e conferência dos registros e prenotações no Cartório de Registro de Imóveis (CRI)."
    }
  ];

  const passos = [
    {
      step: "01",
      title: "Recepção dos Documentos do Imóvel",
      desc: "Recebemos a matrícula atualizada, documentos do vendedor e minuta preliminar da transação."
    },
    {
      step: "02",
      title: "Emissão & Análise de Certidões",
      desc: "Expedição de certidões judiciais cíveis, trabalhistas, fiscais e cartorárias de toda a cadeia dominial."
    },
    {
      step: "03",
      title: "Emissão do Relatório de Due Diligence",
      desc: "Apresentamos relatório conclusivo categorizando o nível de segurança jurídica da compra (verde, amarelo ou vermelho)."
    },
    {
      step: "04",
      title: "Redação Contratual & Assinatura Segura",
      desc: "Elaboramos ou ajustamos o contrato definitivo com cláusulas protetivas antes da liberação de qualquer sinal."
    }
  ];

  return (
    <>
      <SEO 
        title="Due Diligence Imobiliária e Compra e Venda | Escritório Freitas"
        description="Assessoria preventiva na compra e venda de imóveis: auditoria de certidões, Due Diligence, contratos blindados e distrato em Salto de Pirapora e Sorocaba."
        url="/servicos/direito-imobiliario/compra-e-venda-due-diligence"
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
                <span className="text-brand-primary font-semibold">Compra e Venda</span>
              </div>

              <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-[#333333] font-semibold leading-[1.2] mb-3.5 max-w-2xl tracking-tight">
                Transações de Compra e Venda (Due Diligence Imobiliária)
              </h1>

              <p className="font-gilroy text-sm sm:text-base md:text-[17px] text-[#555555] max-w-xl leading-relaxed mb-6 font-normal">
                Esta é a assessoria preventiva mais importante antes de fechar qualquer negócio de valor expressivo. Auditamos minuciosamente o imóvel e os vendedores para que você não perca seu patrimônio para dívidas do proprietário anterior.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8">
                <a 
                  href="https://wa.me/5515996662831?text=Ol%C3%A1%2C%20estou%20negociando%20um%20im%C3%B3vel%20e%20gostaria%20de%20fazer%20uma%20Due%20Diligence%20preventiva."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-2.5 bg-brand-primary text-brand-surface font-gilroy text-xs uppercase tracking-widest px-6 py-3.5 hover:bg-black transition-colors duration-300"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Auditar Imóvel Antes do Sinal</span>
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
                  <Search className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-poppins text-xs font-semibold text-[#333333] leading-snug">Auditoria Completa</h4>
                    <p className="font-gilroy text-[11px] text-[#6c7279] leading-tight">Mais de 25 certidões dos vendedores e cadeia dominial</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <FileText className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-poppins text-xs font-semibold text-[#333333] leading-snug">Contratos Blindados</h4>
                    <p className="font-gilroy text-[11px] text-[#6c7279] leading-tight">Cláusulas de retenção de sinal e vistorias prévias</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Undo2 className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-poppins text-xs font-semibold text-[#333333] leading-snug">Distrato Imobiliário</h4>
                    <p className="font-gilroy text-[11px] text-[#6c7279] leading-tight">Devolução de imóvel na planta com restituição justa</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-5 relative overflow-hidden hidden lg:block bg-[#222222]">
            <img 
              src="/equipe.jpg" 
              alt="Due Diligence Imobiliária — Escritório Freitas" 
              className="absolute inset-0 w-full h-full object-cover object-center grayscale-[15%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 border border-white/20 p-6 backdrop-blur-md bg-black/40">
              <span className="text-[10px] font-gilroy uppercase tracking-[0.25em] text-white/70 block mb-1">
                Segurança Imobiliária Patrimonial
              </span>
              <span className="font-poppins text-brand-surface text-lg font-semibold mb-1.5 block">
                Compre Imóveis Sem Riscos
              </span>
              <p className="text-brand-surface/85 text-xs leading-relaxed font-gilroy">
                O sonho do imóvel próprio ou o investimento de alto padrão não podem virar pesadelo judicial. Verificamos cada linha da matrícula e do histórico dos proprietários para garantir sua tranquilidade.
              </p>
            </div>
          </div>
        </div>
        
        {/* Sub-bar Hero */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 border-t border-[#333333]/10 divide-y md:divide-y-0 md:divide-x divide-[#333333]/10">
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">01 · Investigação</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Due Diligence</h3>
            <p className="text-xs text-[#555555] font-gilroy">Auditoria prévia de certidões, processos e histórico dominial.</p>
          </div>
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">02 · Instrumentos</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Contrato de Compra</h3>
            <p className="text-xs text-[#555555] font-gilroy">Redação de promessas com arras, posse e quitações seguras.</p>
          </div>
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">03 · Rescisões</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Distrato de Imóveis</h3>
            <p className="text-xs text-[#555555] font-gilroy">Devolução na planta com restituição justa de até 100%.</p>
          </div>
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">04 · Cartórios</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Escritura & Registro</h3>
            <p className="text-xs text-[#555555] font-gilroy">Assessoria presencial no Tabelionato e no Registro de Imóveis.</p>
          </div>
        </div>
      </section>

      {/* 2. PROBLEMA */}
      <section className="py-24 px-6 lg:px-20 bg-brand-surface-alt/30 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <span className="font-gilroy text-[11px] uppercase tracking-[0.3em] text-brand-muted block mb-4">
              Armadilhas na Compra de Imóveis
            </span>
            <h2 className="font-poppins text-3xl md:text-5xl text-brand-primary leading-tight mb-6">
              Assinar contrato ou transferir sinal sem auditoria jurídica pode custar todo o seu patrimônio.
            </h2>
            <p className="font-gilroy text-lg text-brand-secondary leading-relaxed">
              Muitos compradores acreditam que a certidão de matrícula sem anotações basta para fechar o negócio. No entanto, se o vendedor estiver sendo processado por dívidas que possam levá-lo à insolvência, a venda é anulada pela Justiça.
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
                Proteção Absoluta na Compra
              </span>
              <h2 className="font-poppins text-3xl md:text-5xl text-brand-primary leading-tight mb-6">
                Como garantimos a segurança jurídica da sua compra imobiliária.
              </h2>
              <p className="font-gilroy text-base text-brand-secondary leading-relaxed mb-8">
                Investigamos todas as variáveis da transação e emitimos um relatório detalhado antes de você assumir qualquer compromisso financeiro, redigindo o contrato com cláusulas resolutivas protetivas.
              </p>
              <div className="p-6 bg-brand-surface-alt/40 border border-brand-primary/10 space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                  <span className="font-gilroy text-sm text-brand-primary font-medium">Relatório de Due Diligence entregue em até 72 horas</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                  <span className="font-gilroy text-sm text-brand-primary font-medium">Proteção total contra fraude à execução e penhoras</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                  <span className="font-gilroy text-sm text-brand-primary font-medium">Recuperação de até 100% dos valores em distratos</span>
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
              Como funciona nossa Due Diligence Imobiliária
            </h2>
            <p className="font-gilroy text-brand-secondary text-base">
              Etapas rigorosas para investigar certidões, auditar o imóvel e chancelar o contrato definitivo de compra.
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
                A segurança de contar com quem domina Due Diligence imobiliária
              </h2>
            </div>
            <p className="font-gilroy text-sm text-brand-secondary max-w-md">
              Mais de 157 avaliações públicas no Google atestam a nossa dedicação, rigor processual e excelência na proteção do patrimônio de empresas e famílias da região.
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
              Perguntas frequentes sobre Compra e Venda de Imóveis
            </h2>
            <p className="font-gilroy text-brand-secondary text-base">
              Esclareça dúvidas essenciais sobre contratos de promessa, auditoria de riscos e distrato.
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
            Due Diligence Imobiliária · Blindagem Prévia do seu Patrimônio
          </span>
          <h2 className="font-poppins text-4xl sm:text-5xl md:text-6xl text-brand-surface leading-tight mb-8">
            Vai comprar um imóvel? Não pague o sinal sem antes falar conosco.
          </h2>
          <p className="font-gilroy text-lg text-brand-surface/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Envie a matrícula e os dados dos vendedores para uma auditoria preventiva completa com nossa equipe em Salto de Pirapora e Sorocaba.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://wa.me/5515996662831?text=Ol%C3%A1%2C%20estou%20prestes%20a%20comprar%20um%20im%C3%B3vel%20e%20gostaria%20de%20fazer%20a%20Due%20Diligence."
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
