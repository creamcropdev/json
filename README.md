<div align='center'>
    <img src='https://www.jsonfeed.org/uploads/2020/cc9d8e166d.png'>
</div>

# JSON
The JSON feed parser for the creamcrop package.

## Installation

Installation is avaliable through `npm`, `yarn`, or `pnpm`:
```sh
npm i @creamcropdev/json
yarn add @creamcropdev/json
pnpm add @creamcropdev/json
```

## Usage

**NodeJS:**
```javascript
const parser = require('@creamcropdev/json')

(async () => {

    let feed = await parser.parse('https://www.jsonfeed.org/feed.json')

    console.log(feed.items) // Logs JSON of all items
    console.log('Number of Items:' + feed.itemlength) // Returns number of items in the feed

})();
```

The feed parser supports versions 1 and 1.1 of JSON feeds, see the [docs](https://creamcrop.js.org/json/latest/) for more.