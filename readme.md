# uic-location-timezone

Get timezone information for a given [UIC location code (ENEE)](https://uic.org/location-codes-enee) based on its country, if the country has a unique timezone.

[![npm version](https://img.shields.io/npm/v/uic-location-timezone.svg)](https://www.npmjs.com/package/uic-location-timezone)
[![Build Status](https://travis-ci.org/juliuste/uic-location-timezone.svg?branch=master)](https://travis-ci.org/juliuste/uic-location-timezone)
[![Greenkeeper badge](https://badges.greenkeeper.io/juliuste/uic-location-timezone.svg)](https://greenkeeper.io/)
[![dependency status](https://img.shields.io/david/juliuste/uic-location-timezone.svg)](https://david-dm.org/juliuste/uic-location-timezone)
[![license](https://img.shields.io/github/license/juliuste/uic-location-timezone.svg?style=flat)](license)
[![chat on gitter](https://badges.gitter.im/juliuste.svg)](https://gitter.im/juliuste)

## Installation

```bash
npm install uic-location-timezone
```

## Usage

Note that the given UIC location code must be deemed valid by [`is-uic-location-code`](https://github.com/juliuste/is-uic-location-code), otherwise an Error will be thrown.

```js
const uicLocationTimezone = require('is-uic-location-code')

uicLocationTimezone('1000010') // 'Europe/Helsinki'
uicLocationTimezone('7300003') // 'Europe/Athens'
uicLocationTimezone('8000001') // null (yes, Germany has two timezones… https://en.wikipedia.org/wiki/Time_in_Germany#IANA_time_zone_database)
uicLocationTimezone('4200012') // 'Asia/Tokyo'
uicLocationTimezone('9000100') // 'Africa/Cairo'
uicLocationTimezone('2000001') // null (Russia)

uicLocationTimezone('80-00001') // throws
uicLocationTimezone(8777777) // throws
uicLocationTimezone('800000001') // throws
uicLocationTimezone(null) // throws
```

## Contributing

If you found a bug or want to propose a feature, feel free to visit [the issues page](https://github.com/juliuste/uic-location-timezone/issues).
