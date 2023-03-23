/**unknown is like a desconicdo en español
 *  I mean idk what is the value from the variable but
 * I can asignated after Example
 */

/** */
let desconodido:unknown = 'datastring';
if (typeof desconodido === 'string') {
    
    console.log(desconodido
        .toUpperCase()
        .replace('S', 'X'));
}
