import React, { useState } from 'react';
import { MapPin, Calendar, CheckCircle2, ChevronRight, X, Layers, ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: 'publicas' | 'civil' | 'acabamentos';
  categoryLabel: string;
  location: string;
  year: string;
  scope: string;
  impact: string;
  deliverables: string[];
  imageUrl: string;
}

const projectsList: Project[] = [
  {
    id: 'via-benfica',
    title: 'Infraestrutura Viária e Drenagem Urbana em Benfica',
    category: 'publicas',
    categoryLabel: 'Obras Públicas',
    location: 'Benfica, Luanda',
    year: '2024',
    scope: 'Requalificação de 3.200m de via urbana secundária com assentamento de manilhas de drenagem pluvial, lancis pré-moldados e pavimentação resistente a chuvas torrenciais.',
    impact: 'Eliminação de pontos de alagamento e melhoria imediata no fluxo de tráfego local.',
    deliverables: [
      '3.200 metros lineares de drenagem subterrânea',
      'Aplicação de camada de base e sub-base compactada',
      'Pavimentação betuminosa e passeios pedonais antiderrapantes',
      'Sinalização horizontal e vertical completa',
    ],
    imageUrl: '/src/assets/images/public_works_infrastructure_1790862785631.jpg',
  },
  {
    id: 'residencia-talatona',
    title: 'Edificação Residencial de Alto Padrão Chave na Mão',
    category: 'civil',
    categoryLabel: 'Construção Civil',
    location: 'Talatona, Luanda',
    year: '2024',
    scope: 'Construção estrutural e arquitetónica de moradia unifamiliar T5 com 580 m² de área útil, incluindo piscina em betão projetado, arranjos exteriores e cobertura térmica.',
    impact: 'Entrega 10 dias antes do prazo acordado com 0% de retrabalho estrutural.',
    deliverables: [
      'Estrutura em betão armado e fundações diretas por sapatas',
      'Impermeabilização integral de fundações e cobertura',
      'Instalação de rede hidrosanitária e elétrica de alta segurança',
      'Sistema de drenagem perimetral',
    ],
    imageUrl: '/src/assets/images/hero_construction_modern_1790862773844.jpg',
  },
  {
    id: 'complexo-corporativo',
    title: 'Acabamentos e Revestimentos de Edifício Comercial',
    category: 'acabamentos',
    categoryLabel: 'Acabamentos & Interiores',
    location: 'Luanda Sul',
    year: '2023',
    scope: 'Fornecimento e instalação profissional de 1.850 m² de pavimento em porcelanato técnico de alto tráfego, divisórias acústicas em pladur e pinturas acetinadas laváveis.',
    impact: 'Ambiente com isolamento acústico superior e valorização imobiliária imediata de 35%.',
    deliverables: [
      'Nivelamento a laser de pisos com argamassa autonivelante',
      'Assentamento de porcelanatos 120x60 com junta mínima de 1.5mm',
      'Sancas de luz indireta em gesso cartonado',
      'Pintura lavável com propriedades anti-fúngicas',
    ],
    imageUrl: '/src/assets/images/interior_luxury_finishes_1790862802809.jpg',
  },
  {
    id: 'polo-logistico',
    title: 'Supervisão Técnica e Pavimentação de Pátio Logístico',
    category: 'publicas',
    categoryLabel: 'Obras Públicas',
    location: 'Viana, Luanda',
    year: '2023',
    scope: 'Pavimentação pesada para trânsito de camiões articulados com betão de alta resistência e fibra estrutural, totalizando 4.500 m² de pátio operacional.',
    impact: 'Resistência a cargas contínuas até 40 toneladas sem fissuração de lajes.',
    deliverables: [
      'Regularização e compactação de solos com ensaios Proctor',
      'Armaduras eletrosoldadas duplas e juntas de dilatação serradas',
      'Acabamento superficial em betão afagado com endurecedor químico',
      'Rede de separação de óleos e hidrocarbonetos',
    ],
    imageUrl: '/src/assets/images/construction_team_engineering_1790862815235.jpg',
  },
];

