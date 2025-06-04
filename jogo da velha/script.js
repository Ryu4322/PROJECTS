//variavl
var jogador = "x";

function jogar(celula){}
//uma funcao que execulta
//celula e um parametro,  o valor da celula clicada e passada para a funçao
function jogar(celula){

    // se  celula tiver vazia podera marcar
    // == igual
    // ! diferente
    // > maior
    // < menor

    if(celula.innerHTML == ""){
// escrever x ou o
celula.innerHTML = jogador;

if(jogador == "x"){
     jogador = "o";
     celula.style.backgroundColor = "black"
     celula.style.color + "red"
} else {
    jogador ="x"
}
}

}

function reinciar(){
    //criar lista com todos quadrado
    var celulas = document.querySelectorAll("td")

    celulas[2] = "";

    for(var contador=0; contador <= 9; contador ++){
        celulas[contador].innerHTML = "";
        celular[contador].stye.backgroundColor = "";
    }
}