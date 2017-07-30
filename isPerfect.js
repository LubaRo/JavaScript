// Функция isPerfect принимает число и возвращает true, если оно совершенное, и false в ином случае.
// Совершенное число — положительное целое число, равное сумме
// его положительных делителей, не считая само число. 

const isPerfect = (num) => {
  let sumOfDivisors = 0;
  if (num > 5) {
    for (let divisor = 1; divisor <= num / 2; divisor += 1) {
      if (num % divisor === 0) {
        sumOfDivisors += divisor;
      }
    }
    if (sumOfDivisors === num) {
      return true;
    }
  }
  return false;
};

isPerfect(28);
isPerfect(8128);
isPerfect(1);
