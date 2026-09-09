import { SEO } from '../components/SEO';

export function PoliticaPrivacidade() {
  return (
    <>
      <SEO 
        title="Política de Privacidade | Escritório Freitas"
        description="Política de Privacidade do Escritório Freitas — Advogados Associados."
        url="/politica-de-privacidade"
      />
      <main className="pt-40 pb-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-20">
          <span className="font-gilroy text-sm uppercase tracking-widest text-brand-secondary block mb-6">
            Documentação Legal
          </span>
          <h1 className="font-poppins text-4xl md:text-5xl text-brand-primary mb-12">Política de Privacidade</h1>
          
          <div className="prose prose-lg text-brand-secondary font-gilroy leading-relaxed">
            <p>O Escritório Freitas — Advogados Associados tem o compromisso com a transparência, a privacidade e a segurança dos dados de seus clientes, de acordo com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD).</p>
            
            <h2 className="font-poppins text-2xl text-brand-primary mt-12 mb-4">1. Coleta de Dados</h2>
            <p>Coletamos as informações que você nos fornece diretamente, como ao preencher formulários de contato em nosso site (nome, e-mail, telefone e mensagem) com a finalidade exclusiva de retorno e atendimento à solicitação.</p>

            <h2 className="font-poppins text-2xl text-brand-primary mt-12 mb-4">2. Uso e Tratamento</h2>
            <p>Os dados pessoais coletados serão utilizados unicamente para:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Responder a dúvidas, solicitações ou agendamentos.</li>
              <li>Envio de informações jurídicas solicitadas pelo usuário.</li>
              <li>Cumprimento de obrigações legais ou regulatórias.</li>
            </ul>

            <h2 className="font-poppins text-2xl text-brand-primary mt-12 mb-4">3. Compartilhamento e Armazenamento</h2>
            <p>As informações coletadas não serão comercializadas ou compartilhadas com terceiros sem a expressa autorização do titular, salvo exigência judicial ou legal. Seus dados são armazenados em ambiente seguro pelo tempo necessário para a prestação do serviço.</p>

            <h2 className="font-poppins text-2xl text-brand-primary mt-12 mb-4">4. Direitos do Titular</h2>
            <p>O titular dos dados poderá solicitar a qualquer momento a confirmação da existência de tratamento, o acesso aos dados, a correção de dados incompletos, inexatos ou desatualizados, bem como a eliminação dos dados coletados mediante o consentimento, através dos canais oficiais de contato do Escritório.</p>
          </div>
        </div>
      </main>
    </>
  );
}
