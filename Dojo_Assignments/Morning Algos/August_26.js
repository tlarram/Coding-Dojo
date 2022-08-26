/* 
  String Anagrams
  Given a string,
  return array where each element is a string representing a different anagram (a different sequence of the letters in that string).
  Ok to use built in methods
*/

const str1 = "lim";
const expected1 = ["ilm", "iml", "lim", "lmi", "mil", "mli"];
// Order of the output array does not matter

/**
 * Add params if needed for recursion.
 * Generates all anagrams of the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {Array<string>} All anagrams of the given str.
 */

// let anagrams =[];
// function generateAnagrams(str, anagram = '') {
//     if (str.length===0) {
//       anagrams.push(anagram);
//       return;
//     }
//     for (let i=0; i < str.length; i++) {
//         anagram += str[i];
//         generateAnagrams(str.slice(0,i)) + str.slice(i+1), anagram;
//         anagram= anagram.slice(0, anagram.length-1); 
//     }
//     return anagrams
// };

function generateAnagrams(str, anagrams = [], partial = "") { //don't be afraid to add parameters!
  if (str.length === 0) {
    anagrams.push(partial)
  }
  for (let i=0; i < str.length; i++){
    const currentLetter = str[i];
    const beforeLetter = str.slice(0,i)
    const afterLetter = str.slice(i+1)
    const remainString = beforeLetter + afterLetter
    const newPartial = partial + currentLetter
    generateAnagrams(remainString, anagrams, newPartial)
  }
  return anagrams

}

console.log(generateAnagrams(str1))

function generateAnagrams(str, anagrams = [], partial = "") { //don't be afraid to add parameters!
  if (str.length === 0) {
    anagrams.push(partial)
  }
  for (let i=0; i < str.length; i++){
    const currentLetter = str[i];
    const beforeLetter = str.slice(0,i)
    const afterLetter = str.slice(i+1)
    const remainString = beforeLetter + afterLetter
    const newPartial = partial + currentLetter
    generateAnagrams(remainString, anagrams, newPartial)
  }
  return anagrams

}