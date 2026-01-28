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