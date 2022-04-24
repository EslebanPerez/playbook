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

// Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
console.log('\n*** Uso forEach - Listar Explorers ***')
const explorerNames = explorers.forEach(explorer => console.log(explorer.name)) 


// Imprime el stack de cada explorer, usa FOR EACH
console.log('\n***Uso forEach - Listar Stacks de explorers ***')
const explorerStack = explorers.forEach( explorer => console.log( 'Name: ' + explorer.name + ' Stack: ' + explorer.stack))

// Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
console.log('\n*** Uso map - Listar Stacks de explorers con MAP***')
const explorerStackMap = explorers.map( (explorer) => explorer.stack)
console.log(explorerStackMap)

// Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
console.log('\n*** Uso de Filter - Explorer que tenga js en sus stacks ***')
const findStack = explorers.filter( (explorer) =>  explorer.stack.includes('js'))
console.log(findStack)

// Busca el primer explorer que sea de la CDMX, usa FIND
console.log('\n*** Uso de find - Explorer que vive en la CDMX ***')
const findCDMX = explorers.find(explorer => explorer.city === 'CDMX')
console.log(findCDMX.name)

// Obtén la suma de todos los exercises_completed, usa REDUCE
console.log('\n*** Uso de Reduce - Suma de exercises_completed***')
const sumExersices = explorers.reduce((acc, explorer ) => acc = acc + explorer.exercises_completed ,0)
console.log(sumExersices)

// Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
console.log('\n*** Uso de Some - Valida si exercicesFinished en fronted es true en almenos uno***')
const exercisesFinishedResult = explorers.some( explorer => explorer.missions.frontend.exercisesFinished)
console.log(exercisesFinishedResult)

// Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
console.log('\n*** Uso de Every - Valida si isFinished  en onboarding es true en todos los explorers***')
const isFinishedOnboarding = explorers.every( explorer => explorer.missions.onboarding.isFinished)
console.log(isFinishedOnboarding);