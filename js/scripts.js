function getRandomIntInclusive(min, max) {
  min = Math.ceil(1);
  max = Math.floor(20);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomIntInclusive());
