//Ejemplo 6: Getters para acceder a los atributos del objeto

class Ajolonauta{
    constructor(name, age, stack){
        this.name = name
        this.age = age
        this.stack = stack
        this.excercisesCompleted = 0
        this.exercises_ToDo = 99
    }

    //Podemos acceder a los atributos de esta clase
    get getExercisesCompleted() {
        return this.excercisesCompleted
    }
}
console.log('Ejemplo 6: Getter para acceder a los atributos del objeto');
const woopa = new Ajolonauta('Woopa', 1, [])
console.log(woopa.getExercisesCompleted)