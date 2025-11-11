'use strict';


const difference = (array1, array2) => {
    let result=[];
    for(const item of array1){
        if(!array2.includes(item)) result.push(item);
    }
    return result;
};

module.exports = { difference };
