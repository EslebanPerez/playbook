//Ejemplo 9: Uso del reduce

const number = [1, 2, 3, 4, 5]
const result_of_reduce = number.reduce((acc, element) => acc + element, 0)
console.log('Ejemplo 9: Uso de reduce para calcular la suma de los elementos de una lista')
console.log(result_of_reduce)