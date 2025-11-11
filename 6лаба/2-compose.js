'use strict';

const compose = (...fns) => {
const handlers=[]; 
    const composed = (x) =>{
 try{  
    return fns.reduceRight((v, f) => f(v), x);
} catch(error){
   for (const handler of handlers) {
        handler(error); 
      }
}
};
composed.on=(name,handler)=>
 { if(name==='error') handlers.push(handler);
}
 return composed;
};
module.exports = { compose };
