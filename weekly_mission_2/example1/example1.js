const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

   console.log(explorers)

console.log("Ejercicio 2.1")
//Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH

explorers.forEach(explorer => {console.log(explorer.name)})

console.log("Ejercicio 2.2")
//Imprime el stack de cada explorer, usa FOR EACH
explorers.forEach(item => {console.log(item.stack)})

console.log("Ejercicio 2.3")
const explorer_stacks = explorers.map(my_explorer => my_explorer.stack)
console.log(explorer_stacks)

console.log("Ejercicio 2.4")
const explorer_with_js = explorers.filter(my_explorer => my_explorer.stack.includes("js"))
console.log(explorer_with_js)