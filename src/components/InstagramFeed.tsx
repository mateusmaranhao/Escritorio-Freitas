import { Instagram, ArrowUpRight } from 'lucide-react';

interface InstagramPost {
  id: string;
  imageUrl: string;
  alt: string;
}

export function InstagramFeed() {
  const posts: InstagramPost[] = [
    {
      id: 'post-1',
      imageUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
      alt: 'Publicação Advocacia Preventiva e Contratos - Escritório Freitas',
    },
    {
      id: 'post-2',
      imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
      alt: 'Publicação Compliance e Auditoria Trabalhista - Escritório Freitas',
    },
    {
      id: 'post-3',
      imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      alt: 'Publicação Direito Imobiliário e Due Diligence - Escritório Freitas',
    },
    {
      id: 'post-4',
      imageUrl: '/equipe.jpg',
      alt: 'Equipe Escritório Freitas Advogados Associados',
    },
  ];

  const instagramUrl = 'https://www.instagram.com/escritorio_freitas/';

  return (
    <section className="py-24 px-6 lg:px-20 bg-brand-surface border-b border-[#333333]/10">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/5 border border-black/10 rounded-full mb-4">
              <Instagram className="w-3.5 h-3.5 text-[#E1306C]" />
              <span className="text-[11px] font-gilroy uppercase tracking-[0.2em] text-[#555555]">
                Instagram Oficial · @escritorio_freitas
              </span>
            </div>
            
            <h3 className="font-poppins text-3xl sm:text-4xl text-brand-primary leading-tight mb-4">
              Acompanhe nosso trabalho no Instagram
            </h3>
            
            <p className="font-gilroy text-base sm:text-lg text-brand-secondary leading-relaxed">
              Orientações práticas sobre seus direitos, análises de jurisprudência, rotina da advocacia e notícias jurídicas relevantes para você e sua empresa.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-brand-primary text-brand-surface font-gilroy text-xs uppercase tracking-widest hover:bg-black/80 transition-colors shadow-sm group"
            >
              <Instagram className="w-4 h-4" />
              <span>Seguir @escritorio_freitas</span>
              <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* CONTAINER DO FEED DO INSTAGRAM - APENAS AS CAPAS DOS POSTS */}
        <div id="instagram-feed-container">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {posts.map((post) => (
              <a
                key={post.id}
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block aspect-square overflow-hidden bg-zinc-100 border border-[#333333]/10 relative cursor-pointer"
              >
                <img
                  src={post.imageUrl}
                  alt={post.alt}
                  className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-110 will-change-transform"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
