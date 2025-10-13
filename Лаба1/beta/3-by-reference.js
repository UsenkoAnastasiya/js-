'use strict'
const f = (obj) => {
  if(obj === "object" ){
    obj.n++;
  }
}
const obj = { n : 5};
f(obj);
console.dir(obj);
module.exports( f );
