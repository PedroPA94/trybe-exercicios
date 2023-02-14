import json
import csv

with open('books.json') as books:
    books_list = json.load(books)
    number_of_books = len(books_list)
    categories = {}

    for book in books_list:
        for category in book['categories']:
            if category not in categories:
                categories[category] = 0
            categories[category] += 1

    for key, value in categories.items():
        categories[key] = (value / number_of_books)

with open('books.csv', 'w') as file:
    writer = csv.writer(file)

    headers = ['categoria', 'porcentagem']
    writer.writerow(headers)

    for key, value in categories.items():
        row = [key, value]
        writer.writerow(row)
