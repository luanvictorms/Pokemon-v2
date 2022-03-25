const menuJogar = document.getElementById("container-jogar")
const menuJogadores = document.getElementById("container-jogadores")
const menuSobre = document.getElementById("container-sobre");
const pokebola = document.getElementById("pokebola");
const allStar = document.getElementById("allstar");
const ContainerFlex = document.getElementById("group-um"); 


function jogar() {
    menuJogar.classList.add("hide");
    menuJogadores.classList.remove("hide");
}

function voltar() {
    menuJogar.classList.remove("hide");
    menuJogadores.classList.add("hide");
    menuSobre.classList.add("hide");
    pokebola.classList.remove("hide");
    allStar.classList.remove("hide");
    ContainerFlex.classList.remove('group-sobre')
    allStar.classList.add('all-star')

}

function sobre() {
    menuJogar.classList.add("hide");
    menuSobre.classList.remove("hide");
    pokebola.classList.add("hide");
    allStar.classList.add("hide");
    allStar.classList.remove('all-star');
    ContainerFlex.classList.add('group-sobre');
    
}