/**number, string, boolean, string */
interface typesinterface{
    dni:number,
    name:string,
    user:boolean,
    childrens:string

}
const types:typesinterface = {
    dni:8,
    name:'Alexis',
    user:false,
    childrens:'Maria'    
}
console.log(types)

/**any */

/**If you uses any is the same that use javascript */

let anydata:any = 'Alexis';
console.log(anydata)
anydata = 1234;
console.log(anydata)