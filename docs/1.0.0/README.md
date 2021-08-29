<div align='center'>
    <img src='https://www.jsonfeed.org/uploads/2020/cc9d8e166d.png'>
</div>

# JSON
The JSON feed parser for the creamcrop package.

[![codecov](https://codecov.io/gh/creamcropdev/json/branch/main/graph/badge.svg?token=KFJWW7TWFY)](https://codecov.io/gh/creamcropdev/json)

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

### Values

Any valid JSON feed field is avaliable, and additionaly, we have a `.itemlength` value, which is the number of items in the feed. 