from abc import ABC, abstractclassmethod


class Orcamento:
    def __init__(self, valor):
        self.valor = valor

    # def calcular_imposto(self, imposto):
    #     if imposto == 'ISS':
    #         return self.__calcular_iss()
    #     elif imposto == 'ICMS':
    #         return self.__calcular_icms()

    # def __calcular_iss(self):
    #     return self.valor * 0.1

    # def __calcular_icms(self):
    #     return self.valor * 0.06

    def calcular_imposto(self, estrategia):
        return estrategia.calcular_valor_imposto(self.valor)


class Imposto(ABC):
    @abstractclassmethod
    def calcular_valor_imposto(cls, valor):
        raise NotImplementedError


class EstrategiaISS(Imposto):
    @classmethod
    def calcular_valor_imposto(cls, valor):
        return valor * 0.1


class EstrategiaICMS(Imposto):
    @classmethod
    def calcular_valor_imposto(cls, valor):
        return valor * 0.06


class EstrategiaPIS(Imposto):
    @classmethod
    def calcular_valor_imposto(cls, valor):
        return valor * 0.0065


class EstrategiaCOFINS(Imposto):
    @classmethod
    def calcular_valor_imposto(cls, valor):
        return valor * 0.03


orcamento = Orcamento(1000)
print(f"ISS: {orcamento.calcular_imposto(EstrategiaISS)}")
print(f"ICMS: {orcamento.calcular_imposto(EstrategiaICMS)}")
print(f"PIS: {orcamento.calcular_imposto(EstrategiaPIS)}")
print(f"COFINS: {orcamento.calcular_imposto(EstrategiaCOFINS)}")
