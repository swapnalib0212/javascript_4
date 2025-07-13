// Given an array of integers, find the sum of its elements.

// For example, if the array arr = [1, 2, 3], 1 + 2 + 3 = 6, so return 6.
// pseudocode
//define a function that takes arr as input. declare variable sum to zero to inialise, start loop from 
// o to arr.length, add each num to sum , return sum

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


// define function as solveMeFirst that takes two input numbers a and b. add a and b, 

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

// define function compareTriplets that takes two numbers as input, declare variable aliceScore as zero and var bob as zero
// start loop from index zero to 2, if the alice value is greater than bobs value at same index then increase alice score by 1, 
// if bobs score is greater than alice increase bobs score by 1, end loop, return alice and bobs score.
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


// In this challenge, you need to calculate and print the sum of elements in an array, considering that some integers may be very large.
// Function Description
// Complete the aVeryBigSum function with the following parameter(s): 
// int ar[n]: an array of integers 
// Return
// long: the sum of the array elements 
// Input Format
// The first line of the input consists of an integer .
// The next line contains  space-separated integers contained in the array.
// Output Format
// Return the integer sum of the elements in the array.

// define function that takes arr as input , declare sum as zero, start loop from zero to arr.length, 
// add each number to sum. 
function aVeryBigSum (ar) {
    let sum = 0;
    for (i = 0; i < ar.length; i++) {
        sum += ar[i];
    }
    return sum;
}
const inputArray = [100004, 100807, 100007, 188778];
console.log(aVeryBigSum(inputArray));


// Given an array of integers, calculate the ratios of its elements that are , positive, negative, and zero . Print the decimal value of each fraction on a new line with 6 places after the decimal. 
// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to 10 to the power -4  are acceptable. 
// Example arr = [1, 1, 0, -1, -1]
// There are elements: two positive, two negative and one zero. Their ratios are 2/5 = 0.4000, 2/5 = 0.4000, 1/5 = 0.2000  and . Results are printed as:
// 0.400000
// 0.400000
// 0.200000


// define function plusminus that takes arr as input, declare variable positive, negative, zero as 0, 
// declare var const n equals to arr.length, set for loop from 0 to n, if arr[i] is greater than zero
// increase positive count , if arr[i] is smaller than 0 increase negative count, else zero++, console.log - positive, neg, zero divide by arr.length to find the Result.


function plusMinus(arr) {
let positive = 0, negative = 0, zero = 0;
const n = arr.length;

for(i = 0; i < n; i++) {
    if(arr[i] > 0) {
        positive++;
    }
    else if (arr[i] < 0) {
        negative++;
    }
    else {
        zero++;
    }
}

console.log((positive/n));
console.log((negative/n));
console.log((zero/n));
}
const arr = [1, 1, 0, -1, -1];
plusMinus(arr);




// Staircase detail
// This is a staircase of size n = 4: 
//    #
//   ##
//  ###
// ####
// Its base and height are both equal to n . It is drawn using # symbols and spaces. The last line is not preceded by any spaces. 
// Write a program that prints a staircase of size .


// define function staircase that takes number as input, start for loop from 1 to n in that i is equals to 1, declare var spaces and hashes to store the result,
// start for loop in that j = 1, j is smaller and equals to n-1, increment its value by 1, push value to spaces. 
// start loop with var k equals to 1 , k is smaller and equals to i, k++. push value as # to hashes,result.




function staircase (n) {
    for(i = 1; i <= n; i++) {
        let spaces = '';
        let hashes = '';

        for(let j = 1; j <= n-1; j++) {
            spaces += ' ';
        }

        for(let k = 1; k <= i; k++) {
         hashes += '#';
        }
        console.log(spaces + hashes);
    }
    
}
 
staircase(4);

// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
// Then print the respective minimum and maximum values as a single line of two space-separated long integers.
// Example
// The minimum sum 1+3+5+7 = 16 is  and the maximum sum is 3+ 5+ 7+ 9 = 24 . The function prints
// 16 24

// define function miniMaxSum that takes arr as input, declare var miniSum and maxSum as 0, start loop from zero to 3
// to find mini sum , add sum to miniSum, then start loop from 1 to 4 to find maxsum , add result to maxsum, console.log minisum + maxsum.

let arr2 = [1, 3, 5, 7, 9]

function miniMaxSum (arr) {
    let miniSum = 0;
    let maxSum = 0;

    for(let i = 0; i <= 3; i++ ) {
        miniSum+= arr[i];
    }
    for(let i = 1; i <= 4; i++) {
        maxSum+= arr[i];
    }
    console.log(miniSum + " " +maxSum);
}
miniMaxSum(arr2);


// You are in charge of the cake for a child's birthday. It will have one candle for each year of their total age. 
// They will only be able to blow out the tallest of the candles. 
// Your task is to count how many candles are the tallest.
// Example
// candles = [4, 4, 1, 3]
// The tallest candles are 4 units high. There are 2 candles with this height, so the function should return 2.
// Function Description
// Complete the function birthdayCakeCandles with the following parameter(s):


// define function birthdayCakeCandles that takes arr as input,
// to find max declare var max as math.floor(...candles), then start loop from 0 to arr.length, 
// if candles[i] is equals to max then increase count by 1, 
// return count.


function birthdayCakeCandles (candles) {
   let max = Math.max(...candles);
   let count = 0;

   for(let i = 0; i < candles.length; i++) {
    if(candles[i] === max) {
        count++;
    }
   }

return count;
}
const candles = [4, 4, 1, 3];
console.log(birthdayCakeCandles(candles));