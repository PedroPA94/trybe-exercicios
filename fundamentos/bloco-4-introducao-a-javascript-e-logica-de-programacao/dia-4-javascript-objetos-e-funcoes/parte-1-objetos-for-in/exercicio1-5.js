let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};


// **** Exercício 1 ****

console.log("Bem-vinda, " +info.personagem);


// **** Exercício 2 ****

info.recorrente = 'Sim'

console.log(info);


// **** Exercício 3 ****

for (let key in info) {
    console.log(key);
};


// **** Exercício 4 ****

for (let key in info) {
    console.log(info[key]);
};


// **** Exercício 5 ****

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell\'s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
};

for (let key in info) {
    if (info[key] === 'Sim' && info2[key] === 'Sim') {
        console.log("Ambos recorrentes");
    } else {
        console.log(info[key] + " e " + info2[key]);
    };
};