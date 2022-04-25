function getTextInput() {
  const input = document.getElementById('text-input');
  const memeText = document.getElementById('meme-text');
  input.addEventListener('keyup', () => {
    const text = input.value;
    memeText.textContent = text;
  });
}

function setMemeInsertToMemeImage(event) {
  const memeImage = document.getElementById('meme-image');
  if (event.target.parentElement.id === 'meme-templates') {
    memeImage.src = event.target.src;
  } else {
    const memeInsert = event.target.files[0];
    memeImage.src = URL.createObjectURL(memeInsert); // https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications
  }
}

function setMemeBorder(event) {
  const memeContainer = document.getElementById('meme-image-container');
  const id = event.target.id;
  memeContainer.className = `${id}`;
}

function addEventListenerToButtons() {
  const buttons = document.querySelectorAll('button');
  for (const button of buttons) {
    button.addEventListener('click', setMemeBorder);
  }
}

function addMemeTemplates() {
  const templatesContainer = document.getElementById('meme-templates');
  for (let i = 1; i <= 4; i += 1) {
    const image = document.createElement('img');
    image.src = `imgs/meme${i}.png`;
    image.id = `meme-${i}`;
    image.addEventListener('click', setMemeInsertToMemeImage);
    templatesContainer.append(image);
  }
}

document.getElementById('meme-insert').addEventListener('change', setMemeInsertToMemeImage);

getTextInput();
addEventListenerToButtons();
addMemeTemplates();
