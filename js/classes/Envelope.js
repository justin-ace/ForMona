class Envelope {
  constructor(envelopeId, hintId) {
    this.el = document.getElementById(envelopeId);
    this.hint = document.getElementById(hintId);
    this.isOpen = false;
  }

  toggle() {
    this.isOpen = this.el.classList.toggle('open');
    this.el.setAttribute('aria-expanded', this.isOpen);
    this.hint.classList.remove('hidden');
    this.hint.textContent = this.isOpen ? 'tap to close' : 'tap to open';
  }

  handleKeydown(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.toggle();
    }
  }

  init() {
    if (!this.el) return;
    this.el.addEventListener('click', () => this.toggle());
    this.el.addEventListener('keydown', (event) => this.handleKeydown(event));
  }
}
