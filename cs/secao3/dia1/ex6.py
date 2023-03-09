from pymongo import MongoClient
import time


def get_user_category_choice(categories: list) -> int:
    user_choice = 0
    while user_choice < 1:
        print('Categorias disponíveis:')

        for i in range(1, len(categories)):
            print(f'{i} - {categories[i]}')

        try:
            user_choice = int(input('\n Digite um número de categoria: '))
            print('')
        except ValueError:
            user_choice = 0

        if (user_choice < 1 or user_choice > len(categories) - 1):
            user_choice = 0
            print('\n \033[031mCategoria inválida\033[0m \n')
            time.sleep(1)

    return user_choice


with MongoClient() as client:
    db = client.library
    books = db.books

    categories_in_db = books.distinct('categories')
    user_choice = get_user_category_choice(categories_in_db)

    chosen_category = categories_in_db[user_choice]
    books_in_category = books.find({'categories': chosen_category})

    for book in books_in_category:
        print(book['title'])
