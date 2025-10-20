'use strict';

const phonebook = [ 
    { name: "Olga", phone: "+380195093858"},
  { name: "Nina", phone: "+970195093897"},
];

const findPhoneByName = ( name ) =>{
for(const obj of phonebook)
    if(obj.name==name) return obj.phone;

};

module.exports = { phonebook, findPhoneByName };
