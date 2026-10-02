import React from 'react';
import { ShieldCheck, Award, Clock, HardHat, Building2, MapPin } from 'lucide-react';
import { Logo } from './Logo.tsx';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Column with Team / Site Engineering Photo */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100 aspect-[4/3]">
              <img
                src="/src/assets/images/construction_team_engineering_1790862815235.jpg"
                alt="Equipa de Engenharia Civil e Gestão da Lukeniadri em Obra"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              
              {/* Bottom badge inside frame */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#0E4D82] text-white flex items-center justify-center shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Lukeniadri, (SU), LDA</h4>
                    <p className="text-xs text-slate-600">Base Operacional e Estaleiro em Luanda, Benfica</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Corner Decorative Quality Seal */}
            <div className="hidden sm:flex absolute -top-5 -right-5 bg-[#0E4D82] text-white p-4 rounded-xl shadow-lg items-center gap-3 max-w-[220px]">
              <Award className="w-8 h-8 text-sky-300 shrink-0" />
              <div className="text-xs">
                <span className="block font-bold text-sm">Garantia Técnica</span>
                <span className="text-sky-100 text-[11px]">Materiais certificados e fiscalização permanente</span>
              </div>
            </div>
          </div>

          {/* Copy & Capabilities Column */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0E4D82] mb-3">
              <span className="w-6 h-0.5 bg-[#0E4D82]"></span>
              <span>Quem Somos & Filosofia de Trabalho</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-6 font-serif">
              Solidez, Engenharia Rigorosa e Confiança Edificada em Angola
            </h2>

            <p className="text-base text-slate-700 leading-relaxed mb-5">
              A <strong className="text-slate-950">Lukeniadri – Construções e Obras Públicas, (SU), LDA</strong> é uma empresa angolana sediada em <strong className="text-slate-950">Luanda, Benfica</strong>, focada em entregar soluções completas de engenharia civil, infraestruturas públicas, remodelações e acabamentos refinados.
            </p>

            <p className="text-base text-slate-700 leading-relaxed mb-8">
              Diferenciamo-nos no mercado pela nossa abordagem integrada: assumimos a responsabilidade global pelo ciclo construtivo — <em>desde o aprovisionamento e fornecimento de matérias-primas e equipamentos até à execução técnica minuciosa e aplicação de acabamentos de elevada estética</em>. O nosso propósito é proporcionar estruturas duráveis, seguras e com acabamentos que valorizam o património dos nossos clientes.
            </p>

            {/* 4 Pillars of Excellence */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-200">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-lg bg-sky-50 text-[#0E4D82] flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Rigor & Normas Técnicas</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-normal">
                    Cumprimento integral dos regulamentos de segurança estrutural e boas práticas de construção civil.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-lg bg-sky-50 text-[#0E4D82] flex items-center justify-center shrink-0 mt-0.5">
                  <HardHat className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Instalação Profissional</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-normal">
                    Técnicos especializados e encarregados experientes com supervisão contínua em cada fase.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-lg bg-sky-50 text-[#0E4D82] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Pontualidade nos Prazos</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-normal">
                    Planeamento cronológico detalhado com controlo de marcos de entrega e orçamentos claros.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-lg bg-sky-50 text-[#0E4D82] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Proximidade em Luanda</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-normal">
                    Localização estratégica em Benfica, garantindo mobilização rápida de meios e materiais.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
