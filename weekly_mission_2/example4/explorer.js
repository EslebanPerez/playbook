export default class Explorer{
    constructor (name, username, mission){
        this.name = name
        this.username = username
        this.mission =  mission
    }
    getNameUserName(){
            return `Esplorer ${this.name} Username ${this.username}`
    }
}