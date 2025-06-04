var num1;
var num2;
var num3;

function entrada(){
    //entrada de dados - inputs
    num1 = document.getElementById("n1").value;
    num2 = document.getElementById("n2").value;
}

function converter(){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
}

function somar(){
   //entrada de dados - inputs
   entrada();
   converter();
   //processamento, soma
    total = num1 + num2
   //saída, escrever na tela
   tela = document.getElementById("resultado");
   tela.innerHTML = total;
}

function subtrair(){
   entrada();
   converter();
   //processamento, soma
    total = num1 - num2
   //saída, escrever na tela
   tela = document.getElementById("resultado");
   tela.innerHTML = total; 
}

function multiplicar(){

   entrada();
   converter();
    total = num1 * num2
   //saída, escrever na tela
   tela = document.getElementById("resultado");
   tela.innerHTML = total; 
}

function dividir(){
   entrada();
   converter();

    total = num1 / num2
   //saída, escrever na tela
   tela = document.getElementById("resultado");
   tela.innerHTML = total;
 }

   function limpar(){
 //entrada de dados
 num1 = document.getElementById("n1").valeu="";
 num2 = document.getElementById("n2").valeu="";
 tela = document.getElementById("resultado");
 tela.innerHTML = "";
}


  