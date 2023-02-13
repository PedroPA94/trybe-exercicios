def mean(list_of_numbers):
    n = len(list_of_numbers)
    list_sum = 0
    for number in list_of_numbers:
        list_sum += number
    return list_sum / n


list1 = [2, 4, 6, 8]
list2 = [123, 234, 54, 65677, 76]

print(mean(list1))
print(mean(list2))
