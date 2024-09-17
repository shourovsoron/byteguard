let mobileMenuBtn = document.querySelector(".mobile-menu-btn");
let mobileBtnImg = document.querySelector(".mobile-menu-btn img");

const primaryNav=document.querySelector(".primary-navigation");
const SelectLng=document.querySelector(".select_lng");
const SelectLngMob=document.querySelector(".select_lng_mob");
const lngflag=document.querySelector(".country-flag");
const lngflagMob=document.querySelector(".country-flag-mob");


mobileMenuBtn.addEventListener('click', ()=>{
    primaryNav.toggleAttribute("data-visible");

    if(primaryNav.hasAttribute("data-visible")){
        mobileBtnImg.src="./images/icon-close.svg"
    }else{
      
        mobileBtnImg.src="./images/icon-hamburger.svg"
    }
});


SelectLng.addEventListener('change', (e)=>{
   let lng = e.target.value;

   lngflag.src = `./images/${lng}.png`


})



SelectLngMob.addEventListener('change', (e)=>{
    let lng = e.target.value;
 
    lngflagMob.src = `./images/${lng}.png`
 
 
 })