
const insertALine = () => {
    console.log('==================================');
}

//Write a for loop that logs 0-15
let lowerLimit = 0;
let upperLimit = 15;
console.log(`Write a for loop that logs ${lowerLimit} - ${upperLimit}`);
for (lowerLimit; lowerLimit <= upperLimit; lowerLimit++) {
    console.log(lowerLimit);
}
insertALine();

//========================================
//Write a for loop that counts from 15-0
lowerLimit = 0;
upperLimit = 15;
let array = [];
console.log(`Write a for loop that counts ${upperLimit} - ${lowerLimit}`);
while (upperLimit >= lowerLimit) {
    array.push(upperLimit);
    if (upperLimit == lowerLimit) {
        console.log(array);
    }
    upperLimit--;
}
insertALine();

//========================================
// Make variable laps = 0; write a for loop that logs (“that’s another lap!”) and adds 1 to the laps variable. AFTER the loop, log laps.
var laps = 0;
let distanceForALapInFeet = 3;
let totalDistanceInFeet = 35;
let remainFeetToCompleteAFullLap = distanceForALapInFeet - (totalDistanceInFeet % distanceForALapInFeet);
console.log(`Make variable laps = 0; write a for loop that logs (“that's another lap!”) and adds 1 to the laps variable. AFTER the loop, log laps.`);
for (i = 0; i <= totalDistanceInFeet; i++) {
    if (i % distanceForALapInFeet === 0 && i > 0) {
        console.log(`That's another lap`);
        laps++;
    }
    else if (i === totalDistanceInFeet && remainFeetToCompleteAFullLap === 0) {
        console.log(`The total number of laps completed is ${laps}.`);
        insertALine();
    }
    else if (i === totalDistanceInFeet && remainFeetToCompleteAFullLap !== 0) {
        console.log(`The total number of laps completed is ${laps}. You had only ${remainFeetToCompleteAFullLap} feet left to complete a total of ${laps + 1}`);
        insertALine();
    }
}

//===========================================
//Make variable age. Make a loop from 0-100. In every loop check if i == age, if so log something, else say “age doesn’t match”.
lowerLimit = 0;
upperLimit = 100;
var age = 90;
console.log(`Make variable age. Make a loop from ${lowerLimit}-${upperLimit}. In every loop check if i == age, if so log something, else say “age doesn't match`);
for (lowerLimit; lowerLimit <= upperLimit; lowerLimit++) {
    if (lowerLimit == age) {
        console.log(`The age picked is within the range.`);
    }
    else {
        console.log('age does not match.')
    }
}
insertALine();

//============================================
//Write a loop that logs all even numbers from 0-700.
lowerLimit = 0;
upperLimit = 700;
array = [];
console.log(`Write a loop that logs all even numbers from ${lowerLimit}-${upperLimit}.`);
for (lowerLimit; lowerLimit <= upperLimit; lowerLimit++) {
    if (lowerLimit % 2 == 0) {
        array.push(lowerLimit);
    }
    if (lowerLimit == upperLimit) {
        console.log(array);
        insertALine();
    }
}

//===========================================
//Write a loop that logs all odd numbers from 0-700.
lowerLimit = 0;
upperLimit = 700;
array = [];
console.log(`Write a loop that logs all odd numbers from ${lowerLimit}-${upperLimit}.`);
for (lowerLimit; lowerLimit <= upperLimit; lowerLimit++) {
    if (lowerLimit % 2 !== 0) {
        array.push(lowerLimit);
    }
    if (lowerLimit == upperLimit) {
        console.log(array);
        insertALine();
    }
}

// Write a loop with some “if else” statements. The loop should start at 1900 and go to 1949 and log when things were invented. For example when i = 1902 the code should log “it is 1902 - the teddy bear is invented!”
lowerLimit = 1900;
upperLimit = 1949;
console.log(`Write a loop with some “if else” statements. The loop should start at ${lowerLimit} and go to ${upperLimit} and log when things were invented. For example when i = 1902 the code should log “it is 1902 - the teddy bear is invented!`);

array = [['Zeppelin', 1900], ['Teddy Bear', 1902], ['Talking Motion Picture', 1910], ['Bra', 1913], ['Fortune Cookie', 1918], ['Traffic Signal', 1923], ['Radar', 1935], ['Ballpoint Pen', 1938], ['Slinky', 1943]];

for (i = lowerLimit; i <= upperLimit; i++) {
    array.forEach(invention => {
        if (i == invention[1]) {
            console.log(`It is ${invention[1]} - the ${invention[0]} is invented`);
        }
    });
}
insertALine();

