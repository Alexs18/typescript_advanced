/**we can make a interface with a generic*/
/**for example*/

/**we can create a interface to call apis, for example in many times you can call diferentes
 * apis in a team developer but is the team is so organizate you can define a interfaces with
 * similar parameters, but with a data like generic
 */

/**Response Api Interface*/

interface ApiResponse<T>{
    status:         string | number;
    data:           T[];
    msg:            string
}

/**We create two interface from two diferentes apis response, example*/

/**Interface for users */
interface userrespApi{
    readonly id:         number | string;
    name:               string;
    lastname:           string;
}

/**Interface for roles */
interface rolresponseApi{
    readonly id:            number | string;
    descuento?:             boolean;
    porcDescuento?:         number;
    sueldoBruto:            number;
    decimo:                 number;
}

/**We can simulate an api response from users */
let simulateuserresp:userrespApi[] = []

let alex:userrespApi ={
    id:1,
    name:'Alex',
    lastname:'Ordoñes'
}

let centeno:userrespApi ={
    id:2,
    name:'Centeno',
    lastname:'Ostaiza'
}

simulateuserresp.push(alex, centeno);

/**We can simulate an api response from roles */
let simulaterolresponse:rolresponseApi[] = []

let rolAlex:rolresponseApi ={
    id:1,
    sueldoBruto:600,
    decimo:200
}

let rolcenteno:rolresponseApi ={
    id:2,
    sueldoBruto:600,
    decimo:100
}

simulaterolresponse.push(rolAlex, rolcenteno);


function GetData<T>(dataget:T[]):ApiResponse<T>{

    let respuesta:ApiResponse<T>={
        status:200,
        data:dataget,
        msg:'Lista de usuarios'
    }
    return respuesta

}

/**there we go, so you can use the interface to call two functions with diferentes values*/

/**we can call the function to get all user */

let usuarios_resp = GetData<userrespApi>(simulateuserresp);

/**so, you can see all propierties from user with asociate with the interface ApiResponse */

console.log(usuarios_resp.data[0].lastname)

let roles_resp = GetData<rolresponseApi>(simulaterolresponse);


/**so, you can see all propierties from rol with asociate with the interface ApiResponse */

console.log(roles_resp.data[0].sueldoBruto);




