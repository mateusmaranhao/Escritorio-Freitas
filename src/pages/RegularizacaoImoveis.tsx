import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { GoogleReviews } from '../components/GoogleReviews';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  FileCheck, 
  Scale, 
  ArrowRight, 
  ChevronDown, 
  MessageSquare,
  AlertTriangle,
  ShieldCheck,
  CheckCircle2,
  FileCheck2,
  FileSignature,
  FileSearch,
  MapPin,
  Stamp
} from 'lucide-react';

export function RegularizacaoImoveis() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Regularização de Imóveis e Propriedade | Usucapião e Adjudicação Compulsória",
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
    "serviceType": "Usucapião Judicial e Extrajudicial em Cartório, Adjudicação Compulsória, Retificação de Área e Regularização Registral",
    "description": "Assessoria jurídica completa para regularizar a documentação do seu imóvel: escritura definitiva, usucapião, adjudicação compulsória e retificação de medidas perante o Cartório de Registro de Imóveis.",
    "url": "https://escritoriofreitas.com.br/servicos/direito-imobiliario/regularizacao-de-imoveis"
  };

  const faqs = [
    {
      question: "Qual a diferença entre Usucapião Extrajudicial em Cartório e Usucapião Judicial?",
      answer: "O Usucapião Extrajudicial (art. 216-A da Lei de Registros Públicos nº 6.015/73) é processado diretamente perante o Tabelionato de Notas e o Oficial do Registro de Imóveis da comarca, sem passar pelo juiz. Se os confrontantes e titulares do registro concordarem ou não se opuserem após notificação formal, o procedimento é concluído em poucos meses. Caso haja contestação de vizinhos ou pendências cadastrais complexas, o processo segue pela via do Usucapião Judicial perante a Vara Cível."
    },
    {
      question: "Como funciona a Adjudicação Compulsória Extrajudicial em Cartório (Lei nº 14.382/2022)?",
      answer: "A Lei nº 14.382/22 permitiu a realização da Adjudicação Compulsória diretamente no Cartório de Registro de Imóveis. Ela é aplicável para quem comprou o imóvel por promessa de compra e venda ou cessão de direitos, quitou integralmente o preço, mas o vendedor faleceu, sumiu, a loteadora faliu ou se recusa a outorgar a escritura definitiva. Comprovado o pagamento e notificado o vendedor pelo oficial sem resposta, a propriedade é registrada compulsoriamente no nome do comprador."
    },
    {
      question: "Por que um imóvel irregular perde até 40% do valor de mercado?",
      answer: "Imóveis que possuem apenas 'contrato de gaveta' ou recibo de compra não podem ser financiados por bancos (Caixa, Itaú, Bradesco, etc.), não aceitam consórcios imobiliários e afastam a quase totalidade dos compradores qualificados. Além disso, 'quem não registra não é dono' (art. 1.245 do Código Civil): o imóvel continua no nome do proprietário antigo, podendo ser penhorado a qualquer momento por dívidas dele. A regularização transforma o imóvel em patrimônio seguro e valorizado."
    },
    {
      question: "O que é Retificação de Área e quando ela é necessária?",
      answer: "A Retificação de Área (art. 213 da Lei 6.015/73) corrige divergências entre a metragem real do terreno (conforme cerca ou muro físico existente) e a descrição desatualizada que consta na matrícula cartorária. Com planta georreferenciada e memorial descritivo elaborados por engenheiro/agrimensor, retificamos as confrontações e medidas perante a Prefeitura e o Registro de Imóveis."
    },
    {
      question: "Como regularizar imóvel recebido por herança quando há herdeiros em cidades diferentes ou menores?",
      answer: "Conduzimos o Inventário Extrajudicial em Cartório (quando todos os herdeiros forem maiores e concordes) ou Judicial para partilhar o bem e sanar pendências históricas de registro. Também resolvemos desdobros, cancelamentos de usufruto e formalizações de quinhões para que cada herdeiro receba sua matrícula individualizada e pronta para venda."
    }
  ];

  const problemas = [
    {
      icon: <AlertTriangle className="w-6 h-6 text-brand-primary" />,
      title: "Posse com Contrato de Gaveta Sem Escritura",
      desc: "Morar no imóvel há décadas ou pagar por ele e ter apenas um documento precário sem registro na matrícula."
    },
    {
      icon: <Stamp className="w-6 h-6 text-brand-primary" />,
      title: "Vendedor Falecido ou Loteadora Desaparecida",
      desc: "Impossibilidade de lavrar a escritura pública porque o titular registral sumiu, faliu ou os herdeiros se recusam a assinar."
    },
    {
      icon: <MapPin className="w-6 h-6 text-brand-primary" />,
      title: "Medidas Erradas no Registro e na Prefeitura",
      desc: "Divergência de metragem entre o terreno real e a matrícula, impedindo a aprovação de projetos ou venda financiada."
    },
    {
      icon: <Scale className="w-6 h-6 text-brand-primary" />,
      title: "Desvalorização Severa e Risco de Penhora",
      desc: "Imóvel sem registro sofrendo risco de penhora por dívidas tributárias ou cíveis do antigo proprietário que ainda consta no papel."
    }
  ];

  const solucoes = [
    {
      numero: "01",
      titulo: "Usucapião Extrajudicial e Judicial",
      desc: "Procedimento para obter a titularidade definitiva da propriedade com base na posse mansa, pacífica e ininterrupta (ordinária, extraordinária ou especial urbana/rural), priorizando a via célere em Cartório."
    },
    {
      numero: "02",
      titulo: "Adjudicação Compulsória em Cartório",
      desc: "Transferência forçada da propriedade perante o Oficial do Registro de Imóveis (Lei 14.382/22) quando o comprador quitou o imóvel mas o vendedor sumiu ou recusa a assinatura da escritura."
    },
    {
      numero: "03",
      titulo: "Retificação de Área e Desmembramento",
      desc: "Adequação de confrontações, desmembramento e remembramento de lotes urbanos e rurais, com levantamento topográfico e retificação administrativa perante a Prefeitura e o CRI."
    },
    {
      numero: "04",
      titulo: "Regularização de Inventários & Imóveis",
      desc: "Resolução de pendências documentais em imóveis herdados, lavratura de escrituras de inventário extrajudicial e registro de formais de partilha para desembaraçar o patrimônio familiar."
    }
  ];

  const passos = [
    {
      step: "01",
      title: "Diagnóstico da Matrícula & Posse",
      desc: "Examinamos a cadeia do registro no Cartório de Imóveis e reunimos os comprovantes de posse ou quitação."
    },
    {
      step: "02",
      title: "Definição do Rito (Cartório x Judicial)",
      desc: "Escolhemos a via mais rápida e econômica para regularizar o imóvel (usucapião extrajudicial ou adjudicação)."
    },
    {
      step: "03",
      title: "Topografia & Notificação de Vizinhos",
      desc: "Elaboração de planta, memorial descritivo e colheita de assinaturas ou notificação dos confrontantes."
    },
    {
      step: "04",
      title: "Registro Definitivo da Matrícula",
      desc: "Abertura ou atualização da matrícula no Registro de Imóveis com você como legítimo proprietário no papel."
    }
  ];

  return (
    <>
      <SEO 
        title="Regularização de Imóveis, Usucapião e Adjudicação | Escritório Freitas"
        description="Regularize seu imóvel com escritura definitiva: usucapião extrajudicial, adjudicação compulsória e retificação de área em Salto de Pirapora e Sorocaba."
        url="/servicos/direito-imobiliario/regularizacao-de-imoveis"
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
                <span className="text-brand-primary font-semibold">Regularização de Imóveis</span>
              </div>

              <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-[#333333] font-semibold leading-[1.2] mb-3.5 max-w-2xl tracking-tight">
                Regularização de Imóveis e Propriedade
              </h1>

              <p className="font-gilroy text-sm sm:text-base md:text-[17px] text-[#555555] max-w-xl leading-relaxed mb-6 font-normal">
                Garanta que você seja o legítimo dono do seu imóvel no papel, valorizando seu patrimônio e afastando o risco de perder sua propriedade. Especialistas em usucapião e adjudicação compulsória em cartório.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8">
                <a 
                  href="https://wa.me/5515996662831?text=Ol%C3%A1%2C%20tenho%20um%20im%C3%B3vel%20sem%20escritura%20e%20gostaria%20de%20saber%20como%20regularizar."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-2.5 bg-brand-primary text-brand-surface font-gilroy text-xs uppercase tracking-widest px-6 py-3.5 hover:bg-black transition-colors duration-300"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Regularizar Meu Imóvel Agora</span>
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
                  <Stamp className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-poppins text-xs font-semibold text-[#333333] leading-snug">Usucapião em Cartório</h4>
                    <p className="font-gilroy text-[11px] text-[#6c7279] leading-tight">Escritura definitiva rápida sem processo judicial</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <FileCheck2 className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-poppins text-xs font-semibold text-[#333333] leading-snug">Adjudicação Compulsória</h4>
                    <p className="font-gilroy text-[11px] text-[#6c7279] leading-tight">Para quando o vendedor quitado sumiu ou recusa a assinar</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-poppins text-xs font-semibold text-[#333333] leading-snug">Retificação de Área</h4>
                    <p className="font-gilroy text-[11px] text-[#6c7279] leading-tight">Correção de medidas no Cartório de Imóveis</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-5 relative overflow-hidden hidden lg:block bg-[#222222]">
            <img 
              src="/equipe.jpg" 
              alt="Regularização de Imóveis — Escritório Freitas" 
              className="absolute inset-0 w-full h-full object-cover object-center grayscale-[15%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 border border-white/20 p-6 backdrop-blur-md bg-black/40">
              <span className="text-[10px] font-gilroy uppercase tracking-[0.25em] text-white/70 block mb-1">
                Segurança Registral & Valorização
              </span>
              <span className="font-poppins text-brand-surface text-lg font-semibold mb-1.5 block">
                Quem Não Registra Não É Dono
              </span>
              <p className="text-brand-surface/85 text-xs leading-relaxed font-gilroy">
                Não viva na insegurança de um contrato de gaveta. Conquistamos a matrícula definitiva do seu imóvel no cartório para você deixar uma herança tranquila e poder vender financiado.
              </p>
            </div>
          </div>
        </div>
        
        {/* Sub-bar Hero */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 border-t border-[#333333]/10 divide-y md:divide-y-0 md:divide-x divide-[#333333]/10">
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">01 · Cartório</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Usucapião Extrajudicial</h3>
            <p className="text-xs text-[#555555] font-gilroy">Escritura definitiva por posse sem a morosidade do Judiciário.</p>
          </div>
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">02 · Lei 14.382/22</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Adjudicação Compulsória</h3>
            <p className="text-xs text-[#555555] font-gilroy">Solução para imóveis quitados cujo vendedor não é localizado.</p>
          </div>
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">03 · Metragem</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Retificação de Medidas</h3>
            <p className="text-xs text-[#555555] font-gilroy">Correção de limites e desdobro perante a prefeitura e o CRI.</p>
          </div>
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">04 · Herança</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Inventários com Imóveis</h3>
            <p className="text-xs text-[#555555] font-gilroy">Desembaraço registral de bens deixados aos herdeiros.</p>
          </div>
        </div>
      </section>

      {/* 2. PROBLEMA */}
      <section className="py-24 px-6 lg:px-20 bg-brand-surface-alt/30 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <span className="font-gilroy text-[11px] uppercase tracking-[0.3em] text-brand-muted block mb-4">
              Riscos da Irregularidade Registral
            </span>
            <h2 className="font-poppins text-3xl md:text-5xl text-brand-primary leading-tight mb-6">
              Imóvel sem escritura perde valor de venda e pode ser tomado por credores do antigo proprietário.
            </h2>
            <p className="font-gilroy text-lg text-brand-secondary leading-relaxed">
              O ordenamento jurídico brasileiro é claro: a propriedade só se transfere com o registro da escritura na matrícula. Sem isso, você não consegue vender pelo valor integral, não consegue aprovar financiamento bancário e corre risco diário de despejo por penhoras judiciais.
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
                Propriedade Definitiva no Papel
              </span>
              <h2 className="font-poppins text-3xl md:text-5xl text-brand-primary leading-tight mb-6">
                Como regularizamos seu imóvel e valorizamos seu patrimônio.
              </h2>
              <p className="font-gilroy text-base text-brand-secondary leading-relaxed mb-8">
                Atuamos diretamente com os Cartórios de Registro de Imóveis e Tabelionatos de Notas da região de Salto de Pirapora e Sorocaba, aplicando a legislação mais recente para formalizar sua escritura definitiva com agilidade.
              </p>
              <div className="p-6 bg-brand-surface-alt/40 border border-brand-primary/10 space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                  <span className="font-gilroy text-sm text-brand-primary font-medium">Valorização imediata de 30% a 50% do imóvel</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                  <span className="font-gilroy text-sm text-brand-primary font-medium">Apto para venda via financiamento bancário Caixa/Bancos</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                  <span className="font-gilroy text-sm text-brand-primary font-medium">Transmissão tranquila e desimpedida para herdeiros</span>
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
              Como funciona o processo de regularização
            </h2>
            <p className="font-gilroy text-brand-secondary text-base">
              Roteiro metódico para reunir os documentos de posse, instruir o processo e lavrar a escritura definitiva.
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
                A segurança de contar com quem domina usucapião e cartórios
              </h2>
            </div>
            <p className="font-gilroy text-sm text-brand-secondary max-w-md">
              Mais de 157 avaliações públicas no Google atestam a nossa dedicação, rigor processual e excelência na proteção do patrimônio de proprietários e famílias da região.
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
              Perguntas frequentes sobre Regularização de Imóveis
            </h2>
            <p className="font-gilroy text-brand-secondary text-base">
              Esclareça dúvidas essenciais sobre usucapião em cartório, adjudicação e escritura.
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
            Regularização Imobiliária · Obtenha sua Escritura Definitiva
          </span>
          <h2 className="font-poppins text-4xl sm:text-5xl md:text-6xl text-brand-surface leading-tight mb-8">
            Deseja regularizar seu imóvel e ter a escritura em seu nome?
          </h2>
          <p className="font-gilroy text-lg text-brand-surface/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Agende uma análise prévia dos seus documentos com nossos especialistas em Direito Imobiliário em Salto de Pirapora e Sorocaba para dar entrada no seu usucapião ou adjudicação.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://wa.me/5515996662831?text=Ol%C3%A1%2C%20gostaria%20de%20avaliar%20a%20regulariza%C3%A7%C3%A3o%20do%20meu%20im%C3%B3vel."
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
