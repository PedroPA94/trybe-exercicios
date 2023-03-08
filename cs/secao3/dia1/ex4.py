import requests
from parsel import Selector

root_url = 'http://books.toscrape.com/'
book_url = root_url + 'catalogue/the-grand-design_405/index.html'

response = requests.get(book_url)
selector = Selector(response.text)

title = selector.css('.product_main h1::text').get()
price = selector.css('.price_color::text').get()[2:]
description = selector.css('#product_description ~ p::text').get()
cover_url = selector.css('.thumbnail img::attr(src)').get()

suffix = '...more'
if description and description.endswith(suffix):
    description = description[:-len(suffix)]

print(f'{title},{price},{description},{root_url + cover_url}')
