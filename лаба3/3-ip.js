'use strict';
const ioToint = ( ip = '10.0.0.1') =>{
  const fn = (res,item)=> (res<<8) + parseInt(item);
  return ip.split('.').reduce(fn,0);
}
module.exports = { ipToInt };
