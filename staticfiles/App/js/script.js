// ==========================
// SCROLL ANIMATION
// ==========================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

sections.forEach((section) => {
    observer.observe(section);
});

// ==========================
// TYPING EFFECT
// ==========================

const words = [
    "Python Developer",
    "Django Developer",
    "Full Stack Developer",
    "Web Developer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.querySelector(".typing");

function typeEffect() {

    if(!typingElement) return;

    const currentWord = words[wordIndex];

    if(!isDeleting){
        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if(charIndex === currentWord.length){
            isDeleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }
    }
    else{

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if(charIndex === 0){
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);
}

typeEffect();

// ==========================
// NAVBAR ACTIVE LINK
// ==========================

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if(window.scrollY >= sectionTop){
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href").includes(current)){
            link.classList.add("active");
        }
    });
});