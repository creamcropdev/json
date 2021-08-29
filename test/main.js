/* eslint-disable no-undef */
const assert = require("assert");
const package = require("../package.json");
const src = require("../src");

// Check that the package.json file is valid
describe("Metadata", function () {
  it("should have a valid package.json file", function () {
    assert.equal(typeof package.name, "string");
    assert.equal(typeof package.version, "string");
    assert.equal(typeof package.description, "string");
    assert.equal(typeof package.author, "string");
    assert.equal(typeof package.license, "string");
    assert.equal(typeof package.repository, "object");
    assert.equal(typeof package.bugs, "object");
    assert.equal(typeof package.homepage, "string");
    assert.equal(typeof package.keywords, "object");
    assert.equal(typeof package.main, "string");
    assert.equal(typeof package.devDependencies, "object");
    assert.equal(typeof package.scripts, "object");
  });

  describe("\x1b[1;31m.metadata", function () {
    it("should match package.json metadata", function () {
      assert.equal(src.metadata.name, package.name);
      assert.equal(src.metadata.version, package.version);
      assert.equal(src.metadata.description, package.description);
      assert.equal(src.metadata.author, package.author);
      assert.equal(src.metadata.license, package.license);
    });
  });
});
