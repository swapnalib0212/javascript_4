// Given an array of integers and a positive integer , determine the number of (i, j) pairs where i < j and  ar[i]+ ar[j] is divisible by k . 
// Example ar = [1, 2, 3, 4, 5, 6] k = 5  
// Three pairs meet the criteria: [1, 4], [2, 3]  and [4, 6] . 
// Function Description
// Complete the divisibleSumPairs function in the editor below.
// divisibleSumPairs has the following parameter(s):
// int n: the length of array ar 
// int ar[n]: an array of integers
// int k: the integer divisor
// Returns
// - int: the number of pairs  20/7/25

function divisibleSumPairs(k, ar) {
    let count = 0;
    for(let i = 0; i < ar.length; i++) {
       for(let j = i + 1; j < ar.length; j++) {
        if((ar[i] + ar[j]) % k === 0) {
            count++;
        }
       }
    }
    return count;
}
console.log(divisibleSumPairs(5,[1, 2, 3, 4, 5, 6]));


// Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids.

// Example arr = [1, 1, 2, 2, 3] 

// There are two each of types  1and 2, and one sighting of type 3 . Pick the lower of the two types seen twice: type 1. 

// Function Description

// Complete the migratoryBirds function in the editor below.

// migratoryBirds has the following parameter(s):

// int arr[n]: the types of birds sighted
// Returns

// int: the lowest type id of the most frequently sighted birds


function migratoryBirds(arr) {
    const birdCounts = {};
    for (let bird of arr) {
        birdCounts[bird] = (birdCounts[bird] || 0) + 1;
    }
    let maxCount = 0;
    let resultId = Infinity; 

    for (let bird in birdCounts) {
        const count = birdCounts[bird];
        const birdId = parseInt(bird);

        if(count > maxCount) {
            maxCount = count;
            resultId = birdId;
        } else if (count === maxCount && birdId < resultId) {
            resultId = birdId; 
        }
    }
    return resultId;
}
const arr3 = [1, 1, 2, 2, 3];
console.log(migratoryBirds(arr3));