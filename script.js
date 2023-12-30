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