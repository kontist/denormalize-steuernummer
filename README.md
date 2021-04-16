# denormalize-steuernummer

> De-normalize a national German tax number (*Steuernummer*)

## Installation

```console
$ npm install denormalize-steuernummer
```

## Usage

```js
const denormalizeSteuernummer = require("denormalize-steuernummer");

denormalizeSteuernummer("3201012312340")
// => { taxState: "DE-BW", taxNumber: "93815/08152" }

denormalizeSteuernummer("3201012312340")
// => { taxState: "DE-SN", taxNumber: "201/123/12340" }
```

## API

### denormalizeSteuernummer(normalizedSteuernummer)

#### normalizedSteuernummer

Type: `string`

[Normalized German tax number](https://de.wikipedia.org/wiki/Steuernummer#Deutschland) (*Steuernummer*).
