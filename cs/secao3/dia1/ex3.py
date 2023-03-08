import requests

url = 'https://scrapethissite.com/pages/advanced/?gotcha=headers'
headers = {'User-Agent': 'Mozilla/5.0', 'Accept': 'text/html'}

response = requests.get(url, headers=headers)

assert "is missing" not in response.text
