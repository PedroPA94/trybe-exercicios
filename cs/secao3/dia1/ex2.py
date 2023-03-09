import requests

url = "https://api.github.com/users"

response = requests.get(url)

for user in response.json():
    print(user['login'], user['url'])
