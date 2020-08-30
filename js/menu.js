//Open menu
const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');

function menuExpand(){
    if(menu.classList.contains("active")){
        menu.classList.remove("active");
        toggle.querySelector("a").innerHTML = "<i class='icon-menu'></span>";
    } else {
        menu.classList.add("active");
        toggle.querySelector("a").innerHTML = "<i class='icon-times'></span>";
    }
}

toggle.addEventListener('click', menuExpand, false);

//Open submenu
const items = document.querySelectorAll('.item');

function toggleItem() {
    if (this.classList.contains("subMenuActive")) {
        this.classList.remove("subMenuActive");
    } else if (menu.querySelector(".subMenuActive")) {
        menu.querySelector(".subMenuActive").classList.remove("subMenuActive");
        this.classList.add("subMenuActive");
    } else {
        this.classList.add("subMenuActive");
    }
}

for (let item of items) {
    if (item.querySelector('.subMenu')) {
        item.addEventListener('click', toggleItem, false);
    }
}

//Close submenu from anywhere in the page
function closeSubmenu(e) {
    let isClickInside = menu.contains(e.target);

    if (!isClickInside && menu.querySelector('.subMenuActive')){
        menu.querySelector('.subMenuActive').classList.remove('subMenuActive');
    }
}

document.addEventListener('click', closeSubmenu, false);