var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var checkForMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]){
		result.textContent = "You found a match!";
		score += 1;
		document.getElementById("score").textContent = score;
	} else {
		result.textContent = "Sorry, try again.";
		delayedFlipBack(); // this can be fixed- if you click on a non-match after having matched cards already on the board they all flip back
	}
	cardsInPlay = [];
};
	
var flipCard = function() {
	var cardId = this.getAttribute("data-id");
	var card = cards[cardId];
	this.setAttribute("src", card.cardImage);
	this.setAttribute("class", "clicked");
	console.log(this);
	cardsInPlay.push(card.rank);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
};

