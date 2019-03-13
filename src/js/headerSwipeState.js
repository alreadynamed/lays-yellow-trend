let swipeDown = null;

function getTouches(event) {
  return event.touches;
}

function getFirstTouch(event) {
  const firstTouch = getTouches(event)[0];
  swipeDown = firstTouch.clientY;
}

function headerBlockMoveState(event) {
  const headerBlock = document.querySelector('.header');
  let swipeUp = event.touches[0].clientY;
  let swipeDiff = swipeDown - swipeUp;

  if (swipeDiff > 0) {
    if (headerBlock.classList.contains('opened')) {
      headerBlock.style.transform = '';
    } else {
      headerBlock.classList.add('header_is-hidden');
    }
  } else {
    headerBlock.classList.remove('header_is-hidden');
  }
}

document.addEventListener('touchstart', getFirstTouch);
document.addEventListener('touchmove', headerBlockMoveState);
