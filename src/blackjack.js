/**
 * Should return the basic numeric value of a card
 * @param  {String} cardName
 * @return {Number}
 */
function cardValue(cardName) {
  if (cardName === 'ace') {
    return 11;
  } else if (cardName === 'jack') {
    return 10;
  } else if (cardName === 'queen') {
    return 10;
  } else if (cardName === 'king') {
    return 10;
  } else {
    return parseInt(cardName, 10);
  }
}

/**
 * Returns the numeric sum of two numbers
 * @param  {Number} a
 * @param  {Number} b
 * @return {Number}
 */
function sum(a, b) {
  return a + b;
}

/**
 * Returns if a dealer should split doubles
 * @param  {String} cardOne
 * @param  {String} cardTwo
 * @return {Boolean}
 */
function shouldSplit(cardOne, cardTwo) {
  if (cardOne == cardTwo) {
    return true;
  } else {
    return false;
  }
}

/**
 * Returns if a dealer should hit given two cards
 * @param  {String} cardOne
 * @param  {String} cardTwo
 * @return {Boolean}
 */
function shouldHit(cardOne, cardTwo) {
  var total = cardValue(cardOne) + cardValue(cardTwo);

  if (total > 17) {
    return false;
  } else if (shouldSplit(cardOne, cardTwo)) {
    return false;
  }

  return true;

}

/**
 * Returns what the dealer should do
 * @param  {String} cardOne
 * @param  {String} cardTwo
 * @return {String}
 */
function selectAction(cardOne, cardTwo) {
  if (shouldHit(cardOne, cardTwo)) {
    return 'hit';
  } else if (shouldSplit(cardOne, cardTwo)) {
    return 'split';
  } else {
    return 'stay';
  }

}
