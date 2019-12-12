var erro = 0;
let idade;
do
{
    idade = prompt("Qual a sua idade ?");

    if  (  idade >= 18  )
    {
        alert("Maior de idade");

    }else
        {
            alert("Menor de idade");
            erro++;
        }
}while (erro < 3 && idade != 18);
 


for (var cont = 1; cont <= 5; cont++){
    alert(cont);
}

var data = new Date();

console.log(data);//Imprimindo data atual
    

