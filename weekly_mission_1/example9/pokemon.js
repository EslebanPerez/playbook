class Pokemon{
    constructor(name){
        this.name = name;
    }
    sayHello(name){
        console.log(`Mi pokemon ${this.name} Te saluda!!!`)
    }
    sayMessage(message){
        console.log(`Mi pokemon ${this.name} dice: ${message}`+'\n')
    }
}

module.exports = Pokemon