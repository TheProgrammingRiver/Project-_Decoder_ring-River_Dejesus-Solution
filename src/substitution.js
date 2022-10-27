// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function checkDuplicates(alphabet) {
    // Split alphabet into array
    const alphArray = alphabet.split("");
    let isUnique = true;
    // For each letter in the key...
    alphArray.forEach((letter) => {
      // ... check if that letter occurs more than once in the array.
        if ( alphArray.filter((currLetter) => letter == currLetter).length > 1 ) { isUnique = false }
      })
      return isUnique;
  }

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length != 26 || !checkDuplicates(alphabet) ) {
      return false;
    } else {
      let output = "";
      const origAlpha = "abcdefghijklmnopqrstuvwxyz";
      if (encode) {
        const message = input.toLowerCase();
        for ( let i = 0; i < message.length; i++ ) {
          if ( message[i] === " " ) {
            output += " "
          } else {
            output += alphabet[origAlpha.indexOf(message[i])];
          }
        }
      } else {
        for ( let i = 0; i < input.length; i++ ) {
          if ( input[i] === " " ) {
            output += " "
          } else {
            output += origAlpha[alphabet.indexOf(input[i])];
          }
        }
      }
      return output;
    }
    
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
