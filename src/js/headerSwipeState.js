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
  const menuItems = document.querySelectorAll('.menu-item');
  const closeMenu = document.querySelector('.close-menu_mobile');

  const menu = document.querySelector('.mobile-menu');
  const firstLine = document.querySelector('.line_upper');
  const thirdLine = document.querySelector('.line_lower');
  const secondLine = document.querySelector('.line_middle');

  let swipeUp = event.touches[0].clientY;
  let swipeDiff = swipeDown - swipeUp;

  if (swipeDiff > 0) {
    if (headerBlock.classList.contains('opened')) {
      menuItems.forEach(item => {
        if (item === menuItems[0]) {
          return;
        } else {
          headerBlock.classList.remove('opened');
          item.classList.remove('menu_opened');
          closeMenu.classList.remove('close-menu_mobile_opened');

          menu.classList.remove('mobile-menu_opened');
          firstLine.classList.remove('line_upper_transform');
          secondLine.classList.remove('line_middle_transform');
          thirdLine.classList.remove('line_lower_transform');
        }
      });

      // headerBlock.style.transform = '';
    } else {
      headerBlock.classList.add('header_hide');
    }
  } else {
    headerBlock.classList.remove('header_hide');
  }
}

document.addEventListener('touchstart', getFirstTouch);
document.addEventListener('touchmove', headerBlockMoveState);
