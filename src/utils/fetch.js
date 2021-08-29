async function fetch(url) {
  return new Promise((res, rej) => {
    /* istanbul ignore next */
    let client = url.startsWith("https")
      ? require("https") 
      : require("http");

    client
      .get(url, (resp) => {
        let data = "";

        resp.on("data", (chunk) => {
          data += chunk;
        });

        resp.on("end", () => {
          res(data);
        });
      })
      .on("error", (err) => {
        console.log(`Encountered Error on Fetching ${url}: ${err.message}`);
        rej(err);
      });
  });
}

module.exports = fetch;
