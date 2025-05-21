document.addEventListener('DOMContentLoaded', function() {
  // Adiciona efeito de digitação ao texto de boas-vindas
  const welcomeText = document.querySelector('.left-login-container h1');
  if (welcomeText) {
    const originalText = welcomeText.textContent;
    welcomeText.textContent = '';
    
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < originalText.length) {
        welcomeText.textContent += originalText.charAt(i);
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, 100);
  }

  // Efeito de parallax no fundo
  const leftContainer = document.querySelector('.left-login-container');
  if (leftContainer) {
    leftContainer.addEventListener('mousemove', (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      leftContainer.style.backgroundPosition = `${x * 100}% ${y * 100}%`;
    });
  }

  // Efeito de brilho aleatório no logo
  const logo = document.querySelector('.gta-logo');
  if (logo) {
    setInterval(() => {
      logo.style.filter = `drop-shadow(0 0 ${5 + Math.random() * 10}px rgba(${
        Math.floor(Math.random() * 100) + 155
      }, ${Math.floor(Math.random() * 100) + 155}, 237, 0.7))`;
    }, 3000);
  }
});


document.addEventListener('DOMContentLoaded', function() {
  // Efeito de foco nos inputs
  const inputs = document.querySelectorAll('.login-input');
  
  inputs.forEach(input => {
    // Efeito ao focar
    input.addEventListener('focus', function() {
      this.parentElement.querySelector('label').classList.add('text-red-400');
    });
    
    // Efeito ao sair do foco
    input.addEventListener('blur', function() {
      if (!this.value) {
        this.parentElement.querySelector('label').classList.remove('text-red-400');
      }
    });
    
    // Anima label se input tiver valor
    if (input.value) {
      input.parentElement.querySelector('label').classList.add('text-red-400');
    }
  });

  // Efeito de digitação no subtítulo
  const subtitle = document.querySelector('.login-subtitle');
  if (subtitle) {
    const text = subtitle.textContent;
    subtitle.textContent = '';
    
    let i = 0;
    const typing = setInterval(() => {
      if (i < text.length) {
        subtitle.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(typing);
      }
    }, 50);
  }

  // Efeito de hover nos botões sociais
  const socialBtns = document.querySelectorAll('.social-btn');
  socialBtns.forEach(btn => {
    btn.addEventListener('mouseenter', function() {
      const icon = this.querySelector('i');
      icon.classList.add('fa-beat');
    });
    
    btn.addEventListener('mouseleave', function() {
      const icon = this.querySelector('i');
      icon.classList.remove('fa-beat');
    });
  });
});




    // Toggle para mostrar/esconder senha
    document.querySelectorAll('.toggle-password').forEach(icon => {
      icon.addEventListener('click', function() {
        const input = this.parentElement.previousElementSibling;
        if (input.type === 'password') {
          input.type = 'text';
          this.classList.replace('fa-eye', 'fa-eye-slash');
        } else {
          input.type = 'password';
          this.classList.replace('fa-eye-slash', 'fa-eye');
        }
      });
    });

    // Validação de formulário
    document.querySelector('form')?.addEventListener('submit', function(e) {
      const senha = document.getElementById('senha').value;
      const confirmarSenha = document.getElementById('confirmar_senha').value;
      
      if (senha !== confirmarSenha) {
        e.preventDefault();
        alert('As senhas não coincidem!');
        return false;
      }
      
      if (!document.getElementById('termos').checked) {
        e.preventDefault();
        alert('Você deve aceitar os termos e condições!');
        return false;
      }
      
      return true;
    });

