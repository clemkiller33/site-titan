document.addEventListener('DOMContentLoaded', function() {
    var offreAchat = document.getElementById('offre_achat');
    offreAchat.classList.remove('loaded');
    setTimeout(function() {
      offreAchat.classList.add('loaded');
    }, 100); // Déclenche la re-classement après un court délai pour que l'animation se répète
  });