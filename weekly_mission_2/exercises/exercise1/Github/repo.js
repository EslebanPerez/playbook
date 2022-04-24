//Objeto del ejercicio 1
const repo = {
    name:'Launch X',
    autor: 'EslebanPerez',
    language: 'JavaScript',
    numberOfCommites: 100,
    stars: 200,
    forks: 500,
    issues_open: 10,
    issues_close: 5,
    getTotalIssues: function(){
        return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
        return `This repository ${this.name} was created by ${this.autor}`
    }
}

console.log('Nombre del repo: ' + repo.name)
console.log('Issues Totales: ' + repo.getTotalIssues())
console.log(repo.getGeneralInfo())