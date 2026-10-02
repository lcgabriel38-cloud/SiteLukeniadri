import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, MapPin, Calculator, PhoneCall } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden bg-slate-950">
      {/* Background Photography with Sophisticated Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_construction_modern_1790862773844.jpg"
          alt="Obras de Engenharia e Construção Civil Lukeniadri em Luanda"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.85] contrast-[1.05]"
        />
        {/* Multilayered scrim for 60-30-10 readability & deep aesthetic depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
        {/* Subtle architectural grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-16">
        <div className="max-w-3xl">
          {/* Subtle Location & Trust indicator */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-300 mb-6 bg-slate-900/80 backdrop-blur-md border border-slate-700/60 px-3.5 py-1.5 rounded-md">
            <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
            <span>Sede em Luanda, Benfica · Angola</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300">Construção Civil & Obras Públicas</span>
          </div>

          {/* Primary High-Impact Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6 font-serif">
            Construção de Alto Padrão e Obras Públicas com <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-200">Rigor Técnico</span>
          </h1>

          {/* Core Official Client Quote Text */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-200 font-normal leading-relaxed mb-8 max-w-2xl border-l-2 border-[#1D70B8] pl-4 bg-slate-900/40 py-2 rounded-r-lg">
            A <strong className="text-white font-semibold">Lukeniadri – Construções e Obras Públicas</strong> cuida de todo o processo, desde o fornecimento até à instalação profissional, garantindo acabamentos impecáveis que aumentam o valor do seu espaço e proporcionam bem-estar no dia a dia.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-[#0E4D82] hover:bg-[#125d9c] active:scale-[0.99] transition-all rounded-lg shadow-lg shadow-blue-950/40 whitespace-nowrap"
            >
              <span>Solicitar Orçamento Gratuito</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#simulador"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 hover:text-white border border-slate-700/80 transition-all rounded-lg backdrop-blur-sm whitespace-nowrap"
            >
              <Calculator className="w-4 h-4 text-sky-400" />
              <span>Simular Estimativa de Obra</span>
            </a>

            <a
              href="tel:+244950233950"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-slate-300 hover:text-white px-4 py-3.5 transition-colors sm:border-l sm:border-slate-800 sm:pl-5 whitespace-nowrap"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              <span>950 233 950</span>
            </a>
          </div>

          {/* Value Proof Badges (Adjacency to Proposition) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-800/80">
            <div className="flex items-start gap-2.5 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-semibold text-white">Do Fornecimento à Instalação</span>
                <span className="text-[11px] text-slate-400">Solução integrada e chave na mão</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-semibold text-white">Acabamentos Impecáveis</span>
                <span className="text-[11px] text-slate-400">Padrão rigoroso de qualidade</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-semibold text-white">Conformidade e Segurança</span>
                <span className="text-[11px] text-slate-400">Equipa técnica em Luanda, Benfica</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
