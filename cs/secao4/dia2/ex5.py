def is_prime(num):
    return prime_checker(num, 2)


def prime_checker(num, divisor):
    if divisor > num - 1:
        return True
    if num % divisor == 0:
        return False
    return prime_checker(num, divisor + 1)
