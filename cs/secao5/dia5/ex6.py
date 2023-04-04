from ex2_4 import Stack


def solve_expression(expr: str):
    stack = Stack()

    tokens = expr.split(' ')

    for token in tokens:
        if token == '+':
            result = stack.pop() + stack.pop()
            stack.push(result)
        elif token == '*':
            result = stack.pop() * stack.pop()
            stack.push(result)
        elif token == '-':
            second, first = stack.pop(), stack.pop()
            result = first - second
            stack.push(result)
        elif token == '/':
            try:
                divisor, dividend = stack.pop(), stack.pop()
                result = dividend / divisor
                stack.push(result)
            except ZeroDivisionError:
                print('Não é possível dividir por zero! Terminando execução')
                return
        else:
            stack.push(int(token))

    return stack.pop()
