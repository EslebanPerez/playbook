
console.log('*Ejemplo 3*')
console.log("*Crear un objeto con propiedades diferentes*")

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
console.log("Hola soy el explorer " + explorer.name)
console.log(`\nOtra manera de acceder a la propiedad`)
console.log(`Hola soy el explorer ${explorer.name}`)
