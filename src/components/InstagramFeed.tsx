import React, { useState } from 'react';
import { Instagram, ExternalLink, Heart, MessageCircle, Sparkles, Layers, ArrowUpRight, Code } from 'lucide-react';

interface InstagramPost {
  id: string;
  category: string;
  imageUrl: string;
  caption: string;
  date: string;
  likes: number;
  comments: number;
  isCarousel?: boolean;
}

export function InstagramFeed() {
  const [showEmbedCodeHint, setShowEmbedCodeHint] = useState(false);

  const posts: InstagramPost[] = [
    {
      id: 'post-1',
      category: 'Direito Patronal',
      imageUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
      caption: 'Prevenção de passivos trabalhistas: 3 cuidados contratuais indispensáveis para empresas antes de formalizar rescisões.',
      date: 'Há 2 dias',
      likes: 94,
      comments: 12,
      isCarousel: true,
    },
    {
      id: 'post-2',
      category: 'Compliance Trabalhista',
      imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
      caption: 'Auditoria Patronal: como a adequação de controle de ponto e rotinas de RH blinda a sua empresa contra passivos acumulados.',
      date: 'Há 4 dias',
      likes: 128,
      comments: 21,
      isCarousel: false,
    },
    {
      id: 'post-3',
      category: 'Direito Imobiliário',
      imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      caption: 'Due diligence imobiliária: o passo a passo jurídico para blindar transações e evitar riscos ocultos na compra de imóveis.',
      date: 'Há 1 semana',
      likes: 87,
      comments: 15,
      isCarousel: true,
    },
    {
      id: 'post-4',
      category: 'Escritório Freitas',
      imageUrl: '/equipe.jpg',
      caption: 'Mais de 10 anos pautados pelo rigor técnico, ética e atendimento próximo em Salto de Pirapora, Sorocaba e região.',
      date: 'Há 2 semanas',
      likes: 184,
      comments: 32,
      isCarousel: false,
    },
  ];

  const instagramUrl = 'https://www.instagram.com/escritorio_freitas/';

  return (
    <section className="py-28 px-6 lg:px-20 bg-brand-surface border-b border-[#333333]/10">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-14">
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

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-brand-primary text-brand-surface font-gilroy text-xs uppercase tracking-widest hover:bg-black/80 transition-all duration-300 shadow-sm group"
            >
              <Instagram className="w-4 h-4 transition-transform group-hover:scale-110" />
              <span>Seguir @escritorio_freitas</span>
              <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <button
              onClick={() => setShowEmbedCodeHint(!showEmbedCodeHint)}
              className="inline-flex items-center justify-center gap-2 px-4 py-3.5 border border-black/15 font-gilroy text-xs uppercase tracking-wider text-[#555555] hover:bg-black/5 transition-colors"
              title="Informações para incorporar widget de feed externo (Elfsight, Behold, etc.)"
            >
              <Code className="w-3.5 h-3.5" />
              <span>{showEmbedCodeHint ? 'Ocultar Instruções de Embed' : 'Área do Widget'}</span>
            </button>
          </div>
        </div>

        {/* Bloco de Ajuda / Embed Slot (para quando o usuário for adicionar o script do feed) */}
        {showEmbedCodeHint && (
          <div className="mb-10 p-6 sm:p-8 bg-brand-deep text-brand-surface border border-brand-surface/20">
            <div className="flex items-start gap-4">
              <div className="p-2.5 bg-brand-surface/10 rounded shrink-0">
                <Code className="w-5 h-5 text-brand-surface" />
              </div>
              <div className="flex-1">
                <h4 className="font-poppins text-lg font-medium text-brand-surface mb-2">
                  Área de Integração de Feed Externo (Elfsight, Behold, SnapWidget, etc.)
                </h4>
                <p className="font-gilroy text-sm text-brand-surface/80 leading-relaxed mb-4">
                  Esta seção já está pronta para receber o feed dinâmico de <strong>@escritorio_freitas</strong>. Quando você gerar o código do seu agregador de feed favorito, basta substituir ou posicionar o código no componente <code className="bg-black/40 px-2 py-0.5 text-xs font-mono text-emerald-300">src/components/InstagramFeed.tsx</code> na div sinalizada como <code className="bg-black/40 px-2 py-0.5 text-xs font-mono text-emerald-300">id="instagram-feed-container"</code>.
                </p>
                <div className="bg-black/60 p-4 font-mono text-xs text-brand-surface/90 rounded border border-white/10 overflow-x-auto">
                  <code>
                    &lt;div id=&quot;instagram-feed-container&quot;&gt;<br />
                    &nbsp;&nbsp;&lt;!-- Insira aqui o seu script ou iframe do Elfsight / Behold / SnapWidget --&gt;<br />
                    &lt;/div&gt;
                  </code>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CONTAINER DO FEED DO INSTAGRAM */}
        <div id="instagram-feed-container" className="relative">
          {/* Grid de Posts do Instagram */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {posts.map((post) => (
              <a
                key={post.id}
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block bg-white border border-[#333333]/10 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Imagem do Post com proporção 1:1 */}
                <div className="relative aspect-square overflow-hidden bg-zinc-900">
                  <img
                    src={post.imageUrl}
                    alt={post.caption}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Gradiente sutil inferior permanente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                  {/* Badge de Categoria */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2.5 py-1 text-[9px] font-gilroy font-semibold uppercase tracking-widest text-brand-surface bg-black/60 backdrop-blur-md border border-white/20">
                      {post.category}
                    </span>
                  </div>

                  {/* Ícone de Carrossel */}
                  {post.isCarousel && (
                    <div className="absolute top-3 right-3 z-10 text-white/90 bg-black/40 backdrop-blur-sm p-1.5 rounded-sm">
                      <Layers className="w-3.5 h-3.5" />
                    </div>
                  )}

                  {/* Overlay ao passar o mouse com estatísticas e link */}
                  <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 z-20">
                    <div className="flex justify-end">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-4 text-white font-gilroy text-xs">
                        <span className="flex items-center gap-1.5">
                          <Heart className="w-4 h-4 fill-white text-white" />
                          {post.likes}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MessageCircle className="w-4 h-4 fill-white text-white" />
                          {post.comments}
                        </span>
                      </div>
                      <span className="inline-block text-[11px] font-gilroy text-white/90 uppercase tracking-widest font-medium">
                        Ver publicação no Instagram →
                      </span>
                    </div>
                  </div>
                </div>

                {/* Legenda Resumida abaixo da imagem */}
                <div className="p-5 flex flex-col justify-between min-h-[110px]">
                  <p className="font-gilroy text-xs text-[#333333] leading-relaxed line-clamp-3 mb-3">
                    {post.caption}
                  </p>
                  <div className="flex items-center justify-between text-[10px] font-gilroy uppercase tracking-wider text-[#777777] border-t border-black/5 pt-2">
                    <span>{post.date}</span>
                    <span className="font-medium text-[#E1306C] group-hover:underline flex items-center gap-1">
                      <Instagram className="w-3 h-3" /> @escritorio_freitas
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Barra inferior informativa */}
          <div className="mt-8 pt-6 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-gilroy text-[#666666]">
            <p className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-primary" />
              <span>Publicações semanais com conteúdo prático de Direito Patronal, Imobiliário e Empresarial.</span>
            </p>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-primary font-medium hover:underline inline-flex items-center gap-1 shrink-0"
            >
              Acessar perfil completo <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
