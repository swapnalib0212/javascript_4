// Given time in -hour AM/PM format, convert it to military (24-hour) time.
// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
// Example
// Return '12:01:00'.
// Return '00:01:00'
// Complete the  function with the following parameter(s):
// : a time in  hour format
// Returns
// : the time in  hour format
function convertToMilitaryTime(time12h) {
    let period = time12h.slice(-2);
    let [hour, minute, second] = time12h.slice(0, 8).split(":");
    hour = parseInt(hour);
    

    if (period === "AM") {
        if (hour === 12) hour = 0;
    } else {
        if(hour !== 12) hour += 12;
    }

    let hourStr = hour.toString().padStart(2, "0");
    return `${hourStr}:${minute}:${second}`;
}
console.log(convertToMilitaryTime("07:45:00PM")); 



// You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).

// The first kangaroo starts at location  and moves at a rate of  meters per jump.
// The second kangaroo starts at location  and moves at a rate of  meters per jump.
// You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise return NO.

function kangaroo (x1, v1, x2, v2) {
    if (x1 === x2) {
        if (v1 === v2) {
            return "YES";
        } else {
            return "NO";
        }
    }

    const n = (x2 - x1)/(v1 - v2)

    if(n >= 0 && Number.isInteger(n)) {
        return "YES";
    } else {
        return "NO";
    }
}
console.log(kangaroo(0, 3, 4, 2));

/////////////////////





//////////////

function getTtotalX(d, f) {
    let count = 0;

    const maxA = Math.max(...d);
    const minB = Math.min(...f);

    for(let x = maxA; x <= minB; x++) {
        const aIsFactor = d.every(val => x % val === 0);
        const bIsFactor = f.every(val => val % x === 0);

        if(aIsFactor && bIsFactor) {
            count++;
        }
    }
    return count;
    
}
const d = [2,6]
const f = [24, 36]
console.log(getTtotalX(d, f));

//////
// Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.
// Example [12, 24, 10, 24] 
// Scores are in the same order as the games played. She tabulates her results as follows:
//                                 Count
//     Game  Score  Minimum  Maximum   Min Max
//      0      12     12       12       0   0
//      1      24     12       24       0   1
//      2      10     10       24       1   1
//      3      24     10       24       1   1
// Given the scores for a season, determine the number of times Maria breaks her records for most and least points scored during the season.
// Function Description
// Complete the breakingRecords function in the editor below.
// breakingRecords has the following parameter(s):
// int scores[n]: points scored per game
// Returns
// int[2]: An array with the numbers of times she broke her records. Index 0 is for breaking most points records, and index 1 is for breaking least points records.

function breakingRecords(scores) {
    let maxScore = scores[0];
    let minScore = scores[0];
    let maxbreak = 0;
    let minbreak = 0;

    for(i = 0; i < scores.length; i++){
        if(scores[i] > maxScore){
            maxScore = scores[i];
            maxbreak++;
        }
        else if (scores[i] < minScore) {
            minScore = scores[i];
            minbreak++;

        }
    }
    return[maxbreak, minbreak];
}
console.log(breakingRecords([12, 24, 10, 24]));