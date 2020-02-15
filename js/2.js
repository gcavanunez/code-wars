/* prompt
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.

The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
  var vowelsCount = 0;

  // enter your majic here
  const newStr = str.replace(/a|e|i|o|u/g, '');
  vowelsCount = str.length - newStr.length;
  return vowelsCount;
}

/* best
function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}
*/

/* test
describe("Case 1", function(){
    it ("should be defined", function(){
        Test.assertEquals(getCount("abracadabra"), 5)
    });
});
*/
