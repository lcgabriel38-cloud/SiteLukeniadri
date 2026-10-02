import React, { useState } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Popover Bubble */}
      {isOpen && (
        <div className="mb-3 w-72 bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 mb-2">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-slate-800">Atendimento Lukeniadri</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-600 p-1 rounded-md"
              aria-label="Fechar janela de chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-600 mb-3 leading-relaxed">
            Olá! Precisa de orçamento ou tem dúvidas sobre a sua obra em Luanda? Fale diretamente connosco:
          </p>

          <div className="space-y-2">
            <a
              href="https://wa.me/244950233950?text=Ol%C3%A1%20Lukeniadri!%20Gostaria%20de%20solicitar%20informa%C3%A7%C3%B5es%20sobre%20uma%20obra/remodela%C3%A7%C3%A3o."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-3 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Conversar pelo WhatsApp</span>
            </a>

            <a
              href="tel:+244950233950"
              className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-medium rounded-lg transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#0E4D82]" />
              <span>Ligar: 950 233 950</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl hover:shadow-emerald-600/30 flex items-center justify-center transition-all transform hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/50"
        aria-label="Abrir contacto rápido via WhatsApp ou Telefone"
      >
        <MessageCircle className="w-7 h-7" />
      </button>
    </div>
  );
};
