"use strict";
let fake_data = 'alexis';
console.log(typeof (fake_data));
function ValidData(num) {
    if (typeof num === 'string') {
        let num0 = parseInt(num);
        return num0 + 1;
    }
    else {
        return num + 1;
    }
}
ValidData('10');
function ValidClientState(state) {
    if (typeof state === "boolean") {
        return state;
    }
    let statecheck = state.trim()
        .toLowerCase();
    let statechecked = statecheck === 'true' ? true : false;
    return statechecked;
}
let data0 = ValidClientState(true);
let data1 = ValidClientState(' TRUE ');
console.log(`cero ${data0}`);
console.log(`one ${data1}`);
function GetResponse(resp) {
    let checkstate = resp.status === 200 ?
        true :
        false;
    if (checkstate) {
        return resp.data;
    }
    return [];
}
let simulationapi = {
    data: [10, 20, 30],
    status: 200,
    finish: false,
    event: true
};
let reponseexample = GetResponse(simulationapi);
console.log('the simulation to the api');
console.log(reponseexample);
//# sourceMappingURL=Union.js.map