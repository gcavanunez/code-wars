/*

This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.



*/

function accum(s) {
  const arr = s.split('');

  const newArr = arr.map((item, index) => {
    let innerArr = '';
    for (let step = 0; step <= index; step++) {
      if (step === 0) {
        innerArr += item.toUpperCase();
      } else {
        innerArr += item.toLowerCase();
      }
    }
    return innerArr;
  });
  let resultString = '';
  newArr.forEach((item, index) => {
    resultString += item;
    if (index != newArr.length - 1) {
      resultString += '-';
    }
  });
  return resultString;
}

function accum(s) {
  return s.split('').map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i)).join('-');
}
