// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards

let firstCard = 20
let secondCard = 5

let sum = firstCard + secondCard

let hasBlackJack =  false

// 1. Create a variable called isAlive and assign it to true
let isAlive = true

// 2. Flip its value to false in the appropriate code block 

console.log(sum)

//LOGIC
/*
1) Given Hand is <21 //GOOD
2) Given Hand is 21 //BEST
3) Given Hand is >21 //LOST
*/

if (sum <= 20){
    console.log("Do you want to draw a new card? 🙂")
} else if (sum===21){
    console.log("Wohoo! You've got the BlackJack! 🥳")
    hasBlackJack = true
} else {
    console.log("Sorry, You're out of the game! 😭")
    isAlive = false
}

//Add the hasBlackJack variable for cashing out money [saving the state using boolean]

// console.log(hasBlackJack)
console.log(isAlive)

