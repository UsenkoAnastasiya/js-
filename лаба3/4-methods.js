'use strict';
const iface ={
    m1: x => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  },
} 
const methods = iface => {
  const names = [ ];
  for(const key in iface){
    const value = iface[key] ;
      if (typeof value === 'function') {
    names.push([key, value.length]);
  }

  }
};

module.exports = { methods };
