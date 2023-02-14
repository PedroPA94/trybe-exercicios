name = input('Digite um nome: ')

size = len(name)

for i in range(size):
    print(name[:size-i])
