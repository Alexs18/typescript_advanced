/**to use decorator in a method you need to know that the function get 
 * target like and object, proertyKey like a string or symbol
 * descriptot like a any 
 */

/**decorator to add a propierties called last_name*/

/**remeber the decorator will execute it before the class was instanced
 * so if you need access for a propierties you can't
 */
/**You need to create a decorator for the method hey in the class peoples  */

/**so for this example you need to create a decorator to filter a list of products that start with
 * 00 and if the value to return to price is > 20 you need to add special price equals false
 */

interface PRODUCTOS {
    id:        number | string;
    price:              number;
    special_price?:      boolean;
}

function DecoratorforMethod(target:Object, proertyKey:string, descriptor:PropertyDescriptor) {
    
    // console.log('la decoracion por el metodo');
    // console.log(descriptor);
    
    let filterds = descriptor.value;
    descriptor.value = function(code:string) {
        console.log('the filter');
        filterds(code);
        
        // if (filterds === undefined) {
        //     return descriptor.value(code);
        // }
        // if (filterds.length <= 0) {
            
        //     return filterds.special_price = filterds.price > 20? filterds.special_price = false: true;

        // }
        // return filterds.filter((products:any)=> {
        //     if (products.price > 20) {
        //         products.special_price = false
        //     }
        //     products.special_price = true

        // })
    }
    
}



class Bodega{
    constructor(
        private readonly id:    number | string,
        protected name:         string,
        public Products:        PRODUCTOS[]
    ){

    }

    get getname():string{
        return this.name
    }

    @DecoratorforMethod
    filterproducts(code:string):PRODUCTOS[] | PRODUCTOS | undefined{

        let filterproducts = this.Products.filter((producto)=> {
            if (typeof producto.id === 'string') {
                return producto.id.startsWith(code);
            }
            producto.id = producto.id.toString();
            return producto.id.startsWith(code);
        });
        return filterproducts;
    }
}

let pro1:PRODUCTOS={
    id:'001',
    price:25,
    special_price:true    
}
let pro2:PRODUCTOS={
    id:'002',
    price:10,
    special_price:true    
}
let pro3:PRODUCTOS={
    id:'032',
    price:25,
    special_price:true    
}

let listproducts:PRODUCTOS[] = []

listproducts.push(pro1, pro2, pro3);


let bodega1 = new Bodega(1, 'BODEGA FINA', listproducts);

let filtro = bodega1.filterproducts('00');

console.log('el filtro de los productos desde funcion');
console.log(filtro);
