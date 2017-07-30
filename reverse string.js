// Функция reverse переворачивает строку
import lengthOfString from './lengthOfString';

const reverse = (str) => {
  let x = lengthOfString(str) - 1;
  let result = '';
  while (x >= 0) {
    result += str[x];
    x -= 1;
  }
  return result;
};


reverse('hello, world!');
