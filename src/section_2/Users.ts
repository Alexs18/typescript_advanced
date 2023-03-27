import { DatosPersonales } from "./DatosPersonales";

class Users extends DatosPersonales{
    constructor(
        public rol:string,
        public state:boolean,
        public admin:boolean,
        name:string,
        last_name:string,
        age:number,
        dni:number 
    ){
       super(
        name,
        last_name,
        age,
        dni
       ) 
    }
}

let Alexis = new Users(
    'Sistemas',
    true,
    true,
    'Alexis',
    'López',
    23,
    121321414
)

/**Im gonna introduce the new user like a method getintroduction
 * but this method is from class DatosPersonales
 */

console.log(Alexis.getintroduction());

// Alexis.getintroduction();