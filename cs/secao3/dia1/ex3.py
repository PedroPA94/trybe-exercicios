import requests

url = 'https://scrapethissite.com/pages/advanced/?gotcha=headers'
headers = {'User-Agent': 'Mozilla/5.0'}

response = requests.get(url, headers=headers)

assert "bot detected" not in response.text
