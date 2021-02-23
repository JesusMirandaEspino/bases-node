const fs = require( 'fs' );

console.clear();

let a = 3;
let salida = '';


console.log( '======================' );
console.log( `     Tabla del:  ${a}`      );
console.log( '======================' );


for( let b = 1; b < 11; b++ ){
    let c = b * a;
    salida += `${a} x ${b} = ${c}\n`;
}

console.log( salida )

fs.writeFile( `tabla-${a}.txt`, salida,  (err) => {
    if(err) { throw(err) } 
    console.log(  `archivo tabla del ${a} creado`  );
} );