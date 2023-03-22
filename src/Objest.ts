/**in typescript objects is like object in javascript
 * but we have many diference betwen us
*/
const people = {
    name:'alexis'
}
/**In typescript you can make another atribute like this
 * but you don't make something like that in typescript
   */

/**you can make a propieriti like readonly to anyone 
 * can chance this propiertie
  */

/**to make a atribute like readonly you can make a type or
 * make a interface example
 */

/**you can put one type above other:
 * example
 */

type Category = {
    readonly id:number,
    description:string,
    extintion?:boolean
}

type AnimalType={
    readonly id:number
    raza:String
    age?:number,
    category?:Category
}


let animal:AnimalType = {
    id:10,
    raza:'Canibal',
    category:{
        id:10,
        description:'PRIMATE'
    }
}

console.log(animal)

animal.raza = 'NORMAL'

/**You don't chance the value from id */
// animal.id = 100

console.log(animal)

//people.age = 24
