import React, { useState, useEffect } from 'react';
import { Logo } from './Logo.tsx';
import { Phone, Menu, X, ArrowRight, MessageSquareQuote } from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Obras Públicas', href: '#obras' },
    { name: 'O Processo', href: '#processo' },
    { name: 'Simulador', href: '#simulador' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Zone 1: Brand Wordmark / Logo */}
          <a
            href="#inicio"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0E4D82] rounded-lg"
            aria-label="Lukeniadri Construções e Obras Públicas - Página Inicial"
          >
            <Logo variant="horizontal" theme="light" />
          </a>

          {/* Zone 2: Navigation Links (single-line text with hover underlines) */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-700 hover:text-[#0E4D82] transition-colors whitespace-nowrap relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0E4D82] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="hidden sm:flex items-center gap-3.5">
            <a
              href="tel:+244950233950"
              className="flex items-center gap-2 text-xs font-semibold text-slate-800 hover:text-[#0E4D82] px-3 py-2 rounded-md hover:bg-slate-100 transition-colors whitespace-nowrap"
              title="Ligar para 950 233 950"
            >
              <Phone className="w-3.5 h-3.5 text-[#0E4D82]" />
              <span className="tabular-nums">950 233 950</span>
            </a>

            <a
              href="#contacto"
              onClick={onOpenQuoteModal}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#0E4D82] hover:bg-[#0B3B60] active:scale-[0.98] transition-all rounded-lg shadow-sm whitespace-nowrap"
            >
              <span>Pedir Orçamento</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="tel:+244950233950"
              className="p-2 text-slate-700 hover:text-[#0E4D82] hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Ligar para Lukeniadri"
            >
              <Phone className="w-5 h-5 text-[#0E4D82]" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#0E4D82] hover:bg-slate-100 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0E4D82]"
              aria-expanded={mobileMenuOpen}
              aria-label="Alternar menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-base font-medium text-slate-800 hover:text-[#0E4D82] hover:bg-slate-50 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100 space-y-2.5">
            <div className="text-xs text-slate-500 px-3">
              <p className="font-semibold text-slate-800">Sede Operacional:</p>
              <p>Luanda, Benfica</p>
            </div>

            <div className="flex flex-col gap-2 pt-2">
              <a
                href="tel:+244950233950"
                className="flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4 text-[#0E4D82]" />
                <span>Ligar: 950 233 950</span>
              </a>

              <a
                href="#contacto"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenQuoteModal) onOpenQuoteModal();
                }}
                className="flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-white bg-[#0E4D82] hover:bg-[#0B3B60] rounded-lg transition-colors shadow-sm"
              >
                <MessageSquareQuote className="w-4 h-4" />
                <span>Solicitar Orçamento</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
