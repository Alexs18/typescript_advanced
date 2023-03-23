/**Union in typescript */

/**example 1 */

let fake_data: string | number = 'alexis'; 
console.log(typeof(fake_data));

/**in each function you cant call just the method
 * specifiqued for the values type
 * example in the first case you get all method for a string
 * and in se second condition you'll all method for a number
 */

function ValidData(num:string | number):number{
    if (typeof num === 'string') {
        let num0 = parseInt(num);
        return num0 +1
    }else{
        
        return num +1
    }
}

ValidData('10');

/**Intersections types  */
/**Mathematic logic */
/** or- and */
/**or = | and = & */

function ValidClientState(state:boolean | string):boolean{
    if (typeof state === "boolean") {
        return state
    }
    let statecheck = 
    state.trim()
    .toLowerCase();
    let statechecked = statecheck === 'true'? true:false;
    return statechecked
}

let data0 = ValidClientState(true);
let data1 = ValidClientState(' TRUE ');

console.log(`cero ${data0}`);
console.log(`one ${data1}`);


/**example with & */
type response1 = {
    data:number[]
    status:string | number
}
type response2 = {
    finish?:boolean
    event:boolean
}

function GetResponse(resp: response1 & response2):number[]{
    
    let checkstate = resp.status === 200?
        true:
            false;
    if (checkstate) {
        return resp.data
    }
    return []

}
/**operation & is like condition on any languajes 
 * programmer
 */
let simulationapi:response1 & response2 = {
    data:[10,20,30],
    status:200,
    finish:false,
    event:true
}

let reponseexample = GetResponse(simulationapi);
console.log('the simulation to the api');
console.log(reponseexample);

