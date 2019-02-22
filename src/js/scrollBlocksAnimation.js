window.addEventListener('load', () => {
  window.addEventListener('scroll', () => {
    const pageContent = document.querySelector('.content-overflow-layout');
    const about = document.querySelector('.about');
    const imageAbout = document.querySelector('.about__image-block');
    const lays = document.querySelector('.lays');
    const imageLays = document.querySelector('.lays__image-block');

    const currentYOffset = pageYOffset;
    const firstTriggerPointAnimation = (pageContent.clientHeight / 100) * 23;
    const secondTriggerPointAnimation = (pageContent.clientHeight / 100) * 50;

    if (currentYOffset >= firstTriggerPointAnimation) {
      about.style.display = 'block';
      imageAbout.style.display = 'block';
      about.classList.add('fromLeftToCenter');
      imageAbout.classList.add('fromRightToCenter');
    }

    if (currentYOffset >= secondTriggerPointAnimation) {
      lays.style.display = 'block';
      imageLays.style.display = 'block';
      lays.classList.add('fromRightToCenter');
      imageLays.classList.add('fromLeftToCenter');
    }
  });
});
