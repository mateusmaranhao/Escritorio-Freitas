/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Sobre } from './pages/Sobre';
import { Servicos } from './pages/Servicos';
import { DireitoPatronal } from './pages/DireitoPatronal';
import { DireitoImobiliario } from './pages/DireitoImobiliario';
import { DireitoEmpresarial } from './pages/DireitoEmpresarial';

// Páginas de Serviços - Direito Patronal
import { AdvocaciaPreventiva } from './pages/AdvocaciaPreventiva';
import { AdvocaciaContenciosa } from './pages/AdvocaciaContenciosa';
import { RelacoesSindicais } from './pages/RelacoesSindicais';
import { DefesaAdministrativa } from './pages/DefesaAdministrativa';

// Páginas de Serviços - Direito Empresarial
import { DireitoSocietario } from './pages/DireitoSocietario';
import { ContratosEmpresariais } from './pages/ContratosEmpresariais';
import { PropriedadeIntelectual } from './pages/PropriedadeIntelectual';
import { GestaoCrises } from './pages/GestaoCrises';
import { DefesaContenciosaEmpresarial } from './pages/DefesaContenciosaEmpresarial';

// Páginas de Serviços - Direito Imobiliário
import { CompraVendaDueDiligence } from './pages/CompraVendaDueDiligence';
import { LocacaoImoveis } from './pages/LocacaoImoveis';
import { RegularizacaoImoveis } from './pages/RegularizacaoImoveis';
import { DireitoCondominial } from './pages/DireitoCondominial';
import { IncorporacaoLeiloes } from './pages/IncorporacaoLeiloes';

import { Contato } from './pages/Contato';
import { PoliticaPrivacidade } from './pages/PoliticaPrivacidade';
import { TermosUso } from './pages/TermosUso';
import { PoliticaCookies } from './pages/PoliticaCookies';
import { NotFound } from './pages/NotFound';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="sobre" element={<Sobre />} />
            <Route path="servicos" element={<Servicos />} />
            
            {/* Áreas de Atuação Principais */}
            <Route path="servicos/direito-patronal" element={<DireitoPatronal />} />
            <Route path="servicos/direito-empresarial" element={<DireitoEmpresarial />} />
            <Route path="servicos/direito-imobiliario" element={<DireitoImobiliario />} />

            {/* Serviços Específicos - Direito Patronal */}
            <Route path="servicos/direito-patronal/advocacia-preventiva-consultoria-trabalhista" element={<AdvocaciaPreventiva />} />
            <Route path="servicos/direito-patronal/advocacia-contenciosa" element={<AdvocaciaContenciosa />} />
            <Route path="servicos/direito-patronal/relacoes-sindicais" element={<RelacoesSindicais />} />
            <Route path="servicos/direito-patronal/defesa-administrativa" element={<DefesaAdministrativa />} />
            <Route path="servicos/defesa-administrativa" element={<Navigate to="/servicos/direito-patronal/defesa-administrativa" replace />} />

            {/* Serviços Específicos - Direito Empresarial */}
            <Route path="servicos/direito-empresarial/direito-societario" element={<DireitoSocietario />} />
            <Route path="servicos/direito-empresarial/contratos-empresariais" element={<ContratosEmpresariais />} />
            <Route path="servicos/direito-empresarial/propriedade-intelectual-compliance" element={<PropriedadeIntelectual />} />
            <Route path="servicos/direito-empresarial/gestao-de-crises-recuperacao-falencia" element={<GestaoCrises />} />
            <Route path="servicos/direito-empresarial/defesa-contenciosa-empresarial" element={<DefesaContenciosaEmpresarial />} />

            {/* Serviços Específicos - Direito Imobiliário */}
            <Route path="servicos/direito-imobiliario/compra-e-venda-due-diligence" element={<CompraVendaDueDiligence />} />
            <Route path="servicos/direito-imobiliario/locacao-de-imoveis" element={<LocacaoImoveis />} />
            <Route path="servicos/direito-imobiliario/regularizacao-de-imoveis" element={<RegularizacaoImoveis />} />
            <Route path="servicos/direito-imobiliario/direito-condominial-vizinhanca" element={<DireitoCondominial />} />
            <Route path="servicos/direito-imobiliario/incorporacao-imobiliaria-leiloes" element={<IncorporacaoLeiloes />} />

            {/* Redirecionamentos amigáveis de rotas antigas */}
            <Route path="servicos/direito-trabalhista" element={<Navigate to="/servicos/direito-patronal" replace />} />
            <Route path="servicos/direito-previdenciario" element={<Navigate to="/servicos" replace />} />

            {/* Institucional e Legal */}
            <Route path="contato" element={<Contato />} />
            <Route path="politica-de-privacidade" element={<PoliticaPrivacidade />} />
            <Route path="termos-de-uso" element={<TermosUso />} />
            <Route path="politica-de-cookies" element={<PoliticaCookies />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}
