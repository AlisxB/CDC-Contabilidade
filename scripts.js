$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.header').addClass("sticky");
        } else {
            $('.header').removeClass("sticky");
        }
    });
});

class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();


var typed = new Typed(".animation", {
    strings:["Profissionalismo", "Ética", "Competência", "Transparência"],
    typeSpeed:120,
    backSpeed:60,
    loop:true
})

//Temporizador Banner
let time = 5000,
    currentimageIndex = 0,
    images = document.querySelectorAll("#slider img")
    max = images.length;

//Troca de Imagem
function pxImage(){

    images[currentimageIndex].classList.remove("selected")

    currentimageIndex++
    if(currentimageIndex >= max)
    currentimageIndex = 0
    images[currentimageIndex].classList.add("selected")
}

//Chamada de Função para Banner
function start(){
    setInterval(() => {
        pxImage()
    }, time);
}

//Carregamento de Evento
window.addEventListener("load", start)
window.onload = function(){
    var largura = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    
}

function redirecionamento_links(url){
    window.open(url);
}
function redirecionamento_telefone(telefone){
    window.open('tel:' + telefone + '_blank');
}
function redirecionamento_email(email){
    window.open('mailto:'  + email)
}

$('.nav-list a').click(function(e){
    e.preventDefault();
    var id = $(this).attr('href');

    var ajuste = 0;
    if(id == "#sessao-sobre"){
        ajuste = 80;
    }
    if(id == "#sessao-contatos"){
        ajuste = -180;
    }
        targetOffset = $(id).offset().top -20;
    $('html, body').animate({
        scrollTop: targetOffset - ajuste
    }, 500);
});

$(document).ready(function(){
    $(".footer-col a").click(function(b){
        b.preventDefault();
        var targetAnchor = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(targetAnchor).offset().top
        }, 500);
    });
});