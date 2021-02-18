async function hola(nombre){
     return new Promise(function(resolve, reject){
          setTimeout(function(){
               console.log('Hola, ' + nombre);
               resolve(nombre);
          }, 1500);
     });
     
}

async function hablar(nombre){
     return new Promise((resolve, reject) => {
          setTimeout(function(){
               console.log('Bla Bla Bla Bla...');
               // resolve(nombre);
               resolve('Hay un error');
          }, 1000)
     })
}

async function adios(nombre){
     return new Promise((resolve, reject) => {
          setTimeout(function(){
               console.log('Adiós, ' + nombre);
          }, 1000);
     });
}

async function main(){
     let nombre = await hola('Fernando');
     await hablar();
     await hablar();
     await hablar();
     await adios(nombre);
     console.log('Termina el proceso');
}

console.log('Empezamos el proceso');

main();


