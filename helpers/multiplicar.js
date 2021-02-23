
const fs = require( 'fs' );

const crearTablaMultiplicar = async(base) => {

   // return new Promise( (resolve, reject)  => {


    try{
        let a = base;
        let salida = '';


        console.log( '======================' );
        console.log( `     Tabla del:`, a      );
        console.log( '======================' );


        for( let b = 1; b < 11; b++ ){
            let c = b * a;
            salida += `${a} x ${b} = ${c}\n`;
        }

        console.log( salida )

        fs.writeFileSync( `tabla-${a}.txt`, salida );

        /*resolve(  */ return `archivo tabla del ${a} creado` /*  )*/;

       // } );
            }
            catch(err){
            throw err;
            }


}


module.exports = {
    crearTablaMultiplicar
}