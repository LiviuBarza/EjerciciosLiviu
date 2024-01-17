/* Iteración #1: Buscar el máximo
Completa la función que tomando dos números como argumento devuelva el más alto. */

function sum(numberOne , numberTwo) {
    if (numberOne > numberTwo) {
        console.log(`El numberOne (${numberOne}) es mayor que el numberTwo (${numberTwo})`);
    }
    else{
        console.log(`El numberTwo (${numberTwo}) es mayor que el numberOne (${numberOne})`);
    }
}
sum(2, 3);

/* Iteración #2: Buscar la palabra más larga
Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
Puedes usar este array para probar tu función: */

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
    
    let palabraLarga = avengers[0];

    for (let i = 0; i < avengers.length; i++) {
        const palabraActual = avengers[i];

        if (palabraActual.length > palabraLarga.length) {
            palabraLarga = palabraActual
        }
        
    }

    return palabraLarga
} 

findLongestWord(avengers)

console.log(findLongestWord(avengers));

/* Iteración #3: Calcular la suma
Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz. 
Puedes usar este array para probar tu función: */

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {

    for (let i = 0; i < numbers.length; i++) {
        let resultado = numbers[i] + 1;
    }

    console.log(resultado);
}

sumAll(numbers)