// Ejemplo 12: Uso de find en una lista de objetos
const score = [
    {name: 'A', score:75 },
    {name: 'K', score:80 },
    {name: 'E', score:50 },
    {name: 'M', score:85 },
    {name: 'J', score:100 },
]
//Find devuelve el primer valor que que encuentra y cumple con la condicion
const score_greater_than_80 = score.find( (user) =>  { console.log(user); return user.score > 80} )
console.log('Ejemplo 12: Name score found: '+ score_greater_than_80.name)
