'use strict';

module.exports = function () {
  var color = Math.floor(Math.random() * (16 * 16 * 16 * 16 * 16 * 16 - 1)).toString(16);
  return '#' + ('000000' + color).slice(-6);
};
