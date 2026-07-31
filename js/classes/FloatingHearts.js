class FloatingHearts {
  constructor(containerId, options = {}) {
    this.container = document.getElementById(containerId);
    this.tints = options.tints || ['#f2a6c1', '#ffd9e3', '#d8ad5f'];
    this.mobileCount = options.mobileCount || 14;
    this.desktopCount = options.desktopCount || 22;
    this.breakpoint = options.breakpoint || 700;
  }

  get reducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  get heartCount() {
    return window.innerWidth < this.breakpoint ? this.mobileCount : this.desktopCount;
  }

  createHeart(index) {
    const heart = document.createElement('div');
    heart.className = 'drift-heart';
    heart.textContent = '♥';
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.setProperty('--size', `${12 + Math.random() * 20}px`);
    heart.style.setProperty('--dur', `${10 + Math.random() * 12}s`);
    heart.style.setProperty('--delay', `${Math.random() * 14}s`);
    heart.style.setProperty('--drift', `${Math.random() * 80 - 40}px`);
    heart.style.setProperty('--tint', this.tints[index % this.tints.length]);
    return heart;
  }

  init() {
    if (!this.container || this.reducedMotion) return;
    for (let i = 0; i < this.heartCount; i++) {
      this.container.appendChild(this.createHeart(i));
    }
  }
}
