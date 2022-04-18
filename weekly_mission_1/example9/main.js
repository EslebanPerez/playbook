const Pokemon = require('./pokemon')

const pikachu = new Pokemon("pikachu")
const bulbasaur = new Pokemon("bulbasaur")
const squirtle = new Pokemon("squirtle")
const charmander = new Pokemon("charmander")

pikachu.sayHello()
pikachu.sayMessage("Heey! I'm Pikachu!")

bulbasaur.sayHello()
bulbasaur.sayMessage("Heey! I'm Bulbasaur!")

charmander.sayHello()
charmander.sayMessage("Heey! I'm Charmander!")

squirtle.sayHello()
squirtle.sayMessage("Heey! I'm Squirtle!")
