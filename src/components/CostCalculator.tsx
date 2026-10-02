import React, { useState } from 'react';
import { Calculator, CheckCircle2, MessageCircle, Sparkles, Send, Copy, Check } from 'lucide-react';

export const CostCalculator: React.FC = () => {
  const [projectType, setProjectType] = useState<'construcao' | 'publicas' | 'acabamentos' | 'remodelacao'>('acabamentos');
  const [area, setArea] = useState<number>(180);
  const [qualityTier, setQualityTier] = useState<'standard' | 'premium' | 'luxo'>('premium');
  const [location, setLocation] = useState<string>('Luanda - Benfica');
  const [copied, setCopied] = useState<boolean>(false);

  // Approximate metrics for estimations (indicative estimation)
  const projectTypesConfig = {
    construcao: {
      label: 'Construção Civil de Raiz',
      baseDurationMonths: Math.max(3, Math.round(area / 45)),
      description: 'Fundações, estrutura em betão armado, alvenaria, redes técnicas e acabamentos completos.',
      unitCostKz: qualityTier === 'standard' ? 180000 : qualityTier === 'premium' ? 260000 : 380000,
    },
    publicas: {
      label: 'Obras Públicas & Pavimentação',
      baseDurationMonths: Math.max(2, Math.round(area / 100)),
      description: 'Drenagem pluvial, terraplanagem, guias, lancis e pavimentação betuminosa ou em blocos.',
      unitCostKz: qualityTier === 'standard' ? 95000 : qualityTier === 'premium' ? 140000 : 210000,
    },
    acabamentos: {
      label: 'Acabamentos Impecáveis & Revestimentos',
      baseDurationMonths: Math.max(1, Math.round(area / 80)),
      description: 'Porcelanatos retificados, sancas em pladur, pinturas de alta durabilidade e caixilharia.',
      unitCostKz: qualityTier === 'standard' ? 65000 : qualityTier === 'premium' ? 110000 : 175000,
    },
    remodelacao: {
      label: 'Remodelação & Reabilitação Integral',
      baseDurationMonths: Math.max(1, Math.round(area / 60)),
      description: 'Demolições cirúrgicas, substituição de redes hidráulicas/elétricas e novos acabamentos.',
      unitCostKz: qualityTier === 'standard' ? 115000 : qualityTier === 'premium' ? 170000 : 240000,
    },
  };

  const currentConfig = projectTypesConfig[projectType];
  const estimatedDuration = `${currentConfig.baseDurationMonths} a ${currentConfig.baseDurationMonths + 2} meses`;

  // Preformatted WhatsApp message
  const generateWhatsAppMessage = () => {
    const tierName = qualityTier === 'standard' ? 'Standard Técnico' : qualityTier === 'premium' ? 'Premium Executivo' : 'Luxo Arquitetónico';
    const text = `Olá Lukeniadri! Gostaria de solicitar um orçamento formal:\n` +
      `• Tipo de Obra: ${currentConfig.label}\n` +
      `• Área Estimada: ${area} m²\n` +
      `• Padrão de Acabamento: ${tierName}\n` +
      `• Localização: ${location}\n` +
      `• Tempo Estimado Desejado: ${estimatedDuration}\n` +
      `Podemos agendar uma visita técnica ou avaliação do projeto?`;
    return encodeURIComponent(text);
  };

  const handleCopySummary = () => {
    const tierName = qualityTier === 'standard' ? 'Standard Técnico' : qualityTier === 'premium' ? 'Premium Executivo' : 'Luxo Arquitetónico';
    const summaryText = `Pedido de Cotação - Lukeniadri:\nTipo: ${currentConfig.label}\nÁrea: ${area} m²\nPadrão: ${tierName}\nLocal: ${location}\nTempo Estimado: ${estimatedDuration}`;
    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="simulador" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0E4D82] mb-3">
            <span className="w-6 h-0.5 bg-[#0E4D82]"></span>
            <span>Simulador Interativo de Projeto</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4 font-serif">
            Estime os Parâmetros da Sua Obra ou Reforma
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Selecione o tipo de intervenção, a metragem estimada e o padrão pretendido para obter uma pré-visualização de prazos e escopo recomendados pela equipa de engenharia da Lukeniadri.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Panel */}
          <div className="lg:col-span-7 bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-7">
            {/* Step 1: Project Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                1. Tipo de Intervenção
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {(Object.keys(projectTypesConfig) as Array<keyof typeof projectTypesConfig>).map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setProjectType(key)}
                    className={`p-3.5 rounded-xl text-left border transition-all ${
                      projectType === key
                        ? 'bg-white border-[#0E4D82] shadow-sm ring-1 ring-[#0E4D82]'
                        : 'bg-white/60 border-slate-200 hover:bg-white hover:border-slate-300'
                    }`}
                  >
                    <span className={`block text-xs font-bold ${projectType === key ? 'text-[#0E4D82]' : 'text-slate-900'}`}>
                      {projectTypesConfig[key].label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Area slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  2. Área Estimada do Projeto
                </label>
                <span className="text-sm font-bold font-mono text-[#0E4D82] tabular-nums bg-white px-2.5 py-1 rounded border border-slate-200">
                  {area} m²
                </span>
              </div>
              <input
                type="range"
                min="30"
                max="1200"
                step="10"
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full accent-[#0E4D82] cursor-pointer h-2 bg-slate-200 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                <span>30 m² (Espaço Menor)</span>
                <span>500 m²</span>
                <span>1.200 m² (Grande Porte)</span>
              </div>
            </div>

            {/* Step 3: Quality Tier */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                3. Padrão de Acabamento Desejado
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'standard', name: 'Standard Técnico', desc: 'Funcional e robusto' },
                  { id: 'premium', name: 'Premium Executivo', desc: 'Porcelanatos & luz indireta' },
                  { id: 'luxo', name: 'Luxo Arquitetónico', desc: 'Mármores & detalhes nobres' },
                ].map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setQualityTier(tier.id as any)}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      qualityTier === tier.id
                        ? 'bg-white border-[#0E4D82] shadow-sm ring-1 ring-[#0E4D82]'
                        : 'bg-white/60 border-slate-200 hover:bg-white'
                    }`}
                  >
                    <span className={`block text-xs font-bold ${qualityTier === tier.id ? 'text-[#0E4D82]' : 'text-slate-800'}`}>
                      {tier.name}
                    </span>
                    <span className="block text-[10px] text-slate-500 mt-0.5">{tier.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Location */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                4. Localização da Obra
              </label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0E4D82] font-medium"
              >
                <option value="Luanda - Benfica">Luanda - Benfica (Proximidade Direta)</option>
                <option value="Luanda - Talatona">Luanda - Talatona</option>
                <option value="Luanda - Kilamba / Camama">Luanda - Cidade do Kilamba / Camama</option>
                <option value="Luanda - Viana">Luanda - Viana / Polo Industrial</option>
                <option value="Luanda - Centro / Baixa">Luanda - Centro / Baixa / Ingombota</option>
                <option value="Outras Províncias de Angola">Outras Províncias de Angola</option>
              </select>
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-800">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-sky-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-sky-300">
                  Resumo da Estimativa
                </span>
              </div>
              <span className="text-[11px] text-slate-400 font-mono">
                Lukeniadri, LDA
              </span>
            </div>

            {/* Output Details */}
            <div className="space-y-4 mb-6 text-xs">
              <div className="flex justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">Serviço:</span>
                <span className="font-semibold text-white text-right max-w-[200px] truncate">
                  {currentConfig.label}
                </span>
              </div>

              <div className="flex justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">Área Computada:</span>
                <span className="font-bold text-white font-mono tabular-nums">{area} m²</span>
              </div>

              <div className="flex justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">Padrão:</span>
                <span className="font-semibold text-white capitalize">
                  {qualityTier === 'standard' ? 'Standard Técnico' : qualityTier === 'premium' ? 'Premium Executivo' : 'Luxo Arquitetónico'}
                </span>
              </div>

              <div className="flex justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">Local da Obra:</span>
                <span className="font-semibold text-white">{location}</span>
              </div>

              <div className="flex justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">Duração Prevista:</span>
                <span className="font-bold text-sky-400 tabular-nums">{estimatedDuration}</span>
              </div>
            </div>

            <div className="bg-slate-800/80 rounded-xl p-4 mb-6 border border-slate-700/60">
              <div className="text-[11px] font-bold text-slate-300 uppercase tracking-wide mb-1">
                Âmbito Incluído no Modelo Integrado:
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {currentConfig.description} Fornecimento de insumos certificados e instalação profissional sob fiscalização.
              </p>
            </div>

            {/* Action buttons */}
            <div className="space-y-3">
              <a
                href={`https://wa.me/244950233950?text=${generateWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-xl shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enviar para WhatsApp (950 233 950)</span>
              </a>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleCopySummary}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium rounded-xl border border-slate-700 transition-colors"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copiado!' : 'Copiar Resumo'}</span>
                </button>

                <a
                  href="#contacto"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 bg-[#0E4D82] hover:bg-[#125d9c] text-white text-xs font-semibold rounded-xl transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Pedir Visita</span>
                </a>
              </div>
            </div>

            <p className="text-[10px] text-slate-400 text-center mt-4">
              * Estimativa indicativa. O orçamento definitivo é emitido após inspeção técnica ou análise das plantas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
