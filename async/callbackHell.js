function hola(nombre, miCallback){
     // console.log('Hola, soy una funcion asincrona');
     setTimeout(function(){
          console.log('Hola, ' + nombre);
          miCallback(nombre);
     }, 1500);
}

function hablar(callbackHablar){
     setTimeout(function(){
          console.log('Bla Bla Bla Bla...');
          callbackHablar();
     }, 1000)
}

function adios(nombre, otroCallback){
     setTimeout(function(){
          console.log('Adiós, ' + nombre);
          otroCallback();
     }, 1000);
}

function conversacion(nombre, veces, callback){
     if(veces > 0){
          hablar(function(){
               conversacion(nombre, --veces, function(){
                    console.log('Proceso Terminado');
               });
          });
     }else{
          adios(nombre, callback);
     }
     
}


console.log('Iniciando proceso...');
hola('Fernando', function(nombre){
     conversacion(nombre, 3, adios);
})
// hola('Fernando', adios);
// hola('Fernando', function(nombre){
//      adios(nombre, function(){
//           console.log('Terminamos...');
//      })
// })

// hola('Fernando', function(nombre) {
//      hablar(function(){
//           hablar(function(){
//                adios(nombre, function(){
//                     console.log('Terminando proceso...');
//                });
//           })
//      })
// });

