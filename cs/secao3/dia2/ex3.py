from selenium import webdriver


url = 'https://diolinux.com.br/'

options = webdriver.FirefoxOptions()
options.add_argument('--ignore-certificate-errors')
options.add_argument('--ignore-ssl-errors=yes')
options.add_argument('--headless')

firefox = webdriver.Remote(
    command_executor="http://localhost:4444/wd/hub",
    options=options
)

firefox.get(url)

posts = []

posts_div = firefox.find_elements(
    'css selector',
    '.inhype-post'
)

for post_div in posts_div:
    post = {}

    post['link'] = post_div.find_element('tag name', 'a').get_attribute("href")
    post['title'] = post_div.find_element('tag name', 'h3').text

    posts.append(post)

print(posts)

firefox.quit()
