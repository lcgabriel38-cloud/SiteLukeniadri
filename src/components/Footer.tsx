import React from 'react';
import { Logo } from './Logo.tsx';
import { MapPin, Phone, Mail, Clock, ArrowUp, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Upper Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand & Manifesto Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <Logo variant="horizontal" theme="dark" />
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              A <strong className="text-slate-200">Lukeniadri – Construções e Obras Públicas</strong> cuida de todo o processo, desde o fornecimento até à instalação profissional, garantindo acabamentos impecáveis que aumentam o valor do seu espaço e proporcionam bem-estar no dia a dia.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p className="font-semibold text-slate-200">Denominação Social:</p>
              <p className="font-mono text-slate-300">Lukeniadri – Construções e Obras Públicas, (SU), LDA</p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">
                  Quem Somos & Rigor Técnico
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  Construção & Acabamentos
                </a>
              </li>
              <li>
                <a href="#obras" className="hover:text-white transition-colors">
                  Obras Públicas & Portfólio
                </a>
              </li>
              <li>
                <a href="#processo" className="hover:text-white transition-colors">
                  O Processo Integrado
                </a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-white transition-colors">
                  Simulador de Orçamento
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white transition-colors">
                  Contactos & Pedido de Visita
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contacts & Location */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Sede & Contactos Diretos
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-200 font-semibold block">Sede Operacional:</span>
                  <span>Luanda, Benfica · Angola</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-200 font-semibold block">Telefone Comercial:</span>
                  <a href="tel:+244950233950" className="hover:text-white transition-colors font-mono tabular-nums">
                    950 233 950
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-200 font-semibold block">E-mail:</span>
                  <a href="mailto:lukeniadrigeral@lukeniadri.co" className="hover:text-white transition-colors break-all">
                    lukeniadrigeral@lukeniadri.co
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-200 font-semibold block">Atendimento:</span>
                  <span>Seg - Sex: 08:00 às 18:00 | Sáb: 08:00 às 13:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-bar */}
      <div className="border-t border-slate-900 bg-black/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>
            © {new Date().getFullYear()} Lukeniadri – Construções e Obras Públicas, (SU), LDA. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-6">
            <span>Luanda, Benfica · República de Angola</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors focus:outline-none"
              aria-label="Voltar ao topo da página"
            >
              <span>Voltar ao Topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
