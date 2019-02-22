// queryselectors
const card = document.querySelectorAll(".card");
const reset = document.querySelector(".restart");
let cards = [...card];
var cardBucket = [];
let matchedCard = document.getElementsByClassName("match");
// function to shuffle an array was already provided from here.
// This is known as Fisher-Yates (aka Knuth) Shuffle
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function restart() {
  cards = shuffle(cards);
  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.remove("show", "open", "match", "disabled");
  }
}
function displayCard(e) {
  e.preventDefault();
  let selectCard = e.target;
  console.log(selectCard)
  selectCard.classList.toggle("open");
  selectCard.classList.toggle("show");
  selectCard.classList.toggle("disabled");
}

function cardMatch(e) {
  e.preventDefault();
  let select = e.target;
  console.log(select,'s')
  cardBucket.push(e.target);
  let len = cardBucket.length;
  if (len === 2);
  {
    if (cardBucket[0].type === cardBucket[1].type) {
      matched();
    } else {
      unmatched();
    }
  }
}
function matched() {
  cardBucket[0].classList.add("match", "disabled");
  cardBucket[1].classList.add("match", "disabled");
  cardBucket[0].classList.remove("show", "open", "no-event");
  cardBucket[1].classList.remove("show", "open", "no-event");
  cardBucket = [];
}

function unmatched() {
  cardBucket[0].classList.add("unmatched");
  cardBucket[1].classList.add("unmatched");
  disable();
  setTimeout(() => {
    cardBucket[0].classList.remove("show", "open", "no-event", "unmatched");
    cardBucket[1].classList.remove("show", "open", "no-event", "unmatched");
    enable();
    cardBucket = [];
  });
}

function disable() {
  cards.forEach(card => {
    card.classList.add("disabled");
  });
}
function enable() {
  cards.forEach(card => {
    card.classList.remove("disabled");
    for (var i = 0; i < matchedCard.length; i++) {
      matchedCard[i].classList.add("disabled");
    }
  });
}


// event listeners
cards.forEach(card => {
  card.addEventListener("click", displayCard);
  card.addEventListener("click", cardMatch);
});
reset.addEventListener("click", restart);
