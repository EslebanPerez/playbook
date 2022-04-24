const woopa_obj={
    name:"Woopa",
    mission: 'NodeJS',
    age: 12,
    color: 'pink'
}
/** Crear una clase
 * 1. Como crear una clase
 * 2. Como instanciar un objeto
 * 3. Instanciar varios Objetos de una misma clase
 * 4. Como agregar el constructor para guardar atributos
 * 5. Crear métodos
 */
class Ajolonauta{
    constructor(name,mission,age,color){
        this.name = name;
        this.mission = mission;
        this.age = age;
        this.color = color;
    }
    sayHello(){
        return` ${this.name} is saying: "Hello World!"`;
    }

}

class pokemon{
    constructor(name){
        this.name = name;
    }
}
const pikachu = new pokemon('pikachu');
console.log(pikachu);

const woopa = new Ajolonauta('Woopa', 'Node JS', 1, 'Pink'); //Instanciar
console.log(woopa);

const wooper = new Ajolonauta('Woopper', 'Java', 1, 'Blue');
console.log(wooper.name);

//Objeto de JS
const woopa_obj_js ={};
console.log(woopa_obj_js);