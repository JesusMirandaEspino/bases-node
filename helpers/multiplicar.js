
const fs = require( 'fs' );
const colors = require('colors');


const crearTablaMultiplicar = async(base = 1, listar = false, hasta = 10) => {

   // return new Promise( (resolve, reject)  => {


    try{
        let a = base;
        let salida = '';
        let h = hasta;

        if( listar ){
            console.log( '======================'.green  );
            console.log( `     Tabla del:`.green, colors.blue(a )    );
            console.log( '======================'.green );
        }



        for( let b = 1; b < h+1; b++ ){
            let c = b * a;
            salida += `${a} x ${b} = ${c}\n`;
        }

        if( listar ){
            console.log( salida );
        }

        fs.writeFileSync( `tabla-${a}.txt`, salida );

        /*resolve(  */ return `archivo tabla del ${a} creado, desde multiplicar el 1 hasta el ${h}` /*  )*/;

       // } );
            }
            catch(err){
            throw err;
            }


}


module.exports = {
    crearTablaMultiplicar
}