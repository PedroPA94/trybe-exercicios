from ex2_4 import Stack


def reverse_word(word: str) -> str:
    letters_to_reverse = Stack()
    i = 0

    while word[i] != ')':
        letters_to_reverse.push(word[i])
        i += 1

    reversed_word = ''
    for _ in range(letters_to_reverse.size()):
        reversed_word += letters_to_reverse.pop()

    return reversed_word


def word_processor(word: str) -> str:
    letters = []
    i = 0

    while i in range(len(word)):
        letter = word[i]
        if letter == '(':
            reversed_word = reverse_word(word[i+1:])
            i += len(reversed_word)
            letters.append(reversed_word)
        elif letter != ')':
            letters.append(letter)
        i += 1

    return ''.join(letters)
