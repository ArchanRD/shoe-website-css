let menu = document.getElementById('menu');
let nav_items = document.querySelector('.nav-items');
let nav_item_child = document.querySelectorAll('.nav-item-child');

function toggle_menu(){
    console.log("clicked")
    nav_items.classList.toggle('show-nav');
}

for(i=0; i<nav_item_child.length; i++){
    nav_item_child[i].addEventListener('click', function(){
        nav_items.classList.remove('show-nav')
    })
}