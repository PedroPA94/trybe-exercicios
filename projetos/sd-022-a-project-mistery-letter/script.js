const button = document.getElementById('criar-carta');
const generatedLetter = document.getElementById('carta-gerada');
const wordCounter = document.getElementById('carta-contador');

// class groups
const style = ['newspaper', 'magazine1', 'magazine2'];
const size = ['medium', 'big', 'reallybig'];
const rotation = ['rotateleft', 'rotateright'];
const skew = ['skewleft', 'skewright'];

function getRandomClasses(...classGroups) {
  const classes = classGroups.reduce((acc, cur) => {
    const options = cur.length;
    const randomNum = Math.floor(Math.random() * options);
    return acc.concat(cur[randomNum], ' ');
  }, '');
  return classes.trim();
}

button.addEventListener('click', () => {
  const text = document.getElementById('carta-texto').value;
  if (text.trim().length === 0) {
    generatedLetter.textContent = 'Por favor, digite o conteúdo da carta.';
    return;
  }
  const words = text.split(' ');
  generatedLetter.innerHTML = '';
  wordCounter.textContent = words.length;
  words.forEach((word) => {
    const span = document.createElement('span');
    span.textContent = word;
    span.className = getRandomClasses(style, size, rotation, skew);
    span.addEventListener('click', () => {
      span.className = getRandomClasses(style, size, rotation, skew);
    });
    generatedLetter.append(span);
  });
});
