// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards

let firstCard = 2
let secondCard = 7

let sum = firstCard + secondCard

let hasBlackJack =  false

// 1. Create a variable called isAlive and assign it to true
let isAlive = true

// 2. Flip its value to false in the appropriate code block 

console.log(sum)

// 1. Declare a variable called message and assign its value to an empty string
let message = ""
// 2. Reassign the message variable to the string we're logging out

// 1. Store the message-el paragraph in a variable called messageEl
let messageEl = document.getElementById("message-el")

// 2. Store the sum paragraph in a variable called sumEl
let sumEl = document.querySelector("#drawS") //querySelector is short and dynamic but you've to use the css selector method for calling class, ID or Tag

// 2. Store the cards divs in a variable called cards__box1 and cards__box2

let firstC = document.querySelector("#first")
let secondC = document.querySelector("#second")

//LOGIC
/*
1) Given Hand is <21 //GOOD
2) Given Hand is 21 //BEST
3) Given Hand is >21 //LOST
*/

function start(){

    firstC.textContent = firstCard
    secondC.textContent = secondCard

    if (sum <= 20){
        message = "Do you want to draw a new card? 🙂"
        
    } else if (sum===21){
        message = "Wohoo! You've got the BlackJack! 🥳"
        
        hasBlackJack = true
    } else {
        message = "Sorry, You're out of the game! 😭"
        
        isAlive = false
    }

    messageEl.textContent = message
    sumEl.textContent += sum
}


// 3. Log it out!

// console.log(message)
// //Add the hasBlackJack variable for cashing out money [saving the state using boolean]

// // console.log(hasBlackJack)
// console.log(isAlive)

