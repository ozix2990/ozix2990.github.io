document.addEventListener(`DOMContentLoaded`,()=>{
    const btn = document.querySelector('.call_menu');
    const menu = document.querySelector('.menu');
    const menuList = document.querySelectorAll(`.menu_list`);

    btn.addEventListener('click', ()=> {
        menu.classList.toggle(`menu_active`);
        btn.classList.toggle(`call_menu_active`);
    });

    menuList.forEach(item=>{
        item.addEventListener(`click`,()=>{
            menu.classList.remove(`menu_active`);
            btn.classList.remove(`call_menu_active`);
        });
    });


});