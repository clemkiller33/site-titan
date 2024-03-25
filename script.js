document.addEventListener("scroll", function () {
    var header = document.getElementById("liste");
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 100) { // Choisissez la position à laquelle le menu doit devenir fixe
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  });
  