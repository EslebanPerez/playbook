// Ejemplo 10 : Uso de every nos ayuda a validar todos los elementos de una lista, si todos cumplen con la validación que indiques te regresa true, de lo contrario false
const names = ['Explorer 1', 'Explorer 2', 'Explorer 3', 'Explorer 4', 5]
const areAllStr = names.every((name) => typeof name === 'string')
console.log('Ejemplo10: Son todos los nombres string '+areAllStr)