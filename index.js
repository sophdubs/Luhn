// Step1: turn number into array of digits, excluding the last one which is the check digit.
// Step2: reverse the array.
// Step3: multiply every second digit by 2 starting with index 0.
// Step4: Loop through array. If any of the numbers in the array are greater than 9, add their individual digits together and reassign it to that value.
// Step 5: Sum all values of the array
// Step 6: return sum % 10 === 0.



// HELPER FUNCS

// Returns the number in an array of digits for easier manipulation
const numberToDigitArray = function(number) {
  let digitArr = [];
  while (number > 0) {
    let lastDigit = number % 10;
    digitArr.unshift(lastDigit);
    number = Math.floor(number / 10);
  }
  return digitArr;
}

// Returns the sum of all odd indexed values in the array
const sumOfOddIndexes = function(arr) {
  let total = 0;
  for (let i = 0; i <= arr.length - 1; i += 2) {
    total += arr[i];
  }
  return total;
}

// Returns the sum of all even indexed values * 2
// If resulting value is greater than nine, then we subtract nine from it.
const sumOfEvenIndexes = function(arr) {
  let total = 0;
  for (let i = 1; i <= arr.length - 1; i += 2) {
    let temp = arr[i] * 2;
    if (temp > 9) {
      temp -= 9;
    }
    total += temp;
  }
  return total;
}

// Returns boolean based on if the input num is divisible by 10.
const checkModuloTen = function(num) {
  return num % 10 === 0;
}

const check = function(number) {
  let digitArray = numberToDigitArray(number);
  let reversed = digitArray.reverse();
  let sumOfOddIndexedValues = sumOfOddIndexes(reversed);
  let sumOfEvenIndexedValues = sumOfEvenIndexes(reversed);
  let finalAnswer = checkModuloTen(sumOfEvenIndexedValues + sumOfOddIndexedValues);
  return finalAnswer;
}

module.exports = {
  numberToDigitArray,
  sumOfOddIndexes,
  sumOfEvenIndexes,
  check
};

