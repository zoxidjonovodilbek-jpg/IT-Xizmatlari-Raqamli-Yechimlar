document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll(".scroll-section");

  function checkScroll() {
    const triggerBottom = window.innerHeight * 0.8;

    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < triggerBottom) {
        section.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll(); // sahifa yuklanganda tekshir
});

// Hamburger menyu ishlashi
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav ul");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// Scroll effekti navbar uchun
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
