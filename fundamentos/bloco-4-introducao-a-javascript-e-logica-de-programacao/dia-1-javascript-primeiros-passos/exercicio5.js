const ang1 = 10;
const ang2 = 90;
const ang3 = -70;

let soma = ang1 + ang2 + ang3;

if (ang1 < 0 || ang2 < 0 || ang3 < 0) {
    console.log("Erro: Ângulo inválido (negativo)");
} else if (soma == 180) {
    console.log(true)
} else {
    console.log(false)
}