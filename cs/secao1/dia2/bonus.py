import json
import random


def main():
    poke_name = get_poke_name()
    play_game(poke_name)


def get_poke_name():
    with open('pokemons.json') as file:
        pokemons = json.load(file)['results']
        poke_names = [pokemon['name'] for pokemon in pokemons]
        return random.choice(poke_names)


def play_game(pokemon):
    tries = 0
    victory = False
    while tries < len(pokemon):
        guess = input(f'Quem é esse Pokémon? {pokemon[:tries]}\n')
        if guess == pokemon:
            victory = True
            break
        tries += 1

    get_result(victory, pokemon)


def get_result(victory, pokemon):
    if victory:
        print(f'Parabéns, você acertou! O Pokémon era {pokemon}')
    else:
        print(f'Não foi dessa vez. O Pokémon era {pokemon}')


if __name__ == '__main__':
    main()
