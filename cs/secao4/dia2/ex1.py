def count_evens(n):
    count = 0
    for num in range(1, n + 1):
        if num % 2 == 0:
            count += 1

    return count
