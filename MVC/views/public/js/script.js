
  // Carrossel do Mapa
  let currentMapSlide = 0;
  const mapSlides = document.querySelectorAll('#map-carousel > div');
  
  function goToMapSlide(index) {
    currentMapSlide = index;
    document.getElementById('map-carousel').style.transform = `translateX(-${currentMapSlide * 100}%)`;
  }
  
  // Rotação automática
  setInterval(() => {
    currentMapSlide = (currentMapSlide + 1) % mapSlides.length;
    goToMapSlide(currentMapSlide);
  }, 5000);

 // Controle do menu mobile
 const mobileMenuButton = document.getElementById('mobile-menu-button');
 const mobileMenu = document.getElementById('mobile-menu');

 mobileMenuButton.addEventListener('click', () => {
   mobileMenu.classList.toggle('hidden');
   mobileMenuButton.innerHTML = mobileMenu.classList.contains('hidden') 
     ? '<i class="fas fa-bars text-2xl"></i>' 
     : '<i class="fas fa-times text-2xl"></i>';
 });