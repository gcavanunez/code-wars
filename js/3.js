/*

The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input
Input will consist of a list of lists containing two items each. Each list contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Note for F#: The input will be of (int list list) which is a List<List>

Example Input
[[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]

*/
function openOrSenior(data) {
  const logicForEach = function(item) {
    if (item[0] > 54 && item[1] > 7) {
      return 'Senior';
    }
    return 'Open';
  };
  let res = [];
  data.forEach((row) => {
    res.push(logicForEach(row));
  });
  return res;
}

// Destructuring: [age, handicap] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// Arrow Functions: () => {} https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

function openOrSenior(data) {
  return data.map(([ age, handicap ]) => (age > 54 && handicap > 7 ? 'Senior' : 'Open'));
}
