/**
 * Función de primer orden
 * Es toda función que puede ser tratada como una variable.
 * Esta variable puede:
 * guardar una función
 * ejecutar un función
 * ser enviada a otras funciones como parametro
 */

function sum(a,b){
	return a+b
};

let res = sum(1,2);
console.log(res);

const fSum = sum;
res = fSum(5,6)
console.log(res);

/**
 * Función de orden superior
 * Es aquella función que puede recibir como parametros otras funciones
 */

function operation(fn, a, b) {
	console.log('Se hace algo');
	console.log(fn(a,b))
}

operation(sum, 10, 20)

// foreach
const names = ['name1', 'name2', 'name3'];
names.forEach(name => console.log(name));

// map
const namesUpper = names.map(name => name.toUpperCase());
console.log(namesUpper, names);

// reduce
const numbers = [5,4,7,1,10];
const total = numbers.reduce((acc, number) => acc + number, 0)
console.log(total);

// Programación orientada a objectos
// clase

 class Drink {
	constructor(name) {
		this.name = name
	}

	info() {
		return `The drink is: ${this.name}`
	}
 }

 const drink = new Drink('agua');
 console.log(drink.info());

 // functional
 function Drink2(name) {
	this.name = name;
	this.info = function() {
		return `The drink2 is: ${this.name}`
	}
 }

 const drink2 = new Drink2('agua2');
 console.log(drink2.info());

 // Herencia
 class Beer extends Drink {
	constructor(name, alcohol) {
		super(name);
		this.alcohol = alcohol;
	}
	info(){
		return `${super.info()} with alcohol ${this.alcohol}`
	}
 }

 const beer = new Beer('erdinger', 8.5);
 console.log(beer.info());