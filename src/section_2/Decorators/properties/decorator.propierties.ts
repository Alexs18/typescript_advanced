/**In this case you need to add and decorator for a params, to
 * know if the password cumple with the restrictions, using rgex
*/

/**for this case we need to create class called users with 3 parameter
 * name, last_name and password this laster need to be min 8 liength one uppercase
 * one lowercase, number and special signo, so there we go
 */

/**Target is an object and propertyKey is a the name from propertyKey I mean the params in this case
 * will be password
 */


/**so this is the decorator to value how can make a decorator for a properties with typescript */

function Validation(regex:RegExp) {
    
    return (target:any, propertyKey:string)=>{

        const description: PropertyDescriptor = {
            
            set(value:string){
               if (value.match(regex) === null) {
                throw new Error ('al parecer no cumple con los parametros de regex')
               }
                 console.log('siga su camino');

            }

        }
        Object.defineProperty(target, propertyKey, description)

    }
    
}

class User{
    // (?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}$
    @Validation(/^lin99/)
    public password:string
    constructor(
        public name:string,
        public last_name:string,
        password:string)
        
    {
        this.password = password;
    }



}

const Puser = new User('wwww', 'a', 'l<zx<zxin99@...83392A')



export {}
