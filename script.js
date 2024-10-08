// 1. Create two variables, firstCard and secondCard. 
// 2. Set their values to a random number between 2-11
// 3. Create a variable, sum, and set it to the sum of the two cards

let firstCard = getRandomCard()
let secondCard = getRandomCard()

let sum = firstCard + secondCard

let hasBlackJack =  false

// 4. Create a variable called isAlive and assign it to true
let isAlive = true

// 5. Flip its value to false in the appropriate code block 


// 6. Declare a variable called message and assign its value to an empty string
let message = ""
// 7. Reassign the message variable to the string we're logging out

// 8. Store the message-el paragraph in a variable called messageEl
let messageEl = document.getElementById("message-el")

// 9. Store the sum paragraph in a variable called sumEl
let sumEl = document.querySelector("#drawS") //querySelector is short and dynamic but you've to use the css selector method for calling class, ID or Tag

// 10. Store the cards divs in a variable called cards__box1 and cards__box2

let firstC = document.querySelector("#first")
let secondC = document.querySelector("#second")

// 14. Create a new array - cards - that contains firstCard and secondCard

let cards = [firstCard, secondCard]

//Creating an object Player for the related attributes // Objects - store data in-depth - composite / complex data type && // key-value pairs


// let playerName = "Sumit"
// let playerChips = 145

let player = {
    Name: "Sumit",
    Chips: 145
}

let playerEl = document.getElementById("credit")
playerEl.textContent = player.Name + ": $" + player.Chips


//LOGIC
/*
1) Given Hand is <21 //GOOD
2) Given Hand is 21 //BEST
3) Given Hand is >21 //LOST
*/

// Create a function, getRandomCard(), that always returns the number 5 for avoding hardcoding the card numbers
 
function getRandomCard(){ //hoisting is when function will always be on the top regardless where it was written so that a variable can make use of that.
    return Math.floor(Math.random() * 13 + 1) //Since Math.random generates number between 0.000 to 0.999 multiplying that will generate a whole number and using math.floor will remove the decimas giving us a pure random whole number at the end. and we add +1 so that it gives us number between 1 to 20
}

function start(){
    // 2. Refer to the cards array when rendering out the cards instead of the respective variable

    firstC.textContent = cards[0]
    secondC.textContent = cards[1]

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
    sumEl.textContent = "Current Sum: " + sum
    
}

function draw(){

    // Only allow the player to get a new card if she IS alive and does NOT have Blackjack

    if (isAlive===true && hasBlackJack===false){

    // 11. Create a card variable, and hard code its value to a number (2-11)
    let newNumber = getRandomCard()

    
    // Push the card to the cards array
    cards.push(newNumber)
    // 12. Add the new card to the sum variable
    sum += cards[2]

    console.log("Drawing a new card from the deck!") 
    // 13. Call start function again
    start()
    }
}


// 3. Log it out!

// console.log(message)
// //Add the hasBlackJack variable for cashing out money [saving the state using boolean]

// // console.log(hasBlackJack)
// console.log(isAlive)

