
//SKilled Animation

const skillsSection = document.querySelector("#Skills")
let hasAnimated = false


const animationSkills = () => {

    const fills = document.querySelectorAll(".progress_fill");

    fills.forEach(fill => {
        const targetWidth = parseInt(fill.dataset.width, 10);
        const percentText = fill
            .closest(".skill_content")
            .querySelector(".percent");

        let current = 0;

        //animate bar
        setTimeout(() => {
            fill.style.width = targetWidth + "%"
        }, 200)
   

    //animate num
    const counter = setInterval(() => {
        if (current >= targetWidth) {
            clearInterval(counter);
            percentText.textContent = targetWidth + "%"
            return;
        }
        percentText.textContent = current + "%"
        current++;
    }, 15);
 })

}
 const observer=new IntersectionObserver(
    entries=>{
        if(entries[0].isIntersecting && !hasAnimated){
            animationSkills();
            hasAnimated=true;
            observer.disconnect()
        }
    }
    ,{threshold:0}
 )

 
observer.observe(skillsSection);


requestAnimationFrame(() => {
  observer.observe(skillsSection);
});


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
