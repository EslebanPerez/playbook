// Ejemplo 7: Setter para modificar los atributos del objeto

class MissionCommander{
    constructor (name, mission){
        this.name = name;
        this.mission = mission;
        this.students = 0;
        this.lives = 0;
    }
    get getStudents(){
        return this.students;
    }
    get getLives(){
        return this.lives;
    }
    get getMission(){
        return this.mission;
    }
    set setStudents(students){
        this.students = students;
    }
    set setLives(lives){
        this.lives = lives;
    }
}
console.log('Ejemplo7: Setters para modificar los atributos del objeto')

const missionComomanderNode = new MissionCommander('Carlo', 'NodeJS')
console.log('Students: '+ missionComomanderNode.getStudents); 
console.log('Mission: '+ missionComomanderNode.getMission); 
console.log('Lives: '+ missionComomanderNode.getLives); 

missionComomanderNode.setLives = 5 
missionComomanderNode.setStudents = 100

console.log('\nStudents: '+ missionComomanderNode.getStudents); 
console.log('Mission: '+ missionComomanderNode.getMission); 
console.log('Lives: '+ missionComomanderNode.getLives); 