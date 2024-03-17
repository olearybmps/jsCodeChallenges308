// *********************************************************
// Challenge #1 ********************************************
// *********************************************************
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
// Variation 1: BMI = mass / height ** 2
// Variation 2: BMI = mass / (height * height) 
// Note: mass in kg and height in meters

// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMI's using the formula (you can even implement both
// variations if you'd like)
// 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John

// Test data:
// - Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall
// - Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall
// *********************************************************
// Challenge #2 ********************************************
// *********************************************************
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it

// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. 
// The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. 
// Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

// // Adding a function to the mix
// // function bmi(mass, height){
// //     return mass / height ** 2
// // }
// // Adding arrow function
// const bmi = (mass, height) => mass / height ** 2;
// // *********************************************************

// //Mark
// // let markMass = 78;
// // let markHeight = 1.69;
// let markMass = 95;
// let markHeight = 1.88;

// //John
// // let johnMass = 92;
// // let johnHeight = 1.95;
// let johnMass = 85;
// let johnHeight = 1.76;

// //BMI
// // let markBMI = markMass / markHeight ** 2;
// // let johnBMI = johnMass / johnHeight ** 2;
// // console.log(`Mark's BMI is: ${markBMI}`);
// // console.log(`John's BMI is: ${johnBMI}`);
// // Complete basic requirement
// let markBMI = bmi(markMass, markHeight);
// let johnBMI = bmi(johnMass, johnHeight);

// // Output
// if (markBMI > johnBMI) {
//     markHigherBMI = true;
//     console.log(`Mark's BMI (${markBMI.toFixed(2)}) is higher than John's (${johnBMI.toFixed(2)})!`);
// } else if (johnBMI > markBMI) {
//     markHigherBMI = false;
//     console.log(`John's BMI (${johnBMI.toFixed(2)}) is higher than Mark's (${markBMI.toFixed(2)})!`);
// } else {
//     console.log(`Mark and John have the same BMI (${markBMI.toFixed(2)})!`);
// }

// *********************************************************
// Challenge #3 ********************************************
// *********************************************************
// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

// Your tasks:
// 1. Calculate the average score for each team using the test data below
// 2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (a draw, also called a tie, means that they have the same average score)

// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team and at the same time a score of at least 100 points

// Hint: Use a logical operator to test for this minimum score, as well as multiple else-if blocks

// 4. Bonus 2: A minimum score of 100 also applies to a draw! So a draw only happens when both teams have the same score that's at least 100 points. Otherwise, no team wins the trophy

// Test data:
// - Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// - Data for Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 
// - Data for Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
// *********************************************************

// function avgScore(scoreArray){
//     let totalScores = 0;

//     for(let i = 0; i < scoreArray.length; i++){
//         // Add all scores
//         console.log(i);
//         totalScores += scoreArray[i]
//     }
//     console.log(totalScores);
//     // Average = the total divided by number of scores
//     return totalScores / scoreArray.length
// }
// // First data set:
// let dolphinScores = [96, 108, 89];
// let koalasScores = [88, 91, 110];
// // Second data set:
// // let dolphinScores = [97, 112, 101];
// // let koalasScores = [109, 95, 123];
// // Third data set:
// // let dolphinScores = [97, 112, 101];
// // let koalasScores = [109, 95, 106];

// let dolphinsAvgScore = avgScore(dolphinScores);
// let koalasAvgScore = avgScore(koalasScores);

// // Only average scores above 100 can win trophy
// if (dolphinsAvgScore >= 100 && koalasAvgScore >= 100){
//     // Determine winner by score         
//     if(dolphinsAvgScore > koalasAvgScore) {
//         console.log(`Dolphins (${dolphinsAvgScore}) win over the Koalas (${koalasAvgScore})`);
//     } else if (koalasAvgScore > dolphinsAvgScore) {
//         console.log(`Koalas (${koalasAvgScore}) win over the Dolphins (${dolphinsAvgScore})`);
//     } else {
//         console.log(`It's a draw with both teams having a score of at least 100. Dolphins ${dolphinsAvgScore}) and Koalas ${koalasAvgScore}) draw.`);
//     }
// } else {
//     console.log(`Neither team qualified to win with average scores less than 100. Dolphins: ${dolphinsAvgScore} to Koalas: ${koalasAvgScore}`);
// }

// *********************************************************
// Challenge #4 ********************************************
// *********************************************************
// Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

// Your tasks:
// 1. Create a variable called 'tip', and then calculate the tip depending on the bill value. DO NOT use an if/else statement. ONLY USE a ternary operator! In other words, use a ternary operator to conditionally assign the value to the 'tip' variable
// 2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: "The bill was 275, the tip was 41.25, and the total value 316.25"

// Test data:
// - Data: Test for bill values 275, 40 and 430

// Hints:
// - To calculate 20% of a value, simply multiply it by 0.2 (Why 0.2? Because 20 divided by 100 is equal to 0.2) 
// - Value X is between 50 and 300 if it's >= 50 && <= 300

// Data
// let totalBill = 55;
 let totalBill = 275;
// let totalBill = 40;
// let totalBill = 430;

// Ternary operator - tip variable
const tip = (totalBill >= 50 && totalBill <= 300) ? .15 : .2;
// Calculate the tip amount
const tipAmount = totalBill * tip;
// The total value is the total paid with the total bill plus tip
let totalValue = totalBill + tipAmount;

console.log(`The bill was \$${totalBill}, the tip was \$${tipAmount.toFixed(2)} at ${tip*100}%, and the total value \$${totalValue.toFixed(2)} `);