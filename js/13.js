/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
*/
function toCamelCase(str){
  if(!str){
    return '';
  }
  let arr=[];
  if(str.search('-')>0){
    arr = str.split('-');
  }else{
    arr = str.split('_');
  }
  let result = '';
  arr.forEach((item,index)=>{
    if(!index){
      result += item[0]
    }else{
     result += item[0].toUpperCase();
    }
   result += item.slice(1).toLowerCase();
  });
  return result;
}

function toCamelCase(str){
  var regExp=/[-_]\w/ig;
  return str.replace(regExp,function(match){
        return match.charAt(1).toUpperCase();
   });
}