
const fs = require( 'fs' );

const crearTablaMultiplicar = async(base = 1, listar = false) => {

   // return new Promise( (resolve, reject)  => {


    try{
        let a = base;
        let salida = '';

        if( listar ){
            console.log( '======================' );
            console.log( `     Tabla del:`, a      );
            console.log( '======================' );
        }



        for( let b = 1; b < 11; b++ ){
            let c = b * a;
            salida += `${a} x ${b} = ${c}\n`;
        }

        if( listar ){
            console.log( salida );
        }

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