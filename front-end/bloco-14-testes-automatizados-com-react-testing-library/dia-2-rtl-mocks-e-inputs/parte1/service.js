const randomInteger = () => Math.floor(Math.random() * 100);

const stringToUpper = (str) => str.toUpperCase();

const firstLetter = (str) => str[0];

const concatStrings = (str1, str2) => str1 + str2;

const fetchDogImage = async () => {
  const url = 'https://dog.ceo/api/breeds/image/random';
  const request = await fetch(url);
  const response = await request.json();
  return response.status;
}

module.exports = { randomInteger, stringToUpper, firstLetter, concatStrings, fetchDogImage };
