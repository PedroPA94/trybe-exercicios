function smallerName(arr) {
  let nameBook = arr[0].name;
  arr.forEach(element => {
    if (element.name.length < nameBook.length) {
      nameBook = element.name
    }
  })
  return nameBook;
}

module.exports = smallerName;
