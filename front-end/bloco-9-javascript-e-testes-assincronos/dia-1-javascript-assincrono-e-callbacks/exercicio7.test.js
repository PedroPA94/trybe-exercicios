const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

describe('A função uppercase:', () => {
  it('Converte uma string em maíusculas', (done) => {
    uppercase('ola', (result) => {
      try {
        expect(result).toBe('OLA');
        done();
      } catch(err) {
        done(err);
      }
    })
    ;
  })
})
