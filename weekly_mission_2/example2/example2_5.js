// Ejemplo 5: Atributos con valores por default

class pullRequest{
    constructor(repo, tittle, linesChanges){
        this.repo = repo
        this.tittle = tittle
        this.linesChanges = linesChanges
        this.status = 'OPEN'
        this.DateCreated = new Date();
    }
    getInfo(){
        return `\n\tname: ${this.repo} \n\tstatus: ${this.status} \n\tCreado: ${this.DateCreated}`
    }
}

console.log('Ejemplo 5: Atributos con los valores por default')

const myRepo = new pullRequest('LaunchX', 'Mi primer PR', 5 )
console.log(myRepo.getInfo()); 

//Puedes instanciar n cantidad de objetos de la misma clase
const myRepo2 = new pullRequest('NodeJs', 'Mi segundo PR', 6)
console.log(myRepo2.getInfo());