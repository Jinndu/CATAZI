const form = document.querySelector(".form");
const username = form.querySelector("#name");
const email = form.querySelector("#email");
const num = form.querySelector("#num")
const option = form.querySelector("#option");
const message = form.querySelector("#message");
const emailError = form.querySelector(".errorMessage")

const regexPattern = /^(\w{2,20})([\. -_])?(\w{2,20})?(@\w{2,5}\.)(\w{2,5})$/;

email.addEventListener("input", function(e){
    const isValid = regexPattern.test(e.target.value);
    if(isValid){
        emailError.style.opacity = "0"
    }else{
        emailError.style.opacity = "1"
    }
})

window.addEventListener("scroll",function(){
    var nav = document.querySelector(".navbar");
    nav.classList.toggle("sticky",window.scrollY > 0);
})
