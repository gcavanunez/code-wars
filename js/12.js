/*

Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

Find the number of Friday 13th in the given year.

Input: Year as an integer.

Output: Number of Black Fridays in the year as an integer.

Examples:

unluckyDays(2015) == 3
unluckyDays(1986) == 1

*/
function unluckyDays(year){

  let result = 0;
  for (i = 0; i < 12; i++) {
  
     const day =  new Date(year,i,13); 
      if(day.getDay() == 5){
        result++;
      }
  }
  return result;
}

function unluckyDays(year){
  return Array.from({ length: 12 }).filter((_, i) => new Date(year, i, 13).getDay() === 5).length
}