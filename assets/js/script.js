//nav scroll
const nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
        nav.classList.add("scrolled")
    } else {
        nav.classList.remove("scrolled")
    }
})
// hamburger
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu")


hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("active");
})


//Typed
new Typed('#typed', {
    strings: ['Web Enginner', 'Frontend Dev', "Backend Dev"],
    typeSpeed: 80,
    backspeed: 50,
    backDelay: 1000,
    loop: true
});

