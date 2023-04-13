/**to use decorator in a class you need to know that the function get 
 * just one params like a function
 */

/**
 * @param target function
 */

/**decorator to add a propierties called last_name*/

/**remeber the decorator will execute it before the class was instanced
 * so if you need access for a propierties you can't
 */

function addlastname(last_name:string) {
    
    /**this will be the unic method that can be access when you create a decorator for a class*/
    return (target:Function)=>{

        let {prototype} = target;
        prototype.last_name = last_name;

    }

}

@addlastname('López')
class People {
    constructor(
        protected name:string
    ){

    }

    get getname():string{
        return this.name
    }
}

const linuxdev = new People('linux') as any;
console.log('propiedades' + linuxdev.getname, + 'propierties from constructor' + linuxdev.last_name);

