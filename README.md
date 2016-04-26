# random-color

> Generate random colors based on the golden ratio, which are more visually pleasing.
  
[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/mock-end/random-color/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/mock-end/random-color/master.svg?style=flat-square)](https://travis-ci.org/mock-end/random-color)
[![coverage:?](https://img.shields.io/coveralls/mock-end/random-color/master.svg?style=flat-square)](https://coveralls.io/github/mock-end/random-color)


This module is deeply inspired by Martin Ankerl's [blog post](http://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/). The generated colors are more visually pleasing together than a simple random color generator because they are computed by moving around the color wheel in increments of the golden ratio. By default, the generated colors can used as a background for legible black text, but the color generator can be customized for other uses.



## Install

```
$ npm install --save random-color
```

## Usage

```js
var randomColor = require('random-color');

randomColor([options]);
// => #89fa5d
```

## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/mock-end/random-color/issues/new).
