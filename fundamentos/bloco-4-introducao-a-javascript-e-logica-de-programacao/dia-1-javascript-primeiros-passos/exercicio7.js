const nota = 76;

if (nota > 100 || nota < 0) {
    console.log("Erro: nota inválida");
} else if (nota >= 90) {
    console.log("Conceito A");
} else if (nota >= 80) {
    console.log("Conceito B");
} else if (nota >= 70) {
    console.log("Conceito C");
} else if (nota >= 60) {
    console.log("Conceito D");
} else if (nota >= 50) {
    console.log("Conceito E");
} else {
    console.log("Conceito F");
};