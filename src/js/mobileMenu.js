const mobileMenu = document.querySelector('.mobile-menu');
const line = document.querySelector('.line');

const upperLine = document.querySelector('.line_upper');
const middleLine = document.querySelector('.line_middle');
const lowerLine = document.querySelector('.line_lower');

const upperLineTransform = document.querySelector('.line_upper_transform');
const middleLineTransform = document.querySelector('.line_middle_tranform');
const lowerLineTransform = document.querySelector('.line_lower_transform');

mobileMenu.addEventListener('touchend', () => {
  if (
    !upperLine.classList.contains('line_upper_transform') &&
    !middleLine.classList.contains('line_middle_transform') &&
    !lowerLine.classList.contains('line_lower_transform')
  ) {
    upperLine.classList.add('line_upper_transform');
    middleLine.classList.add('line_middle_transform');
    lowerLine.classList.add('line_lower_transform');
  } else {
    upperLine.classList.remove('line_upper_transform');
    middleLine.classList.remove('line_middle_transform');
    lowerLine.classList.remove('line_lower_transform');
  }
});
