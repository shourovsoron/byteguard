let mobileMenuBtn = document.querySelector(".mobile-menu-btn");
let mobileBtnImg = document.querySelector(".mobile-menu-btn img");

const primaryNav=document.querySelector(".primary-navigation");


mobileMenuBtn.addEventListener('click', ()=>{
    primaryNav.toggleAttribute("data-visible");

    if(primaryNav.hasAttribute("data-visible")){
        mobileBtnImg.src="./images/icon-close.svg"
    }else{
      
        mobileBtnImg.src="./images/icon-hamburger.svg"
    }
})