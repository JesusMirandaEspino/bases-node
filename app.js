const { crearTablaMultiplicar } = require( './helpers/multiplicar.js' );

console.clear();


/*
const [ , , arg3 = 'base=5 '] = process.argv; 
const [ , base = 5 ] = arg3.split('=');
console.log( base );
*/



crearTablaMultiplicar(6)
    .then( nombreArchivo => console.log( nombreArchivo, 'a sido creado' ) )
    .catch((err) => {console.log( err )});