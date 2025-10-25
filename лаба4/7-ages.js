'use strict';
const persons = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
};
const ages = (persons) => {
  // should return {
  //   lenin: 54,
  //   mao: 83,
const data = {};
for(const name in persons ){
  const person = persons[name];
  data[name]= person.died-person.born;
}
  return data;
};

module.exports = { ages };
