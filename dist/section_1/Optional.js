"use strict";
let alumno = {
    id: undefined,
    nombre: 'richar'
};
console.log(`alumno es ${alumno === null || alumno === void 0 ? void 0 : alumno.id} `);
let DataDNIS = [];
let DNIALEXIS = {
    ID: 1,
    USER: 'ALEXIS',
    DNI: 123456
};
let DNIALISSON = {
    ID: 1,
    USER: 'ALISSON',
    DNI: 7891011
};
DataDNIS.push(DNIALEXIS, DNIALISSON);
function searchDNI(DNI) {
    let validatedExtension = DNI.toString();
    if (validatedExtension.length <= 0) {
        return null;
    }
    let DNIFOUND = DataDNIS.find(DNIS => DNIS.DNI === DNI);
    return DNIFOUND ? DNIFOUND : null;
}
let DNIFINAL = searchDNI(7891011);
console.log('show me DNI', DNIFINAL);
//# sourceMappingURL=Optional.js.map