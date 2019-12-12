/**
 * @author Carlos Eduardo B Souza
 * @version 0.0.1
 * Desenvolvido em 12/12/2019
 */


//Criando um Array de Frutas
var listaFrutas = ["Banana", "Maça", "Pera", "Uva"];


console.log(listaFrutas);

//Imprimindo a primeira fruta
console.log(listaFrutas[0]);

//Acrescentando um novo elemento
listaFrutas.push("Laranja");

console.log(listaFrutas);

//Removendo ultimo elemento
listaFrutas.pop();

console.log(listaFrutas);

listaFrutas.pop();
console.log(listaFrutas);

//Verificando o tamanho da lista
console.log(listaFrutas.length);

console.log(listaFrutas.toString()[0]);//Imprimi B

console.log(listaFrutas.join("-"));


//Criando Dicionários

var carros = { nome : "Golf", marca: "Volksvagem"};

console.log(carros.nome);
console.log(carros);
