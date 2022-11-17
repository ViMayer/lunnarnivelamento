// DESTAQUES
const cardTxt = document.querySelectorAll(".cardTxt-js");

cardTxt.forEach((item) => {
    item.addEventListener("click", cardTexto);
});

function cardTexto(event) {
    if (!this.classList.contains("active")){
        document.querySelector(".cardTxt-js.active").classList.toggle('active');
        this.classList.toggle('active');
    } 
}

// BOTAO FRETE COMPRAR 

const infoCard = document.querySelectorAll(".info-js");

infoCard.forEach((item) => {
    item.addEventListener("mouseleave", infoComprarHide);
    item.addEventListener("mouseover", infoComprarShow);
});

function infoComprarHide(event) {
    this.classList.remove('active');
}

function infoComprarShow(event) {
    if (!this.classList.contains("active")){
        this.classList.toggle('active');
    }
}

// HEADER CATEGORIAS

const catBtn = document.getElementById("head-cat-js");
const catCont = document.querySelector(".categorias-container");
const shadow = document.querySelector(".shadow");

// REMOVER AO TIRAR MOUSE DA AREA NAVEGACAO
shadow.addEventListener("click", () => {
    catCont.classList.remove("categorias-active");
    catBtn.classList.remove("active");
});

catBtn.addEventListener("click", () => {
    catBtn.classList.toggle("active");
    catCont.classList.toggle("categorias-active");
});


// DEPARTAMENTO BOUNCE

const depImg = document.querySelectorAll(".depImg-js");

depImg.forEach((item) => {
    item.addEventListener("mouseover", imgBounce);
    item.addEventListener("mouseleave", imgBounceOff);
});

function imgBounce(event) {
    if (this.classList.contains("bounceOff")){
        this.classList.remove('bounceOff');
    } 
    if (!this.classList.contains("bounce")){
        this.classList.toggle('bounce');
    } 

}

function imgBounceOff(event) {
    this.classList.remove('bounce');
    this.classList.toggle('bounceOff');
    setTimeout(() => {
        this.classList.remove("bounceOff");
      }, 1000);
}

// SEARCH
const pesquisa = document.querySelector(".pesquisa");
const logo = document.querySelector(".logo");

function searchToggle(){
    pesquisa.classList.toggle('active-search')

    if (!logo.classList.contains("active-search")){
        logo.classList.add('active-search')
    }else {
        setTimeout(() => {
            logo.classList.remove("active-search");
          }, 1000);
    }
}