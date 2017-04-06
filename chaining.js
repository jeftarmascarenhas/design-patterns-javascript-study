'use strict';

let Calc = function (start) {
    let self = this;

    this.add = x => {
      start = start + x;
      return self;
    };

    this.multply = x => {
      start = start * x;
      return self;
    };

    this.equals = (callback) => {
      callback(start);
      return self;
    };



};


new Calc(0)
    .add(1)
    .add(2)
    .multply(3)
    .equals( result => {
      console.log(`result ${result}`);
    });
