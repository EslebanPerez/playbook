const profile = {
    name: 'Esleban',
    username: 'eslebanperez',
    localization: 'Tlaxcala',
    email: 'esleban@mail.com',
    photo_perfil: 'Photo_perfil.jpg',
    phone: '123 456 7890',
    paymentMethod: 'credit card',
    getNameAndphoto: function(){
        return `Name: ${this.name} | Username: @${this.username} \nPhoto: ${this.photo_perfil}`;
    },
    getInfo: function(){
        return `Phone: ${this.phone} | Payment method: ${this.paymentMethod}`
    }
    
    
}

console.log(profile.getNameAndphoto())
console.log(profile.localization)
console.log(profile.getInfo())