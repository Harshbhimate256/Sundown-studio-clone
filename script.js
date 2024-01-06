const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
var elemC = document.querySelector("#elem-container")
var fixed = document.querySelector("#fixed-image")
elemC.addEventListener("mouseenter", function(){
    fixed.style.display="block"
})
elemC.addEventListener("mouseleave", function(){
    fixed.style.display="none"
})

var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })
})
function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100
      });
}
swiperAnimation();

var menu = document.querySelector("nav h3")
var fixed_src = document.querySelector("#fixed-src")
var navImg = document.querySelector("nav img")
var flag = 0
menu.addEventListener("click",function(){
    if(flag == 0){
        navImg.style.opacity = 0;
        fixed_src.style.top = 0;
        flag = 1
    }else{
        navImg.style.opacity = 1;
        fixed_src.style.top = "-100%";
        flag = 0
    }
    
})