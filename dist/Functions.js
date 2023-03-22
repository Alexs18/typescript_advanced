"use strict";
const plusnumer = () => {
    return 23;
};
const implicitefunction = (msg, codestatus) => {
    if (msg === 'success') {
        return 'you have success in this process';
    }
    if (codestatus === 200) {
        return 'response code is rigth';
    }
    return 'the process it ll with mistakes';
};
function CheckCodeResponse(coderesponse) {
    console.log('text');
    console.log(coderesponse);
    return true;
}
const coderesponde1 = "error";
CheckCodeResponse(coderesponde1);
function checkstate(state) {
    if (state === "error") {
        throw new Error('this is the mistake');
    }
    throw new Error('Without exeption');
}
checkstate(coderesponde1);
//# sourceMappingURL=Functions.js.map