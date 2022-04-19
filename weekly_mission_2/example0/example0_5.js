console.log('Example 5')
console.log('*Crear un objeto que reciba parámetros*')

const mypet={
    name:'Woopa',
    sayHello: function(yourpet){
        console.log(`${this.name} dice hola a tu mascota ${yourpet}`)
    },

    sayBye: function(yourpet){
        console.log(`${yourpet} dice adiós a ${this.name}`)
    }
}

yourpet = 'Toby'
mypet.sayHello(yourpet)
mypet.sayBye(yourpet)

