// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards

let firstCard = 2
let secondCard = 5

let sum = firstCard + secondCard

console.log(sum)

//LOGIC
/*
1) Given Hand is <21 //GOOD
2) Given Hand is 21 //BEST
3) Given Hand is >21 //LOST
*/

if(sum===21){
    console.log("YOu are the Master Winner")
} else if(sum<21){
    console.log("Do You Want To Deal Another Card?")
} else {
    console.log("Better Luck next time")
}
