function filterCoinsArray(arr) {
  return arr.filter((_, index) => index <= 9);
}

function fetchUsdRate() {
  const rateBrl = fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json')
                    .then(response => response.json())
                    .then(data => data.usd.brl);
  return rateBrl
}

async function addCoinsToList(arr) {
  const list = document.getElementById('cryptos-list')
  const rateUsdToBrl = await fetchUsdRate();
  arr.forEach(({ name, symbol, priceUsd }) => {
    let priceBrl = Number(priceUsd) * rateUsdToBrl;
    priceBrl = priceBrl.toLocaleString('pt-br', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    const coin = document.createElement('li');
    coin.textContent = `${name} (${symbol}): R$ ${priceBrl}`;
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