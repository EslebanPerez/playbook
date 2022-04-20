//Ejemplo 7: uso de filter para filtrar una lista de elememtos
const countries = ['Mexico', 'Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland', 'Haiti', 'Australia']
const countriesContainLand = countries.filter((country) => country.includes('land'))

console.log('Ejemplo 7: Uso de Filter para filtrar una lista de elementos')
console.log(countriesContainLand)

const countriesEndsbyia = countries.filter((country) => country.endsWith('ia'))
console.log('\nEjemplo 7: Paise que terminan en ia')
console.log(countriesEndsbyia)

const countriesWithX = countries.filter(country => country.includes('x'))
console.log(countriesWithX);
