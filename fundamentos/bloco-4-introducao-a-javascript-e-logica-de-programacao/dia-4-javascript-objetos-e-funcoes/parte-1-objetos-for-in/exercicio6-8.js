let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
};

// **** Exercício 6 ****

console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama '" + leitor.livrosFavoritos[0].titulo + "'");


// **** Exercício 7 ****

leitor.livrosFavoritos[1] = {};
leitor.livrosFavoritos[1].titulo = 'Harry Potter e o Prisioneiro de Azkaban';
leitor.livrosFavoritos[1].autor = 'JK Rowling';
leitor.livrosFavoritos[1].editora = 'Rocco';

console.log(leitor.livrosFavoritos[1]);


// **** Exercício 8 ****

console.log(leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos");