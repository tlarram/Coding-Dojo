/* 
  String: Reverse
  Given a string,
  return a new string that is the given string reversed
*/

// const str1 = "creature";
// const expected1 = "erutaerc";

// const str2 = "dog";
// const expected2 = "god";

// const str3 = "hello";
// const expected3 = "olleh";

// const str4 = "";
// const expected4 = "";


/**
 * Reverses the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str String to be reversed.
 * @returns {string} The given str reversed.
 */

const str1 = "creature";
const str2= "dog";
const str3= "hello";
const str4 = "";

function reverseString(str) {
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
      newString += str[i];
  }
  return newString;
}

// console.log(reverseString(str1)); 
// console.log(reverseString(str2)); 
// console.log(reverseString(str3)); 
// console.log(reverseString(str4)); 

// const str1 = "creature";
// const str2= "dog";
// const str3= "hello";
// const str4 = "";

function reverseString(str) {
  if (str === "")
    return "";
  else
    return reverseString(str.substr(1)) + str.charAt(0);
}
// reverseString("hello");

// console.log(reverseString(str1)); 
// console.log(reverseString(str2)); 
// console.log(reverseString(str3)); 
// console.log(reverseString(str4)); 