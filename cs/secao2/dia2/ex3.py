from ex2 import Baralho
from collections.abc import Iterable, Iterator


class BaralhoReverso(Baralho, Iterable):
    def __iter__(self):
        return BaralhoReversoIterator(self._cartas)


class BaralhoReversoIterator(Iterator):
    def __init__(self, cartas):
        self.cartas = cartas
        self.index = -1

    def __next__(self):
        try:
            carta = self.cartas[self.index]
        except IndexError:
            raise StopIteration
        else:
            self.index -= 1
            return carta


bar = BaralhoReverso()
for carta in bar:
    print(carta)
