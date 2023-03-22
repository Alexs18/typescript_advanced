
/**Basic example*/

/**Imagine that you make a query to the database with a list from users
 * and you get all users but one user is undefined o null, in this casa you can use
 * the propierti ? to know is there is data or not, for example
 */
let alumno = {
    id:undefined,
    nombre:'richar'
}

console.log(`alumno es ${alumno?.id} `)


/**Advance Example */
/**we can make a value like opcional in typescript */

/**Define a interface to DNIS */
interface DNIS{
    ID:         number;
    USER:       string;
    DNI:        number;
}
/**Define this data like our data base query */
let DataDNIS:DNIS[] = [];

/**Create twice an object like a data insede to the data base fake */
let DNIALEXIS:DNIS = {
    ID:1,
    USER:'ALEXIS',
    DNI:123456
}
let DNIALISSON:DNIS = {
    ID:1,
    USER:'ALISSON',
    DNI:7891011
}

/**push data from the data base fake */
DataDNIS.push(DNIALEXIS, DNIALISSON);

/**Create a function that return a DNI OR NULL */
function searchDNI(DNI:number):DNIS | null{

    let validatedExtension = DNI.toString();
    if (validatedExtension.length <= 0){
        return null
    }
    let DNIFOUND = DataDNIS.find(DNIS=> DNIS.DNI === DNI);
    /**You can make that founding yes can be or not, in this case whe can aplicate
     * expresion ?
     */
    return DNIFOUND? DNIFOUND:null

}

/**Finaly is you searhc a invalid DNI so you get a null value */
let DNIFINAL = searchDNI(7891011);

console.log('show me DNI', DNIFINAL);
