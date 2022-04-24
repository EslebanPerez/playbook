const user = {
    name: 'Esleban',
    username: 'eslebanperez',
    correo: 'esleban@mail.com',
    photo_perfil: 'Photo_perfil',
    bio: 'Hola, soy un desarrollador web',
    phone: '123 456 7890',
    password: '*******',
    followers: 50,
    following: 120,
    num_tweets: 20,
    dateCreated: new Date().toLocaleDateString(),
    getNameAndBio: function(){
        return `Name: ${this.name} | Username: @${this.username} \n\nBio: ${this.bio}\n`;
    },
    getInfo: function(){
        return `Followers: ${this.followers} | Following: ${this.following} | Tweets: ${this.num_tweets}`
    }
}

console.log(user.getNameAndBio());
console.log(user.getInfo());
console.log('since: '+ user.dateCreated);