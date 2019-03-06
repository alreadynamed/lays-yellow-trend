const menu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close-menu_mobile');

function addingMenuState() {
  const headerBlock = document.querySelector('.header');
  const firstLine = document.querySelector('.line_upper');
  const thirdLine = document.querySelector('.line_lower');
  const secondLine = document.querySelector('.line_middle');

  const menuItems = document.querySelectorAll('.menu-item');

  menu.classList.toggle('mobile-menu_opened');
  firstLine.classList.toggle('line_upper_transform');
  secondLine.classList.toggle('line_middle_transform');
  thirdLine.classList.toggle('line_lower_transform');

  menuItems.forEach(item => {
    if (item === menuItems[0]) {
      return;
    } else {
      headerBlock.classList.toggle('opened');
      item.classList.toggle('menu_opened');
      closeMenu.classList.toggle('close-menu_mobile_opened');
    }
  });
}

menu.addEventListener('touchstart', addingMenuState);
closeMenu.addEventListener('touchstart', () => {
  if (closeMenu.classList.contains('close-menu_mobile_opened')) {
    addingMenuState();
  }
});