export const PublicWorks: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'publicas' | 'civil' | 'acabamentos'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'all'
    ? projectsList
    : projectsList.filter((p) => p.category === activeCategory);

  return (
    <section id="obras" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0E4D82] mb-3">
              <span className="w-6 h-0.5 bg-[#0E4D82]"></span>
              <span>Portfólio & Evidência de Execução</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-3 font-serif">
              Obras Públicas e Edificações Executadas com Sucesso
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Conheça alguns dos projetos onde a Lukeniadri aplicou o seu método integrado: do aprovisionamento e fornecimento rigoroso à entrega com acabamentos de excelência.
            </p>
          </div>

          {/* Interactive Filter Controls (Allowed buttons for state filtering) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-lg shrink-0">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                activeCategory === 'all'
                  ? 'bg-white text-[#0E4D82] shadow-sm'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              Todos os Projetos
            </button>
            <button
              onClick={() => setActiveCategory('publicas')}
              className={`px-3 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                activeCategory === 'publicas'
                  ? 'bg-white text-[#0E4D82] shadow-sm'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              Obras Públicas
            </button>
            <button
              onClick={() => setActiveCategory('civil')}
              className={`px-3 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                activeCategory === 'civil'
                  ? 'bg-white text-[#0E4D82] shadow-sm'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              Construção Civil
            </button>
            <button
              onClick={() => setActiveCategory('acabamentos')}
              className={`px-3 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                activeCategory === 'acabamentos'
                  ? 'bg-white text-[#0E4D82] shadow-sm'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              Acabamentos
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-[#0E4D82]/40 hover:shadow-lg transition-all group flex flex-col justify-between"
            >
              <div>
                {/* Image Container with strict aspect ratio and graceful fallback */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={proj.imageUrl}
                    alt={proj.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                  {/* Clean unboxed metadata badges (not pill pills) */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 text-xs">
                    <span className="bg-slate-950/80 backdrop-blur-md text-white px-2.5 py-1 rounded text-[11px] font-semibold tracking-wide">
                      {proj.categoryLabel}
                    </span>
                    <span className="bg-white/90 backdrop-blur-md text-slate-800 px-2 py-1 rounded text-[11px] font-medium flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#0E4D82]" />
                      <span>{proj.location}</span>
                    </span>
                  </div>

                  <div className="absolute bottom-4 right-4 text-xs font-mono text-white/90 tabular-nums">
                    Ano: {proj.year}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  <h3 className="text-xl font-bold text-slate-950 mb-3 group-hover:text-[#0E4D82] transition-colors leading-snug">
                    {proj.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {proj.scope}
                  </p>

                  <div className="bg-slate-50 border border-slate-100 rounded-lg p-3.5 mb-4">
                    <span className="text-[11px] font-bold text-[#0E4D82] uppercase tracking-wider block mb-1">
                      Resultado & Impacto:
                    </span>
                    <p className="text-xs text-slate-700 font-medium leading-relaxed">
                      {proj.impact}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="px-6 pb-6 pt-0">
                <button
                  onClick={() => setSelectedProject(proj)}
                  className="w-full flex items-center justify-between py-2.5 px-4 rounded-lg bg-slate-100 hover:bg-[#0E4D82] text-slate-800 hover:text-white text-xs font-semibold transition-colors group/btn"
                >
                  <span>Ver Especificações Técnicas</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Quantified Adjacency Proof Bar */}
        <div className="mt-16 bg-[#0E4D82] text-white rounded-2xl p-8 sm:p-10 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="pt-4 md:pt-0">
              <span className="block text-3xl sm:text-4xl font-extrabold tracking-tight tabular-nums mb-1 font-mono">
                100%
              </span>
              <span className="text-xs text-sky-200">Fiscalização em Obra</span>
            </div>

            <div className="pt-4 md:pt-0 md:pl-6">
              <span className="block text-3xl sm:text-4xl font-extrabold tracking-tight tabular-nums mb-1 font-mono">
                0 Atrasos
              </span>
              <span className="text-xs text-sky-200">Na Cadeia de Fornecimento</span>
            </div>

            <div className="pt-4 md:pt-0 md:pl-6">
              <span className="block text-3xl sm:text-4xl font-extrabold tracking-tight tabular-nums mb-1 font-mono">
                +15.000m²
              </span>
              <span className="text-xs text-sky-200">De Acabamentos Impecáveis</span>
            </div>

            <div className="pt-4 md:pt-0 md:pl-6">
              <span className="block text-3xl sm:text-4xl font-extrabold tracking-tight tabular-nums mb-1 font-mono">
                Luanda
              </span>
              <span className="text-xs text-sky-200">Sede Operacional em Benfica</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modal with Full Specifications */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl relative">
            <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-100 flex items-center justify-between z-10">
              <div>
                <span className="text-xs font-bold text-[#0E4D82] uppercase tracking-wider">
                  {selectedProject.categoryLabel}
                </span>
                <h3 className="text-lg font-bold text-slate-900 leading-snug">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
                aria-label="Fechar janela"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Descrição Técnica & Âmbito
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {selectedProject.scope}
                </p>
              </div>

              <div className="bg-sky-50/70 border border-sky-100 rounded-xl p-4">
                <h4 className="text-xs font-bold text-[#0E4D82] uppercase tracking-wider mb-1">
                  Impacto Verificado
                </h4>
                <p className="text-sm text-slate-800 font-medium">
                  {selectedProject.impact}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Itens e Entregáveis Concluídos:
                </h4>
                <div className="space-y-2">
                  {selectedProject.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#0E4D82] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs text-slate-500">
                  <span className="font-semibold text-slate-800">Local:</span> {selectedProject.location} · {selectedProject.year}
                </div>
                <a
                  href="#contacto"
                  onClick={() => setSelectedProject(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-[#0E4D82] hover:bg-[#0B3B60] rounded-lg transition-colors"
                >
                  <span>Pedir Orçamento Similar</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
