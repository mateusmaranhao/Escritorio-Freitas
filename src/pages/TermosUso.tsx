import { SEO } from '../components/SEO';

export function TermosUso() {
  return (
    <>
      <SEO 
        title="Termos de Uso | Escritório Freitas"
        description="Termos de Uso do site Escritório Freitas — Advogados Associados."
        url="/termos-de-uso"
      />
      <main className="pt-40 pb-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-20">
          <span className="font-sans text-sm uppercase tracking-widest text-brand-secondary block mb-6">
            Documentação Legal
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-brand-primary mb-12">Termos de Uso</h1>
          
          <div className="prose prose-lg text-brand-secondary font-sans leading-relaxed">
            <p>Ao acessar o site do Escritório Freitas — Advogados Associados, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis.</p>
            
            <h2 className="font-serif text-2xl text-brand-primary mt-12 mb-4">1. Natureza Informativa</h2>
            <p>Os conteúdos presentes neste site possuem caráter meramente informativo e institucional. O conteúdo disponibilizado não constitui e não deve ser interpretado como aconselhamento ou consultoria jurídica para nenhum propósito.</p>
            <p>O envio de mensagens por meio do site ou WhatsApp não estabelece, por si só, uma relação de cliente e advogado.</p>

            <h2 className="font-serif text-2xl text-brand-primary mt-12 mb-4">2. Propriedade Intelectual</h2>
            <p>Todo o conteúdo, layout, textos e imagens disponibilizados neste site são protegidos pelas leis de propriedade intelectual. É proibida a reprodução, distribuição ou utilização comercial sem autorização prévia expressa do Escritório Freitas.</p>

            <h2 className="font-serif text-2xl text-brand-primary mt-12 mb-4">3. Limitações de Responsabilidade</h2>
            <p>O Escritório Freitas não se responsabiliza por eventuais danos diretos ou indiretos decorrentes do uso, ou da incapacidade de uso, das informações contidas neste site. O site pode conter links para sites externos cujos conteúdos e políticas não são de responsabilidade de nosso escritório.</p>
          </div>
        </div>
      </main>
    </>
  );
}
