let menu = document.getElementById('menu');
let nav_items = document.querySelector('.nav-items');
let nav_item_child = document.querySelectorAll('.nav-item-child');
let closeBtn = document.getElementById('close');
let buttonTop = document.querySelectorAll('.card-shop-btn');
// console.log(buttonTop.length)
nav_items.style.display = "none"

//onclick change inner html of button

for (let i = 0; i < buttonTop.length; i++) {
    buttonTop[i].addEventListener("click", function (){
        buttonTop[i].innerHTML = "Added"
        setTimeout(function(){
            buttonTop[i].innerHTML = "BUY NOW"
        }, 10000)
    })
}

// toggle menu () 
function toggleMenu(){
    if(nav_items.style.display == "none"){
        nav_items.style.display = "block"
    }else{
     nav_items.style.display = "none"
    }
}

for(i=0; i<nav_item_child.length; i++){
    nav_item_child[i].addEventListener('click', ()=>{
        nav_items.style.display = "none";
    })
}