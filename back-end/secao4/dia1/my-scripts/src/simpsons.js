const fs = require('fs').promises;
const path = require('path');

async function readCharacters () {
  try {
    const file = await fs.readFile(path.resolve(__dirname, './simpsons.json'));
    const characters = JSON.parse(file);
    return characters;
  } catch(err) {
    console.error(err);
  }
}

async function printCharacters() {
  const characters = await readCharacters();
  characters.forEach(({id, name}) => { console.log(`${id} - ${name}`)});
}

async function getCharacter(id) {
  const characters = await readCharacters();
  const promise = new Promise((resolve, reject) => {
    if (characters.some((character) => character.id == id)) {
      resolve(characters.find((character) => character.id == id));
    }
    reject(new Error('id não encontrado'))
  });
  return promise;
}

async function removeCharacters() {
  const characters = await readCharacters();
  const filteredCharacters = characters.filter((char) => {
      if (char.id != 10 && char.id != 6) return char
  });
  await fs.writeFile(
    path.resolve(__dirname, './simpsons.json'),
    JSON.stringify(filteredCharacters)
  );
}

async function getSimpsonsFamily() {
  const characters = await readCharacters();
  const simpsonsFamily = characters.filter((char) => {
    if (['1','2','3','4'].includes(char.id)) return char
  });
  await fs.writeFile(
    path.resolve(__dirname, './simpsonFamily.json'),
    JSON.stringify(simpsonsFamily)
  );
}

async function addCharacter(id, name) {
  const file = await fs.readFile(path.resolve(__dirname, './simpsonFamily.json'));
  const oldCharacters = JSON.parse(file);
  const allCharacters = [...oldCharacters, {id, name}];
  await fs.writeFile(
    path.resolve(__dirname, './simpsonFamily.json'),
    JSON.stringify(allCharacters)
  );
}

async function replaceNelson() {
  const file = await fs.readFile(path.resolve(__dirname, './simpsonFamily.json'));
  const oldCharacters = JSON.parse(file);
  const simpsonsFamily = oldCharacters.filter((char) => {
    if (char.id != 8) return char
  });
  const maggie = {
    id: '5',
    name: 'Maggie Simpson'
  };
  const updatedFamily = [...simpsonsFamily, maggie];
  await fs.writeFile(
    path.resolve(__dirname, './simpsonFamily.json'),
    JSON.stringify(updatedFamily)
  );
}

async function main() {
  // console.log(await getCharacter(1))
  // removeCharacters();
  // getSimpsonsFamily();
  // addCharacter('8', 'Nelson Muntz');
  // replaceNelson();
  printCharacters();
}

main();

