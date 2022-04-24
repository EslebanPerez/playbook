const issue = {
    tittle: 'Duda sobre objetos',
    repositoryNameAssociated: 'NodeJs',
    status: 'OPEN',
    numersOfComments: 8,
    labels: ['Nodejs', 'Javascript', 'Node Modules', 'Problem'] ,
    autor: 'EslebanPerez',
    dateCreated: new Date(),
    lastUpdated: new Date(),
    getTittleAndAuthor: function(){
        return `Tittle: ${this.tittle}\nAuthor: ${this.autor}`
    },
    getGeneralInfo: function(){
        return `Status: ${this.status}\nDate created: ${this.dateCreated}`
    }
}


console.log(issue.getTittleAndAuthor());
console.log(issue.getGeneralInfo());
console.log('Número de Comentarios: '+ issue.numersOfComments);
console.log('Primera Etiqueta: '+ issue.labels[0]);