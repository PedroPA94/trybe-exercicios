const salarioBruto = 5000;
let salarioBase;
let salarioLiquido;
let aliquotaPrevidencia;
let aliquotaImpostoRenda;
let parcelaImpostoRenda;

if (salarioBruto <= 1556.94) {
    aliquotaPrevidencia = 0.08;
} else if (salarioBruto <= 2594.92) {
    aliquotaPrevidencia = 0.09;
} else if (salarioBruto <= 5189.82) {
    aliquotaPrevidencia = 0.11;
} else {
    aliquotaPrevidencia = 570.88;
};

if (salarioBruto > 5189.82) {
    salarioBase = salarioBruto - aliquotaPrevidencia;
} else {
    salarioBase = salarioBruto - salarioBruto * aliquotaPrevidencia;
};

if (salarioBase <= 1903.98) {
    aliquotaImpostoRenda = 0;
    parcelaImpostoRenda = 0;
} else if (salarioBase <= 2826.65) {
    aliquotaImpostoRenda = 0.075;
    parcelaImpostoRenda = 142.80;
} else if (salarioBase <= 3751.05) {
    aliquotaImpostoRenda = 0.15;
    parcelaImpostoRenda = 354.80;
} else if (salarioBase <= 4664.68) {
    aliquotaImpostoRenda = 0.225;
    parcelaImpostoRenda = 636.13;
} else {
    aliquotaImpostoRenda = 0.275;
    parcelaImpostoRenda = 869.36;
}

salarioLiquido = salarioBase - (salarioBase * aliquotaImpostoRenda - parcelaImpostoRenda);

console.log("Um salário bruto de R$", salarioBruto, "receberá, líquido, R$", salarioLiquido);