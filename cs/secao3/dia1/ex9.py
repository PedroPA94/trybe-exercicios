import requests


url = 'http://quotes.toscrape.com/api/quotes?page='
page = 1
has_next = True

quotes = []

while has_next:
    response = requests.get(f'{url}{page}').json()

    for quote in response['quotes']:
        quotes.append(quote)

    has_next = response['has_next']
    page += 1

print(quotes)
