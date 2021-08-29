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

describe("#parse()", function () {
  it("should return no errors", function () {
    (async () => {
      /* eslint-disable no-unused-vars */
      await src.parse("https://feeds.npr.org/1019/feed.json");
      await src.parse("https://www.jsonfeed.org/feed.json");
    })();
  });
  it("should have proper values for all fields in a JSON feed.", function () {
    (async () => {
      let nprorg = await src.parse("https://feeds.npr.org/1019/feed.json");

      // Check that the feed has proper values
      assert.equal(typeof nprorg.version, "string");
      assert.equal(typeof nprorg.title, "string");
      assert.equal(typeof nprorg.home_page_url, "string");
      assert.equal(typeof nprorg.feed_url, "string");
      assert.equal(typeof nprorg.description, "string");
      assert.equal(typeof nprorg.user_comment, "string");
      assert.equal(typeof nprorg.next_url, "string");
      assert.equal(typeof nprorg.icon, "string");
      assert.equal(typeof nprorg.favicon, "string");
      assert.equal(typeof nprorg.authors, "object");

      // Check that the authors are valid
      for (let i = 0; i < nprorg.authors.length; i++) {
        assert.equal(typeof nprorg.authors[i].name, "string");
        assert.equal(typeof nprorg.authors[i].url, "string");
        assert.equal(typeof nprorg.authors[i].avatar, "string");
      }

      // Check that the items are valid
      for (let i = 0; i < nprorg.items.length; i++) {
        assert.equal(typeof nprorg.items[i].id, "string");
        assert.equal(typeof nprorg.items[i].url, "string");
        assert.equal(typeof nprorg.items[i].external_url, "string");
        assert.equal(typeof nprorg.items[i].title, "string");
        assert.equal(typeof nprorg.items[i].content_html, "string");
        assert.equal(typeof nprorg.items[i].summary, "string");
        assert.equal(typeof nprorg.items[i].date_published, "string");
        assert.equal(typeof nprorg.items[i].date_modified, "string");
        assert.equal(typeof nprorg.items[i].author, "object");
        assert.equal(typeof nprorg.items[i].author.name, "string");
        assert.equal(typeof nprorg.items[i].author.url, "string");
        assert.equal(typeof nprorg.items[i].author.avatar, "string");
        assert.equal(typeof nprorg.items[i].attachments, "object");

        // Check that the attachments are valid
        for (let j = 0; j < nprorg.items[i].attachments.length; j++) {
          assert.equal(typeof nprorg.items[i].attachments[j].url, "string");
          assert.equal(
            typeof nprorg.items[i].attachments[j].mime_type,
            "string"
          );
          assert.equal(typeof nprorg.items[i].attachments[j].title, "string");
          assert.equal(
            typeof nprorg.items[i].attachments[j].size_in_bytes,
            "number"
          );
          assert.equal(
            typeof nprorg.items[i].attachments[j].duration_in_seconds,
            "number"
          );
        }
      }
    })();
  });

  it("should fail on false urls", function () {
    (async () => {
      try {
        await src.parse("https://shouldfailhere");
      } catch (e) {
        console.log(e);
      }
    })();
  });
});
