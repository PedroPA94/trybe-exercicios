from selenium import webdriver


url = 'https://www.wikimetal.com.br/iron-maiden-scorpions-kiss-veja-melhores-albuns-1982/'

options = webdriver.FirefoxOptions()
options.add_argument('--ignore-certificate-errors')
options.add_argument('--ignore-ssl-errors=yes')
options.add_argument('--headless')

firefox = webdriver.Remote(
    command_executor="http://localhost:4444/wd/hub",
    options=options
)

firefox.get(url)

paragraphs = firefox.find_elements(
    'css selector',
    'article > div.entry-content p'
)

for paragraph in paragraphs:
    print(paragraph.get_attribute('innerHTML'))

firefox.quit()
