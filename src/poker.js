function winningPair(pair1, pair2) {
  const cardValues = {
      '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10,
      'J': 11, 'Q': 12, 'K': 13, 'A': 14
  };

  function calculatePairValue(pair) {
      return cardValues[pair[0]] + cardValues[pair[1]];
  }

  function isPair(pair) {
      return pair[0] === pair[1];
  }

  const isPair1 = isPair(pair1);
  const isPair2 = isPair(pair2);

  if (isPair1 && isPair2) {
      const value1 = calculatePairValue(pair1);
      const value2 = calculatePairValue(pair2);

      if (value1 > value2) {
          return pair1;
      } else if (value2 > value1) {
          return pair2;
      } else {
          return [];
      }
  } else if (isPair1) {
      return pair1;
  } else if (isPair2) {
      return pair2;
  } else {
      return [];
  }
}

// Test cases
console.log(winningPair(['Q', '6'], ['J', 'K'])); // => []
console.log(winningPair(['9', '9'], ['7', '7'])); // => ['9', '9']
console.log(winningPair(['K', '3'], ['K', 'K'])); // => ['K', 'K']

function winningPairFromArray() {}

function winning3CardHand() {}

module.exports = {
  winningPair,
  winningPairFromArray,
  winning3CardHand
}
