import React, { useState } from 'react';
import { 
  Building, 
  Truck, 
  Sparkles, 
  Layers, 
  Hammer, 
  CheckCircle,
  FileCheck2,
  ArrowUpRight,
  ShieldAlert
} from 'lucide-react';

interface ServiceDetail {
  id: string;
  number: string;
  title: string;
  category: string;
  summary: string;
  deliverables: string[];
  materialsHandled: string;
}

const servicesData: ServiceDetail[] = [
  {
    id: 'construcao',
    number: '01',
    title: 'Construção Civil & Estruturas de Raiz',
    category: 'Edificações Residenciais e Comerciais',
    summary: 'Construção completa de vivendas unifamiliares, edifícios residenciais, instalações comerciais e armazéns industriais, com fundações sólidas e estruturas de betão armado.',
    deliverables: [
      'Movimentação de terras, fundações e contenção',
      'Estruturas em betão armado e alvenaria reforçada',
      'Lajes pré-esforçadas e vigamentos técnicos',
      'Redes técnicas embutidas (águas, esgotos, eletricidade)',
    ],
    materialsHandled: 'Cimento ensacado/a granel, brita, areia lavada, ferro e armaduras certificadas.',
  },
  {
    id: 'obras-publicas',
    number: '02',
    title: 'Obras Públicas & Vias de Comunicação',
    category: 'Infraestruturas Urbanas e Coletivas',
    summary: 'Execução de projetos de infraestruturas públicas, pavimentação asfáltica e em cubos, sistemas de drenagem de águas pluviais, passeios e requalificação urbana.',
    deliverables: [
      'Abertura de valas e redes pluviais/residuais',
      'Pavimentação rodoviária e calcetamento pedonal',
      'Requalificação de vias e acessos em Luanda',
      'Execução de valetas, caixas de retenção e passadeiras',
    ],
    materialsHandled: 'Betuminoso, agregados de pedreira, manilhas de betão, lancis e guias.',
  },
  {
    id: 'acabamentos',
    number: '03',
    title: 'Acabamentos Impecáveis & Revestimentos',
    category: 'Valorização Estética e Conforto',
    summary: 'A nossa imagem de marca: acabamentos de precisão milimétrica que elevam o padrão de sofisticação e conforto de qualquer ambiente residencial ou corporativo.',
    deliverables: [
      'Aplicação de porcelanatos, mármores e cerâmicas retificadas',
      'Tetos falsos em gesso cartonado (Pladur) com sancas de luz',
      'Pinturas decorativas, texturadas e de alta impermeabilização',
      'Caixilharia de alumínio com vidro duplo e portas lacadas',
    ],
    materialsHandled: 'Porcelanatos importados, massas acrílicas, tintas anti-fungo, perfis de alumínio.',
  },
  {
    id: 'fornecimento',
    number: '04',
    title: 'Fornecimento Integrado de Materiais',
    category: 'Cadeia de Suprimentos & Logística',
    summary: 'Eliminamos intermediários e atrasos fornecendo diretamente todos os insumos e equipamentos de construção, garantindo procedência e controlo de qualidade.',
    deliverables: [
      'Fornecimento de inertes, cimentos e materiais estruturais',
      'Equipamentos hidrossanitários e elétricos normalizados',
      'Logística de transporte e descarga pontual no estaleiro',
      'Auditoria de qualidade em cada lote recebido',
    ],
    materialsHandled: 'Inertes de pedreira, argamassas colantes, tubagens PVC/PEX, cabos certificados.',
  },
  {
    id: 'remodelacao',
    number: '05',
    title: 'Remodelação & Reabilitação de Edifícios',
    category: 'Modernização e Revalorização',
    summary: 'Renovação arquitetónica e estrutural de imóveis antigos, reconversão de espaços interiores, isolamento e modernização das redes hidroelétricas.',
    deliverables: [
      'Demolições controladas com remoção ecológica de entulhos',
      'Reforço de pilares, vigas e tratamento de fissuras',
      'Remodelação integral de cozinhas, sanitários e fachadas',
      'Impermeabilização de coberturas e varandas',
    ],
    materialsHandled: 'Telas asfálticas, resinas epóxi, argamassas de reparação estrutural.',
  },
  {
    id: 'fiscalizacao',
    number: '06',
    title: 'Fiscalização & Gestão Técnica de Obra',
    category: 'Engenharia de Planeamento & Controlo',
    summary: 'Direção e acompanhamento diário dos trabalhos por engenheiros habilitados, garantindo fidelidade ao caderno de encargos, controlo orçamental e segurança.',
    deliverables: [
      'Livro de obra e relatórios de progresso fotográficos',
      'Controlo de ensaios de betão e medições de conformidade',
      'Coordenação de equipas e cumprimento do cronograma',
      'Emissão de autos de medição e receção provisória/definitiva',
    ],
    materialsHandled: 'Instrumentação de topografia, esclerómetros, fichas técnicas de ensaio.',
  },
];

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceDetail>(servicesData[2]); // Default on Acabamentos

  return (
    <section id="servicos" className="py-20 md:py-28 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0E4D82] mb-3">
            <span className="w-6 h-0.5 bg-[#0E4D82]"></span>
            <span>Serviços & Competências Técnicas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4 font-serif">
            Soluções Integradas da Fundação aos Acabamentos Mais Exigentes
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Unimos capacidade técnica, controlo de fornecimento e mão de obra qualificada para responder com eficiência a projetos de qualquer dimensão em Luanda e em Angola.
          </p>
        </div>

        {/* Featured Showcase Banner: Acabamentos Impecáveis */}
        <div className="mb-16 bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-center">
              <div className="text-xs font-semibold text-[#0E4D82] tracking-wider uppercase mb-2">
                Destaque Especial de Especialidade
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 font-serif">
                Acabamentos Impecáveis que Aumentam o Valor do Seu Espaço
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Na Lukeniadri entendemos que o acabamento é o toque final que define o bem-estar e o prestígio de uma edificação. Dispomos de assentadores especializados em porcelanatos de grande formato, estucadores de alto rendimento e pintores com acabamentos acetinados e lacados perfeitos.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-4 border-t border-slate-100 mb-6">
                <div>
                  <span className="block text-xl font-bold text-[#0E4D82] tabular-nums">100%</span>
                  <span className="text-xs text-slate-500">Alinhamento a laser</span>
                </div>
                <div>
                  <span className="block text-xl font-bold text-[#0E4D82] tabular-nums">0%</span>
                  <span className="text-xs text-slate-500">Desperdício de material</span>
                </div>
                <div>
                  <span className="block text-xl font-bold text-[#0E4D82] tabular-nums">Garantia</span>
                  <span className="text-xs text-slate-500">Pós-instalação</span>
                </div>
              </div>

              <div>
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 text-xs font-bold text-white bg-[#0E4D82] hover:bg-[#0B3B60] px-5 py-3 rounded-lg transition-colors shadow-sm"
                >
                  <span>Pedir Cotação de Acabamentos</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full bg-slate-100">
              <img
                src="/src/assets/images/interior_luxury_finishes_1790862802809.jpg"
                alt="Acabamentos de Luxo e Revestimentos de Alta Qualidade pela Lukeniadri"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* 6 Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((svc) => (
            <div
              key={svc.id}
              className="bg-white rounded-xl border border-slate-200/90 p-7 hover:border-[#0E4D82]/50 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-mono font-bold text-slate-400 group-hover:text-[#0E4D82] transition-colors tabular-nums">
                    {svc.number}.
                  </span>
                  <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded">
                    {svc.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0E4D82] transition-colors mb-2.5">
                  {svc.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {svc.summary}
                </p>

                <div className="space-y-2 border-t border-slate-100 pt-4 mb-6">
                  <span className="text-[11px] font-bold text-slate-700 block uppercase tracking-wide">
                    Âmbito de Trabalho:
                  </span>
                  {svc.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle className="w-3.5 h-3.5 text-[#0E4D82] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 text-[11px] text-slate-500 bg-slate-50/60 -mx-7 -mb-7 p-4 rounded-b-xl">
                <strong className="text-slate-700">Materiais:</strong> {svc.materialsHandled}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
