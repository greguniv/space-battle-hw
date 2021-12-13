//Setting up the Spaceship - main for everyone

class Spaceship {
    constructor(name, hull, firepower, accuracy) {
        this.name = name
        this.hull = hull
        this.firepower = firepower
        this.accuracy = accuracy
    }
}

// ========== this is the Player Character ship ==========

class Hero extends Spaceship {
    constructor(name, hull, firepower, accuracy) {
        super(name, hull, firepower, accuracy)
    }
    attack() {
        console.log("Alien has attacked!")
        usshw.hull -= this.firepower;
        if (usshw.hull > 0) {
            console.log(`You have taken damage! Current hull strength has dropped to ${usshw.hull}!`);
        } else {;
            console.log(usshw.death);
        }
    }
    retreat() {
        console.log("You have run away to live another day. But THEY are still out there...")
    }
    death() {
        console.log("You have died. GAME OVER")
    }
}


// =============Alien here extended from spaceship ===================

class Alien extends Spaceship {
    constructor(name, hull, firepower, accuracy) {
        super(name, hull, firepower, accuracy)
    }
    attack() {
        console.log("You attacked the alien!")
        Alien.hull -= this.firepower;
        if (Alien.hull > 0) {
            console.log(`They have taken damage! Their current hull strength has dropped to ${Alien.hull}!`);
        } else {
            console.log("This alien has been destroyed.");
            console.log(Alien.death);
        }
    }
    death() {
        console.log("The Alien has died.")
    };
}


// ============ THE PLAYERS =================
const enemyOne = new Alien('Roswell', '4', '3', '.6') //should be randomized*6?
const usshw = new Spaceship('USS Hello World', '20', '5', '.7')
// console.log(usshw)


// ============= TURNS? ========

let battle = (usshw, Alien) => {
    while (usshw.hull > 0) {
        usshw.attack(Alien);
        if(Alien.hull > 0) {
            Alien.attack(usshw);
        }
    }
}
