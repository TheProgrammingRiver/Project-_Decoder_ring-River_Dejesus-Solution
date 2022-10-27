// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius() function tests", () => {
  it("should encode i and j to 42", () => {
    const actual = polybius("jig");
    const expected = "424222";
    expect(actual).to.equal(expected);
  });
  it("should translate 42 into ij", () => {
    const actual = polybius("424222", false);
    const expected = "ijijg";
    expect(actual).to.equal(expected);
  });
  it("should leave spaces as is when encoding", () => {
    const actual = polybius("dance a jig");
    const expected = "4111333151 11 424222";
    expect(actual).to.equal(expected);
  });
  it("should leave spaces as is when decoding", () => {
    const actual = polybius("4111333151 11 424222", false);
    const expected = "dance a ijijg";
    expect(actual).to.equal(expected);
  });
  it("should translate uppercase letters to lowercase", () => {
    const actual = polybius("Dance A Jig");
    const expected = "4111333151 11 424222";
    expect(actual).to.equal(expected);
  });
  it("should return false if the length of numbers is odd", () => {
    const actual = polybius("4111333151 11 4242223", false);
    expect(actual).to.be.false;
  });
});
