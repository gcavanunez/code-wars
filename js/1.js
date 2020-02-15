// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case

//
function isIsogram(str) {
  //   test if empty
  if (str === '') {
    return true;
  }
  //  manipulate str to make all lower case + array
  const strArr = str.toLowerCase().split('');

  const checkArr = function(arr, val) {
    let count = 0;
    arr.forEach((v) => {
      if (v === val) {
        count++;
      }
    });
    return count;
  };
  let res = true;
  strArr.forEach((item, index) => {
    const currentCount = checkArr(strArr, item);
    if (currentCount > 1) {
      res = false;
    }
  });
  //  use find to search for the str
  return res;
}
//
function isIsogram(str) {
  return !/(\w).*\1/i.test(str);
}

// Test.assertSimilar( isIsogram("Dermatoglyphics"), true );
// Test.assertSimilar( isIsogram("isogram"), true );
// Test.assertSimilar( isIsogram("aba"), false, "same chars may not be adjacent" );
// Test.assertSimilar( isIsogram("moOse"), false, "same chars may not be same case" );
// Test.assertSimilar( isIsogram("isIsogram"), false );
// Test.assertSimilar( isIsogram(""), true, "an empty string is a valid isogram" );
