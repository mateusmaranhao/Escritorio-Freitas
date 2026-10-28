import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { GoogleReviews } from '../components/GoogleReviews';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building, 
  Home as HomeIcon, 
  ShieldCheck, 
  ArrowRight, 
  ChevronDown, 
  CheckCircle2, 
  AlertTriangle, 
  FileSearch, 
  MessageSquare,
  Users2,
  FileCheck,
  Landmark
} from 'lucide-react';

export function DireitoImobiliario() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Direito Imobiliário e Condominial em Salto de Pirapora e Região",
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
    "areaServed": ["Salto de Pirapora", "Sorocaba", "Votorantim", "Araçoiaba da Serra"],
    "serviceType": "Direito Imobiliário e Assessoria Condominial",
    "description": "Assessoria jurídica para compra e venda de imóveis, due diligence imobiliária, regularização e suporte jurídico especializado para condomínios e síndicos.",
    "url": "https://escritoriofreitas.com.br/servicos/direito-imobiliario"
  };

  const faqs = [
    {
      question: "O que é Due Diligence Imobiliária e por que ela é indispensável?",
      answer: "A Due Diligence é uma investigação jurídica preventiva aprofundada realizada antes da assinatura de qualquer contrato ou pagamento de sinal. Ela examina a matrícula do imóvel, débitos fiscais, eventuais ações judiciais cíveis, fiscais e trabalhistas contra os vendedores que possam levar à anulação da compra ou perda do bem por penhora (fraude à execução)."
    },
    {
      question: "Como o escritório auxilia síndicos e condomínios?",
      answer: "Prestamos assessoria jurídica contínua e consultiva: cobrança extrajudicial e judicial de inadimplentes com agilidade, revisão e atualização de Regimento Interno e Convenção, orientação em assembleias gerais complexas, análise de contratos de prestadores de serviço e prevenção de conflitos de vizinhança."
    },
    {
      question: "Comprei um imóvel com 'contrato de gaveta'. É possível regularizar?",
      answer: "Sim. A regularização dependerá do histórico do imóvel e da cadeia de compradores anteriores. Analisamos se é viável a lavratura da escritura pública de forma direta, a adjudicação compulsória (extrajudicial ou judicial) ou o procedimento de usucapião, garantindo que o imóvel fique efetivamente em seu nome no Cartório de Registro de Imóveis."
    },
    {
      question: "Quais cuidados devo tomar ao assinar um contrato de locação comercial ou residencial?",
      answer: "É essencial analisar as cláusulas de garantia (fiança, caução ou seguro), responsabilidades sobre reformas e benfeitorias, reajuste do aluguel, cláusulas penais em caso de rescisão antecipada e adequação à Lei do Inquilinato (Lei nº 8.245/91), evitando surpresas onerosas ao longo da locação."
    },
    {
      question: "O escritório atende clientes de Sorocaba e loteamentos da região?",
      answer: "Sim. Atendemos com frequência investidores, famílias, administradoras e condomínios de Salto de Pirapora, Sorocaba, Votorantim e Araçoiaba da Serra, oferecendo reuniões presenciais em nosso escritório ou virtuais com rápida resposta."
    }
  ];

  const problemas = [
    {
      icon: <AlertTriangle className="w-6 h-6 text-brand-primary" />,
      title: "Risco de Perda do Imóvel Adquirido",
      desc: "Comprar um imóvel sem auditoria prévia expõe você a dívidas anteriores do vendedor, penhoras judiciais ocultas ou anulação da escritura por fraude."
    },
    {
      icon: <Building className="w-6 h-6 text-brand-primary" />,
      title: "Inadimplência Crônica em Condomínios",
      desc: "Taxas condominiais em atraso asfixiam as contas do edifício, sobrecarregam os moradores pontuais e exigem cobrança técnica que evite nulidades processuais."
    },
    {
      icon: <FileSearch className="w-6 h-6 text-brand-primary" />,
      title: "Cláusulas Abusivas em Contratos",
      desc: "Minutas padronizadas de imobiliárias ou vendedores que transferem riscos injustos ao comprador, com multas desproporcionais e ausência de garantias reais."
    },
    {
      icon: <Users2 className="w-6 h-6 text-brand-primary" />,
      title: "Conflitos de Convivência e Assembleias",
      desc: "Decisões assembleares tomadas em desconformidade com a convenção geram contestações judiciais, desgaste entre vizinhos e responsabilização pessoal do síndico."
    }
  ];

  const solucoes = [
    {
      numero: "01",
      titulo: "Due Diligence & Segurança na Compra",
      descricao: "Investigação documental rigorosa de certidões pessoais e do imóvel em cartórios e tribunais, garantindo compra e venda 100% blindada."
    },
    {
      numero: "02",
      titulo: "Assessoria Jurídica Condominial",
      descricao: "Suporte completo para síndicos e administradoras: cobrança de inadimplência, condução de assembleias, contratos de terceirizados e regimento interno."
    },
    {
      numero: "03",
      titulo: "Redação & Revisão Contratual",
      descricao: "Elaboração de contratos de promessa de compra e venda, permuta, locação comercial e residencial com cláusulas protetivas personalizadas."
    },
    {
      numero: "04",
      titulo: "Regularização de Imóveis & Usucapião",
      descricao: "Atuação administrativa em cartório e na via judicial para obtenção de matrícula definitiva, retificação de área e regularização fundiária."
    }
  ];

  const passos = [
    {
      step: "01",
      title: "Contato & Análise Preliminar",
      desc: "Você nos apresenta os dados do imóvel, contrato ou demanda condominial. Identificamos as prioridades imediatas de segurança."
    },
    {
      step: "02",
      title: "Auditoria Criteriosa de Documentos",
      desc: "Analisamos matrículas atualizadas, certidões negativas de feitos ajuizados, débitos de IPTU, ambientais e histórico do bem."
    },
    {
      step: "03",
      title: "Emissão de Parecer e Minuta Blindada",
      desc: "Apresentamos relatório detalhado com riscos identificados ou redigimos o contrato com proteções para o seu patrimônio."
    },
    {
      step: "04",
      title: "Conclusão Notarial e Acompanhamento",
      desc: "Acompanhamos a assinatura em cartório até a averbação no Registro de Imóveis, garantindo a plena eficácia jurídica."
    }
  ];

  return (
    <>
      <SEO 
        title="Advogado Imobiliário e Condominial em Salto de Pirapora e Região | Escritório Freitas"
        description="Assessoria em compra e venda de imóveis, due diligence, assessoria jurídica para condomínios, contratos e regularização imobiliária em Salto de Pirapora e Sorocaba."
        url="/servicos/direito-imobiliario"
        schema={schema}
      />

      {/* 1. HERO — ADAPTADO ESPECIFICAMENTE PARA DIREITO IMOBILIÁRIO */}
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
                <span className="text-brand-primary font-semibold">Direito Imobiliário</span>
              </div>

              <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-[#333333] font-semibold leading-[1.2] mb-3.5 max-w-2xl tracking-tight">
                Segurança jurídica para o seu patrimônio imobiliário.
              </h1>

              <p className="font-gilroy text-sm sm:text-base md:text-[17px] text-[#555555] max-w-xl leading-relaxed mb-6 font-normal">
                Assessoria preventiva em transações imobiliárias, auditoria contratual minuciosa e suporte estratégico contínuo para condomínios e síndicos em Salto de Pirapora e região.
              </p>

              {/* Botões de Ação na Hero */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8">
                <a 
                  href="https://wa.me/5515996662831?text=Ol%C3%A1%2C%20gostaria%20de%20uma%20orienta%C3%A7%C3%A3o%20em%20Direito%20Imobili%C3%A1rio."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-2.5 bg-brand-primary text-brand-surface font-gilroy text-xs uppercase tracking-widest px-6 py-3.5 hover:bg-black transition-colors duration-300"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Analisar Contrato ou Caso</span>
                </a>
                <a 
                  href="#como-funciona"
                  className="inline-flex justify-center items-center gap-2 border border-brand-primary/30 text-brand-primary font-gilroy text-xs uppercase tracking-widest px-5 py-3.5 hover:bg-brand-primary/5 transition-colors duration-300"
                >
                  <span>Conhecer Etapas</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Indicadores Específicos de Direito Imobiliário (sem repetição de +10 anos) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-5 border-t border-[#333333]/10">
                <div className="flex items-start gap-2.5">
                  <FileSearch className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-poppins text-xs font-semibold text-[#333333] leading-snug">Due Diligence Imobiliária</h4>
                    <p className="font-gilroy text-[11px] text-[#6c7279] leading-tight">Auditoria antes da compra ou venda</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Building className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-poppins text-xs font-semibold text-[#333333] leading-snug">Assessoria a Condomínios</h4>
                    <p className="font-gilroy text-[11px] text-[#6c7279] leading-tight">Suporte a síndicos, convenção e cobranças</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <FileCheck className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-poppins text-xs font-semibold text-[#333333] leading-snug">Regularização Fundiária</h4>
                    <p className="font-gilroy text-[11px] text-[#6c7279] leading-tight">Usucapião, escrituras e averbações</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-5 relative overflow-hidden hidden lg:block bg-[#222222]">
            <img 
              src="/equipe.jpg" 
              alt="Advocacia Imobiliária e Condominial — Escritório Freitas" 
              className="absolute inset-0 w-full h-full object-cover object-center grayscale-[15%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 border border-white/20 p-6 backdrop-blur-md bg-black/40">
              <span className="text-[10px] font-gilroy uppercase tracking-[0.25em] text-white/70 block mb-1">
                Especialidade Imobiliária
              </span>
              <span className="font-poppins text-brand-surface text-lg font-semibold mb-1.5 block">
                Patrimônio Blindado
              </span>
              <p className="text-brand-surface/85 text-xs leading-relaxed font-gilroy">
                Imóveis envolvem investimentos expressivos: asseguramos que cada cláusula traga certeza e tranquilidade para compradores, proprietários e condomínios.
              </p>
            </div>
          </div>
        </div>
        
        {/* Sub-bar Hero: 4 Áreas de Atuação Imobiliária */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 border-t border-[#333333]/10 divide-y md:divide-y-0 md:divide-x divide-[#333333]/10">
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">01 · Aquisição</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Due Diligence Imobiliária</h3>
            <p className="text-xs text-[#555555] font-gilroy">Checagem de certidões e histórico do vendedor.</p>
          </div>
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">02 · Gestão</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Assessoria Condominial</h3>
            <p className="text-xs text-[#555555] font-gilroy">Suporte jurídico contínuo a síndicos e condomínios.</p>
          </div>
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">03 · Contratos</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Contratos Personalizados</h3>
            <p className="text-xs text-[#555555] font-gilroy">Compra, venda, locação comercial e permuta.</p>
          </div>
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">04 · Cartórios</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Regularização de Imóveis</h3>
            <p className="text-xs text-[#555555] font-gilroy">Usucapião, adjudicação compulsória e escrituras.</p>
          </div>
        </div>
      </section>

      {/* 2. PROBLEMA — O QUE ESTÁ EM JOGO */}
      <section className="py-24 px-6 lg:px-20 bg-brand-surface-alt/30 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <span className="font-gilroy text-[11px] uppercase tracking-[0.3em] text-brand-muted block mb-4">
              Riscos Reais no Setor Imobiliário
            </span>
            <h2 className="font-poppins text-3xl md:text-5xl text-brand-primary leading-tight mb-6">
              Erros na compra de um imóvel ou na gestão de um condomínio trazem prejuízos irreparáveis.
            </h2>
            <p className="font-gilroy text-lg text-brand-secondary leading-relaxed">
              Negociações imobiliárias envolvem somas expressivas. Confiar apenas na palavra de intermediários sem uma análise jurídica minuciosa é uma aposta perigosa.
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
                  Risco Mitigável com Auditoria
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-brand-surface border-l-4 border-brand-primary flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="font-poppins text-lg text-brand-primary block mb-1">
                Está prestes a pagar um sinal ou enfrenta conflitos na gestão do condomínio?
              </span>
              <p className="font-gilroy text-sm text-brand-secondary">
                Consulte nossa equipe jurídica antes de qualquer assinatura ou tomada de decisão irreversível.
              </p>
            </div>
            <a 
              href="https://wa.me/5515996662831?text=Ol%C3%A1%2C%20preciso%20de%20orienta%C3%A7%C3%A3o%20imobili%C3%A1ria%20urgente."
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap px-6 py-3.5 bg-brand-primary text-brand-surface font-gilroy text-xs uppercase tracking-widest hover:bg-black transition-colors"
            >
              Falar com o Especialista
            </a>
          </div>
        </div>
      </section>

      {/* 3. SOLUÇÃO — COMO O ESCRITÓRIO FREITAS RESOLVE */}
      <section className="py-24 px-6 lg:px-20 bg-brand-surface border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <span className="font-gilroy text-[11px] uppercase tracking-[0.3em] text-brand-muted block mb-4">
                Blindagem Patrimonial
              </span>
              <h2 className="font-poppins text-3xl md:text-5xl text-brand-primary leading-tight mb-6">
                Abordagem preventiva para garantir segurança absoluta.
              </h2>
              <p className="font-gilroy text-base text-brand-secondary leading-relaxed mb-8">
                Atuamos em favor de compradores, investidores, proprietários e condomínios, garantindo que cada transação e cada rotina condominial estejam em conformidade com o Código Civil e a Lei de Registros Públicos.
              </p>

              <div className="space-y-6 pt-6 border-t border-brand-primary/10">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-poppins text-base text-brand-primary">Para Investidores & Compradores</h4>
                    <p className="font-gilroy text-xs text-brand-secondary leading-relaxed">
                      Investigação patrimonial completa dos alienantes para descartar riscos de penhoras e execuções fiscais futuras.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-poppins text-base text-brand-primary">Para Síndicos & Administradoras</h4>
                    <p className="font-gilroy text-xs text-brand-secondary leading-relaxed">
                      Recuperação ágil de cotas condominiais e redução drástica da inadimplência sem atritos desnecessários entre vizinhos.
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

      {/* 4. COMO FUNCIONA / METODOLOGIA */}
      <section id="como-funciona" className="py-24 px-6 lg:px-20 bg-brand-surface-alt/20 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-gilroy text-[11px] uppercase tracking-[0.3em] text-brand-muted block mb-3">
              Fluxo Estruturado · Metodologia
            </span>
            <h2 className="font-poppins text-3xl md:text-5xl text-brand-primary mb-4">
              Como funciona o atendimento imobiliário
            </h2>
            <p className="font-gilroy text-brand-secondary text-base">
              Passos seguros para você assinar qualquer documento com total tranquilidade.
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
                Reconhecimento Regional · Salto de Pirapora & Sorocaba
              </span>
              <h2 className="font-poppins text-3xl md:text-4xl text-brand-primary">
                A experiência de clientes e condomínios parceiros
              </h2>
            </div>
            <p className="font-gilroy text-sm text-brand-secondary max-w-md">
              Avaliações reais no Google que comprovam a agilidade, ética e postura resolutiva de nossa banca em negócios e litígios imobiliários.
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
              Perguntas Frequentes
            </span>
            <h2 className="font-poppins text-3xl md:text-5xl text-brand-primary mb-4">
              Dúvidas sobre Direito Imobiliário e Condomínios
            </h2>
            <p className="font-gilroy text-brand-secondary text-base">
              Esclarecimentos indispensáveis para proteger o seu patrimônio.
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
            Atendimento Estratégico Regional
          </span>
          <h2 className="font-poppins text-4xl sm:text-5xl md:text-6xl text-brand-surface leading-tight mb-8">
            Vai comprar, vender ou precisa de apoio jurídico para o condomínio?
          </h2>
          <p className="font-gilroy text-lg text-brand-surface/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Converse diretamente com nossos advogados especialistas em Direito Imobiliário. Avaliação técnica rápida e confidencial em Salto de Pirapora e Sorocaba.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://wa.me/5515996662831?text=Ol%C3%A1%2C%20gostaria%20de%20uma%20orienta%C3%A7%C3%A3o%20em%20Direito%20Imobili%C3%A1rio."
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
              <span>Conhecer Nossos Contatos</span>
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-brand-surface/10 flex flex-wrap justify-center items-center gap-8 font-gilroy text-xs text-brand-surface/60">
            <span>Rua João de Góes, nº 117 — Centro, Salto de Pirapora</span>
            <span>·</span>
            <span>Atendimento Presencial e Online em Sorocaba</span>
            <span>·</span>
            <span>Auditoria Contratual Prévia</span>
          </div>
        </div>
      </section>
    </>
  );
}
