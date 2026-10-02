import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  ShieldCheck,
  Building,
  AlertCircle
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    servico: 'Acabamentos e Revestimentos',
    localizacao: 'Luanda, Benfica',
    mensagem: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.nome.trim() || !formData.telefone.trim()) {
      setErrorMessage('Por favor, preencha o seu nome e telefone para podermos contactá-lo.');
      return;
    }

    setLoading(true);
    // Simulate real submission handling
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Olá Lukeniadri! Meu nome é ${formData.nome}.\n` +
      `Gostaria de solicitar um orçamento para ${formData.servico}.\n` +
      `Local da obra: ${formData.localizacao}\n` +
      `Telefone: ${formData.telefone}\n` +
      `Mensagem: ${formData.mensagem || 'Gostaria de receber uma visita técnica.'}`
    );
    window.open(`https://wa.me/244950233950?text=${text}`, '_blank');
  };

  return (
    <section id="contacto" className="py-20 md:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0E4D82] mb-3">
            <span className="w-6 h-0.5 bg-[#0E4D82]"></span>
            <span>Atendimento & Orçamentação</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4 font-serif">
            Inicie a Sua Obra com a Lukeniadri
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Fale diretamente com os nossos engenheiros e encarregados em Luanda, Benfica. Acompanhamos o seu projeto desde o fornecimento até à instalação profissional com acabamentos impecáveis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Official Contact Details Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm space-y-6">
              <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
                Informações Institucionais & Contactos
              </h3>

              {/* Endereço */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0E4D82] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                    Sede Operacional & Estaleiro
                  </span>
                  <p className="text-sm font-semibold text-slate-900 mt-0.5">
                    Luanda, Benfica
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Angola · Atendimento em toda a Província de Luanda e Território Nacional
                  </p>
                </div>
              </div>

              {/* Telefone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0E4D82] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                    Telefone & Linha Direta
                  </span>
                  <a
                    href="tel:+244950233950"
                    className="text-base font-bold text-[#0E4D82] hover:text-[#0B3B60] transition-colors block mt-0.5 tabular-nums"
                  >
                    950 233 950
                  </a>
                  <span className="text-[11px] text-slate-500">
                    Chamadas diretas e WhatsApp Comercial
                  </span>
                </div>
              </div>

              {/* E-mail */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0E4D82] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                    Correio Eletrónico
                  </span>
                  <a
                    href="mailto:lukeniadrigeral@lukeniadri.co"
                    className="text-sm font-semibold text-[#0E4D82] hover:underline block mt-0.5 break-all"
                  >
                    lukeniadrigeral@lukeniadri.co
                  </a>
                  <span className="text-[11px] text-slate-500">
                    Envio de cadernos de encargos e plantas de engenharia
                  </span>
                </div>
              </div>

              {/* Horário */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0E4D82] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                    Horário de Funcionamento
                  </span>
                  <p className="text-xs font-medium text-slate-800 mt-0.5">
                    Segunda a Sexta: 08h00 – 18h00
                  </p>
                  <p className="text-xs font-medium text-slate-800">
                    Sábado: 08h00 – 13h00
                  </p>
                </div>
              </div>
            </div>

            {/* Benfica Location Stylized Card */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-sky-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-300">
                    Benfica, Luanda
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                  Acesso Rápido
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Dispomos de estaleiro central e suporte logístico em Benfica, permitindo transporte ágil de britas, areias, cimento e equipas para toda a zona metropolitana de Luanda (Talatona, Camama, Viana, Cazenga, Maianga e Kilamba).
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold text-sky-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Empresa Certificada · Lukeniadri, (SU), LDA</span>
              </div>
            </div>
          </div>

          {/* Lead Capture & Quotation Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-7 sm:p-9 shadow-md">
            {submitted ? (
              <div className="py-10 text-center space-y-5 animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 font-serif">
                    Pedido de Orçamento Recebido!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto mt-2 leading-relaxed">
                    Obrigado, <strong className="text-slate-900">{formData.nome}</strong>. A direção técnica da Lukeniadri entrará em contacto pelo telefone <strong className="text-slate-900">{formData.telefone}</strong> no prazo máximo de 24 horas úteis.
                  </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                  <button
                    type="button"
                    onClick={handleWhatsAppRedirect}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg transition-colors shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Agilizar Agora pelo WhatsApp (950 233 950)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        nome: '',
                        telefone: '',
                        email: '',
                        servico: 'Acabamentos e Revestimentos',
                        localizacao: 'Luanda, Benfica',
                        mensagem: '',
                      });
                    }}
                    className="px-5 py-3 text-xs font-medium text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                  >
                    Submeter Novo Pedido
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-slate-100 pb-4 mb-2">
                  <h3 className="text-lg font-bold text-slate-950">
                    Formulário de Pedido de Cotação
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Preencha os dados abaixo para receber uma estimativa ou agendar vistoria técnica.
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-xs text-red-700">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Nome */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Nome Completo / Empresa *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Engenheiro António Silva"
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0E4D82] transition-colors"
                    />
                  </div>

                  {/* Telefone */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Telefone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ex: 950 233 950"
                      value={formData.telefone}
                      onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0E4D82] transition-colors font-mono tabular-nums"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* E-mail */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      E-mail para Envio de Proposta
                    </label>
                    <input
                      type="email"
                      placeholder="seu.email@exemplo.co"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0E4D82] transition-colors"
                    />
                  </div>

                  {/* Serviço Pretendido */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Serviço Pretendido
                    </label>
                    <select
                      value={formData.servico}
                      onChange={(e) => setFormData({ ...formData, servico: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0E4D82] transition-colors"
                    >
                      <option value="Construção Civil de Raiz">Construção Civil de Raiz</option>
                      <option value="Obras Públicas e Vias">Obras Públicas e Infraestruturas</option>
                      <option value="Acabamentos e Revestimentos">Acabamentos Impecáveis & Revestimentos</option>
                      <option value="Remodelação e Reabilitação">Remodelação Integral de Edifícios</option>
                      <option value="Fornecimento de Materiais">Fornecimento de Materiais de Construção</option>
                      <option value="Fiscalização e Gestão">Fiscalização Técnica de Obra</option>
                    </select>
                  </div>
                </div>

                {/* Localização da Obra */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Localização da Obra ou Terreno
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Benfica, Talatona, Viana ou outra província"
                    value={formData.localizacao}
                    onChange={(e) => setFormData({ ...formData, localizacao: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0E4D82] transition-colors"
                  />
                </div>

                {/* Mensagem / Descrição */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Detalhes do Projeto ou Metragem Estimada
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Descreva brevemente o seu projeto (área em m², estado atual, se já possui projeto de arquitetura ou se necessita de projeto de raiz)..."
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0E4D82] transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-white bg-[#0E4D82] hover:bg-[#0B3B60] active:scale-[0.99] rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <span>A processar pedido...</span>
                    ) : (
                      <>
                        <span>Submeter Pedido de Orçamento</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>

                <p className="text-[11px] text-slate-500 text-center leading-normal">
                  Privacidade garantida. Os seus dados são utilizados unicamente para contacto e envio da proposta comercial.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
