var expect = require('chai').expect;

describe('random-file: ', function () {

  var randomColor = require('../../');

  it('expect to be a color', function () {

    var hsv = randomColor().hsv();

    expect(hsv).to.be.an('object');
    expect(hsv.h).to.be.a('number');
    expect(hsv.s).to.be.equal(50);
    expect(hsv.v).to.be.equal(95);

    expect(randomColor().rgbString()).to.be.a('string');
  });

  it('expect take optional saturation and value arguments', function () {

    var hsv = randomColor(0.8, 0.25).hsv();

    expect(hsv).to.be.an('object');
    expect(hsv.h).to.be.a('number');
    expect(hsv.s).to.be.equal(80);
    expect(hsv.v).to.be.equal(25);

  });

  it('expect generate different colors each time', function () {

    var hsv  = randomColor().hsv();
    var last = randomColor().hsv();

    for (var i = 0; i < 10; i++) {

      expect(hsv).to.not.eql(last);

      last = randomColor().hsv();
    }

  });
});
