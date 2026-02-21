
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreakingNewsBar from '@/components/BreakingNewsBar';
import HomePage from '@/pages/HomePage';
import FinancePage from '@/pages/FinancePage';
import MarketsPage from '@/pages/MarketsPage';
import BusinessPage from '@/pages/BusinessPage';
import CryptoPage from '@/pages/CryptoPage';
import TechnologyPage from '@/pages/TechnologyPage';
import RealEstatePage from '@/pages/RealEstatePage';
import GovernmentPage from '@/pages/GovernmentPage';
import LegalPage from '@/pages/LegalPage';
import InsurancePage from '@/pages/InsurancePage';
import HealthPage from '@/pages/HealthPage';
import ArticlePage from '@/pages/ArticlePage';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* Dark mode state is handled in Header and persists via html class */}
      <div className="flex flex-col min-h-screen mt-9 bg-white dark:bg-gray-900 transition-colors duration-300 text-gray-900 dark:text-gray-100">
        <BreakingNewsBar />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/finance" element={<FinancePage />} />
            <Route path="/markets" element={<MarketsPage />} />
            <Route path="/business" element={<BusinessPage />} />
            <Route path="/crypto" element={<CryptoPage />} />
            <Route path="/technology" element={<TechnologyPage />} />
            <Route path="/real-estate" element={<RealEstatePage />} />
            <Route path="/government" element={<GovernmentPage />} />
            <Route path="/legal" element={<LegalPage />} />
            <Route path="/insurance" element={<InsurancePage />} />
            <Route path="/health" element={<HealthPage />} />
            <Route path="/article/:id" element={<ArticlePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <Toaster />
    </Router>
  );
}

export default App;
