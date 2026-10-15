import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Review {
  id: string;
  name: string;
  date: string;
  avatarType: 'image' | 'initial';
  avatarSrc?: string;
  avatarBg?: string;
  initial?: string;
  rating: number;
  isVerified: boolean;
  shortText: string;
  fullText?: string;
}

const reviewsData: Review[] = [
  {
    id: '1',
    name: 'tatiane furlan',
    date: '6 meses atrás',
    avatarType: 'image',
    avatarSrc: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80',
    rating: 5,
    isVerified: true,
    shortText: 'Otimos Profissionais',
  },
  {
    id: '2',
    name: 'fabigol1974',
    date: '6 meses atrás',
    avatarType: 'initial',
    avatarBg: 'bg-[#0a5298]',
    initial: 'f',
    rating: 5,
    isVerified: true,
    shortText: 'Toda a equipe,são excelentes,sempre que precisei de seus serviços obtive retorno como esperado,muito profissionalismo e ética,além de serem...',
    fullText: 'Toda a equipe,são excelentes,sempre que precisei de seus serviços obtive retorno como esperado,muito profissionalismo e ética,além de serem prestativos e rápidos na resolução das questões.',
  },
  {
    id: '3',
    name: 'Jose Lima',
    date: '6 meses atrás',
    avatarType: 'initial',
    avatarBg: 'bg-[#0081cb]',
    initial: 'J',
    rating: 5,
    isVerified: true,
    shortText: 'Escritório muito bom. Pessoal atencioso e totalmente dedicado. A equipe toda está de parabéns! ✌️',
  },
  {
    id: '4',
    name: 'Marcos Vinicius',
    date: '8 meses atrás',
    avatarType: 'initial',
    avatarBg: 'bg-[#d97706]',
    initial: 'M',
    rating: 5,
    isVerified: true,
    shortText: 'Fui muito bem atendido pelo Dr. e toda a equipe. Extremamente atenciosos, técnicos e transparentes do início ao fim do processo.',
  },
  {
    id: '5',
    name: 'Camila Rodrigues',
    date: '1 ano atrás',
    avatarType: 'initial',
    avatarBg: 'bg-[#059669]',
    initial: 'C',
    rating: 5,
    isVerified: true,
    shortText: 'Excelente escritório em Salto de Pirapora! Tiraram todas as dúvidas da minha família e resolveram nossa demanda com total agilidade e respeito.',
  },
  {
    id: '6',
    name: 'Antonio Carlos da Silva',
    date: '4 meses atrás',
    avatarType: 'initial',
    avatarBg: 'bg-[#4f46e5]',
    initial: 'A',
    rating: 5,
    isVerified: true,
    shortText: 'Equipe de alto nível, muito comprometida e humana. Passam muita segurança jurídica em todas as orientações. Super recomendo!',
  },
];

export function GoogleReviews() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const cardWidth = 360;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -cardWidth : cardWidth,
        behavior: 'smooth',
      });
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedIds(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="w-full">
      {/* Carousel container with arrows */}
      <div className="relative group/carousel">
        {/* Left Arrow Button */}
        <button
          onClick={() => handleScroll('left')}
          aria-label="Ver avaliações anteriores"
          className="absolute -left-3 md:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-md border border-gray-200/80 flex items-center justify-center text-gray-700 hover:text-black hover:bg-gray-50 hover:shadow-lg transition-all duration-200 active:scale-95"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Scrollable track */}
        <div
          ref={scrollContainerRef}
          className="flex gap-5 overflow-x-auto scroll-smooth py-3 px-1 no-scrollbar snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reviewsData.map((review) => {
            const isExpanded = !!expandedIds[review.id];
            const textToDisplay = isExpanded && review.fullText ? review.fullText : review.shortText;

            return (
              <div
                key={review.id}
                className="shrink-0 w-[300px] sm:w-[340px] md:w-[360px] bg-white rounded-2xl p-6 shadow-sm border border-black/5 flex flex-col justify-between snap-start transition-shadow duration-300 hover:shadow-md"
              >
                <div>
                  {/* Card Header: Avatar, Name, Date and Google G Logo */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3 min-w-0">
                      {review.avatarType === 'image' && review.avatarSrc ? (
                        <img
                          src={review.avatarSrc}
                          alt={review.name}
                          className="w-11 h-11 rounded-full object-cover shrink-0 ring-1 ring-black/5"
                        />
                      ) : (
                        <div
                          className={`w-11 h-11 rounded-full shrink-0 flex items-center justify-center text-white font-medium text-lg ${
                            review.avatarBg || 'bg-[#0a5298]'
                          }`}
                        >
                          {review.initial}
                        </div>
                      )}
                      <div className="min-w-0">
                        <h4 className="font-gilroy font-semibold text-gray-900 text-sm leading-tight truncate">
                          {review.name}
                        </h4>
                        <span className="font-gilroy text-xs text-gray-400 block mt-0.5">
                          {review.date}
                        </span>
                      </div>
                    </div>

                    {/* Google G Logo */}
                    <div className="shrink-0" title="Avaliação no Google">
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path
                          fill="#4285F4"
                          d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Stars + Google Verified Badge */}
                  <div className="flex items-center gap-1.5 mb-4">
                    <div className="flex gap-0.5 text-[#FBBC04]">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    {review.isVerified && (
                      <span className="inline-flex text-[#1a73e8] ml-1" title="Avaliação Verificada">
                        <svg
                          className="w-4 h-4 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72l-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z" />
                        </svg>
                      </span>
                    )}
                  </div>

                  {/* Review Text */}
                  <p className="font-gilroy text-[13.5px] text-gray-800 leading-relaxed">
                    {textToDisplay}
                  </p>

                  {/* Leia mais link if applicable */}
                  {review.fullText && (
                    <button
                      type="button"
                      onClick={() => toggleExpand(review.id)}
                      className="font-gilroy text-xs text-gray-500 hover:text-gray-800 mt-2 font-medium underline-offset-2 hover:underline cursor-pointer block"
                    >
                      {isExpanded ? 'Mostrar menos' : 'Leia mais'}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={() => handleScroll('right')}
          aria-label="Ver próximas avaliações"
          className="absolute -right-3 md:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-md border border-gray-200/80 flex items-center justify-center text-gray-700 hover:text-black hover:bg-gray-50 hover:shadow-lg transition-all duration-200 active:scale-95"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Button: VER TODAS AVALIAÇÕES */}
      <div className="mt-12 flex justify-center">
        <a
          href="https://www.google.com/maps/search/?api=1&query=Escrit%C3%B3rio+Freitas+Advogados+Associados+Salto+de+Pirapora"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-[#F4A600] hover:bg-[#e09800] text-white font-gilroy font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded-md shadow-sm hover:shadow-md transition-all duration-300 active:scale-98"
        >
          VER TODAS AVALIAÇÕES
        </a>
      </div>
    </div>
  );
}
