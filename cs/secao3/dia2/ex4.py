import requests
from bs4 import BeautifulSoup

url = 'https://pt.wikipedia.org/wiki/Rock_in_Rio'


def get_html_content(url: str):
    page = requests.get(url)
    html_content = page.text

    soup = BeautifulSoup(html_content, 'html.parser')
    soup.prettify()
    return soup


def get_page_links(url: str) -> list[str]:
    soup_page = get_html_content(url)

    links_in_page = soup_page.find_all('a')

    links = [
        link.get('href')
        for link in links_in_page
    ]

    return links


print(get_page_links(url))
