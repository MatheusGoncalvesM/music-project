import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import Section1 from './Section1.jsx';
import FeatProd from './FeatProd.jsx';
import Footer from './Footer.jsx';
import Section2 from './Section2.jsx';
import ProductsPage from './ProductsPage.jsx';

function App() {
  return (
    <div className="background-color">
      <Router>
        <Navbar />
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Hero />
                <Section1 />
                <Section2 />
                <FeatProd />
                <Footer />
              </>
            } 
          />
          <Route path="/products" element={<ProductsPage />} />
          {/* Adicione mais rotas aqui, se necessário */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
