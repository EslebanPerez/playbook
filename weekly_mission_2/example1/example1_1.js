//Ejemplo 1 : for Each para imprimir elementos de una lista

console.log('Ejemplo 1: Imprimiendo elementos de una lista')
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num))

const nombres = ['Juan', 'Pedro', 'Maria', 'Juana', 'Jorge'];
nombres.forEach((element, index) => console.log(element, index))