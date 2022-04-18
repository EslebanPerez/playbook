console.log("POO")

//Objeto de js
const woopa_obj = {
    name: "Woopa",
    mission: "Node JS",
    age: "12",
    color: "pink"
}
//Crea una clase
/**
 1. Como creat una clase.
 2. Como instanciar un objeto de una clase.
 3. Instanciar varios objetos de una misma clase/
 4. Como agregar el constructor para adjuntar atributos.
 5. Métodos
 */
class Ajolonauta{
    constructor(name, mission, age, color){
        this.name = name;
        this.mission = mission;
        this.age = age;
        this.color =color;
    }
    sayHello(){
        return `Hey! Hello I'm ${this.name}!`
    }

}
//Objeto de JS
const woopa_obj_js = {}
console.log(woopa_obj_js)


const woopa = new Ajolonauta('Woopa', 'Node JS', 18, 'Pink') //Instanciar un objeto
console.log(woopa)
console.log(woopa.sayHello())

const wooper = new Ajolonauta('Wooper', 'Java', 10, "Blue")
console.log(wooper.name)




