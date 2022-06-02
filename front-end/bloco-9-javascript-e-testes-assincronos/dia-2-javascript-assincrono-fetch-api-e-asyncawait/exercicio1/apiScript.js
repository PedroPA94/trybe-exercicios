// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const addJoke = (joke) => {
  const jokeContainer = document.getElementById('jokeContainer');
  jokeContainer.textContent = joke;
}

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => addJoke(data.joke))
    .catch(err => console.log(err));
};

window.onload = () => fetchJoke();