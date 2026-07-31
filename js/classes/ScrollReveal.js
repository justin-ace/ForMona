class ScrollReveal {
  constructor(selector, options = {}) {
    this.items = document.querySelectorAll(selector);
    this.threshold = options.threshold || 0.15;
  }

  revealImmediately() {
    this.items.forEach((el) => el.classList.add('in-view'));
  }

  init() {
    if (!('IntersectionObserver' in window)) {
      this.revealImmediately();
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: this.threshold });

    this.items.forEach((el) => observer.observe(el));
  }
}
