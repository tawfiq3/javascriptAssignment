// Feet to Mile
function feetToMile(feet){
    let mile = feet/5280;
    return mile;
}
const inMile = feetToMile(120); //input will be put in braket
console.log(inMile);

// Wood Calculator

function woodCalculator(chair,table,bed){
    let chairWood = chair * 1; //Let assume 1 cubic foot wood is needed for a chair
    let tableWood = table * 3; //Let assume 3 cubic foot wood is needed for a table
    let bedWood = bed * 5; //Let assume 5 cubic foot wood is needed for a bed

    let totalWoodRequired = chairWood + tableWood + bedWood;

    return totalWoodRequired;
}
const woodRequire = woodCalculator(10,5,3);
console.log(woodRequire);

/ Brick Calculator

function brickCalculator(floorNumber){
    if(floorNumber<=10){
        let brickNeeded = floorNumber * 1000 *15;
    }
    else if (floorNumber<=20){
        let brickNeeded = (20-floorNumber)*1000*12+ 150000;
    }
    else{
        let brickNeeded = 27000+(floorNumber-20)*1000*10;
    }

    return brickNeeded;
}

let brick = brickCalculator(17);
console.log(brick)

// Tiny Friend

function tinyFriend(friendsName){
    let smallerName = friendsName.sort();
    return smallerName[0];
}
let desiredName = tinyFriend(["jaber","abr","kaberia","paberiakhan"]);
console.log(desiredName); 