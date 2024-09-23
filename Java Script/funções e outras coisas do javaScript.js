//COMO CRIAR UMA FUNÇÃO EM JAVA SCRIPT:

//EXEMPLO 1
function multiplicação(a,b){
	return a*b 

}
var num1 = 18
var num2 = 80
var res = multiplicação(num1,num2)

console.log(res)
//ou
console.log(num1,2)



//EXEMPLO 2
var intervaloNatural = function (n) {
	for(let i = 0; i<=n;i++){
	console.log(i)
	}
}

//outro jeito de criar funções

let isNeg = (n) => (n<0) ? true: false
isNeg(6)
isNeg(-6)

//FUNÇÕES CONSTRUTORAS: exemplo

function carro(marca, modelo, ano){
this.marca = marca;
this.modelo = modelo;
this.ano = ano;
}

let carro = new Carro ('volkswagen','Camaro', 2018);
console.log(carro)
