/**Genericos en funciones */
/**type generic is similar from a unkown, but you can use to
 * make more especific your code, add a type with diferentes implementations.
 */

/**Example 1*/
/**If you use a generic params you can say when use other function that
 * the value can be from the of type that you can use
 */
function GetStickers<T>(params:T):T{
    return params
}

/**call the function for the first time*/
/**in this case typescript can be know explicite that the valur from return will be number type
 */
GetStickers(20);
let dT = 'fdgfdg'
let odbd = {id:'1'}
GetStickers(dT);
GetStickers(odbd);

/**you need to create a function to search by id Independenty if a product or user
 * you need to search by id 
 */

/**you have two interfaces but the interface have almost the same value, you need to find by id, so you uses generics types for that*/

/**Interface 1*/

interface producto {
    id:             number;
    description:    string;
    codbarra:       number | string;
    price:          number;
}
interface user {
    id:             number;
    name:           string;
    last_name:      string;
    dni:            number;
}

/** */

/**we create two arrays to places users and produts*/

let users:user[] = [];
let pro:producto[] = [];

/**we create two products and two users */

let product:producto = {
    id:1, description:'arroz',
    codbarra:'2200', price:22
}
let product2:producto = {
    id:2, description:'Mortadela',
    codbarra:'2201', price:30
}
let usuario:user = {
    id:1, name:'Alex',
    last_name:'Bolaños', dni:1322142
}
let usuario1:user = {
    id:2, name:'Santiago',
    last_name:'Ochoa', dni:1322142
}

/**we places products and users inside to the array */
users.push(usuario, usuario1);
pro.push(product, product2);

/**so in this case you can create a funtion to search and id and return the specific value
 * to type this result.
*/

/**example we need two generics, the firsts is to id, and the second is to and array that extends
 * an id, because all objects we'll have an id.
 */

/**you can make a interface to specificate the value as an id like commominterface or whathever name that
 * you can use
*/
 /**Interface common */

interface commonparameters {
    id:         number | string
}

function searchById<T,U extends commonparameters>(id:T, objeto:U[]):U | undefined{    
    
    return objeto.find(obj=> obj.id === id);
 
}

/**Now is you use the function to search and id you get'll a result with the same type that you specificate*/
let data = searchById<number, user>(2, users);
console.log('data');
console.log(data);

let data2 = searchById<number, producto>(1, pro);

console.log('data2');
console.log(data2);







