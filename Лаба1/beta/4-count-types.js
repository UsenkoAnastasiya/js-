'use strict'
const f = ( arr ) => {
  const cnt = {};
  for(const value of arr ){
    const type = typeof value;
    const count = cnt[type] || 0;
    cnt[type]= count + 1;
  }
  return cnt;
}
const array = [ true,"hello",6,13,17,"laba",false,"ow",true];
const result= f( array );
console.log({ result });
module.exports = { f };
