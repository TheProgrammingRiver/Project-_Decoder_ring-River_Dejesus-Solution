// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution() function tests", () => {
    it("should return false if alphabet argument is missing", () => {
        const input = "dummy text";
        const actual = substitution(input);
        expect(actual).to.be.false;
    });
    it("should return false if alphabet is not 26 characters in length", () => {
        const input = "dummy text";
        const actual = substitution(input, "abcdef");
        expect(actual).to.be.false;
    });
    it("should return false if alphabet contains duplicate characters", () => {
        const input = "dummy text";
        const actual = substitution(input, "abracadabraabracadabraabra");
        expect(actual).to.be.false;
    });
    it("correctly translates a given phrase", () => {
        const input = "dummytext";
        const alphabet = "azertyuiopqsdfghjklmwxcvbn";
        const actual = substitution(input, alphabet);
        const expected = "rwddbmtvm"
        expect(actual).to.equal(expected);
    });
    it("should leave spaces as is when encoding", () => {
        const input = "dummy text";
        const alphabet = "azertyuiopqsdfghjklmwxcvbn";
        const actual = substitution(input, alphabet);
        const expected = "rwddb mtvm"
        expect(actual).to.equal(expected);
    });
    it("should leave spaces as is when decoding", () => {
        const input = "rwddb mtvm";
        const alphabet = "azertyuiopqsdfghjklmwxcvbn";
        const actual = substitution(input, alphabet, false);
        const expected = "dummy text"
        expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
        const input = "Dummy Text";
        const alphabet = "azertyuiopqsdfghjklmwxcvbn";
        const actual = substitution(input, alphabet);
        const expected = "rwddb mtvm"
        expect(actual).to.equal(expected);
    });
    it("should allow unique characters, such as punctuation, in alphabet key", () => {
        const input = "abracadabra";
        const alphabet = ".!ertyuiopqsdfghjklmwxcvbn";
        const actual = substitution(input, alphabet);
        const expected = ".!k.e.r.!k."
        expect(actual).to.equal(expected);
    });
})