def find_longest_name(list_of_names):
    longest_name = ''
    for name in list_of_names:
        if (len(name) > len(longest_name)):
            longest_name = name
    return name


names = ['Pedro', 'Caio', 'José', 'Fernanda']
print(find_longest_name(names))