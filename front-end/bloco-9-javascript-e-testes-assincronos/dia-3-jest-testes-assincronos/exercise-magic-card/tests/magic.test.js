const { saveFavoriteMagicCard } = require('../src/magic.js');
const favoriteCards = require('../data/favoriteCards.js');

const retrievesFavoriteCards = () => {
  while (favoriteCards.length > 4) {
    favoriteCards.pop();
  }
}

afterEach(() => retrievesFavoriteCards())

describe(' Testa a função saveFavoriteMagicCard', () => {
  it('Testa se um novo card é adicionado a cada execução', async () => {
    expect.assertions(3);
    await saveFavoriteMagicCard('130553');
    expect(favoriteCards.length).toBe(5);
    expect(favoriteCards[4].name).toBe('Beacon of Immortality');
    await saveFavoriteMagicCard('130554');
    expect(favoriteCards.length).toBe(6);
  });

  it('Deve retornar favoriteCards contendo apenas os cards favoritos iniciais', () => {
    expect.assertions(2);
    expect(favoriteCards).toHaveLength(4);
    const expected = ['Ancestor\'s Chosen', 'Angel of Mercy', 'Aven Cloudchaser', 'Ballista Squad'];
    const cardsArrray = favoriteCards.map(({ name }) => name);
    expect(cardsArrray).toEqual(expected);
  });
});
