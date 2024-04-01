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