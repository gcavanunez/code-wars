/*

Description:
In this kata, you've to count lowercase letters in a given string and return the letter count in a hash with 'letter' as key and count as 'value'. The key must be 'symbol' instead of string in Ruby and 'char' instead of string in Crystal.

Example:

letter_count('arithmetics') #=> {"a": 1, "c": 1, "e": 1, "h": 1, "i": 2, "m": 1, "r": 1, "s": 1, "t": 2}

*/
function letterCount(s) {
  //your code here

  // convertir string  a array
  const arrString = s.split('');

  //   crear dictionary de las letters and string to empty
  let result = {};

  // set or add value to key
  arrString.forEach((item) => {
    if (result[item]) {
      result[item]++;
    } else {
      result[item] = 1;
    }
  });
  return result;
}

// best
const letterCount = (s) =>
  s.split('').reduce((accum, value) => {
    accum[value] = accum[value] ? accum[value] + 1 : 1;
    return accum;
  }, {});
