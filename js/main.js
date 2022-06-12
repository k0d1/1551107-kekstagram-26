// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min >= max) {
    min = 0;
    max = 0;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const checkStringLength = (string, maxLength) => {
  if(string > maxLength) {
    return false;
  }
  return true;
};
