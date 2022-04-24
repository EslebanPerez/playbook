const travel = {
    from: 'Puebla',
    destiny: 'Tlaxcala',
    rideTime: '45 min',
    state: 'complete',
    pickUpTime: '5:00 pm',
    price: 200,
    type: 'Uber X',
    user: 'Joshep',
    driver : 'Miguel',
    getTravel: function(){
        return `Travel from ${this.from} to ${this.destiny}`
    },
    getType: function(){
        return `Type: ${this.type} | Price: $${this.price} | Ride time: ${this.rideTime}`
    }
}

console.log('Detalle del viaje');
console.log(travel.getTravel());
console.log(travel.getType());
