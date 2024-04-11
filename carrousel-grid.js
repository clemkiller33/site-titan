document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.gallerie_texte img');
    
    images.forEach(img => {
        img.addEventListener('click', function(event) {
            console.log("Clic détecté !");
            const cloneImg = this.cloneNode(true);
            cloneImg.classList.add('expand-img');
            document.body.appendChild(cloneImg);
            console.log("Image agrandie ajoutée au DOM :", cloneImg);
        });
    });
});
