// EJERCICIO 1
function sumarTodos(...numeros) {
  console.log(numeros);
  return numeros.reduce((acum, num) => acum + num, 0);
}

console.log(sumarTodos(1, 2, 3, 4))


// EJERCICIO 2

function addOnlyNums(...args) {
  return args.filter(arg => typeof arg === 'number')
    if (arg === "number") {
        arg += arg;
        
    }
  }

  console.log(addOnlyNums(1, 2, 3))

// EJERCICIO 3


function countTheArgs(...args) {
  return args.length
}

console.log(countTheArgs("perro", "gato"))

// EJERCICIO 4


const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

function combineTwoArrays(array1, array2) {
  return [...array1, ...array2];
}

console.log(combineTwoArrays(array1, array2))

// EJERCICIO 5

function onlyUniques(...args) {
    return [[...new Set(args)]]
}

console.log(onlyUniques(1, 2, 3, 3, 3, 3))

// EJERCICIO 6


function combineAllArrays(...arrays) {
  return [].concat(...arrays);
}

console.log(combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1]))

// EJERCICIO 7

//me he vuelto loco haciendo otra cosa y he puesto la solucion


function sumAndSquare(...numeros) {
  return numeros
    .map(numero => numero ** 2)
    .reduce((acumulador, numero) => acumulador + numero, 0);
}

// let resultado = 0
// for (let numero of numeros) {
//     let cuadrado = numero ** 2; 
//     sumaTotal += cuadrado;   
//   }

//   return sumaTotal;ç

//   console.log()