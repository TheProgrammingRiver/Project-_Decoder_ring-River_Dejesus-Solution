// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false;
    let result = "";
    let inputArray = input.toLowerCase().split("");
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    if (encode === false) shift = shift * -1;
    inputArray.forEach((letter) => {
      if (alphabet.includes(letter)) {
        let index = alphabet.indexOf(letter);
        let newIndex = index + shift;
        if (newIndex > 25) newIndex = newIndex - 26;
        if (newIndex < 0) newIndex = newIndex + 26;
        result += alphabet[newIndex];
      } else {
        result += letter;
      }
    });
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
