// Ejemplo 9: Herencia entre dos clases
class Developer{
    constructor(name, mainLang, stack){
        this.name = name
        this.mainLang = mainLang
        this.stack = stack
    }
    get getName(){
        return this.name
    }
}
console.log('Ejemplo 9: Herencia entre dos clases')
const EslebanDev = new Developer('Esleban', 'js', ['elixir', 'groovy', 'lisp'])
console.log(EslebanDev)

//Se usa la palabra extend para indicar las heredarás las propiedades de la clase Padre (Developer) en la clase definida
// Podemos definir una clase vacía y reusar todos los componentes de la clase padre

class LaunchXStudent extends Developer{

}
console.log('Objeto Heredado');
const carloLaucnXDev = new LaunchXStudent('Carlo', 'js', ['elixir','groovy', 'lisp'])
console.log(carloLaucnXDev)
console.log(carloLaucnXDev.getName) // getter de la clase padre rehusada en la clase hija
