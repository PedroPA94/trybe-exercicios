function filterCoinsArray(arr) {
  return arr.filter((_, index) => index <= 9);
}

function addCoinsToList(arr) {
  const list = document.getElementById('cryptos-list')
  arr.forEach(({ name, symbol, priceUsd }) => {
    const coin = document.createElement('li');
    coin.textContent = `${name} (${symbol}): $${Number(priceUsd).toFixed(2)}`;
    list.append(coin)
  });
}

function fetchCoins() {
  const url = `https://api.coincap.io/v2/assets`;
  fetch(url)
    .then(response => response.json())
    .then(data => filterCoinsArray(data.data))
    .then(addCoinsToList)
    .catch(err => console.log(err));
}

window.onload = () => fetchCoins();