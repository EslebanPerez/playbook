const post = {
    userName : 'Esleban',
    photo : 'Photo.jpg',
    message: 'Hola, estoy aprendiendo a programar en JavaScript 💛',
    likes: 50,
    shared: 12,
    comments: 5,
    dateCreated: new Date().toLocaleDateString(),
    public: true,
    tagPeople: ['Mary', 'Flor', 'Mica', 'Joce'],
    localization:'Tlaxcala',
    fealing: 'happy',
    getPost: function(){
        return `${this.userName} write this message: ${this.message}`
    },
    getInteraction: function(){
        return `${this.likes} likes, ${this.comments} comments, ${this.shared} shared`
    },
    gettagPeople: function(){
        return `${this.tagPeople}`
    },
    getFealing: function(){
        return `${this.fealing}`
    }
}

console.log(post.getPost());
console.log(post.gettagPeople());
console.log('Public: '+post.public)
console.log('I fell '+ post.fealing);
console.log(post.getInteraction())