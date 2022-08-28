let menu = document.getElementById('menu');
let nav_items = document.querySelector('.nav-items');
let nav_item_child = document.querySelectorAll('.nav-item-child');
let closeBtn = document.getElementById('close');
let buttonTop = document.querySelectorAll('.card-shop-btn');
// console.log(buttonTop.length)
nav_items.style.maxHeight = "0px";

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
    if(nav_items.style.maxHeight == "0px"){
        nav_items.style.maxHeight = "300px";

        for (let i = 0; i < nav_item_child.length; i++) {
           nav_item_child[i].classList.add('show-items')
        }
    }else{
        nav_items.style.maxHeight = "0px";
        setTimeout(() => {
            for (let i = 0; i < nav_item_child.length; i++) {
                nav_item_child[i].classList.remove('show-items')
             }
        }, 500);
    }
}