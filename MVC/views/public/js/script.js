
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


 document.addEventListener('DOMContentLoaded', function() {
  // Preloader
  setTimeout(function() {
      document.getElementById('preloader').style.opacity = '0';
      setTimeout(function() {
          document.getElementById('preloader').style.display = 'none';
      }, 500);
  }, 2000);

  // Mobile Menu Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const closeMenu = document.getElementById('close-menu');
  const mobileMenu = document.getElementById('mobile-menu');

  menuToggle.addEventListener('click', function() {
      mobileMenu.classList.remove('hidden');
      setTimeout(() => {
          mobileMenu.style.opacity = '1';
      }, 10);
  });

  closeMenu.addEventListener('click', function() {
      mobileMenu.style.opacity = '0';
      setTimeout(() => {
          mobileMenu.classList.add('hidden');
      }, 500);
  });

  // Close menu when clicking on a link
  document.querySelectorAll('#mobile-menu a').forEach(link => {
      link.addEventListener('click', function() {
          mobileMenu.style.opacity = '0';
          setTimeout(() => {
              mobileMenu.classList.add('hidden');
          }, 500);
      });
  });

  // Video Modal
  const playTrailerBtn = document.getElementById('play-trailer');
  const closeModalBtn = document.getElementById('close-modal');
  const trailerModal = document.getElementById('trailer-modal');
  const modalVideo = document.getElementById('modal-video');

  if (playTrailerBtn) {
      playTrailerBtn.addEventListener('click', function() {
          trailerModal.classList.remove('hidden');
          modalVideo.play();
      });
  }

  closeModalBtn.addEventListener('click', function() {
      trailerModal.classList.add('hidden');
      modalVideo.pause();
  });

  trailerModal.addEventListener('click', function(e) {
      if (e.target === trailerModal) {
          trailerModal.classList.add('hidden');
          modalVideo.pause();
      }
  });

  // GSAP Animations
  gsap.registerPlugin(ScrollTrigger);

  // Hero Section Animations
  gsap.to("#hero-title", {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 0.3,
      ease: "power2.out"
  });

  gsap.to("#hero-subtitle", {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 0.6,
      ease: "power2.out"
  });

  gsap.to("#hero-buttons", {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 0.9,
      ease: "power2.out"
  });

  // Scroll Animations
  const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach((el, index) => {
          const delay = index * 0.1;
          
          gsap.to(el, {
              scrollTrigger: {
                  trigger: el,
                  start: "top 80%",
                  toggleActions: "play none none none"
              },
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: delay,
              ease: "power2.out"
          });
      });
  };

  animateOnScroll();

  // Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 80,
                  behavior: 'smooth'
              });
          }
      });
  });
});


// script.js
document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('menu-button');
  const sideMenu = document.getElementById('side-menu');
  const overlay = document.getElementById('menu-overlay');
  
  menuButton.addEventListener('click', () => {
      sideMenu.classList.toggle('w-0');
      sideMenu.classList.toggle('w-[500px]');
      overlay.classList.toggle('hidden');
  });
  
  overlay.addEventListener('click', () => {
      sideMenu.classList.add('w-0');
      sideMenu.classList.remove('w-[500px]');
      overlay.classList.add('hidden');
  });
});

