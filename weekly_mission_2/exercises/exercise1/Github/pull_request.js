
const pullRequest = {
    tittle: 'Agregando nueva funcionalidad',
    branchName: 'Master',
    dateCreated: new Date(),
    status: 'OPEN',
    repositoryNameAssociated: 'Launch X',
    getStatus: function(){
        return `Status: ${this.status}`
    },
    getTittleAndDate: function(){
        return `This pull request ${this.tittle} was created ${this.dateCreated} `
    }
}

console.log('Nombre del Pull Request: ' + pullRequest.tittle)
console.log(pullRequest.getStatus())
console.log(pullRequest.getTittleAndDate())