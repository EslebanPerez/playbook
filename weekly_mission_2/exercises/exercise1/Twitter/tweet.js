const tweet ={
    userName:'Esleban',
    user: '@eslebanperez',
    dayPublished: new Date().toLocaleDateString(),
    hour: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date(),
    tweet: 'Hola, estoy aprendiendo a programar en JavaScript',
    commets: 5,
    retweets: 9,
    likes: 10,
    image: 'null',
    video: 'null',
    
    getTweet:function(){
        return `${this.userName} ${this.user} twitteo : \n\n${this.tweet}\n\nComments: ${this.commets} | Retwetts: ${this.retweets} | Likes: ${this.likes}`
    },
    getTweetInfo:function(){
        return `Fecha: ${this.dayPublished} -  Hora:  ${this.hour}:${this.minutes}`
    }
}

console.log(tweet.getTweet());
console.log( tweet.getTweetInfo());