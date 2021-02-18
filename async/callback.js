function hola(nombre, miCallback){
     // console.log('Hola, soy una funcion asincrona');
     setTimeout(function(){
          console.log('Hola, ' + nombre);
          miCallback(nombre);
     }, 1500);
}

function adios(nombre, otroCallback){
     setTimeout(function(){
          console.log('Adiós, ' + nombre);
          otroCallback();
     }, 1000);
}


console.log('Iniciando proceso...');

hola('Fernando', function(nombre) {
     adios(nombre, function(){
          console.log('Terminando proceso...');
     });
});

