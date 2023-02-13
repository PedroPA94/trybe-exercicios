def find_smallest_number(list_of_numbers):
    smallest = list_of_numbers[0]
    for number in list_of_numbers:
        if number < smallest:
            smallest = number
    return smallest


numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
print(find_smallest_number(numbers))
