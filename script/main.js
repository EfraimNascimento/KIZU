function mudouTamanho(){
    if(window.innerWidth >= 768){
        itens.style.display = 'block'
    }else{
        itens.style.display = 'none'
    }
}

function clickMenu(){
    if(itens.style.display == 'block'){
        itens.style.display = 'none'
    } else{
        itens.style.display = 'block'
    }
}

// Scroll suave para links de navegação + opacidade de navbar
const navLinks = document.querySelectorAll('#menu ul a.link');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target.offsetTop != 0){
        document.getElementById('menu-span').classList.add('icon-op');
    }else{
        document.getElementById('menu-span').classList.remove('icon-op');
    }
    if (target) {
        itens.style.display = 'none'
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = target.offsetTop - headerHeight - 15;
        window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

let btnColection = document.getElementById('btnCol');   
btnColection.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target.offsetTop != 0){
        document.getElementById('menu-span').classList.add('icon-op');
    }else{
        document.getElementById('menu-span').classList.remove('icon-op');
    }
    if(target){
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = target.offsetTop - headerHeight - 15;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
});

// 1. Seleciona todas as seções que você quer monitorar
const sections = document.querySelectorAll('.monitorada');

// 2. Cria o observador
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // 3. Verifica se a seção está visível (isIntersecting)

    if (entry.isIntersecting) {      
      if(entry.target.id == 'principal'){
        document.getElementById('menu-span').classList.remove('icon-op');
      }else{
         document.getElementById('menu-span').classList.add('icon-op');
        }

      // Opcional: Adicionar/remover classes ativas
      sections.forEach(s => s.classList.remove('active'));
      entry.target.classList.add('active');
    }
  });
}, {
  // Opções: 0.35 significa que 35% da seção precisa estar visível
   threshold: .35
});

// 4. Aplica o observador a cada seção
sections.forEach((section) => {
  observer.observe(section);
});
