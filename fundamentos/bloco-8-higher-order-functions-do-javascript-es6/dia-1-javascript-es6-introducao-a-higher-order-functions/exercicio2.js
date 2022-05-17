const prizeResults = (bet, func) => {
  const prizeNumber = Math.floor(Math.random() * 5) + 1;
  return func(bet, prizeNumber) ? 'Parabéns, você ganhou!' : 'Tente novamente.';
}

const checkBet = (bet, prizeNumber) => bet === prizeNumber;

console.log(prizeResults(2, checkBet))
