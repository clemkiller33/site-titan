document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    let currentIndex = 0;

    function goToSlide(index) {
        if (index < 0 || index >= slides.length) return;
        slides[currentIndex].classList.remove('active'); // On désactive la slide actuelle
        currentIndex = index;
        slides[currentIndex].classList.add('active'); // On active la nouvelle slide
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', function () {
        goToSlide(currentIndex - 1);
    });

    nextButton.addEventListener('click', function () {
        goToSlide(currentIndex + 1);
    });

    goToSlide(currentIndex);
});
