const user = {
    name: 'Esleban',
    live: 'Mexico',
    workplace: 'Workplace',
    collage: 'Colage',
    email: 'user@mail.com',
    number: '123456789',
    gender: 'male',
    birthday: '27/10/1996',
    language:'English',
    
    getbirthday: function(){
        return `${this.name} was born ${this.birthday} and I live in ${this.live}`
    },
    getNameAndWorkplace: function(){
        return  `Study at ${this.name} works at ${this.workplace}`
    }
}

console.log(user.getbirthday())
console.log(user.getNameAndWorkplace())
console.log('I speak in ' + user.language)

