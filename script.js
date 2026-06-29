// ===========================
// Loading Screen
// ===========================

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.opacity="0";

document.getElementById("loader").style.visibility="hidden";

},1200);

});

// ===========================
// Dark Mode
// ===========================

const theme=document.getElementById("theme-toggle");

theme.onclick=()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

theme.innerHTML='<i class="fas fa-sun"></i>';

}else{

theme.innerHTML='<i class="fas fa-moon"></i>';

}

};

// ===========================
// Mobile Menu
// ===========================

const menu=document.querySelector(".menu-btn");

const nav=document.querySelector(".nav-links");

menu.onclick=()=>{

nav.classList.toggle("active");

};

// ===========================
// Scroll Animation
// ===========================

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("visible");

}

});

},{threshold:.15});

document.querySelectorAll("section").forEach(sec=>{

sec.classList.add("hidden");

observer.observe(sec);

});

// ===========================
// Back To Top
// ===========================

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.classList.add("show");

}else{

topBtn.classList.remove("show");

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};
// ===========================
// Typing Effect
// ===========================

const words = [
    "Software Engineer",
    "Machine Learning Enthusiast",
    "IoT Developer",
    "Web Developer"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    const current = words[wordIndex];

    if (!deleting) {

        typing.textContent = current.substring(0, letterIndex);

        letterIndex++;

        if (letterIndex > current.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typing.textContent = current.substring(0, letterIndex);

        letterIndex--;

        if (letterIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length)
                wordIndex = 0;

        }

    }

    setTimeout(typeEffect, deleting ? 45 : 90);

}

typeEffect();


// ===========================
// Animated Counters
// ===========================

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const target = +counter.dataset.target;

            let current = 0;

            const increment = Math.ceil(target / 80);

            const update = () => {

                current += increment;

                if (current >= target) {

                    counter.innerHTML =
                        target +
                        (target === 100 ? "%" : "+");

                } else {

                    counter.innerHTML = current;

                    requestAnimationFrame(update);

                }

            };

            update();

            counterObserver.unobserve(counter);

        }

    });

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});


// ===========================
// Active Navigation
// ===========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;

        if (window.scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ===========================
// Image Lightbox
// ===========================

const images = document.querySelectorAll(".gallery img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

const close = document.getElementById("close-lightbox");

images.forEach(img => {

    img.onclick = () => {

        lightbox.classList.add("show");

        lightboxImg.src = img.src;

    };

});

close.onclick = () => {

    lightbox.classList.remove("show");

};

lightbox.onclick = e => {

    if (e.target === lightbox) {

        lightbox.classList.remove("show");

    }

};
/* ======================================
SCROLL PROGRESS BAR
====================================== */

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

const scrollTop = document.documentElement.scrollTop;

const scrollHeight =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

const progress = (scrollTop / scrollHeight) * 100;

progressBar.style.width = progress + "%";

});