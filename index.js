
let firstCard = 10
let secondCard = 12
let cards= [firstCard, secondCard]
let hasBlackJack = false
let isAlive = true
let message = ""
let sum = firstCard + secondCard;

let messageEl= document.getElementById('message-el')
let sumEl= document.querySelector('#sum-el')
let CardsEl = document.querySelector('#cards-el')




function startGame() {
    renderGame()
}



function renderGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card "
    } else if (sum === 21) {
        message = "Woohoo youve got blackjack"
        hasBlackJack = true
    } else  { 
        
        message = "Your out of the game"
        isAlive= false
    }

   
    
    CardsEl.textContent  = "cards: " + cards[0] + " " + cards[1]
    sumEl.textContent = "sum: " + sum
    messageEl.textContent= message
    
}

function newCard() {
    


let card = 7

sum += card

card.push(card)


renderGame()
}



