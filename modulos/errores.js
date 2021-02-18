const { createBrotliCompress } = require("zlib");

function otraFuncion() {  
    serompe();
}

function serompe() { 
    return 3 + z;
}

function serompeAsuncrona() {  
    setTimeout(function(){
        try{
            return 3 + z;
        }catch(err){
            cb(err){
                
            }
        }
    })
}

try{
    otraFuncion();
}catch(err){
    console.error('Algo se ha roto...');
    console.error(err.message);
    console.log('Pero no pasa nada, lo hemos capturado');
}

console.log('Eso de aqui esta al final');