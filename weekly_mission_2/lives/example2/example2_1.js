const woopa_obj={
    name:"Woopa",
    mission: 'NodeJS',
    age: 12,
    color: 'pink'
}

class Ajolonauta{
    constructor(name,mission,age,color){
        this.name = name;
        this.mission = mission;
        this.age = age;
        this.color = color;
    }
    getName(){
        return this.name;
    }
    getMission(){
        return this.mission;
    }
    getAge(){
        return this.age;
    }
    getColor(){
        return this.color;
    }

}

const woopa = new Ajolonauta('Woopa', 'Node JS', 1, 'Pink'); //Instanciar
console.log(woopa);

const wooper = new Ajolonauta('Woopper', 'Java', 1, 'Blue');
console.log(wooper);

//Objeto de JS
const woopa_obj_js ={};
console.log(woopa_obj_js);