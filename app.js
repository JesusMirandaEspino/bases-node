const { crearTablaMultiplicar } = require( './helpers/multiplicar.js' );
const argv  = require('./config/yargs.js');

console.clear();


console.log( process.argv );
console.log( argv );


/*
const [ , , arg3 = 'base=5 '] = process.argv; 
const [ , base = 5 ] = arg3.split('=');
console.log( base );
*/



crearTablaMultiplicar(  argv.b, argv.l, argv.h  )
    .then( nombreArchivo => console.log( nombreArchivo, 'a sido creado' ) )
    .catch((err) => {console.log( err )});