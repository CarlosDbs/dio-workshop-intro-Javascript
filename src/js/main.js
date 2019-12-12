/**
 * @author Carlos Eduardo B Souza
 * @version 0.0.1
 * Desenvolvido em 12/12/2019
 */

alert("Meu primeiro JS Externo");

var nome = "Fallen";
var equipe = "M1br";
var funcao = "AWP";
var idade = 28;
var inicioJogo = 12;

alert("Bem Vindo " + nome);
alert("O player " + nome + " tem " + idade + " anos!");
alert("O player jogou CS pela primeira vez com " + inicioJogo + " e hoje tem " + idade + " anos!!!");


//Somando idades
alert(idade + inicioJogo);

//Problema ao concaternar e somar
alert("Somando idades " + Number.parseInt(idade + inicioJogo));


//Strings
/**
 * Nestes trechos iremos manipular algumas strings
 */
var clubeBrasileiro = "Flamengo";
var clubeIngles = "Liverpool";

 var frase = "O " + clubeBrasileiro + " Ganhará O Mundial De Clubs De 2019";

 console.log(frase);

 console.log(frase.replace(clubeBrasileiro, clubeIngles)); 

 //Alterando o Case das Strings
 console.log(frase.toUpperCase());
 console.log(frase.toLowerCase());


 