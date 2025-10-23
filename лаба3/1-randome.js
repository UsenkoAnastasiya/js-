'use strict';

const random = (min, max) => {
  // Generate random Number between from min to max
  // Use Math.random() and Math.floor()
  // See documentation at M
  if(max=== undefined ){
    max=min;
    min=0;
  }
return min+Math.flore(Math.randome()*(max-min+1));
};

module.exports = { random };
