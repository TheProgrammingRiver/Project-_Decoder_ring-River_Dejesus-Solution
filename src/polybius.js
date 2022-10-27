// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const key = {
    a: 11,
    b: 21,
    c: 31,
    d: 41,
    e: 51,
    f: 12,
    g: 22,
    h: 32,
    i: 42,
    j: 42,
    k: 52,
    l: 13,
    m: 23,
    n: 33,
    o: 43,
    p: 53,
    q: 14,
    r: 24,
    s: 34,
    t: 44,
    u: 54,
    v: 15,
    w: 25,
    x: 35,
    y: 45,
    z: 55,
  };

  function polybius(input, encode = true) {
    // your solution code here
    let output = "";
    const keys = Object.keys(key);
    const values = Object.values(key);
    if (encode) {
      message = input.toLowerCase();
      for (let i = 0; i < message.length; i++) {
        if (message[i] === " ") {
          output += " ";
        } else {
          output += key[message[i]];
        }
      }
      return output;
    } else {
      message = input.split(" ").join("");
      if (message.length % 2 != 0) {
        return false;
      }
      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") {
          output += " ";
        } else {
          const currNum = input[i].toString() + input[i + 1].toString();
          if (currNum == 42) {
            output += "ij";
          } else {
            const currChar = keys[values.indexOf(parseInt(currNum, 10))];
            output += currChar;
          }
          i++;
        }
      }
      return output;
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
