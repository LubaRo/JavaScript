// Функция isPowerOfThree определяет, является ли переданное число натуральной степенью тройки

// isPowerOfThree(1); // true (3^0)
// isPowerOfThree(2); // false
// isPowerOfThree(9); // true (3^2)

const isPowerOfThree = (num) => {
  let n = num;
  if (n === 1) {
    return true;
  }
  while (n % 3 === 0) {
    const d = x => x / 3;
    n = d(n);
    if (n === 1) {
      return true;
    }
  }

  return false;
};

isPowerOfThree(1);
isPowerOfThree(3);
isPowerOfThree(81);
