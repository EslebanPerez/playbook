class Pokemon{
    constructor(name){
        this.name = name;
    }
    sayHello(){
        console.log(`Mi pokemon ${this.name} Te saluda!!!`)
    }
    sayMessage(){
        console.log(`Mi pokemon ${this.name} dice: ${message}`+'\n')
    }
}

module.exports = Pokemon