
let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards= [firstCard, secondCard]
let sum = firstCard + secondCard;
let hasBlackJack = false
let isAlive = true
let message = ""


let messageEl= document.getElementById('message-el')
let sumEl= document.querySelector('#sum-el')
let cardsEl = document.querySelector('#cards-el')


function getRandomCard() {
    return Math.floor (Math.random() * 14) + 1
    
}
console.log(getRandomCard)




function startGame() {
    renderGame()
}



function renderGame() {


   cardsEl.textContent = "cards: " 
   

   for (let i = 0; i < cards.length; i++) {
       cardsEl.textContent += cards[i] + " "
   }

    
    sumEl.textContent= "sum " + sum;

 if (sum <= 20) {
     message = " Do you want to draw a new card?"
 } else if (sum === 21) {
     message = 'Youve got blackjack'
     hasBlackJack = true

 }
 else {
     message = "Youre out of the game"
     isAlive = false
 }
    messageEl.textContent= message
    
}



function newCard() {
    
let card = getRandomCard()

sum += card

cards.push(card)

renderGame()
}



