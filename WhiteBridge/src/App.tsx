import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import HowItWorksPage from './pages/HowItWorksPage';
import CasesWeFundPage from './pages/CasesWeFundPage';
import FAQPage from './pages/FAQPage';
import AboutUsPage from './pages/AboutUsPage';
import ApplyPage from './pages/ApplyPage';
import ResourcesPage from './pages/ResourcesPage';
import CaliforniaPage from './pages/CaliforniaPage';
import TexasPage from './pages/TexasPage';
import FloridaPage from './pages/FloridaPage';
import IllinoisPage from './pages/IllinoisPage';
import GeorgiaPage from './pages/GeorgiaPage';
import FloatingCTA from './components/FloatingCTA';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/cases-we-fund" element={<CasesWeFundPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/apply" element={<ApplyPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/california" element={<CaliforniaPage />} />
          <Route path="/texas" element={<TexasPage />} />
          <Route path="/florida" element={<FloridaPage />} />
          <Route path="/illinois" element={<IllinoisPage />} />
          <Route path="/georgia" element={<GeorgiaPage />} />
        </Routes>
        <Footer />
        <FloatingCTA />
      </div>
    </Router>
  );
}

export default App;