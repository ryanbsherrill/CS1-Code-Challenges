/*
 * Write a function that accepts an array of strings.
 * Return the longest string in the array.
 */

let someStrings = ['one string', 'two strings', 'three strings'];

const longestString = (arr) => {
  let long = '';
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length >= long.length) long = arr[i];
  }
  return long;
};

console.log(longestString(someStrings))