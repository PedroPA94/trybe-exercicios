def find_triangle(sizeA, sizeB, sizeC):
    if not is_triangle(sizeA, sizeB, sizeC):
        return 'Não é triângulo'
    if sizeA == sizeB == sizeC:
        return 'Equilátero'
    if sizeA != sizeB != sizeC:
        return 'Escaleno'
    return 'Isósceles'


def is_triangle(sizeA, sizeB, sizeC):
    sumAB = sizeA + sizeB
    sumAC = sizeA + sizeC
    sumBC = sizeB + sizeC
    if sumAB > sizeC and sumAC > sizeB and sumBC > sizeA:
        return True
    return False


print(find_triangle(2, 4, 5))
print(find_triangle(3, 3, 3))
print(find_triangle(1, 3, 3))
print(find_triangle(1, 3, 40))
