const package = require("../package.json");
const parse = require("./utils/parse");

exports.metadata = {
  name: package.name,
  version: package.version,
  description: package.description,
  author: package.author,
  license: package.license,
};

exports.parse = parse;
