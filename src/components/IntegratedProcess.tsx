import React from 'react';
import { PackageCheck, HardHat, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export const IntegratedProcess: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Diagnóstico & Projeto Técnico',
      subtitle: 'Estudo de Viabilidade e Orçamentação Transparente',
      description: 'Análise minuciosa das especificações arquitetónicas e estruturais, levantamento de quantitativos e orçamentação detalhada sem custos ocultos.',
      icon: CheckCircle2,
      points: [
        'Visita técnica ao terreno ou imóvel em Luanda',
        'Cálculo e dimensionamento rigoroso de materiais',
        'Cronograma realista com datas fixas de marcos',
      ],
    },
    {
      step: '02',
      title: 'Fornecimento & Gestão de Materiais',
      subtitle: 'Cadeia Logística e Insumos Certificados',
      description: 'A Lukeniadri cuida do aprovisionamento de betão, inertes, caixilharia, louças sanitárias e porcelanatos, garantindo proveniência e integridade.',
      icon: PackageCheck,
      points: [
        'Sem intermediários: compras diretas com controlo de custos',
        'Controlo de qualidade em laboratório e estaleiro',
        'Descarga pontual no estaleiro em Benfica e obras ativas',
      ],
    },
    {
      step: '03',
      title: 'Construção & Instalação Profissional',
      subtitle: 'Mão de Obra Especializada e Supervisão Diária',
      description: 'Execução por equipas com certificação em betão armado, assentamentos de alvenaria e canalizações hidráulicas, sob fiscalização técnica contínua.',
      icon: HardHat,
      points: [
        'Encarregados de obra e engenheiros residentes',
        'Segurança no trabalho com equipamento de proteção individual',
        'Relatórios periódicos de evolução fotográfica',
      ],
    },
    {
      step: '04',
      title: 'Acabamentos Impecáveis & Chave na Mão',
      subtitle: 'Valorização do Imóvel e Conforto Duradouro',
      description: 'O acabamento de precisão que é a assinatura da Lukeniadri: polimento, pinturas impermeabilizantes, tetos com luz difusa e inspeção final minuciosa.',
      icon: Sparkles,
      points: [
        'Alinhamento milimétrico de juntas e esquadrias',
        'Testes de carga e estanquidade nas instalações',
        'Garantia de pós-obra e assistência técnica',
      ],
    },
  ];

  return (
    <section id="processo" className="py-20 md:py-28 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0E4D82] mb-3">
            <span className="w-6 h-0.5 bg-[#0E4D82]"></span>
            <span>Fluxo de Trabalho Integrado</span>
            <span className="w-6 h-0.5 bg-[#0E4D82]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4 font-serif">
            Como Cuidamos de Todo o Processo: Do Fornecimento à Instalação
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Eliminamos a dispersão de responsabilidades. Ao confiar na Lukeniadri, o cliente tem um único parceiro responsável por cada etapa até à entrega final.
          </p>
        </div>

        {/* 4 Connected Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="bg-white rounded-xl border border-slate-200/90 p-6 flex flex-col justify-between hover:shadow-md hover:border-[#0E4D82]/40 transition-all relative group"
              >
                <div>
                  {/* Step Number and Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-mono font-extrabold text-[#0E4D82] tabular-nums">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-sky-50 text-[#0E4D82] flex items-center justify-center group-hover:bg-[#0E4D82] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-[#0E4D82] transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs font-medium text-slate-500 mb-3">
                    {item.subtitle}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-5">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2">
                  {item.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-[11px] text-slate-600">
                      <span className="text-[#0E4D82] font-bold">✓</span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Process quote highlight */}
        <div className="mt-14 bg-white rounded-xl border border-slate-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="max-w-2xl">
            <h4 className="text-sm font-bold text-slate-900 mb-1">
              Tem um projeto de construção ou obra pública em mente?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              A nossa equipa técnica sediada em Luanda, Benfica está pronta para analisar a sua memória descritiva ou projeto de arquitetura.
            </p>
          </div>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold text-white bg-[#0E4D82] hover:bg-[#0B3B60] rounded-lg transition-colors shadow-sm whitespace-nowrap shrink-0"
          >
            <span>Falar com o Diretor Técnico</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
