const readlineSync = require('readline-sync');

const name = readlineSync.question('What is your name? ');

readlineSync.question('Hello ' + name +', Welcome to the wonderful world of Epic 7! Here you will become more powerful and destroy the Unknown. Press Enter to begin.');

const monsters = ['Golem', 'Wyvern', 'Banshee', 'Azmanuk'];
const treasure = ['Attack Weapon', 'Speed Boots', 'Immunity Ring', 'Rage Necklace'];
var reward = [];
let userHealth = 40;
const options = ['Walk', 'Exit', 'Print'];
let pickUp = treasure[Math.floor(Math.random()*treasure.length)];

function game(){
    const attackPower = Math.floor(Math.random() * (8 - 2 + 10) + 5);
    const monster = monsters[Math.floor(Math.random() * monsters.length)];
    let monstersHealth = 40;
    const monstersPower = Math.floor(Math.random() * (8 - 3 + 6) + 5);

    const index = readlineSync.keyInSelect(options, 'Are you ready for more?');

    if (options[index] == 'Exit') {
        return userHealth = 0;
    } else if (options[index] == 'Print'){
        console.log(name + ': \n' + userHealth + '\nTreasure: ' + pickUp);
    } else if (options[index] === 'Walk'){
        let key = Math.random();
        if (key <= .3) {
            console.log('Walking....');
        } else if (key >= .3) {
            console.log(monster + ' showed up. ');

            while(monstersHealth > 0 && userHealth > 0) {

                const user = readlineSync.question('What do you want to do? enter "r" to run or "a" to attack: ');

                switch (user){
                    case 'r':
                       const run = Math.random();
                       if(run < .5) {
                           console.log('Before you run ' + monster + ' attacks you with ' + monstersPower);
                       } else {
                           console.log('You Escaped and Wasted Less Energy!!');
                           break;

                       }
                       
                    case 'a':
                        monstersHealth -= attackPower;
                        console.log('You have attacked ' + monster + ' with ' + attackPower + ' attack power' );
                        
                        userHealth -= monstersPower;
                        console.log('Enemy just attacked you wth: ' + monstersPower + ' attack power');

                        if (monstersHealth <= 0){
                            console.log('You killed ' + monster + '.\n' + monster + ' left: ' + pickUp);
                            let loot = Math.random();
                            if (loot <= .3){
                                reward.push(pickUp);
                            } else if(userHealth <= 0){
                                console.log(monster + ' has defeated you. You are dead. ');
                            }
                        }
                }
            }
        }
    }
}

while(userHealth > 0){
    userRestore = function(){
        userActive = true;
        userHealth = 40;
    };
    userRestore();
    game();
}