class explorer{
    constructor (name, username, mission){
        this.name = name
        this.username = username
        this.mission = mission
    } 
    getNameandUserName(){
        return`Explorer ${this.name}, User Name: ${this.username}, Mission: ${this.mission}`
    }
}
class Viajero extends explorer{
    constructor (name, username, mission, cycle){
        super(name,username, mission) //  SUPER nos ayudará a llamar el constructor padre 
        this.cycle = cycle //Agregamos este atributo de la clase Viajero, es exclusivamente de esta clase y no de la clase padre
    }

    getGeneralInfo(){
        let nameAndUserName = this.getNameandUserName() //llamamos el método de la clase padre
        //nameAndUserName es una variable de esta fucnion, no necesita usar this para referenciarla.
        return `${nameAndUserName}, Ciclo: ${this.cycle}`
    }
}
const viajero1 = new Viajero('Esleban', 'LaunchX', 'Node JS', 'Abril 2022')
console.log('Ejemplo 10: Overriding methods')
console.log(viajero1)
console.log(viajero1.getNameandUserName()) // Método de la clase padre
console.log(viajero1.getGeneralInfo()) //Método de la clase hija