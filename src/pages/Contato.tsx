import { useState } from 'react';
import { SEO } from '../components/SEO';

export function Contato() {
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    
    // Simulate API call fallback
    setTimeout(() => {
      setFormStatus('success');
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <>
      <SEO 
        title="Contato | Escritório Freitas — Advogados Associados"
        description="Entre em contato com o Escritório Freitas em Salto de Pirapora. Telefone, endereço e formulário para agendar sua orientação jurídica."
        url="/contato"
      />
      
      <main className="pt-40 pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <h1 className="font-serif text-5xl md:text-6xl text-brand-primary mb-16">
            Entre em contato com o Escritório Freitas
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Form */}
            <div>
              <p className="font-sans text-lg text-brand-secondary mb-10">
                Conte brevemente o que você precisa. Retornaremos o contato para agendar uma conversa.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label htmlFor="name" className="block font-sans text-[13px] uppercase tracking-widest text-brand-primary mb-2">Nome Completo</label>
                  <input type="text" id="name" required className="w-full border border-brand-primary/20 bg-transparent p-4 outline-none focus:border-brand-primary transition-colors" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block font-sans text-[13px] uppercase tracking-widest text-brand-primary mb-2">E-mail</label>
                    <input type="email" id="email" required className="w-full border border-brand-primary/20 bg-transparent p-4 outline-none focus:border-brand-primary transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block font-sans text-[13px] uppercase tracking-widest text-brand-primary mb-2">Telefone / WhatsApp</label>
                    <input type="tel" id="phone" required className="w-full border border-brand-primary/20 bg-transparent p-4 outline-none focus:border-brand-primary transition-colors" />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block font-sans text-[13px] uppercase tracking-widest text-brand-primary mb-2">Assunto</label>
                  <select id="subject" required className="w-full border border-brand-primary/20 bg-transparent p-4 outline-none focus:border-brand-primary transition-colors appearance-none rounded-none">
                    <option value="">Selecione o assunto</option>
                    <option value="Trabalhista">Direito Trabalhista</option>
                    <option value="Previdenciario">Direito Previdenciário</option>
                    <option value="Imobiliario">Direito Imobiliário</option>
                    <option value="Empresarial">Direito Empresarial</option>
                    <option value="Outros">Outros</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-sans text-[13px] uppercase tracking-widest text-brand-primary mb-2">Mensagem</label>
                  <textarea id="message" required rows={4} className="w-full border border-brand-primary/20 bg-transparent p-4 outline-none focus:border-brand-primary transition-colors resize-none"></textarea>
                </div>

                <div className="flex items-start gap-3 mt-2">
                  <input type="checkbox" id="lgpd" required className="mt-1" />
                  <label htmlFor="lgpd" className="font-sans text-[13px] text-brand-secondary">
                    Li e concordo com a <a href="/politica-de-privacidade" className="underline hover:text-brand-primary">Política de Privacidade</a>.
                  </label>
                </div>

                <div className="mt-6">
                  <button 
                    type="submit" 
                    disabled={formStatus === 'loading'}
                    className="inline-block border border-brand-primary bg-brand-primary px-10 py-4 text-[13px] uppercase tracking-widest text-white hover:bg-brand-deep transition-colors duration-300 disabled:opacity-50"
                  >
                    {formStatus === 'loading' ? 'Enviando...' : 'Enviar mensagem'}
                  </button>
                  
                  {formStatus === 'success' && (
                    <p className="mt-4 font-sans text-sm text-green-700">Mensagem enviada. Obrigado pelo contato.</p>
                  )}
                  {formStatus === 'error' && (
                    <p className="mt-4 font-sans text-sm text-red-700">Confira os campos destacados e tente novamente.</p>
                  )}
                </div>
              </form>
            </div>

            {/* Info */}
            <div className="bg-black/5 p-12 h-fit">
              <h3 className="font-serif text-3xl text-brand-primary mb-8">Informações</h3>
              
              <div className="flex flex-col gap-8">
                <div>
                  <strong className="block font-sans text-[11px] uppercase tracking-widest text-brand-secondary mb-2">Endereço</strong>
                  <p className="font-sans text-brand-primary">
                    R. Maximiano Fidelis, 45 - Centro<br/>
                    Salto de Pirapora - SP<br/>
                    18160-041
                  </p>
                </div>
                
                <div>
                  <strong className="block font-sans text-[11px] uppercase tracking-widest text-brand-secondary mb-2">WhatsApp / Telefone</strong>
                  <a href="https://wa.me/5515996662831" className="font-sans text-brand-primary hover:text-brand-secondary transition-colors text-lg">
                    (15) 99666-2831
                  </a>
                </div>

                <div className="mt-8 pt-8 border-t border-brand-primary/10">
                  <p className="font-sans text-sm text-brand-secondary mb-4">
                    Prefere falar agora mesmo?
                  </p>
                  <a 
                    href="https://wa.me/5515996662831" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-brand-primary px-6 py-3 text-[12px] uppercase tracking-widest text-brand-primary hover:bg-brand-primary hover:text-white transition-colors duration-300"
                  >
                    Falar pelo WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 w-full h-[400px] border border-brand-primary/10 overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.7770857398183!2d-47.57685652467261!3d-23.648834464796347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c5f3408f9c1647%3A0xc32d1844a49c9527!2sR.%20Maximiano%20Fidelis%2C%2045%20-%20Centro%2C%20Salto%20de%20Pirapora%20-%20SP%2C%2018160-041!5e0!3m2!1spt-BR!2sbr!4v1714421111111!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </main>
    </>
  );
}
