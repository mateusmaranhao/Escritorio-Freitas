/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Sobre } from './pages/Sobre';
import { Servicos } from './pages/Servicos';
import { DireitoTrabalhista } from './pages/DireitoTrabalhista';
import { DireitoPrevidenciario } from './pages/DireitoPrevidenciario';
import { DireitoImobiliario } from './pages/DireitoImobiliario';
import { DireitoEmpresarial } from './pages/DireitoEmpresarial';
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
            <Route path="servicos/direito-trabalhista" element={<DireitoTrabalhista />} />
            <Route path="servicos/direito-previdenciario" element={<DireitoPrevidenciario />} />
            <Route path="servicos/direito-imobiliario" element={<DireitoImobiliario />} />
            <Route path="servicos/direito-empresarial" element={<DireitoEmpresarial />} />
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

