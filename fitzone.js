// ===============================
// FITZONE GYM
// fitzone.js
// ===============================

// Mobile Menu
const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");

if (menu) {
    menu.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// Sticky Header
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.background = "#111";
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.4)";
    } else {
        header.style.background = "rgba(0,0,0,.75)";
        header.style.boxShadow = "none";
    }
});

// Scroll Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll("section").forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});

// Active Navigation
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop &&
            window.pageYOffset < sectionTop + sectionHeight) {

            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// Hero Image Floating Animation
const heroImage = document.querySelector(".hero-image img");

if (heroImage) {

    setInterval(() => {

        heroImage.style.transform = "translateY(-12px)";

        setTimeout(() => {

            heroImage.style.transform = "translateY(0px)";

        }, 1200);

    }, 2500);

}

// BMI Calculator
function calculateBMI() {

    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);

    const result = document.getElementById("result");

    if (!height || !weight || height <= 0 || weight <= 0) {

        result.innerHTML = "Please enter valid values.";

        return;

    }

    const bmi = (weight / ((height / 100) * (height / 100))).toFixed(1);

    let status = "";

    if (bmi < 18.5) {

        status = " (Underweight)";

    } else if (bmi < 25) {

        status = " (Normal)";

    } else if (bmi < 30) {

        status = " (Overweight)";

    } else {

        status = " (Obese)";

    }

    result.innerHTML = `Your BMI: ${bmi}${status}`;

}