function clicou(){
    alert("Obrigado por clicar");
}

var  numero = Number.parseInt(prompt("Digite o primeiro número: "));

var numero_2 = Number.parseInt(prompt("Digite o segundo número: "));

function soma(numero, numero_2){
   return numero + numero_2;
}

function resultado(){
    return document.getElementById("resultado").innerHTML = soma(numero, numero_2);
}


function redirecionar(){
    window.open("https://www.draft5.gg");
}