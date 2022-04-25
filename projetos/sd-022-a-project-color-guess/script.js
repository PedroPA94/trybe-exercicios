function randomNumber(interval) {
  const number = Math.floor(Math.random() * interval);
  return number;
}

let guessColor = `rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)})`;

const guessText = document.getElementById('rgb-color');
guessText.textContent = guessColor.slice(3);

function checkClickedColor(event) {
  if (event.target.classList.contains('ball')) {
    const clickedColor = event.target.style.backgroundColor;
    const answer = document.getElementById('answer');
    const score = document.getElementById('score');
    if (clickedColor === guessColor) {
      answer.textContent = 'Acertou!';
      score.textContent = parseInt(score.textContent, 10) + 3;
    } else {
      answer.textContent = 'Errou! Tente novamente!';
    }
  }
}

function generateColorCircles() {
  const container = document.getElementById('circle-container');
  const guessColorPosition = randomNumber(6) + 1;
  for (let i = 1; i <= 6; i += 1) {
    const circle = document.createElement('div');
    circle.classList.add('ball');
    container.append(circle);
    if (i === guessColorPosition) {
      circle.style.backgroundColor = guessColor;
    } else {
      circle.style.backgroundColor = `rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)})`;
    }
    container.addEventListener('click', checkClickedColor, { once: true });
  }
}

function resetGame() {
  const container = document.getElementById('circle-container');
  const answer = document.getElementById('answer');
  container.innerHTML = '';
  answer.textContent = 'Escolha uma cor';
  guessColor = `rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)})`;
  guessText.textContent = guessColor.slice(3);
  generateColorCircles();
}

document.getElementById('reset-game').addEventListener('click', resetGame);

generateColorCircles();
