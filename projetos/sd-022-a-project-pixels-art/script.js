function selectColor(e) {
  const deselect = document.querySelector('.selected');
  deselect.classList.remove('selected');
  e.target.classList.add('selected');
}

function paintPixel(e) {
  const currentColor = document.querySelector('.selected').style.backgroundColor;
  e.target.style.backgroundColor = currentColor;
}

function addPalette(n) {
  const colorPalette = document.getElementById('color-palette');
  for (let i = 1; i <= n; i += 1) {
    const colorDiv = document.createElement('div');
    colorDiv.classList.add('color');
    if (i === 1) {
      colorDiv.style.backgroundColor = 'black';
      colorDiv.classList.add('selected');
    } else {
      // eslint-disable-next-line max-len
      const color = `rgb(${Math.floor(Math.random() * 254)}, ${Math.floor(Math.random() * 254)}, ${Math.floor(Math.random() * 254)})`;
      colorDiv.style.backgroundColor = color;
    }
    colorDiv.addEventListener('click', selectColor);
    colorPalette.appendChild(colorDiv);
  }
}

function addPixels(n) {
  const pixelBoard = document.getElementById('pixel-board');
  for (let i = 1; i <= n; i += 1) {
    const line = document.createElement('div');
    line.style.height = '40px';
    for (let j = 1; j <= n; j += 1) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');
      pixel.addEventListener('click', paintPixel);
      line.appendChild(pixel);
    }
    pixelBoard.appendChild(line);
  }
}

addPalette(4);
addPixels(5);

document.getElementById('clear-board').addEventListener('click', () => {
  const pixels = document.querySelectorAll('.pixel');
  // eslint-disable-next-line no-restricted-syntax
  for (const pixel of pixels) {
    pixel.style.backgroundColor = 'white';
  }
});

document.getElementById('generate-board').addEventListener('click', () => {
  const pixelBoard = document.getElementById('pixel-board');
  const boardSize = document.getElementById('board-size').value;
  if (!boardSize) {
    alert('Board inválido!');
    return;
  }
  pixelBoard.innerHTML = '';
  if (boardSize <= 5) {
    addPixels(5);
  } else if (boardSize >= 50) {
    addPixels(50);
  } else {
    addPixels(boardSize);
  }
});

document.getElementById('generate-palette').addEventListener('click', () => {
  const colorPalette = document.getElementById('color-palette');
  const numberOfColors = document.getElementById('color-qty').value;
  colorPalette.innerHTML = '';
  if (numberOfColors <= 4) {
    addPalette(4);
  } else if (numberOfColors >= 20) {
    addPalette(20);
  } else {
    addPalette(numberOfColors);
  }
});
