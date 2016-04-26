'use strict';

var color = require('color');

var ratio = 0.618033988749895;
var hue   = Math.random();


module.exports = function (options) {

  hue += ratio;
  hue %= 1;

  options = options || {};

  var saturation = options.saturation;
  var value      = options.value;

  if (typeof saturation !== 'number') {
    saturation = 0.5;
  }

  if (typeof value !== 'number') {
    value = 0.95;
  }

  var hsv = {
    h: hue * 360,
    s: saturation * 100,
    v: value * 100
  };

  return options.raw ? hsv : color(hsv);
};
