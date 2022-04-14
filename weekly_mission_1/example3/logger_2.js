/**Al exportar una función/objeto así:
   > module.exports.verbose
   Estaremos exportando el contenido con el nombre `verbose`
   
   module.export hará que puedas invocar esta funcion en otro script como:
   > const logger = requiere('./logger')

   y usarla como:

   > logger.verbose("Heey!")
 */

module.exports.verbose = (message) =>{
    console.log(`verbose: ${message}`)
}