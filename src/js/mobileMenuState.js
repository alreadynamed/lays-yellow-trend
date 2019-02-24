const mobileMenuButton = document.querySelector('.mobile-menu');
const closeMenuItem = document.querySelector('.close-menu_mobile');

function mobileMenuState() {
  const menuItem = document.querySelectorAll('.menu-item');

  const upperLine = document.querySelector('.line_upper');
  const middleLine = document.querySelector('.line_middle');
  const lowerLine = document.querySelector('.line_lower');

  if (
    !upperLine.classList.contains('line_upper_transform') &&
    !middleLine.classList.contains('line_middle_transform') &&
    !lowerLine.classList.contains('line_lower_transform')
  ) {
    upperLine.classList.add('line_upper_transform');
    middleLine.classList.add('line_middle_transform');
    lowerLine.classList.add('line_lower_transform');

    menuItem.forEach(item => {
      if (item === menuItem[0]) {
        return;
      } else {
        item.classList.add('menu_opened');
      }
    });
    closeMenuItem.classList.add('close-menu_mobile_opened');
  } else {
    upperLine.classList.remove('line_upper_transform');
    middleLine.classList.remove('line_middle_transform');
    lowerLine.classList.remove('line_lower_transform');

    menuItem.forEach(item => {
      if (item === menuItem[0]) {
        return;
      } else {
        item.classList.remove('menu_opened');
      }
    });
    closeMenuItem.classList.remove('close-menu_mobile_opened');
  }
}

mobileMenuButton.addEventListener('touchend', mobileMenuState);
closeMenuItem.addEventListener('touchend', mobileMenuState);
