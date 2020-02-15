/*
Description:
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

function findShort(s) {
  const sentenceArr = s.split(' ');
  let theChosenWord = '';
  sentenceArr.forEach((item) => {
    sentenceArr.forEach((itemInner) => {
      if (item.length <= itemInner.length) {
        if (theChosenWord == '') {
          theChosenWord = item;
        }
        if (item.length <= theChosenWord.length) {
          theChosenWord = item;
        }
      }
    });
  });
  return theChosenWord.length;
}

function findShort(s) {
  return Math.min.apply(null, s.split(' ').map((w) => w.length));
}
