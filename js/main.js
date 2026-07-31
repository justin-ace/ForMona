document.addEventListener('DOMContentLoaded', () => {
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
