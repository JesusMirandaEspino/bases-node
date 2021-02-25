
const fs = require( 'fs' );
const colors = require('colors');


const crearTablaMultiplicar = async(base = 1, listar = false, hasta = 10) => {

   // return new Promise( (resolve, reject)  => {


    try{
        let a = base;
        let salida = '';
        let consola = '';
        let h = hasta;

        if( listar ){
            console.log( '======================'.green  );
            console.log( `     Tabla del:`.green, colors.blue(a )    );
            console.log( '======================'.green );
        }



        for( let b = 1; b < h+1; b++ ){
            let c = b * a;
            salida += `${a} x ${b} = ${c}\n`;
            consola += `${a} ${'x'.yellow} ${b} ${'='.yellow} ${c}\n`;
        }

        if( listar ){
            console.log( consola );
        }

        fs.writeFileSync( `tabla-${a}.txt`, salida );

        /*resolve(  */ return `archivo tabla del ${a} creado, desde multiplicar del 1 hasta el ${h}` /*  )*/;

       // } );
            }
            catch(err){
            throw err;
            }


}


module.exports = {
    crearTablaMultiplicar
}