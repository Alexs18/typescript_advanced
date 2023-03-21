"use strict";
let dataarrays = {
    numberarrays: [1, 2, 34, 5],
    stringarrays: ['Alexis', 'Richar', 'Eimy'],
    booleanarrays: [true, false]
};
let sum = dataarrays.numberarrays.reduce((after, currect) => {
    return after + currect;
});
console.log(sum);
console.log(dataarrays);
//# sourceMappingURL=Arrays.js.map