'use strict';
const characters = "absdfjkdvoeifnsklckdk";
const generateKey = (length, possible) => {
  let key = ' ';
  for(let i=0;i< length;i++){
   const  index=Math.floor(Math.random()*base);
      key+= posible[index];
  }
  return key;
};

module.exports = { generateKey };
