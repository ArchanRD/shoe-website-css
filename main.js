let menu = document.getElementById('menu');
let nav_items = document.querySelector('.nav-items');
let nav_item_child = document.querySelectorAll('.nav-item-child');
let closeBtn = document.getElementById('close');

nav_items.style.maxHeight = "0px";

function toggle_menu(){
    if(nav_items.style.maxHeight == "0px"){
        nav_items.style.maxHeight = "300px";
    }else{
        nav_items.style.maxHeight = "0px";
    }
}

for(i=0; i<nav_item_child.length; i++){
    nav_item_child[i].addEventListener('click', ()=>{
        nav_items.style.maxHeight = "0px";
    })
}

closeBtn.addEventListener('click', ()=>{
    nav_items.classList.remove('show-nav');
    menu.style.display = "block";
    closeBtn.style.display = "none";
})