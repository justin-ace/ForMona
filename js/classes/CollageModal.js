class CollageModal {
  constructor(config) {
    this.cards = document.querySelectorAll(config.cardSelector);
    this.overlay = document.getElementById(config.overlayId);
    this.frame = document.getElementById(config.frameId);
    this.caption = document.getElementById(config.captionId);
    this.message = document.getElementById(config.messageId);
    this.closeBtn = document.getElementById(config.closeBtnId);
    this.lastFocused = null;
  }

  open(card) {
    this.frame.src = card.getAttribute('data-pic');
    this.frame.alt = card.getAttribute('data-title');
    this.caption.textContent = card.getAttribute('data-title');
    this.message.textContent = card.getAttribute('data-message');
    this.overlay.classList.add('active');
    this.overlay.setAttribute('aria-hidden', 'false');
    this.lastFocused = document.activeElement;
    this.closeBtn.focus();
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.overlay.classList.remove('active');
    this.overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (this.lastFocused) this.lastFocused.focus();
  }

  handleCardKeydown(event, card) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.open(card);
    }
  }

  init() {
    if (!this.overlay) return;

    this.cards.forEach((card) => {
      card.addEventListener('click', () => this.open(card));
      card.addEventListener('keydown', (event) => this.handleCardKeydown(event, card));
    });

    this.closeBtn.addEventListener('click', () => this.close());

    this.overlay.addEventListener('click', (event) => {
      if (event.target === this.overlay) this.close();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && this.overlay.classList.contains('active')) {
        this.close();
      }
    });
  }
}
