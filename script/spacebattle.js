// =================================== DOM QUERIES
// const enemyStats = document.querySelector("#enemyStats")


console.log("Ready to deploy.")


const hero = {
    name: "USS Hello-World",
    hull: 20,
    firepower: 5,
    accuracy: .7,
    attack (target) {
        let acc = Math.random();
        if (acc < this.accuracy) {
            console.log("Wow, direct hit!");
            target.hull = target.hull - this.firepower;
            console.log(`Enemy has ${target.hull} hit points left!`);
            if(target.hull <= 0) {
                console.log("You destroyed this enemy! Retreat?")
            }
        } else {
            console.log("Your shot missed! Prepare for evasive maneuvers!")
        }
    }
}

const enemy = {
    hull: Math.round(Math.random() *(6-3) + 3),
    firepower: Math.round(Math.random()*(4-2) + 2),
    accuracy: (Math.random() * (.8 - .6) + .6),
    
    attack(target) {
        let acc = Math.random();
        if (acc < this.accuracy) {
            target.hull = target.hull - this.firepower;
            console.log(`The Hero has ${target.hull} hit points left!`);
            if(target.hull <= 0) {
                console.log("The Hero has been destroyed. The way to Earth is clear. Prepare for harvesting.") //this is game over?
            }
        } else {
            console.log("Evasive maneuvers successful!")
        }
    }
}


//   function (hero, enemy) {
//     let i = 0;
//     while (i < hero.hull && enemy[1].hull > 0) {
//         player.attack(computer);
//         if(enemy.hull > 0) {
//             computer.attack(player);
//         }
//     }
// }
console.log(hero)
console.log(enemy)