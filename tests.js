const chai = require('chai');
const expect = chai.expect;

const functions = require('./index.js');

describe('numberToDigitArray', function() {
  it('returns [1, 2, 3] when passed in number 123', () => {
    expect(functions.numberToDigitArray(1)[0]).to.equal(1);
  });
  it('returns [1, 2, 3] when passed in number 123', () => {
    expect(functions.numberToDigitArray(123)[1]).to.equal(2);
  });
  it('returns [1, 2, 3] when passed in number 123', () => {
    expect(functions.numberToDigitArray(123)[2]).to.equal(3);
  });
});

describe('sumOfOddIndexes', function() {
  it('returns 48 when passed in array [4, 9, 0, 3, 6, 2, 9, 8, 9, 2, 5, 3, 7, 4, 8, 4]', () => {
    expect(functions.sumOfOddIndexes([4, 9, 0, 3, 6, 2, 9, 8, 9, 2, 5, 3, 7, 4, 8, 4])).to.equal(48);
  });
  it('returns 49 when passed in array [5, 9, 0, 3, 6, 2, 9, 8, 9, 2, 5, 3, 7, 4, 8, 4]', () => {
    expect(functions.sumOfOddIndexes([5, 9, 0, 3, 6, 2, 9, 8, 9, 2, 5, 3, 7, 4, 8, 4])).to.equal(49);
  });
});

describe('sumOfEvenIndexes', function() {
  it('returns 52 when passed in array [4, 9, 0, 3, 6, 2, 9, 8, 9, 2, 5, 3, 7, 4, 8, 4]', () => {
    expect(functions.sumOfEvenIndexes([4, 9, 0, 3, 6, 2, 9, 8, 9, 2, 5, 3, 7, 4, 8, 4])).to.equal(52);
  });
  it('returns 45 when passed in array [4, 1, 0, 3, 6, 2, 9, 8, 9, 2, 5, 3, 7, 4, 8, 4]', () => {
    expect(functions.sumOfEvenIndexes([4, 1, 0, 3, 6, 2, 9, 8, 9, 2, 5, 3, 7, 4, 8, 4])).to.equal(45);
  });
});

describe('check', function() {
  it('returns true when passed in a valid card number', () => {
    expect(functions.check(4847352989263094)).to.equal(true);
  });
  it('returns true when passed an invalid card number', () => {
    expect(functions.check(4847352989263095)).to.equal(false);
  });
});
