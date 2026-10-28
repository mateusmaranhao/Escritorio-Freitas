import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { GoogleReviews } from '../components/GoogleReviews';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  FileCheck2, 
  Scale, 
  ArrowRight, 
  ChevronDown, 
  MessageSquare,
  FileSignature,
  FileSpreadsheet,
  AlertTriangle,
  ClipboardList,
  UserCheck,
  CheckCircle2,
  FileSearch,
  BookOpenCheck
} from 'lucide-react';

export function AdvocaciaPreventiva() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Advocacia Preventiva e Consultoria Trabalhista Patronal",
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
    "serviceType": "Consultoria Trabalhista Preventiva, Compliance CLT, Auditoria de Folha e Pareceres para RH",
    "description": "Assessoria preventiva estratégica focada em evitar que a empresa sofra processos judiciais. Compliance trabalhista, revisão contratual, auditoria interna de ponto e adicionais, e pareceres consultivos para RH e DP.",
    "url": "https://escritoriofreitas.com.br/servicos/direito-patronal/advocacia-preventiva-consultoria-trabalhista"
  };

  const faqs = [
    {
      question: "Por que investir em advocacia preventiva se a empresa ainda não tem processos?",
      answer: "O custo de prevenir uma irregularidade trabalhista é infinitamente menor do que suportar uma condenação judicial com custas, perícias, honorários sucumbenciais e juros de mora. A consultoria preventiva identifica falhas operacionais ocultas no controle de ponto, na concessão de adicionais e na redação dos contratos de trabalho antes que se convertam em passivos milionários, blindando o caixa da empresa."
    },
    {
      question: "Como o escritório auxilia na contratação e gestão de prestadores de serviços (PJ)?",
      answer: "A contratação na modalidade PJ ou terceirização requer rigor técnico absoluto para afastar o risco de reconhecimento de vínculo de emprego (art. 3º da CLT). Elaboramos contratos com clara ausência de subordinação jurídica e habitualidade direcionada, orientando o fluxo de comunicação entre a contratante e os prestadores para assegurar plena validade jurídica perante fiscalizações e reclamatórias."
    },
    {
      question: "Como funciona a auditoria interna da folha e do controle de ponto?",
      answer: "Realizamos uma varredura minuciosa na documentação do RH e DP: conferência de espelhos de ponto (físico ou eletrônico Portaria 671), validade de acordos individuais de banco de horas, intervalos intrajornada, pagamento correto de horas extras, adicionais de insalubridade e periculosidade com base nos laudos LTCAT/PGR, além de DSR e reflexos legais."
    },
    {
      question: "Como o escritório orienta demissões por justa causa com segurança jurídica?",
      answer: "A aplicação da justa causa (art. 482 da CLT) exige preenchimento rigoroso de requisitos legais: gravidade da falta, proporcionalidade da punição, imediatidade e histórico disciplinar inequívoco (advertências e suspensões). Emitimos pareceres prévios analisando a robustez das provas documentais e testemunhais para que a demissão não seja revertida na Justiça do Trabalho com condenações por dano moral."
    },
    {
      question: "O que contempla a elaboração e revisão de contratos de trabalho?",
      answer: "Redigimos e atualizamos contratos para formatos presenciais, híbridos e teletrabalho (home office), inserindo cláusulas personalizadas de confidencialidade (NDA), não-concorrência pós-contratual, propriedade intelectual sobre criações do colaborador, cessão de imagem e regulamentos internos da empresa."
    }
  ];

  const problemas = [
    {
      icon: <AlertTriangle className="w-6 h-6 text-brand-primary" />,
      title: "Contratos Desatualizados ou Genéricos",
      desc: "Modelos prontos de internet que omitem cláusulas essenciais de teletrabalho, sigilo e termo de compensação de jornada, gerando nulidades no judiciário."
    },
    {
      icon: <FileSpreadsheet className="w-6 h-6 text-brand-primary" />,
      title: "Falhas Ocultas em Ponto e Banco de Horas",
      desc: "Acordos de compensação inválidos perante convenções coletivas e registros invariáveis britânicos que atraem presunção de veracidade da jornada alegada pelo empregado."
    },
    {
      icon: <FileSignature className="w-6 h-6 text-brand-primary" />,
      title: "Risco de Reversão de Justa Causa",
      desc: "Demissões motivadas aplicadas sem lastro probatório, imediatidade ou gradação de penalidades, resultando em indenizações por danos morais."
    },
    {
      icon: <UserCheck className="w-6 h-6 text-brand-primary" />,
      title: "Pejotização Frágil & Terceirização Ilícita",
      desc: "Contratação de prestadores PJ com subordinação direta e cumprimento de horário, provocando reconhecimento de vínculo empregatício com encargos retroativos."
    }
  ];

  const solucoes = [
    {
      numero: "01",
      titulo: "Compliance Trabalhista Integral",
      descricao: "Adequação completa da estrutura corporativa às normas da CLT, Convenções e Acordos Coletivos da categoria e Normas Regulamentadoras (NRs). Diagnóstico de conformidade legal para eliminar riscos sistemáticos de autuações e reclamatórias."
    },
    {
      numero: "02",
      titulo: "Elaboração e Revisão de Contratos",
      descricao: "Elaboração de contratos de trabalho sob medida com cláusulas protetivas de confidencialidade, não-concorrência, regulamentação de teletrabalho (home office), termo de responsabilidade de ferramentas e contratos de prestação de serviços (PJ e autônomos)."
    },
    {
      numero: "03",
      titulo: "Auditoria Interna de Folha & Jornada",
      descricao: "Análise profunda de folha de pagamento, controle de ponto físico e eletrônico, banco de horas, intervalos e adicionais de insalubridade, periculosidade e noturno com cruzamento de laudos técnicos (PGR/LTCAT) para sanar passivos ocultos."
    },
    {
      numero: "04",
      titulo: "Pareceres Jurídicos e Suporte ao RH/DP",
      descricao: "Assessoria consultiva em tempo real para tomada de decisões críticas: demissões estratégicas ou por justa causa, aplicação escalonada de advertências e suspensões, transferências de colaboradores e alinhamento com a equipe de Recursos Humanos."
    }
  ];

  const passos = [
    {
      step: "01",
      title: "Diagnóstico Inicial da Operação",
      desc: "Mapeamos a estrutura de cargos, convenções sindicais aplicáveis, rotinas de ponto e principais vulnerabilidades da rotina corporativa."
    },
    {
      step: "02",
      title: "Auditoria Documental & Contratual",
      desc: "Examinamos os contratos de trabalho em vigor, aditivos, acordos individuais e termos de prestação de serviços de parceiros e terceiros."
    },
    {
      step: "03",
      title: "Implementação de Adequações e Políticas",
      desc: "Redação de novos instrumentos jurídicos, revisão de termos de ponto e instituição do Código de Conduta e Regulamento Interno da empresa."
    },
    {
      step: "04",
      title: "Consultoria Contínua & Pareceres Rápidos",
      desc: "Canal direto de suporte ao RH e à diretoria para orientar rescisões complexas, medidas disciplinares e consultas rotineiras."
    }
  ];

  return (
    <>
      <SEO 
        title="Advocacia Preventiva e Consultoria Trabalhista Patronal | Escritório Freitas"
        description="Assessoria jurídica preventiva para empresas: compliance trabalhista, auditoria de folha, contratos seguros e suporte ao RH em Salto de Pirapora, Sorocaba e região."
        url="/servicos/direito-patronal/advocacia-preventiva-consultoria-trabalhista"
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
                <Link to="/servicos/direito-patronal" className="hover:text-brand-primary">Direito Trabalhista Empresarial</Link>
                <span>/</span>
                <span className="text-brand-primary font-semibold">Advocacia Preventiva</span>
              </div>

              <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-[#333333] font-semibold leading-[1.2] mb-3.5 max-w-2xl tracking-tight">
                Advocacia Preventiva e Consultoria Trabalhista
              </h1>

              <p className="font-gilroy text-sm sm:text-base md:text-[17px] text-[#555555] max-w-xl leading-relaxed mb-6 font-normal">
                Esta é a área mais estratégica da gestão jurídica empresarial, focada em diagnosticar riscos, blindar rotinas do RH e evitar que a sua empresa sofra processos judiciais e autuações onerosas.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8">
                <a 
                  href="https://wa.me/5515996662831?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20Advocacia%20Preventiva%20e%20Consultoria%20Trabalhista%20para%20minha%20empresa."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-2.5 bg-brand-primary text-brand-surface font-gilroy text-xs uppercase tracking-widest px-6 py-3.5 hover:bg-black transition-colors duration-300"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Falar com Advogado Especialista</span>
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
                  <ShieldCheck className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-poppins text-xs font-semibold text-[#333333] leading-snug">Compliance CLT</h4>
                    <p className="font-gilroy text-[11px] text-[#6c7279] leading-tight">Conformidade com leis trabalhistas e normas sindicais</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <FileSearch className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-poppins text-xs font-semibold text-[#333333] leading-snug">Auditoria de Riscos</h4>
                    <p className="font-gilroy text-[11px] text-[#6c7279] leading-tight">Varredura de folha, ponto e adicionais de risco</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <BookOpenCheck className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-poppins text-xs font-semibold text-[#333333] leading-snug">Pareceres ao RH</h4>
                    <p className="font-gilroy text-[11px] text-[#6c7279] leading-tight">Segurança jurídica para demissões e punições</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-5 relative overflow-hidden hidden lg:block bg-[#222222]">
            <img 
              src="/equipe.jpg" 
              alt="Advocacia Preventiva Trabalhista — Escritório Freitas" 
              className="absolute inset-0 w-full h-full object-cover object-center grayscale-[15%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 border border-white/20 p-6 backdrop-blur-md bg-black/40">
              <span className="text-[10px] font-gilroy uppercase tracking-[0.25em] text-white/70 block mb-1">
                Estratégia Empresarial Preventiva
              </span>
              <span className="font-poppins text-brand-surface text-lg font-semibold mb-1.5 block">
                Prevenção Inteligente de Passivos
              </span>
              <p className="text-brand-surface/85 text-xs leading-relaxed font-gilroy">
                Evite que vícios cotidianos de folha e contratos fragilizem o caixa e a reputação da sua empresa. Atuamos ao lado da sua gestão para trazer tranquilidade operacional.
              </p>
            </div>
          </div>
        </div>
        
        {/* Sub-bar Hero: 4 Pilares */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 border-t border-[#333333]/10 divide-y md:divide-y-0 md:divide-x divide-[#333333]/10">
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">01 · Conformidade</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Compliance Trabalhista</h3>
            <p className="text-xs text-[#555555] font-gilroy">Adequação às leis vigentes, acordos coletivos e NRs.</p>
          </div>
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">02 · Instrumentos</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Contratos Blindados</h3>
            <p className="text-xs text-[#555555] font-gilroy">Cláusulas de sigilo, teletrabalho e prestação de serviços PJ.</p>
          </div>
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">03 · Diagnóstico</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Auditoria Interna</h3>
            <p className="text-xs text-[#555555] font-gilroy">Análise de ponto, banco de horas e adicionais de insalubridade.</p>
          </div>
          <div className="p-8 bg-brand-surface/40 hover:bg-brand-surface-alt/40 transition-colors">
            <span className="text-[10px] uppercase tracking-widest text-[#555555] mb-2 block font-gilroy">04 · Consultoria</span>
            <h3 className="font-poppins text-lg text-[#333333] mb-1">Pareceres para o RH</h3>
            <p className="text-xs text-[#555555] font-gilroy">Orientação em demissões complexas, advertências e suspensões.</p>
          </div>
        </div>
      </section>

      {/* 2. PROBLEMA */}
      <section className="py-24 px-6 lg:px-20 bg-brand-surface-alt/30 border-b border-brand-primary/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <span className="font-gilroy text-[11px] uppercase tracking-[0.3em] text-brand-muted block mb-4">
              Vulnerabilidades Trabalhistas Ocultas
            </span>
            <h2 className="font-poppins text-3xl md:text-5xl text-brand-primary leading-tight mb-6">
              Pequenas falhas na rotina do RH transformam-se em processos trabalhistas com condenações pesadas.
            </h2>
            <p className="font-gilroy text-lg text-brand-secondary leading-relaxed">
              Sem uma auditoria preventiva, empresas acumulam passivos invisíveis de horas extras, adicionais indevidos e contratos vulneráveis que surpreendem a diretoria quando a notificação da Justiça do Trabalho chega.
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
                Segurança Jurídica Patronal
              </span>
              <h2 className="font-poppins text-3xl md:text-5xl text-brand-primary leading-tight mb-6">
                Como nossa consultoria preventiva protege a sua operação.
              </h2>
              <p className="font-gilroy text-base text-brand-secondary leading-relaxed mb-8">
                Atuamos integrados ao departamento pessoal e à alta gestão da empresa para mitigar riscos, formatar regras claras de conduta e garantir que cada documento assinado possua respaldo probatório perante a Justiça do Trabalho.
              </p>
              <div className="p-6 bg-brand-surface-alt/40 border border-brand-primary/10 space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                  <span className="font-gilroy text-sm text-brand-primary font-medium">Redução de até 80% em novas reclamatórias</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                  <span className="font-gilroy text-sm text-brand-primary font-medium">Mitigação de multas perante fiscalizações</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                  <span className="font-gilroy text-sm text-brand-primary font-medium">Previsibilidade orçamentária para a empresa</span>
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
                    {sol.descricao}
                  </p>
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
              Metodologia de Atuação
            </span>
            <h2 className="font-poppins text-3xl md:text-5xl text-brand-primary mb-4">
              Como funciona nossa consultoria preventiva
            </h2>
            <p className="font-gilroy text-brand-secondary text-base">
              Etapas estruturadas para analisar suas rotinas, sanear inconsistências e manter a empresa permanentemente protegida.
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
                A segurança de contar com quem domina a advocacia patronal preventiva
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
              Perguntas frequentes sobre Advocacia Preventiva
            </h2>
            <p className="font-gilroy text-brand-secondary text-base">
              Entenda como a consultoria contínua blinda o patrimônio da sua empresa contra surpresas judiciais.
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
            Advocacia Patronal Preventiva · Proteção Imediata & Sigilo
          </span>
          <h2 className="font-poppins text-4xl sm:text-5xl md:text-6xl text-brand-surface leading-tight mb-8">
            Deseja blindar os contratos e as rotinas de trabalho da sua empresa?
          </h2>
          <p className="font-gilroy text-lg text-brand-surface/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Agende uma reunião estratégica de diagnóstico com nossa equipe em Salto de Pirapora e Sorocaba para identificar vulnerabilidades e proteger os resultados do seu negócio.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://wa.me/5515996662831?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20reuni%C3%A3o%20para%20conhecer%20a%20Advocacia%20Preventiva%20e%20Consultoria%20Trabalhista."
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
