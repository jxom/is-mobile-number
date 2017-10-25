# is-mobile-number

> Validate mobile numbers for a country.


## Install

```
$ npm install is-mobile-number
```


## Usage

```js
const isMobileNumber = require('is-mobile-number');

isMobileNumber('0400123456', 'AU');
//=> true

isMobileNumber('123', 'AU');
//=> false
```


## API

### isMobileNumber(mobileNumber, countryCode)

#### mobileNumber

Type: `string`

Mobile number you want to validate

Example: `0400123456`

#### countryCode

Type: `string`

Country code

Example: `AU`

## License

MIT © [jxom](https://jxom.io)
