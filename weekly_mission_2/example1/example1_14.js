// Ejemplo14: Uso de some, este método regresa la psocición del primer elemento que cumpla con la validación que indiques.
// lista de elementos
const bools = [true, true, true, true]
// Uso de Some para ver si al menos uno de los elementos es false
const areSomeTrue = bools.some((b) =>  b === false)
console.log("Ejemplo 14: Alguno de los elementos en el array es false: " + areSomeTrue) //true
