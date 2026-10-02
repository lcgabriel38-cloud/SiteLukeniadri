/**
 * Lukeniadri – Construções e Obras Públicas, (SU), LDA
 * Vanilla TypeScript / JavaScript Interactivity
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileNavLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // 2. Projects Filter & Details Modal
  const filterBtns = document.querySelectorAll<HTMLButtonElement>('.project-filter-btn');
  const projectCards = document.querySelectorAll<HTMLElement>('.project-item');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-filter') || 'all';

      // Update button styling
      filterBtns.forEach((b) => {
        b.classList.remove('bg-white', 'text-[#0E4D82]', 'shadow-sm');
        b.classList.add('text-slate-600');
      });
      btn.classList.add('bg-white', 'text-[#0E4D82]', 'shadow-sm');
      btn.classList.remove('text-slate-600');

      // Filter cards
      projectCards.forEach((card) => {
        const cardCategory = card.getAttribute('data-category');
        if (category === 'all' || cardCategory === category) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Modal Setup
  const modal = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalTitle = document.getElementById('modal-title');
  const modalCategory = document.getElementById('modal-category');
  const modalScope = document.getElementById('modal-scope');
  const modalImpact = document.getElementById('modal-impact');
  const modalLocation = document.getElementById('modal-location');
  const modalImage = document.getElementById('modal-image') as HTMLImageElement | null;
  const inspectBtns = document.querySelectorAll<HTMLButtonElement>('.inspect-project-btn');

  inspectBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (!modal) return;
      const title = btn.getAttribute('data-title') || '';
      const cat = btn.getAttribute('data-category-label') || '';
      const scope = btn.getAttribute('data-scope') || '';
      const impact = btn.getAttribute('data-impact') || '';
      const loc = btn.getAttribute('data-location') || '';
      const img = btn.getAttribute('data-img') || '';

      if (modalTitle) modalTitle.textContent = title;
      if (modalCategory) modalCategory.textContent = cat;
      if (modalScope) modalScope.textContent = scope;
      if (modalImpact) modalImpact.textContent = impact;
      if (modalLocation) modalLocation.textContent = loc;
      if (modalImage && img) modalImage.src = img;

      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeModal = () => {
    if (modal) {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    }
  };

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  // 3. Simulator / Calculator Logic
  let simType = 'acabamentos';
  let simArea = 180;
  let simTier = 'premium';
  let simLocation = 'Luanda - Benfica';

  const typeConfig: Record<string, { label: string; desc: string; baseFactor: number }> = {
    construcao: {
      label: 'Construção Civil de Raiz',
      desc: 'Fundações, estrutura em betão armado, alvenaria, redes técnicas e acabamentos completos.',
      baseFactor: 45,
    },
    publicas: {
      label: 'Obras Públicas & Pavimentação',
      desc: 'Drenagem pluvial, terraplanagem, guias, lancis e pavimentação betuminosa ou em blocos.',
      baseFactor: 100,
    },
    acabamentos: {
      label: 'Acabamentos Impecáveis & Revestimentos',
      desc: 'Porcelanatos retificados, sancas em pladur, pinturas de alta durabilidade e caixilharia.',
      baseFactor: 80,
    },
    remodelacao: {
      label: 'Remodelação & Reabilitação Integral',
      desc: 'Demolições cirúrgicas, substituição de redes hidráulicas/elétricas e novos acabamentos.',
      baseFactor: 60,
    },
  };

  const updateSimulator = () => {
    const config = typeConfig[simType];
    const durationMonths = Math.max(1, Math.round(simArea / config.baseFactor));
    const durationText = `${durationMonths} a ${durationMonths + 2} meses`;

    const tierLabels: Record<string, string> = {
      standard: 'Standard Técnico',
      premium: 'Premium Executivo',
      luxo: 'Luxo Arquitetónico',
    };

    // Update UI elements
    const resService = document.getElementById('sim-res-service');
    const resArea = document.getElementById('sim-res-area');
    const resTier = document.getElementById('sim-res-tier');
    const resLoc = document.getElementById('sim-res-loc');
    const resDuration = document.getElementById('sim-res-duration');
    const resDesc = document.getElementById('sim-res-desc');
    const waLink = document.getElementById('sim-wa-link') as HTMLAnchorElement | null;

    if (resService) resService.textContent = config.label;
    if (resArea) resArea.textContent = `${simArea} m²`;
    if (resTier) resTier.textContent = tierLabels[simTier];
    if (resLoc) resLoc.textContent = simLocation;
    if (resDuration) resDuration.textContent = durationText;
    if (resDesc) resDesc.textContent = `${config.desc} Fornecimento de insumos certificados e instalação profissional sob fiscalização.`;

    if (waLink) {
      const message = `Olá Lukeniadri! Gostaria de solicitar um orçamento formal:\n` +
        `• Tipo de Obra: ${config.label}\n` +
        `• Área Estimada: ${simArea} m²\n` +
        `• Padrão de Acabamento: ${tierLabels[simTier]}\n` +
        `• Localização: ${simLocation}\n` +
        `• Tempo Estimado: ${durationText}\n` +
        `Podemos agendar uma visita técnica ou avaliação do projeto?`;
      waLink.href = `https://wa.me/244950233950?text=${encodeURIComponent(message)}`;
    }
  };

  // Simulator Type buttons
  const simTypeBtns = document.querySelectorAll<HTMLButtonElement>('.sim-type-btn');
  simTypeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      simType = btn.getAttribute('data-type') || 'acabamentos';
      simTypeBtns.forEach((b) => {
        b.classList.remove('bg-white', 'border-[#0E4D82]', 'ring-1', 'ring-[#0E4D82]');
        b.classList.add('bg-white/60', 'border-slate-200');
        const span = b.querySelector('span');
        if (span) span.className = 'block text-xs font-bold text-slate-900';
      });
      btn.classList.add('bg-white', 'border-[#0E4D82]', 'ring-1', 'ring-[#0E4D82]');
      btn.classList.remove('bg-white/60', 'border-slate-200');
      const activeSpan = btn.querySelector('span');
      if (activeSpan) activeSpan.className = 'block text-xs font-bold text-[#0E4D82]';

      updateSimulator();
    });
  });

  // Simulator Area Slider
  const simRange = document.getElementById('sim-range') as HTMLInputElement | null;
  const simAreaDisplay = document.getElementById('sim-area-display');
  if (simRange) {
    simRange.addEventListener('input', () => {
      simArea = Number(simRange.value);
      if (simAreaDisplay) simAreaDisplay.textContent = `${simArea} m²`;
      updateSimulator();
    });
  }

  // Simulator Tier Buttons
  const simTierBtns = document.querySelectorAll<HTMLButtonElement>('.sim-tier-btn');
  simTierBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      simTier = btn.getAttribute('data-tier') || 'premium';
      simTierBtns.forEach((b) => {
        b.classList.remove('bg-white', 'border-[#0E4D82]', 'ring-1', 'ring-[#0E4D82]');
        b.classList.add('bg-white/60', 'border-slate-200');
        const span = b.querySelector('span');
        if (span) span.className = 'block text-xs font-bold text-slate-800';
      });
      btn.classList.add('bg-white', 'border-[#0E4D82]', 'ring-1', 'ring-[#0E4D82]');
      btn.classList.remove('bg-white/60', 'border-slate-200');
      const activeSpan = btn.querySelector('span');
      if (activeSpan) activeSpan.className = 'block text-xs font-bold text-[#0E4D82]';

      updateSimulator();
    });
  });

  // Simulator Location Select
  const simLocSelect = document.getElementById('sim-location-select') as HTMLSelectElement | null;
  if (simLocSelect) {
    simLocSelect.addEventListener('change', () => {
      simLocation = simLocSelect.value;
      updateSimulator();
    });
  }

  // Copy Summary Button
  const copyBtn = document.getElementById('sim-copy-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const config = typeConfig[simType];
      const tierLabels: Record<string, string> = {
        standard: 'Standard Técnico',
        premium: 'Premium Executivo',
        luxo: 'Luxo Arquitetónico',
      };
      const textToCopy = `Pedido de Cotação - Lukeniadri:\nTipo: ${config.label}\nÁrea: ${simArea} m²\nPadrão: ${tierLabels[simTier]}\nLocal: ${simLocation}`;
      navigator.clipboard.writeText(textToCopy);
      copyBtn.textContent = 'Copiado!';
      setTimeout(() => {
        copyBtn.textContent = 'Copiar Resumo';
      }, 2000);
    });
  }

  // Initial calculation
  updateSimulator();

  // 4. Contact Form Handling
  const quoteForm = document.getElementById('quote-form') as HTMLFormElement | null;
  const formSuccessBox = document.getElementById('form-success-box');
  const formNomeDisplay = document.getElementById('success-nome');
  const formTelDisplay = document.getElementById('success-tel');
  const formWaAction = document.getElementById('form-wa-action') as HTMLAnchorElement | null;
  const formResetBtn = document.getElementById('form-reset-btn');

  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nomeInput = document.getElementById('form-nome') as HTMLInputElement | null;
      const telInput = document.getElementById('form-telefone') as HTMLInputElement | null;
      const servicoInput = document.getElementById('form-servico') as HTMLSelectElement | null;
      const locInput = document.getElementById('form-localizacao') as HTMLInputElement | null;
      const msgInput = document.getElementById('form-mensagem') as HTMLTextAreaElement | null;

      const nome = nomeInput?.value || '';
      const tel = telInput?.value || '';
      const servico = servicoInput?.value || '';
      const loc = locInput?.value || '';
      const msg = msgInput?.value || '';

      if (formNomeDisplay) formNomeDisplay.textContent = nome;
      if (formTelDisplay) formTelDisplay.textContent = tel;

      if (formWaAction) {
        const text = encodeURIComponent(
          `Olá Lukeniadri! Meu nome é ${nome}.\n` +
          `Gostaria de solicitar um orçamento para ${servico}.\n` +
          `Local da obra: ${loc}\n` +
          `Telefone: ${tel}\n` +
          `Mensagem: ${msg || 'Gostaria de agendar uma visita técnica.'}`
        );
        formWaAction.href = `https://wa.me/244950233950?text=${text}`;
      }

      quoteForm.classList.add('hidden');
      if (formSuccessBox) formSuccessBox.classList.remove('hidden');
    });
  }

  if (formResetBtn && quoteForm && formSuccessBox) {
    formResetBtn.addEventListener('click', () => {
      quoteForm.reset();
      quoteForm.classList.remove('hidden');
      formSuccessBox.classList.add('hidden');
    });
  }

  // 5. Floating WhatsApp Toggle
  const waToggleBtn = document.getElementById('floating-wa-btn');
  const waBubble = document.getElementById('floating-wa-bubble');
  const waCloseBtn = document.getElementById('floating-wa-close');

  if (waToggleBtn && waBubble) {
    waToggleBtn.addEventListener('click', () => {
      waBubble.classList.toggle('hidden');
    });
  }

  if (waCloseBtn && waBubble) {
    waCloseBtn.addEventListener('click', () => {
      waBubble.classList.add('hidden');
    });
  }

  // 6. Scroll to Top
  const scrollTopBtn = document.getElementById('scroll-top-btn');
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
