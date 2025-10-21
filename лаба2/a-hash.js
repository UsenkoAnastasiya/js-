'use strict';

const phonebook = {
Olga : "+380195093858",
Nina : "+970195093897",
};

const findPhoneByName = (name) => phonebook[name];
module.exports = { phonebook, findPhoneByName };
