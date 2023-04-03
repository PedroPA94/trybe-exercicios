class Stack:
    def __init__(self) -> None:
        self.__stack = []

    def is_empty(self):
        return len(self.__stack) == 0

    def size(self):
        return len(self.__stack)

    def peek(self):
        if self.is_empty():
            return None
        return self.__stack[-1]

    def push(self, value):
        self.__stack.append(value)

    def pop(self):
        if self.is_empty():
            return None
        return self.__stack.pop()

    # Exercício 3
    def min_value(self):
        if self.is_empty():
            return None

        min_value = self.__stack[0]
        for i in range(1, len(self.__stack)):
            if self.__stack[i] < min_value:
                min_value = self.__stack[i]
        return min_value


# Exercício 4
class StackOverflow(Exception):
    def __init__(self, *args: object) -> None:
        super().__init__(*args)


class LimitedStack(Stack):
    def __init__(self, limit) -> None:
        super().__init__()
        self.__limit = limit

    def push(self, value):
        if self.size() == self.__limit:
            raise StackOverflow('Não é possível adicionar itens à pilha')

        super().push(value)
