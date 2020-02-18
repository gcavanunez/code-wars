/*


Write a program that will calculate the number of trailing zeros in a factorial of a given number.

N! = 1 * 2 * 3 * ... * N

Be careful 1000! has 2568 digits...

For more info, see: http://mathworld.wolfram.com/Factorial.html

Examples
zeros(6) = 1
# 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

zeros(12) = 2
# 12! = 479001600 --> 2 trailing zeros
Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros.

*/

function zeros(n) {
  // your code here
  // Initialize result
  let count = 0;

  // Keep dividing n by powers
  // of 5 and update count
  for (i = 5; n / i >= 1; i *= 5) count += n / i;

  return Math.floor(count);
  //   return amtZero
}

var result = 0;
for (var i = 5; i <= n; i += 5) {
  var num = i;
  while (num % 5 === 0) {
    num /= 5;
    result++;
  }
}
return result;

//

var exponent = Math.floor(Math.log(n) / Math.log(5));
var sum = 0;
for (var i = 1; i <= exponent; i++) {
  var num = Math.pow(5, i);
  sum += Math.floor(n / num);
}
return sum;

var zs = 0;
while (n > 0) {
  n = Math.floor(n / 5);
  zs += n;
}
return zs;
