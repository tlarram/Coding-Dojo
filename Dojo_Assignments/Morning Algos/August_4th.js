/* 
  Given in an alumni interview in 2021.
  String Encode
  You are given a string that may contain sequences of consecutive characters.
  Create a function to shorten a string by including the character,
  then the number of times it appears. 
  
  
  If final result is not shorter (such as "bb" => "b2" ),
  return the original string.
  */

  const s1 = "aaaabbcddd";
  const expected1 = "a4b2c1d3";
  
  const s2 = "";
  const expected2 = "";
  
  const s3 = "a";
  const expected3 = "a";
  
  const s4 = "bbcc";
  const expected4 = "bbcc";
  
  /**
   * Encodes the given string such that duplicate characters appear once followed
   * by a number representing how many times the char occurs. Only encode strings
   * when the result yields a shorter length.
   * - Time: O(?).
   * - Space: O(?).
   * @param {string} str The string to encode.
   * @returns {string} The given string encoded.
   */
function encodeStr(str) {
    var new_string = ""
    for (i = 0; i < str.length; i++ ) {
        let count = 1
        let letter = str[i]
        while (i<str.length-1 && str[i] === str[i+1]){
            count += 1 
            i += 1
        }
        if (count === 1 ){
            new_string += new_string + letter
            console.log(new_string)
        }
        if (count === 2){
            new_string = new_string + letter + letter
            console.log(new_string)
        }
        else {
            new_string = new_string + letter + count
            console.log(new_string)
        }
    }
}
console.log(encodeStr(str1));


  
  /*****************************************************************************/
  
  
//   const strA = "a3b2c1d3";
//   const expectedA = "aaabbcddd";
  
//   const strB = "a3b2c12d10";
//   const expectedB = "aaabbccccccccccccdddddddddd";
  
  /**
   * Decodes the given string by duplicating each character by the following int
   * amount if there is an int after the character.
   * - Time: O(?).
   * - Space: O(?).
//    * @param {string} str An encoded string with characters that may have an int
   *    after indicating how many times the character occurs.
   * @returns {string} The given str decoded / expanded.
   */
  //helpful built-ins : isNaN() .repeat() parseInt() 
//   function decodeStr(str) {
      //Your code here
//   }
  
//   console.log(decodeStr(strA)) // Expected: aaabbcddd
//   console.log(decodeStr(strB)) // Expected: aaabbccccccccccccdddddddddd