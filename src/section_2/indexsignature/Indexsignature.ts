/**Index signatura is like call an array with other propierties, example */

/**Without Index signature*/

interface PlacesGoogle{
    lat:number  | string,
    long:number | string,
    getlocation():void,
}

let Ecuador:PlacesGoogle = {
    lat:'-273849',
    long:'-54647',
    getlocation() {
        
    },
    /**if you add other propierties there you don't*/
    // code
}

interface Places {
    [key:string]:number |string
}

let Cuba:Places = {
    lat:'-273849',
    long:'-54647',
    /**Now if you can add other propierties you can apply it withour and error */
    location:'America',
    Country:'Cuba'
}
/**example */

console.log('going to show Ecuador');
console.log(Ecuador);


console.log('going to show Cuba');

console.log(Cuba);
/**But is you type a propierties that is undefined or doesn't exist you can make one error */

console.log(Cuba['Coun']);

console.log(Cuba.Country);


/**so if you can solvetly this case you can make many things, for example define an array to types*/

/**example*/

/**example with indexsignature */
interface PlacesArray {
    lat:        number | string,
    lng:        number | string,
    location:   number | string;
}

interface PlacesWithType {

    [key:string]:PlacesArray[]

}

let cuenca:PlacesArray = {
    lat:'10',
    lng:'20',
    location:'cuenca'
}


let manabi:PlacesArray = {
    lat:'10',
    lng:'20',
    location:'cuenca'
}

const provincia:PlacesArray[] = []

provincia.push(cuenca, manabi)


const Bolivia:PlacesWithType = {
    provincia:provincia
}

/**so maybe this example isn't the best, but you can now that is more explicite
* the value to show when calle it an dot notation
*/

console.log('las provinvias con tipado');

console.log(Bolivia['provincia']);

/**you can use propierties ? to know that is true or false, example */

let propiertiesexist = Bolivia['cantos'] === undefined || Bolivia['cantos'] === null? 'No existe propiedad': Bolivia['cantos']
console.log(propiertiesexist);

