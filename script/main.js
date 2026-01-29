function mudouTamanho(){
    let hamburgerMenu = document.querySelector('span.icon')
    if(window.innerWidth >= 700){
        itens.style.display = 'flex'
        hamburgerMenu.style.display = 'none'
    
    }else{
        itens.style.display = 'none'
        hamburgerMenu.style.display = 'flex'

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
//Adiciona a indicação visual de qual seção está ativa
    navLinks.forEach(link =>{
    link.classList.remove('pagina-ativa')
    })
    if(this.classList[1] != 'pagina-ativa'){
        link.classList.add('pagina-ativa');
        console.log('ok')
    }

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
    navLinks.forEach(x =>{
    x.classList.remove('pagina-ativa')
    })
    navLinks[1].classList.add('pagina-ativa')

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

//Seleciona todas as seções que você quer monitorar
const sections = document.querySelectorAll('.monitorada');

//Cria o observador
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
//Verifica se a seção está visível (isIntersecting)
    if (entry.isIntersecting) {      
      if(entry.target.id == 'principal'){
        document.getElementById('menu-span').classList.remove('icon-op');
      }
      else{
         document.getElementById('menu-span').classList.add('icon-op');
        }

//Adiciona e remove classes ativas das seções
    sections.forEach(s => s.classList.remove('ativo'));
    entry.target.classList.add('ativo');

    
        if(entry.target.id){
            console.log()
        }

    }
  });
}, {
  // Opções: 0.44 significa que 44% da seção precisa estar visível
    threshold: .44
});

//Aplica o observador a cada seção
sections.forEach((section) => {
  observer.observe(section);
});

//Carrossel de imagens
const elemSlides = document.querySelector('.slides');
const elemImages = document.querySelectorAll('.slides img.foto');
const elemBotaoEsquerdo = document.querySelector('.esquerda');
const elemBotaoDireito = document.querySelector('.direita');
const tamanhoLista = elemImages.length -1;

let index = 0;

elemBotaoEsquerdo.addEventListener('click', () =>{
    index--;
    if(index < 0){
        index = tamanhoLista
    }
    atualizarCarrossel();
});

elemBotaoDireito.addEventListener('click', () =>{
    incrementarIndex();
    atualizarCarrossel();
});

const incrementarIndex = () =>{
    index++;
    if(index > tamanhoLista){
        index = 0
    }
}

const atualizarCarrossel = () =>{
    elemSlides.style.transform = `translateX(-${index * 100}%)`
}

setInterval(() =>{
    incrementarIndex()
    atualizarCarrossel()
}, 5000)