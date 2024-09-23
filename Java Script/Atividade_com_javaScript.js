/*1)Faça um código que só aceite as senhas "123", "adm" ou "sec" e dê a resposta "Bem-vindo!", senão, como padrão, a
resposta será "Senha Incorreta" (Faça com switch)*/
var senha = "adm"
switch(senha){
case 123:
case 'adm':
case 'sec':
console.log("Bem vindo!")
    break;
default:
console.log("Senha Incorreta")
break;
}

//2)Com um número, informar se ele é positivo, negativo ou neutro (Zero) (usando if else)
var num = 12
if (num > 0){
console.log("Número positivo");
}
else if (num < 0){
console.log("Número negativo");
}
else if (num == 0){
console.log("Número neutro");
}
else {
console.log("ERRO");
}

//laço de repetição com for
for(var i = 0 ; i <= 10; i++){
    console.log(i)
}


/*3)laço com do while. Ele vai pedir o nome pelo menos uma vez. Até que a pessoa não escrever o nome = carlos, 
o sistema vai continuar executando
*/
var c;
do{
    c = prompt("Diga seu nome")
console.log("0"+c+" Está tentando entrar")
} while (c!= "carlos" )



//4)Escrever um algoritmo qque lê 10 valores e conte quantos destes valores são negativos, escrevendo esta informação
var negativo = 0
var num 
for (let i = 0; i<10; i++){
 num = prompt("Digite um número")
if (num < 0 ){
	negativo++
	}

}
console.log(negativo)


// O mesmo código de cima usando o while

var negativo = 0
var num
var i = 0
while(i<5){
    num = prompt ("Digite um número")
    if (num < 0){
        negativo++
    }
    i++
}
console.log("quantidade de negativos: "+ negativo)



//5)Escreva um algoritmo quie leia 5 valores e encontre o maior e o menor deles. Mostre o resultado desta informação
var aux = prompt("Digite um número")
var menor = aux
var maior = aux
for (var j=0; j<4;j++){
    aux = parseInt(prompt("Digite um número"))
    if (aux>maior){
        maior = aux
    } else if (aux<menor){
        menor = aux
    }
} console.log("Maior: "+maior+" Menor: "+menor)


/* 6)Chico tem 150 cm e cresce 2 centímetros por ano, enquato Zé tem 130cm e cresce 3 centímetros por ano. Construa um algoritmo que 
calcule e imprima quantos anos serão necessários para que Zé seja maior que Chico.
*/

var chico = 150 
var ze = 130 
anos = 0

while(chico>=ze){
    chico+=2 //chico=chico+2
    ze+=3    //ze=ze+3
    anos++   //anos=anos+1 ou anos+=1
} console.log(anos)


//7)Crie um array de 5 posições e com um laço, imprima cada valor dele

//usando for:
var array1 = ["María","Josué","João","Luís","Amarilton"]
for (var i=0; i < array1.length; i++){
    console.log(array1[i])
}

//usando while:
var array1 = ["María","Josué","João","Luís","Amarilton"]
var i = 0
while(i<array1.length){
    console.log(array1[i])
    i++
}

//Usando o forEach: 
var array1 = ["María","Josué","João","Luís","Amarilton"]
array1.forEach(function imprime (item) {
    console.log(item)

})



//8)Percorra um array e conte quantos  valores positivos têm nele
var array2 = [1,-2,-4,6,7]

var valoresPositivos = 0

for (var i=0; i < array2.length; i++){
    if (array2[i] > 0){

        valoresPositivos++

    }
}   
console.log(i)

/*9)Com uso de prompt, mostre o array para o usuário e pegue os dados: posição, quantidade e valor. 
Use o splice e mostre o alert o novo array.*/
var frutas = ["Mação","Limão","Tomate","Laranja","Banana"]
var posicao = prompt ("Escreva a posição: "+ frutas)
var quantidade = prompt("quantidade: ")
var valor = prompt("Valor: ")
frutas.splace(posicao,quantidade,valor)
alert(frutas)


//10) Crie um script para uma contagem regressiva de 10 a 0 usando os laços for, while e do while

//Usando for::
for (var c = 10; c >= 0; c--) {
    console.log(c);
}

//usando while::
var c = 10;
while(c >= 0){
    console.log(c)
c--;
}

//usando o Do While::
var c = 10;
do {
    console.log(c)
    c--;
} 
while ( c >= 0 );