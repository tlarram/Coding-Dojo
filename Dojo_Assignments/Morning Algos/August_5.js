/* 
  String: Is Palindrome
  Create a function that returns a boolean whether the string is a strict palindrome. 
    - palindrome = string that is same forwards and backwards
  
  Do not ignore spaces, punctuation or capitalization
*/

const str1 = "a x a";
const expected1 = true;

const str2 = "racecar";
const expected2 = true;

const str3 = "Dud";
const expected3 = false;

const str4 = "oho!";
const expected4 = false;

const str5 = "abba"
const expected5 = true;

/**
 * Determines if the given str is a palindrome (same forwards and backwards).
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given str is a palindrome or not.
 */
function isPalindrome(str) {
    for (i = 0; i < str.length/2; i++) {
        if(str[i] !== str[str.length -1 -i]) {
            return false
        }
    } return true
}


console.log(isPalindrome(str1)) //expected: true
console.log(isPalindrome(str2)) //expected: true
console.log(isPalindrome(str3)) //expected: false
console.log(isPalindrome(str4)) //expected: false
console.log(isPalindrome(str5)) //expected: true


/* 
  Zip Arrays into Map
  
  
  Given two arrays, create an associative array (aka hash map, an obj / dictionary) containing keys from the first array, and values from the second.
  Associative arrays are sometimes called maps because a key (string) maps to a value 
*/

const keys1 = ["flavor", "size", "is_delicious"];
const vals1 = ["chocolate", 10, true];
const expectedA = {
    flavor: 'chocolate',
    size: 10,
    is_delicious: true,
};

const keys2 = [];
const vals2 = [];
const expectedB = {};

const keys3 = ['name', 'number', 'type', 'evolves_from']
const vals3 = ['Gyarados', 130, 'water/flying', 'Magikarp']
const expectedC = {
    name: 'Gyarados',
    number: 130,
    type: 'water/flying',
    evolves_from: 'Magikarp'
}


/**
 * Converts the given arrays of keys and values into an object.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string>} keys
 * @param {Array<any>} values
 * @returns {Object} The object with the given keys and values.
 */
function zipArraysIntoMap(keys, values)
let zipDict = {}
if (keys.length != values.length){
    return false
}
for (i =0; i < keys.length; i++){
    zipDict[keys[i]]=values[i]
}
return zipDict

console.log(zipArraysIntoMap(keys1, vals1)) // expected: { flavor: 'chocolate', size: 10, is_delicious: true } (order may vary)
console.log(zipArraysIntoMap(keys2, vals2)) // expected: {} 
console.log(zipArraysIntoMap(keys3, vals3)) // expected: { name: 'Gyarados', number: 130, type: 'water/flying', evolves_from: 'Magikarp' } (order may vary)