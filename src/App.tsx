import React from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Services } from './components/Services.tsx';
import { PublicWorks } from './components/PublicWorks.tsx';
import { IntegratedProcess } from './components/IntegratedProcess.tsx';
import { CostCalculator } from './components/CostCalculator.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.tsx';

export default function App() {
  const handleScrollToQuote = () => {
    const el = document.getElementById('contacto');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-900 font-sans selection:bg-[#0E4D82] selection:text-white">
      {/* Fixed Navigation Bar adhering to Top Bar Contract */}
      <Navbar onOpenQuoteModal={handleScrollToQuote} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Official Quote & Primary Proposition */}
        <Hero />

        {/* About Lukeniadri: History, Engineering Rigor & Benfica HQ */}
        <About />

        {/* Specialized Services & Featured Impeccable Finishes */}
        <Services />

        {/* Public Works & Infrastructure Showcase */}
        <PublicWorks />

        {/* Integrated Process: Supply Chain to Professional Installation */}
        <IntegratedProcess />

        {/* Interactive Cost & Project Estimator Simulator */}
        <CostCalculator />

        {/* Contact, Location & Quotation Form */}
        <ContactSection />
      </main>

      {/* Corporate Comprehensive Footer */}
      <Footer />

      {/* Floating Quick Action Widget for WhatsApp & Phone */}
      <FloatingWhatsApp />
    </div>
  );
}
