// Функция lengthOfString подсчитывает количество символов в строке

const lengthOfString = (str) => {
  let n = 0;
  while (str[n] !== undefined) {
    n += 1;
  }
  return n;
};

export default lengthOfString;

lengthOfString('Hello!');
