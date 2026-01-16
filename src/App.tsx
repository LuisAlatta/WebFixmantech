import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ProductsPage from './pages/ProductsPage';

import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

// Component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
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
