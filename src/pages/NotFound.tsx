import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export function NotFound() {
  return (
    <>
      <SEO 
        title="Página não encontrada | Escritório Freitas"
        description="A página que você procura pode ter sido movida ou não existir mais."
        url="/404"
      />
      <main className="min-h-[70vh] flex items-center pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 text-center">
          <h1 className="font-serif text-6xl md:text-8xl text-brand-primary mb-6">404</h1>
          <h2 className="font-serif text-3xl md:text-4xl text-brand-primary mb-6">
            Página não encontrada
          </h2>
          <p className="font-sans text-lg text-brand-secondary max-w-lg mx-auto mb-12">
            A página que você procura pode ter sido movida ou não existir mais.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/" 
              className="inline-block border border-brand-primary bg-brand-primary px-8 py-4 text-[13px] uppercase tracking-widest text-white hover:bg-brand-deep transition-colors duration-500"
            >
              Voltar ao início
            </Link>
            <Link 
              to="/servicos" 
              className="inline-block border border-brand-primary px-8 py-4 text-[13px] uppercase tracking-widest text-brand-primary hover:bg-brand-primary hover:text-white transition-colors duration-500"
            >
              Conhecer nossos serviços
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
