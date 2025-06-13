// Given an array of integers, find the sum of its elements.

// For example, if the array arr = [1, 2, 3], 1 + 2 + 3 = 6, so return 6.

let array = [1, 2, 3];
function sumOfArray(arr) {
    let sum = 0;

    for(let i = 0; i < arr.length; i++ ) {
        sum += arr[i];
    }
    return sum;
}
console.log(sumOfArray(array));


// Complete the function solvemefirst  to compute the sum of two integers. 
// Example a = 7, b = 3 
// Return 10 .

function solveMeFirst (a, b) {
    return a + b;
}
console.log(solveMeFirst(7, 3));

// Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.

// The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).
// The task is to calculate their comparison points by comparing each category:
// If a[i] > b[i], then Alice is awarded 1 point.
// If a[i] < b[i], then Bob is awarded 1 point.
// If a[i] = b[i], then neither person receives a point.
// Example
// a = [1, 2, 3]
// b = [3, 2, 1]
// Function Description
// Complete the function compareTriplets with the following parameter(s):

function compareTriplets (a, b) {
let aliceScore = 0;
let bobscore = 0;
for (i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
        aliceScore++;
    }
    else if (b[i] > a[i]) {
        bobscore++;
    }
    
}
return[aliceScore, bobscore];

}
const a = [1, 2, 3];
const b = [3, 2, 1];

console.log(compareTriplets(a, b));