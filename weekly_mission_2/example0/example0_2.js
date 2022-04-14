console.log("2. Creación de un objeto con propiedades")

const explorer = {
    name:"Esleban",
    edad: 25,
    mission: "NodeJs",
    stack:['NodeJs', 'ReactJs', 'AngularJs'],
    blog:{ //Esto es un objeto anidado
        url: "github.com/eslebanperez/blog",
        post: 5, 
    } 

}

console.log(explorer)
console.log("Accediendo a las propiedades del objeto")
console.log("Hola soy el explorer " + explorer.names)


// console.log("Ejemplo3: Objeto con métodos")
// const ajolonauta = {
//     name : "Woopa",
//     mission: "Node JS",
//     sayHelooExplorers:function(){
//         console.log("Soy el ajolonauta, qué onda!")
//     },
//     tellMeMore: function(){
//          return `Ajolonauta: ${this.name}` //Accede al contexto de este objeto
//     }
// }
// console.log("Ajolonauta")
// ajolonauta.sayHelooExplorers()
// console.log(ajolonauta.tellMeMore())
//Structre of interpretaction