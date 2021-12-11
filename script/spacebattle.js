
//first spaceship = USS Hello World - setting up our Spaceship

class Spaceship {
    constructor(name, hull, firepower, accuracy) {
        this.name = name
        this.hull = hull
        this.firepower = firepower
        this.accuracy = accuracy
    }
}

const usshw = new Spaceship ('USS Hello World', '20', '5', '.7')
console.log(usshw)

const enemyOne = new Spaceship ('Roswell', '4', '3', '.6')
console.log(enemyOne)

//enemy squad here extended from spaceship
class Enemies extends Spaceship (name, hull, firepower, accuracy) {
    super(name, hull, firepower, accuracy)
}


// let spaceship = () => {
//     function attack () {
//         //the attack function will go here later?
//     }
// }