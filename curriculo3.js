
const topButton = document.getElementById("topButton");

window.addEventListener("scroll", function() {
    if (window.scrollY > 200) {
        topButton.classList.add("show");
    } else {
        topButton.classList.remove("show");
    }
});

const sections = document.querySelectorAll(".secao");


function checkSectionsInView() {
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY + window.innerHeight > sectionTop + sectionHeight / 4) {
            section.classList.add("in-view");
            const img = section.querySelector("img");
            if (img) img.classList.add("in-view");
        }
    });
}

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY + window.innerHeight > sectionTop + sectionHeight / 4) {
            section.classList.add("in-view");
            const img = section.querySelector("img");
            if (img) img.classList.add("in-view");
        } else {
            section.classList.remove("in-view");
            const img = section.querySelector("img");
            if (img) img.classList.remove("in-view");
        }
    });
});


document.addEventListener("DOMContentLoaded", checkSectionsInView);

const images = document.querySelectorAll(".secao img");

images.forEach(img => {
    img.addEventListener("mouseenter", () => {
        img.style.transition = "transform 0.3s ease-in-out";
        img.style.transform = "scale(1.05)";
    });
    
    img.addEventListener("mouseleave", () => {
        img.style.transition = "transform 0.3s ease-in-out";
        img.style.transform = "scale(1)";
    });
});

const texts = document.querySelectorAll(".secao h2, .secao p");

texts.forEach(text => {
    const corAcento = getComputedStyle(document.documentElement).getPropertyValue('--cor-acento').trim();

    text.addEventListener("mouseenter", () => {
        text.style.transition = "color 0.3s ease-in-out, transform 0.3s ease-in-out";
        text.style.color = corAcento; 
        text.style.transform = "translateX(10px)";
    });
    
    text.addEventListener("mouseleave", () => {
        text.style.transition = "color 0.3s ease-in-out, transform 0.3s ease-in-out";
        text.style.color = ""; 
        text.style.transform = "translateX(0)";
    });
});
