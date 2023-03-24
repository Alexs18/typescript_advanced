/**basic clase in typescript */

class Team {

    /**que can make all atributes there */
    nombre:string;
    lider:string;
    /**this value is optional */
    caracteristicas?:string;
    area:string;
    id:number

    constructor(nombre:string, lider:string, area:string, id:number){
        this.nombre = nombre;
        this.lider = lider;
        this.area = area;
        this.id = id;
    }


}

/**instance from a class with typescript */
let BLUE_TEAM = new Team('BLUE', 'ALEXIS', 'contabilidad', 1);

console.log(BLUE_TEAM.area);

/**we can make all caracteristics from a instance BLUE_TEAM */


/**PRIVATE PARAMETERS OR ACCESS CONTROL PROPIERTIES */

class Company {

    private _id:number;
    /**we can make a paramrs like just to read */
    readonly address:string;
    name:string; 
    constructor(id:number, name:string, address:string){
        this._id = id;
        this.name = name; 
        this.address = address;
    }

    /**we can make a method to call Company name*/
    namecompany():string{
        /**We can see the propierti id above the class or inside the clas idk how
         * write that very well
         */
        return `the name component is ${this.name} her id is ${this._id}`
    }

}

/**we can see the name of company */
const COMPANY_GUTP = new Company(10, 'GUTP', '1120-2040');
console.log(COMPANY_GUTP.namecompany());

/**we can see just the name params, because the id param is private */
console.log(COMPANY_GUTP.name);

/**is you try see the param id, this is invisible to instance from this class */

/**wen you don't change value insede param readonly, example
 * we can try to change value to addess an another
 */

/**WE CAN'TTTTT */
// COMPANY_GUTP.address = 'DJDHDJHD'



/**thera are way to make a class very clear or withut a lot params before 
 * the constructor
 */

class Country {

    /**this is the same that speak that*/
    constructor(
        
        private _id:number,
        public name:string,
        public capacity:string,
        public mainbussiness:string,
        
    ){}

    /**id
     * id:string
     * this.id = id
     */
    /**and we cant make all functions that we have been before without repet code */
    tellmeCompany():string{
        return `name company ${this.name}, bussiness main ${this.mainbussiness}`
    }


}

let ECUADOR = new Country(1, 'ECUADOR', '17 MILLONES', 'EXPORTACION DE PLATANO');
console.log(ECUADOR.tellmeCompany());
