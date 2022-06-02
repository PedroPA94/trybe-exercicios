const { getPokemonDetails } = require("./exercicio8");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    const filter = ({ name }) => name === 'Pikachu';
    const expectedError = new Error('Não temos esse pokémon para você :(');
    getPokemonDetails(filter, (error, msg) => {
      expect(error).toEqual(expectedError);
      done();
    })
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    const filter = ({ name }) => name === 'Charmander';
    const expectedMessage = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember';
    getPokemonDetails(filter, (error, msg) => {
      expect(msg).toBe(expectedMessage);
      done();
    })
  });
});
