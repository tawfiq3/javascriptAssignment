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

// Brick Calculator

function brickCalculator(floorNumber){
    let brickNeeded = 0;
    if(floorNumber<=10){
         brickNeeded = floorNumber * 1000 *15;      
    }
    else if (floorNumber<=20){
         brickNeeded = (20-floorNumber)*1000*12+ 150000; // 150000 is added for first 10 floor & rest is counted by the ohter part of the formula
    }
    else{
         brickNeeded = 27000+(floorNumber-20)*1000*10; // 270000 is added for first 20 floor & rest is counted by the ohter part of the formula
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