const trending = {
    theme: 'Launch X',
    score: 1,
    num_tweets: '98,000',
    category: 'Educación',
    getInfo: function(){
        return `Theme: ${this.theme} | Score: ${this.score} | Num tweets: ${this.num_tweets} | Category: ${this.category}`
    }
} 
console.log('Trending on Twitter');
console.log(trending.getInfo());