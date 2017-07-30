// Функция reverseInt переворачивает цифры в переданном числе и возвращает новое число.
// reverseInt(13); // 31
// reverseInt(-123); // -321

import lengthOfString from './lengthOfString';

const reverseInt = (num) => {
  const numIntoStr = String(num);
  let n = lengthOfString(numIntoStr) - 1;
  let result = '';

  if (numIntoStr[0] === '-') {
    result += '-';
    while (n > 0) {
      result += numIntoStr[n];
      n -= 1;
    }
  } else {
    while (n >= 0) {
      result += numIntoStr[n];
      n -= 1;
    }
  }
  return result;
};

reverseInt(-12345);
