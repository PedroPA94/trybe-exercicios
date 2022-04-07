const valorCusto = 100;
const valorVenda = 200;
const imposto = 0.2;
const itensVendidos = 1000

let custoTotal = valorCusto + valorCusto * imposto;

let lucro = valorVenda - custoTotal;

if (valorCusto < 0 || valorVenda < 0) {
    console.log("Erro: valor de custo/venda inválido");
} else {
    console.log("Lucro total após a venda de", itensVendidos, "itens: R$", lucro*itensVendidos);
};