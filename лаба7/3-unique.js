'use strict';


const unique = (array) => {
    const Array = [];
  for(const item of array) { 
    if(!Array.includes(item)) Array.push(item);}
  return Array;
};

module.exports = { unique };
