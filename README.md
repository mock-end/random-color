# random-color

> Generate random colors based on the golden ratio, which are more visually pleasing.
  
[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/mock-end/random-color/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/mock-end/random-color/master.svg?style=flat-square)](https://travis-ci.org/mock-end/random-color)
[![coverage:?](https://img.shields.io/coveralls/mock-end/random-color/master.svg?style=flat-square)](https://coveralls.io/github/mock-end/random-color)
  

This module is deeply inspired by Martin Ankerl's [blog post](http://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/). 

The generated colors are more visually pleasing together than a simple random color generator because they are computed by moving around the color wheel in increments of the golden ratio. By default, the generated colors can used as a background for legible black text, but the color generator can be customized for other uses.


## Install

```
$ npm install --save random-color
```

## Usage

```js
var randomColor = require('random-color');

// API
// - randomColor([saturation, value]);
```

By default, generate a color with `saturation = 0.5` and `value = 0.95`. 

Returns [color](https://github.com/harthur/color) object so you can convert the color to any color-formats easily.

```js
var color = randomColor();

// ref: https://github.com/harthur/color
color.hexString(); // => '#d67118'
color.rgbString(); // => 'rgb(110,52,164)'
```
![saturation=0.5, value=0.95](img/1.png?raw=true "saturation=0.5, value=0.95")


Optionally specify `saturation` and `value`:

```js
var color = randomColor(0.99, 0.99);
```
![saturation=0.99, value=0.99](img/2.png?raw=true "saturation=0.99, value=0.99")

```js
var color = randomColor(0.3, 0.99);
```
![saturation=0.3, value=0.99](img/1.png?raw=true "saturation=0.3, value=0.99")

## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/mock-end/random-color/issues/new).
