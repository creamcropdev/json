const fetch = require("./fetch");

async function parse(fetch_url) {
  /* istanbul ignore next */
  function findMetadata(x) {
    return {
      name: Object.prototype.hasOwnProperty.call(x, "name") ? x.name : "",
      url: Object.prototype.hasOwnProperty.call(x, "url") ? x.url : "",
      avatar: Object.prototype.hasOwnProperty.call(x, "avatar") ? x.avatar : "",
    };
  }

  let data = JSON.parse(await fetch(fetch_url));

  /* istanbul ignore next */
  let authors = Object.prototype.hasOwnProperty.call(data, "authors")
    ? data.authors.map((x) => findMetadata(x))
    : [];

  let returnval = {
    version: data.version,
    title: data.title,
    home_page_url: Object.prototype.hasOwnProperty.call(data, "home_page_url")
      ? data.home_page_url
      : "",
    feed_url: Object.prototype.hasOwnProperty.call(data, "feed_url")
      ? data.feed_url
      : "",
    description: Object.prototype.hasOwnProperty.call(data, "description")
      ? data.description
      : "",
    user_comment: Object.prototype.hasOwnProperty.call(data, "user_comment")
      ? data.user_comment
      : "",
    next_url: Object.prototype.hasOwnProperty.call(data, "next_url")
      ? data.next_url
      : "",
    icon: Object.prototype.hasOwnProperty.call(data, "icon") ? data.icon : "",
    favicon: Object.prototype.hasOwnProperty.call(data, "favicon")
      ? data.favicon
      : "",
    authors: authors,
    language: Object.prototype.hasOwnProperty.call(data, "language")
      ? data.language
      : "",
    expired: Object.prototype.hasOwnProperty.call(data, "expired")
      ? data.expired
      : false,
    hubs: Object.prototype.hasOwnProperty.call(data, "hubs") ? data.hubs : [],
    items: data.items.map((x) => {
      let data = {
        id: x.id,
        url: Object.prototype.hasOwnProperty.call(x, "url") ? x.url : "",
        external_url: Object.prototype.hasOwnProperty.call(x, "external_url")
          ? x.external_url
          : "",
        title: Object.prototype.hasOwnProperty.call(x, "title") ? x.title : "",
        content_text: Object.prototype.hasOwnProperty.call(x, "content_text")
          ? x.content_text
          : "Not Present",
        content_html: Object.prototype.hasOwnProperty.call(x, "content_html")
          ? x.content_html
          : "Not Present",
        summary: Object.prototype.hasOwnProperty.call(x, "summary")
          ? x.summary
          : "",
        image: Object.prototype.hasOwnProperty.call(x, "image") ? x.image : "",
        banner_image: Object.prototype.hasOwnProperty.call(x, "banner_image")
          ? x.banner_image
          : "",
        date_published: Object.prototype.hasOwnProperty.call(
          x,
          "date_published"
        )
          ? x.date_published
          : "",
        /* istanbul ignore next */
        date_modified: Object.prototype.hasOwnProperty.call(x, "date_modified")
          ? x.date_modified
          : "",
        authors: Object.prototype.hasOwnProperty.call(x, "authors")
          ? x.authors.map(/* istanbul ignore next */ (y) => findMetadata(y))
          : [],
        tags: Object.prototype.hasOwnProperty.call(x, "tags") ? x.tags : [],
        language: Object.prototype.hasOwnProperty.call(x, "language")
          ? x.language
          : "",
        attachments: Object.prototype.hasOwnProperty.call(x, "attachments")
          ? x.attachments.map((y) => {
              return {
                url: y.url,
                mime_type: y.mime_type,
                title: Object.prototype.hasOwnProperty.call(y, "title")
                  ? y.title
                  : "",
                size_in_bytes: Object.prototype.hasOwnProperty.call(
                  y,
                  "size_in_bytes"
                )
                  ? y.size_in_bytes
                  : 0,
                duration_in_seconds: Object.prototype.hasOwnProperty.call(
                  y,
                  "duration_in_seconds"
                )
                  ? y.duration_in_seconds
                  : 0,
              };
            })
          : [],
      };

      // Validate
      /* istanbul ignore next */
      if (
        data.content_text === "Not Present" &&
        data.content_html === "Not Present"
      ) {
        throw new Error("No content found in item: " + data.id);
      }

      return data;
    }),
  };

  returnval.itemlength = returnval.items.length;

  return returnval;
}

module.exports = parse;
