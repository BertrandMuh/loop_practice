
const insertALine = () => {
    console.log('=================');
}

//Write a for loop that logs 0-15
let lowerLimit = 0;
let upperLimit = 15;
console.log(`Write a for loop that logs ${lowerLimit} - ${upperLimit}`);
for (lowerLimit; lowerLimit <= upperLimit; lowerLimit++){
    console.log(lowerLimit);
}
insertALine();

//========================================
//Write a for loop that counts from 15-0
lowerLimit = 0;
upperLimit = 15;
console.log(`Write a for loop that counts ${upperLimit} - ${lowerLimit}`);
while(upperLimit >= lowerLimit){
    console.log(upperLimit);
    upperLimit--;
}
insertALine();

//========================================
// Make variable laps = 0; write a for loop that logs (“that’s another lap!”) and adds 1 to the laps variable. AFTER the loop, log laps.
var laps = 0;
let distanceForALapInFeet = 60;
let totalDistanceInFeet = 1230;
let remainFeetToCompleteAFullLap = distanceForALapInFeet - ( totalDistanceInFeet % distanceForALapInFeet);
console.log(`Make variable laps = 0; write a for loop that logs (“that's another lap!”) and adds 1 to the laps variable. AFTER the loop, log laps.`);
for(i = 0; i <= totalDistanceInFeet; i++){
    if(i % distanceForALapInFeet === 0 && i > 0){
        console.log(`That's another lap`);
        laps++;
    }
}
if (remainFeetToCompleteAFullLap === distanceForALapInFeet){
    console.log(`The total number of laps completed is ${laps}.`);
    insertALine();
}
else{
    console.log(`The total number of laps completed is ${laps}. You had only ${remainFeetToCompleteAFullLap} feet left to complete a total of ${laps + 1}`);
    insertALine();
}







