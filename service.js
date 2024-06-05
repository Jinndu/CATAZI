const close = document.querySelector(".close");

const menuBar = document.querySelector(".menu");

const mobileMenu = document.querySelector(".mobile-menu");

menuBar.addEventListener("click", function(){
    mobileMenu.style.transform = "scale(1)";
    document.querySelector("html").style.overflowY = "hidden";
})
close.addEventListener("click", function(){
    mobileMenu.style.transform = "scale(0)";
    document.querySelector("html").style.overflowY = "scroll";
})

function reverse(e){
    e.preventdefault();
    mobileMenu.style.transform = "scale(0)"
}
