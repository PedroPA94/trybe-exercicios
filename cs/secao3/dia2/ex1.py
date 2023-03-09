from selenium import webdriver


url = 'https://quotes.toscrape.com/'

options = webdriver.FirefoxOptions()
options.add_argument('--ignore-certificate-errors')
options.add_argument('--ignore-ssl-errors=yes')
# options.add_argument('--start-maximized')
options.add_argument('--headless')

firefox = webdriver.Remote(
    command_executor="http://localhost:4444/wd/hub",
    options=options
)

firefox.get(url)

quote_div = firefox.find_element('css selector', 'div.quote')

quote = {}

quote['text'] = (
    quote_div.find_element('css selector', '.text')
    .get_attribute('innerHTML')
)

quote['author'] = (
    quote_div.find_element('css selector', 'small.author')
    .get_attribute('innerHTML')
)

quote['tags'] = [
    tag.get_attribute('innerHTML')
    for tag in quote_div.find_elements('css selector', 'a.tag')
]

firefox.quit()

print(quote)
