let menu = document.getElementById('menu');
let nav_items = document.querySelector('.nav-items');
let nav_item_child = document.querySelectorAll('.nav-item-child');
let closeBtn = document.getElementById('close');

function toggle_menu(){
    if(nav_items.classList.contains('show-nav')){
        nav_items.classList.remove('show-nav');
        menu.style.display = "block";
        closeBtn.style.display = "none";
    }else{
        nav_items.classList.add('show-nav');
        menu.classList.add('faded-animation');
        menu.style.display = "none";
        closeBtn.classList.add('faded-animation');
        closeBtn.style.display = "block";
    }

    
}

closeBtn.addEventListener('click', ()=>{
    nav_items.classList.remove('show-nav');
    menu.style.display = "block";
    closeBtn.style.display = "none";
})

for(i=0; i<nav_item_child.length; i++){
    nav_item_child[i].addEventListener('click', function(){
        nav_items.classList.remove('show-nav')
    })
}