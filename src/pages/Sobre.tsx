import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export function Sobre() {
  return (
    <>
      <SEO 
        title="Sobre o Escritório Freitas | Advogados Associados"
        description="Conheça a história e o compromisso do Escritório Freitas — Advogados Associados, atuando com proteção jurídica em Salto de Pirapora e região há mais de 10 anos."
        url="/sobre"
      />
      
      <main className="pt-40 pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            
            <div className="lg:col-span-7">
              <span className="font-gilroy text-sm uppercase tracking-widest text-brand-secondary block mb-6">
                Nossa História
              </span>
              <h1 className="font-poppins text-5xl md:text-6xl text-brand-primary leading-tight mb-12">
                Escritório Freitas — Advogados Associados
              </h1>
              
              <div className="prose prose-lg text-brand-secondary">
                <p className="mb-6">
                  Com mais de 10 anos de experiência na advocacia, o Escritório Freitas construiu uma trajetória sólida baseada na responsabilidade e no compromisso com cada cliente. Atuando com sede em Salto de Pirapora e estendendo nossos serviços a Sorocaba e região, nosso foco sempre foi oferecer orientação jurídica clara e objetiva.
                </p>
                <p className="mb-6">
                  Nossa atuação é direcionada à proteção jurídica. Compreendemos que pessoas, empresas e condomínios enfrentam desafios diários que exigem atenção redobrada aos detalhes contratuais e às relações de trabalho. Por isso, nos posicionamos não apenas como defensores em litígios, mas como parceiros na orientação preventiva e estratégica.
                </p>
                <p className="mb-6">
                  Atendemos empresários e condomínios que buscam segurança jurídica para tomar decisões, e pessoas que necessitam de amparo legal em questões trabalhistas e previdenciárias. Acreditamos que o Direito deve ser exercido com proximidade, ética e extrema dedicação ao contexto de cada demanda.
                </p>
                <p>
                  O profissionalismo de nossa equipe reflete-se na análise cuidadosa de cada situação, garantindo que nossos clientes compreendam seus direitos, deveres e as melhores alternativas para a resolução de suas questões jurídicas.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-black/5 p-12 sticky top-40">
                <h3 className="font-poppins text-3xl text-brand-primary mb-8">Nossos Compromissos</h3>
                <ul className="flex flex-col gap-6 font-gilroy text-brand-secondary">
                  <li className="flex gap-4">
                    <span className="text-brand-primary text-xl font-poppins">I.</span>
                    <div>
                      <strong className="block text-brand-primary font-medium mb-1">Responsabilidade</strong>
                      Atuação ética e transparente em cada etapa.
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-brand-primary text-xl font-poppins">II.</span>
                    <div>
                      <strong className="block text-brand-primary font-medium mb-1">Profissionalismo</strong>
                      Rigor técnico na análise e condução das demandas.
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-brand-primary text-xl font-poppins">III.</span>
                    <div>
                      <strong className="block text-brand-primary font-medium mb-1">Proximidade</strong>
                      Compreensão profunda do contexto de cada cliente.
                    </div>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}
