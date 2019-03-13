const introductionBlock = document.querySelector('.introduction-block');
const galleryBlock = document.querySelector('.gallery-block');

window.addEventListener('load', function() {
  if (
    !introductionBlock.classList.contains('animation-left') &&
    !galleryBlock.classList.contains('animation-right')
  ) {
    introductionBlock.classList.add('animation-left');
    galleryBlock.classList.add('animation-right');
  }
});
