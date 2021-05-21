window.addEventListener("DOMContentLoaded", () => {

  const mobileBtn = document.querySelector(`.mobile_menu`),
    menu = document.querySelector(`.menu_list`),
    menuList = document.querySelectorAll(`.menu_item_link`),
    section = document.querySelectorAll('section');

  mobileBtn.addEventListener('click', (e) => {
    menu.classList.toggle(`active`);
    mobileBtn.classList.toggle(`mobile_menu_active`);
    section.forEach(item => {
      item.addEventListener(`click`, () => {
        mobileBtn.classList.remove(`mobile_menu_active`);
        menu.classList.remove(`active`);
      });
    });
  });
  menuList.forEach(item => {
    item.addEventListener(`click`, () => {
      mobileBtn.classList.remove(`mobile_menu_active`);
      menu.classList.remove(`active`);
    });
  });
});