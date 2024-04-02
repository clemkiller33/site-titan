document.querySelector('.prev-arrow').addEventListener('click', function() {
    const slider = document.querySelector('.slider');
    const slideWidth = slider.querySelector('img').clientWidth; // Largeur d'une image
    const scrollAmount = slider.scrollLeft - slideWidth; // Défilement vers l'arrière d'une seule image
    slider.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
});

document.querySelector('.next-arrow').addEventListener('click', function() {
    const slider = document.querySelector('.slider');
    const slideWidth = slider.querySelector('img').clientWidth; // Largeur d'une image
    const scrollAmount = slider.scrollLeft + slideWidth; // Défilement vers l'avant d'une seule image
    slider.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
});





////



document.querySelector('.slider').addEventListener('scroll', function() {
    const slider = document.querySelector('.slider');
    const slides = Array.from(slider.querySelectorAll('.slide'));
    const windowCenter = window.innerWidth / 2;
    let closestIndex = 0;
    let closestDistance = Infinity;

    slides.forEach((slide, index) => {
        const slideRect = slide.getBoundingClientRect();
        const slideCenter = slideRect.left + slideRect.width / 2;
        const distanceToCenter = Math.abs(windowCenter - slideCenter);
        
        if (distanceToCenter < closestDistance) {
            closestIndex = index;
            closestDistance = distanceToCenter;
        }
    });

    const navLinks = document.querySelectorAll('.slider-nav a');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    navLinks[closestIndex].classList.add('active');
});


document.querySelector('.slider').addEventListener('scroll', function() {
    const slider = document.querySelector('.slider');
    const slideWidth = slider.querySelector('img').clientWidth; // Largeur d'une image
    const currentIndex = Math.round(slider.scrollLeft / slideWidth);

    const h3Contents = [
        "Gérer vos projets ainsi que l'ensemble de vos clients dans une interface intuitive, élégante et dynamique",
        "Autre contenu pour la deuxième image",
        "Encore un autre contenu pour la troisième image"
    ];

    document.querySelector('h3').textContent = h3Contents[currentIndex];
});



document.querySelectorAll('.section').forEach(section => {
    section.addEventListener('wheel', e => {
        e.preventDefault(); // Empêche le défilement par défaut
        const delta = Math.sign(e.deltaY);
        window.scrollBy({
            top: delta * window.innerHeight,
            behavior: 'smooth'
        });
    });
});
