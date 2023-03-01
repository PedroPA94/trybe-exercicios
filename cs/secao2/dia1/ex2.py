from collections import Counter


class Estatistica:
    @classmethod
    def media(cls, numbers: list) -> float:
        return sum(numbers) / len(numbers)

    @classmethod
    def mediana(cls, numbers: list) -> float:
        numbers.sort()
        middle = len(numbers) // 2
        if middle % 2 == 0:
            return (numbers[middle - 1] + numbers[middle]) / 2

        return numbers[middle]

    @classmethod
    def moda(cls, numbers: list):
        most_common, _ = Counter(numbers).most_common()[0]
        return most_common
