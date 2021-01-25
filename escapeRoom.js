const readlineSync = require('readline-sync');
const playerName = readlineSync.question('What is your name? ');

var welcomeMessage = `Welcome ${playerName}, to the Escape Room Game Simulation!`;
console.log(welcomeMessage);

var isAlive = true;
var hasKey = false;

while(isAlive == true){
    const menuOptions = readlineSync.keyIn('Enter 1 to Put hand in hole \n Enter 2 to Find the key \n 3 to Open the door ', {limit: '$<1-3>'});
    console.log(menuOptions);
    if (menuOptions == 1){
        console.log(`${playerName}, oops you are DEAD. Game is Over.`);
        isAlive = false;
    }
    else if (menuOptions == 2 && hasKey == false){
        console.log(`${playerName}, Awesome you found the key please proceed!`)
        hasKey = true;
    }
    else if (menuOptions == 2 && hasKey == true){
        console.log(`${playerName}, you have ALREADY found key. Please proceed to option 3!`);
    }
    else if (menuOptions == 3 && hasKey == false){
        console.log(`${playerName}, unfortunately, you do not have the key, It is THE requirement!`);
    }
    else if (menuOptions == 3 && hasKey == true){
        console.log(`${playerName}, you have found the key, opened the door, and you can escape successfully now. Congratulations!`);
        isAlive = false;
    }
}
