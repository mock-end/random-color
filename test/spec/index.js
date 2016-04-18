'use strict';

var expect = require('chai').expect;


describe('random-color: ', function () {

  var randomColor = require('../../');

  it('randomColor()', function () {
    expect(randomColor()).to.be.a('string');

    for (var i = 0; i < 100; i++) {
      expect(randomColor()).to.be.match(/^#[0-9a-f]{6}$/);
    }
  });
});
