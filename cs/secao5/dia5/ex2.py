class Stack:
    def __init__(self) -> None:
        self.__stack = []

    def is_empty(self):
        return len(self.__stack) == 0

    def peek(self):
        if self.is_empty:
            return None
        return self.__stack[-1]

    def push(self, value):
        self.__stack.append(value)

    def pop(self):
        return self.__stack.pop()
