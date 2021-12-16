// =================================== DOM QUERIES

console.log("Ready to deploy.")

let game = true;

const hero = {
    name: "USS Hello-World",
    hull: 20,
    firepower: 5,
    accuracy: .7,
    attack(target) {
        let acc = Math.random();
        if (acc < this.accuracy) {
            console.log("Wow, direct hit!");
            target.hull = target.hull - this.firepower;
            console.log(`Enemy has ${target.hull} hit points left!`);
            if (target.hull <= 0) {
                update();
            }
        } else {
            console.log("Your shot missed! Prepare for evasive maneuvers!")
        }
    }
}

//UPDATE DISPLAY
function update() {
    document.getElementsByTagName('h1')[0].innerText = 2;
    setTimeout( () => {
        const userInput = prompt("You destroyed this enemy! Retreat? (Yes or No)")
        if (userInput === 'yes') {
            console.log("We will retreat and live to see another day.");
            // location.reload();
        } //if input is 'no' nothing happens - for now
    }, 2000);
}


const enemy = {
    hull: Math.round(Math.random() * (6 - 3) + 3),
    firepower: Math.round(Math.random() * (4 - 2) + 2),
    accuracy: (Math.random() * (.8 - .6) + .6),

    attack(target) {
        let acc = Math.random();
        if (acc < this.accuracy) {
            target.hull = target.hull - this.firepower;
            console.log(`The Hero has ${target.hull} hit points left!`);
            if (target.hull <= 0) {
                console.log("The Hero has been destroyed. The way to Earth is clear. Prepare for harvesting.") //this is game over?
            }
        } else {
            console.log("Evasive maneuvers successful!")
        }
    }
}

let test = prompt("Earth is being attacked. Hero, will you help defend Earth?");
console.log(test);

const battle = function (hero, enemy) {
    let i = 0;
    while (hero.hull > 0 && enemy.hull > 0) {
        hero.attack(enemy);
        if (enemy.hull > 0) {
            enemy.attack(hero);
        }
    }
}

console.log(hero)
console.log(enemy)

if (test === 'yes') {
    battle(hero, enemy);
    console.log('battle');
}
