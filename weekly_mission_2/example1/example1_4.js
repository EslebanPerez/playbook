// Ejemplo  4: Uso de map para recorrer los elementos de una lista y crear una nueva lista 
/*  Arrow function and explicit return
const  modifielArray = arr.map((element,index) => element)
*/

console.log('Ejemplo 4: Imprimiendo la lista de elementos al cuadrado')
const numbers = [1, 2, 3, 4, 5]
const numbersSquare = numbers.map(function(num) {return num*num})
console.log('Lista original')
console.log(numbers)
console.log('\nPrimer método con map')
console.log(numbersSquare)
/**Tambien se puede escribir la funcion como fat arraw */
console.log('\nSegundo metdo de usar map')
const numbersSquare2 = numbers.map((num) => {return num*num})
console.log(numbersSquare2)

console.log('\n******************************************')

const parejas = numbers.map(num => [num, num])
console.log(parejas)

console.log('\n******************************************')

const mascotas = [
    {nombre: 'Pepito', edad: 2,tipo: 'perro',},
    {nombre: 'Pepita', edad: 3,tipo: 'perro',},
    {nombre: 'Pepo', edad: 4,tipo: 'perro',},
    {nombre: 'Pepa', edad: 5,tipo: 'gato',},
]

function promedio(numero){
    suma = 0;
   numero.forEach( x => { suma += x } );
   return suma / numero.length;
}

const edades = mascotas.map(x => x.edad)
let resultado = promedio(edades)

console.log(`Las edades de las mascotas ${edades}`)
console.log(`El promedio de las edades ${resultado}`)


