/**what is a decorator
 * well decorator is a function to add propierties functionality, or replace
 * existents functionality, you can implementate a decorate before you declare
 * a class or method inside a class, for example if you create a class called Animal
 * and you need execute this method before her initialization, you can use decorators
 * with the propierties from the constructor 
 */

/**Create a decorator para says hey I'm new decorator....*/

function DecoratorName() {
    
    /**Add propierties description */
    return (constructor:Function)=>{
        constructor.prototype.description = 'f'
    }
    
}

/**Create whatever class that you want*/
@DecoratorName()
class Animal{
    constructor(
        public name:string
    ){

    }
}

const Perro = new Animal('doggy') as any;

console.log('el perro');
console.log(Perro);

console.log('el metodo del perro');
console.log(Perro.description);

/** we can make an example using decorators en typescript, for example
 *  we have one class called Careers with 3 propierties facultad, ocupation, title
 *  so you need to add a functionality to know the address from this facultad if the facultad is medicene
*/

/**Create an enum to show the facultades */
enum facultades {
    medicine ='medicine',
    arquitecture ='arquitecture',
    informatic ='informatic',
}

/**Create Interface for the class */

interface facultad {
    readonly id:    string | number;
    name:           facultades;
    lat?:            string;
    lng?:            string;
    address:        string;
    description?:    string;
}

/**Create the function like a decorator, to add the propierties*/
/**you need to create a function to add a method from show the adrress */
function addmethodaddress() {
    
    return (constructor:Function)=>{
        let {prototype} = constructor    
        prototype.showaddress = function(){
            /**remeber you can get the propierties from the class using this, 
             * and remeber if you use array function you can't access to the this because when implements
             * array functions you lost the this
             */
            return this.facultadpropierties.address;
        }
    }
}

/**Create class Careers */
@addmethodaddress()
class Careers{

    constructor(
        public facultadpropierties:facultad, 
        public ocupation:string, 
        public title:string, 
    ){}

    showDescriptionCarrear():string{
        let descripcion = `${this.facultadpropierties}, : ${this.ocupation}, ${this.title}`
        return descripcion;
    }
    

}

let medic:facultad = {
    id:1,
    name:facultades.medicine,
    address:'2220'
}

let informatic:facultad = {
    id:2,
    name:facultades.informatic,
    address:'22200'
}

let Medicina =    new Careers(medic, 'medicina', 'Doctor/a');

console.log('la de medicina');
/**like decorator are experimental you can see a mistake here */

/**the line ts-ignore means that you'll ignore the data thats happend, because the decorator we are experimental
 * in typescript and can change with the time
*/
// @ts-ignore
console.log(Medicina.showaddress());


let Informatica = new Careers(informatic, 'informatic', 'Ingeniero');

console.log('la de informatica')


