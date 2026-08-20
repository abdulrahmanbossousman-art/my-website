const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

let currentSlide = 0;


function showSlide(index) {

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active");

    currentSlide = index;
}


function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
}


function previousSlide() {

    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
}


if (nextButton) {
    nextButton.addEventListener("click", nextSlide);
}


if (prevButton) {
    prevButton.addEventListener("click", previousSlide);
}


dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {
        showSlide(index);
    });

});


if (slides.length > 0) {

    setInterval(() => {
        nextSlide();
    }, 5000);

}


/* MOBILE MENU */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("show");

    });

}


/* CONTACT FORM */

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Thank you! Your message has been received.");

        contactForm.reset();

    });

}