'use strict';
const sum = (...args) => {
  if( args.length===0) return null;
let i = args.length-1;
let res = 0;
  do{
    res+=args[i];
    i--;
  }
  while (i >= 0);
    return res;
};

module.exports = { sum };
