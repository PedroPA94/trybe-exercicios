let moradores = {
    blocoUm: [
        {
        nome: 'Luiza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
        },
        {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
        },
    ],
    blocoDois: [
        {
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,
        },
        {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,
        },
    ],
};

const ultimoMorador = moradores.blocoDois[1]
const fullName = ultimoMorador.nome + " " + ultimoMorador.sobrenome 

console.log("O morador do bloco 2 de nome " + fullName + " mora no " + ultimoMorador.andar + "º andar, apartamento " + ultimoMorador.apartamento);

for (let bloco in moradores) {
    for (let morador in moradores[bloco]) {
        console.log("Morador do " + bloco + ": " + moradores[bloco][morador].nome + " " + moradores[bloco][morador].sobrenome)
    }
}