import requests
from parsel import Selector


url = 'https://en.wikipedia.org/wiki/Gallery_of_sovereign_state_flags'

response = requests.get(url)
selector = Selector(response.text)

flags = selector.css('li.gallerybox a.image > img::attr(src)').getall()

for flag in flags:
    flag_file = flag.split('/')[-1]
    flag_image = requests.get('https:' + flag).content
    with open(f'./flags/{flag_file}', 'wb') as file:
        file.write(flag_image)
