import { SEO } from '../components/SEO';

export function PoliticaCookies() {
  return (
    <>
      <SEO 
        title="Política de Cookies | Escritório Freitas"
        description="Política de Cookies do site Escritório Freitas — Advogados Associados."
        url="/politica-de-cookies"
      />
      <main className="pt-40 pb-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-20">
          <span className="font-gilroy text-sm uppercase tracking-widest text-brand-secondary block mb-6">
            Documentação Legal
          </span>
          <h1 className="font-poppins text-4xl md:text-5xl text-brand-primary mb-12">Política de Cookies</h1>
          
          <div className="prose prose-lg text-brand-secondary font-gilroy leading-relaxed">
            <p>O Escritório Freitas — Advogados Associados utiliza cookies em seu site para aprimorar a experiência do usuário e analisar a utilização da plataforma.</p>
            
            <h2 className="font-poppins text-2xl text-brand-primary mt-12 mb-4">1. O que são cookies?</h2>
            <p>Cookies são pequenos arquivos de texto que um site, ao ser visitado, coloca no computador do usuário ou em seu dispositivo móvel através do navegador de internet (browser). Eles permitem que o site recorde ações e preferências do usuário.</p>

            <h2 className="font-poppins text-2xl text-brand-primary mt-12 mb-4">2. Cookies Essenciais</h2>
            <p>Alguns cookies são estritamente necessários para o funcionamento adequado do site, como aqueles que garantem a segurança da navegação. O uso desses cookies independe de consentimento prévio do usuário.</p>

            <h2 className="font-poppins text-2xl text-brand-primary mt-12 mb-4">3. Controle e Desativação</h2>
            <p>A maioria dos navegadores permite ao usuário gerir ou desativar os cookies. O usuário pode, a qualquer momento, configurar seu navegador para recusar novos cookies ou para alertá-lo quando forem enviados. Alertamos, no entanto, que a desativação de cookies pode afetar o funcionamento de determinados recursos do site.</p>
          </div>
        </div>
      </main>
    </>
  );
}
