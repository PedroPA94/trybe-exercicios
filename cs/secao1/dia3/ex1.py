def fizzbuzz(n):
    if not isinstance(n, int):
        raise TypeError('Argumento precisa ser um inteiro')
    if n <= 0:
        raise ValueError('Argumento precisa ser um inteiro maior que zero')
    result = []
    for i in range(1, n + 1):
        value = i
        if i % 3 == 0:
            if i % 5 == 0:
                value = 'FizzBuzz'
            else:
                value = 'Fizz'
        elif i % 5 == 0:
            value = 'Buzz'
        result.append(value)
    return result
