document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.carousel-inner img');
    let currentIndex = 0;
  
    setInterval(() => {
      slides[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % slides.length;
      slides[currentIndex].classList.add('active');
    }, 3000); // Change slide every 3 seconds
  
    // Show the first slide initially
    slides[currentIndex].classList.add('active');
  });
  