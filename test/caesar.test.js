// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar() function tests", () => {
    it("should return false if the shift value is equal to 0", () => {
        const actual = caesar("dummy text", 0);
        expect(actual).to.be.false;
    })
    it("should return false if shift value is less than 25", () => {
        const actual = caesar("dummy text", -28);
        expect(actual).to.be.false;
    })
    it("should return false if shift value is more than 25", () => {
        const actual = caesar("dummy text", 28);
        expect(actual).to.be.false;
    })
    it("should turn all uppercase into lowercase", () => {
        const actual = caesar("DuMmY tExT", 3);
        const expected = "gxppb whaw";
        expect(actual).to.equal(expected);
    })
    it("should allow for negative shift values", () => {
        const actual = caesar("dummy text", -4);
        const expected = "zqiiu patp";
        expect(actual).to.equal(expected);
    })
    it("should appropriately handle letters at the beginning of the alphabet", () => {
        const actual = caesar("dummy text", -4);
        const expected = "zqiiu patp";
        expect(actual).to.equal(expected);
    })
    it("should appropriately handle letters at the end of the alphabet", () => {
        const actual = caesar("dummy text", 4);
        const expected = "hyqqc xibx";
        expect(actual).to.equal(expected);
    })
    it("should leave punctuation and spaces as is", () => {
        const actual = caesar("dummy text!", -4);
        const expected = "zqiiu patp!";
        expect(actual).to.equal(expected);
    })
})