class PasscodeGate {
  constructor(config) {
    this.gate = document.getElementById(config.gateId);
    this.inputs = document.querySelectorAll(config.inputSelector);
    this.errorEl = document.getElementById(config.errorId);
    this.submitBtn = document.getElementById(config.submitId);
    this.code = config.code || '0115';
    this.storageKey = config.storageKey || 'gfday-unlocked';
  }

  get enteredCode() {
    return Array.from(this.inputs).map((input) => input.value).join('');
  }

  unlock() {
    this.gate.classList.add('unlocked');
    document.body.classList.remove('locked');
    sessionStorage.setItem(this.storageKey, 'true');
  }

  showError() {
    this.errorEl.textContent = "hehe think about it, you're close!.";
    const card = this.gate.querySelector('.lock-card');
    card.classList.add('shake');
    setTimeout(() => card.classList.remove('shake'), 400);
    this.inputs.forEach((input) => { input.value = ''; });
    this.inputs[0].focus();
  }

  handleSubmit() {
    if (this.enteredCode.length < this.inputs.length) return;
    if (this.enteredCode === this.code) {
      this.unlock();
    } else {
      this.showError();
    }
  }

  bindInputs() {
    this.inputs.forEach((input, index) => {
      input.addEventListener('input', () => {
        input.value = input.value.replace(/[^0-9]/g, '').slice(0, 1);
        this.errorEl.textContent = '';
        if (input.value && index < this.inputs.length - 1) {
          this.inputs[index + 1].focus();
        }
        if (index === this.inputs.length - 1 && input.value) {
          this.handleSubmit();
        }
      });

      input.addEventListener('keydown', (event) => {
        if (event.key === 'Backspace' && !input.value && index > 0) {
          this.inputs[index - 1].focus();
        }
        if (event.key === 'Enter') {
          this.handleSubmit();
        }
      });
    });
  }

  init() {
    if (!this.gate) return;

    if (sessionStorage.getItem(this.storageKey) === 'true') {
      this.gate.classList.add('unlocked');
      return;
    }

    document.body.classList.add('locked');
    this.bindInputs();

    if (this.submitBtn) {
      this.submitBtn.addEventListener('click', () => this.handleSubmit());
    }

    this.inputs[0].focus();
  }
}
