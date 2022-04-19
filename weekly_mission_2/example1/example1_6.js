//Ejemplo 6: Uso de map para convertit y mostrar las primeras tres letras de los nombres de una lista a mayúsculas
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Icelan']
const countriesFirstThreeLetters = countries.map(country => country.toUpperCase().slice(0,3))
//El método slice obtiene solo la longitud marcada del string

console.log('Ejemplo 6: Uso de map para convertir y mostrar las primeras tres letras de los nombres de una lista a mayúsculas')
console.log(countriesFirstThreeLetters)
console.log(countries)

