import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ProductsPage from './pages/ProductsPage';

import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/productos" element={<ProductsPage />} />
          <Route path="/nosotros" element={<AboutPage />} />
          <Route path="/contactenos" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
