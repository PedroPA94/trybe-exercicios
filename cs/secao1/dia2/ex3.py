import random

with open('band_names.txt') as bands:
    possible_words = [band.strip() for band in bands]

word = random.choice(possible_words)
scrambled_word = "".join(random.sample(word, len(word)))

tries = 0
win = False

while tries < 3:
    print(f'Word: {scrambled_word}')
    guess = input('Your guess: ')

    if (guess == word):
        win = True
        break
    else:
        tries += 1

if (win):
    print('You win!')
else:
    print('You lose...')
print(f'The word was: {word}')
