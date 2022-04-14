console.log("2) Creacion de un objeto con propiedades")

const myObject = {
    name:"Esleban",
    edad: 25,
    mission: "NodeJs",
    stack: ["js", "node", "react", "vue"],
    blog:{
        url: "github.com/eslebanperez/blog",
        post: 5, 
    } //Esto es un objeto

}

console.log(myObject)
console.log("Accediendo a las propiedades del objeto")
console.log(myObject.name)
console.log(myObject["namess"])


console.log("Ejemplo3: Objeto con métodos")
const ajolonauta = {
    name : "Woopa",
    mission: "Node JS",
    sayHelooExplorers:function(){
        console.log("Soy el ajolonauta, qué onda!")
    },
    tellMeMore: function(){
         return `Ajolonauta: ${this.name}` //Accede al contexto de este objeto
    }
}
console.log("Ajolonauta")
ajolonauta.sayHelooExplorers()
console.log(ajolonauta.tellMeMore())
//Structre of interpretaction