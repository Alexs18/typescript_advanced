/** the key of means that you can put a value equals other using key of */

/**example...*/
// let datosUser:unknown;
interface DatosUser {
    name:         string;
    lastname:       string;
}

/**so you need to create an function with two paameters like generics,
 * and after all pase a generic like a proporties from this interface, type
 * enum or whatever you want
 */

let linux:DatosUser = {
    name:'Linux',
    lastname:'Super Dev'
}

/**We can simulate an api response from users */
let simulateuserresp1:DatosUser[] = []

let alex1:DatosUser ={
    name:'Alex',
    lastname:'Ordoñes'
}

let centeno2:DatosUser ={
    name:'Centeno',
    lastname:'Ostaiza'
}

simulateuserresp1.push(alex, centeno);



function getusername<T extends {name:string}>(objecto:T[], params:keyof T):T | undefined{
    return objecto.find(obs=> obs.name === params);
}

let eluser = getusername<DatosUser>(simulateuserresp1, 'name');
// ti
/**so in this case you can search an value and interprete from typescript
 * can be help us to call a especific value
 */
