let navbar = document.querySelector('.navbar');
document.querySelector('#menu-bar').onclick=() =>{
    navbar.classList.toggle('active')
}

window.addEventListener("scroll", function(){
    let reveals = document.querySelectorAll(".reveal");

    reveals.forEach(function(oneBlock){
        let windowheight = window.innerHeight;
        let revealtop = oneBlock.getBoundingClientRect().top;
        let revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            oneBlock.classList.add("active");
        }else{
            oneBlock.classList.remove("active");
        }
    })
})

window.addEventListener("scroll",function(){
    let scrolled = window.scrollY

    let topButton = document.querySelector(".top-page")

    if(Math.ceil(scrolled) > 300){
        topButton.style.display = "flex"
    } else{
        topButton.style.display = "none"
    }
})

let form = document.querySelector("form")
let fullNameInput = document.querySelector(".fullName")
let emailInput = document.querySelector(".userEmail")  
let notName = document.querySelector(".notificationName")
let notEmail = document.querySelector(".notificationEmail")

form.addEventListener("submit", function(event){
    event.preventDefault()
    console.log(fullNameInput.value)
    console.log(emailInput.value);

    if (fullNameInput.value == "") {
        notName.style.display = "block"
    }

    if (emailInput.value == "") {
        notEmail.style.display = "block"
    }
})