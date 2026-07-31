document.addEventListener('DOMContentLoaded', () => {
  new PasscodeGate({
    gateId: 'lockGate',
    inputSelector: '.code-digit',
    errorId: 'lockError',
    submitId: 'lockSubmit',
    code: '0115',
    storageKey: 'gfday-unlocked'
  }).init();

  new FloatingHearts('heartField').init();

  new Envelope('envelope', 'envelopeHint').init();

  new CollageModal({
    cardSelector: '.collage .polaroid',
    overlayId: 'collageModal',
    frameId: 'modalFrame',
    captionId: 'modalCaption',
    messageId: 'modalMessage',
    closeBtnId: 'modalClose'
  }).init();

  new ScrollReveal('.reveal').init();
});
