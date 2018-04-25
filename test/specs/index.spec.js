const chai = require("chai");

describe("My React Test", () => {
  it("Tests a website on the interwebz", () => {
    browser.url("https://www.ginetta.net/");
    const text = browser.getText("h1");
    chai.expect(text).to.equal("Ginetta");
  });

  it("Tests a site running on localhost localhost", () => {
    browser.url("./");
    const text = browser.getText("h1");
    chai.expect(text).to.equal("Welcome to React");
  });
});
