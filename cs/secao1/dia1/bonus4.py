#   Álcool:
#     - Até 20 litros, desconto de 3% por litro;
#     - Acima de 20 litros, desconto de 5% por litro.
#   Gasolina:
#     - Até 20 litros, desconto de 4% por litro;
#     - Acima de 20 litros, desconto de 6% por litro.
# Escreva uma função que receba o número de litros vendidos, o tipo de combustivel (codificado da seguinte forma: A - álcool, G - gasolina), e retorne o valor a ser pago pelo cliente, sabendo-se que o preço do litro da gasolina é R$ 2,50, e o preço do litro do álcool é R$ 1,90.

def fuel_cost(liters, fuel_type):
    if fuel_type == 'A':
        if liters > 20:
            return liters * (1.9 * 0.95)
        return liters * (1.9 * 0.97)
    if fuel_type == 'G':
        if liters > 20:
            return liters * (2.5 * 0.94)
        return liters * (2.5 * 0.96)
    raise Exception('Invalid fuel type')


print(fuel_cost(21, 'A'))
print(fuel_cost(21, 'G'))
          