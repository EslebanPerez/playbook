const profile = {
    userName: "Esleban Perez",
    personalLink: "https://www.facebook.com/EslebanPerz",
    photo: "Photo.jpg",
    numberOfFriends: 200,
    profileID: "123456789",
    numberOfPosts: 521,
    bio: 'Hola, estoy aprendiendo a programar en JavaScript 💛',
    hobbies: ['Reading', 'Sports', 'Music'],
    dateCreated: new Date().toLocaleDateString(),
    getNumberOfFriends: function(){
        return `${this.userName} has ${this.numberOfFriends} friends on Facebook`
    },
    getBioAndHobbies: function(){
        return `${this.bio} and my hobbies are: ${this.hobbies}`
    },
    getGeneralInfo: function(){
      return `The profile ${this.userName} was created on ${this.dateCreated}`
    }
   }
   
   console.log("Enlace personalizado: " + profile.personalLink)
   console.log(profile.getGeneralInfo())
   console.log(profile.getBioAndHobbies())
   console.log("Numero de posts: " + profile.numberOfPosts)
   console.log(profile.getNumberOfFriends())