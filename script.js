// JavaScript for slider functionality
document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;
  const slides = document.querySelectorAll(".hero-slider .slide");
  const totalSlides = slides.length;

  // Show the first slide
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";
    });
  }

  // Auto change slides every 3 seconds
  setInterval(function () {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  }, 3000);

  showSlide(currentIndex);
});
