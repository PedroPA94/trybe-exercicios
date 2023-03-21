def rec_count_evens(n):
    even = 0
    if n == 1:
        return 0
    if n % 2 == 0:
        even = 1
    return even + rec_count_evens(n - 1)
