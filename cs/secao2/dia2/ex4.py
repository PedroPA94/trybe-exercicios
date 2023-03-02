from collections.abc import Iterable, Iterator


class Carta:
    def __init__(self, valor, naipe):
        self.valor = valor
        self.naipe = naipe

    def __repr__(self):
        return '<%s de %s>' % (self.valor, self.naipe)


class Baralho(Iterable):
    naipes = 'copas ouros espadas paus'.split()
    valores = 'A 2 3 4 5 6 7 8 9 10 J Q K'.split()

    def __init__(self, strategy):
        self._cartas = [
            Carta(valor, naipe)
            for naipe in self.naipes
            for valor in self.valores
        ]
        self.strategy = strategy

    def __len__(self):
        return len(self._cartas)

    def __iter__(self):
        return BaralhoIterator(self._cartas, self.strategy)


class BaralhoIterator(Iterator):
    def __init__(self, cartas, strategy):
        self.cartas = cartas
        self.strategy = strategy
        self.index = self.strategy.initial_pos

    def __next__(self):
        try:
            carta = self.cartas[self.index]
        except IndexError:
            raise StopIteration
        else:
            self.index = self.strategy.get_index(self.index)
            return carta


class SortStrategy(Iterator):
    initial_pos = 0

    @classmethod
    def get_index(cls, index):
        return index + 1


class ReverseSortStrategy(Iterator):
    initial_pos = -1

    @classmethod
    def get_index(cls, index):
        return index - 1


bar = Baralho(SortStrategy)
for carta in bar:
    print(carta)
