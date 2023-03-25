/**We can make propierties like private params with methods private
 * but we can access them using getters and change them value
 * using setters
*/
class Employe {
    constructor(
        private _id:number,
        public name:string,
        public last_name:string,
        private _age?:number
    ){

    }

    /**Getters */
    /**This methods it'll show like a params, but you really know that is a function */
    get age():number{
        return this._age? this._age: 0;
    }

    /**Setters */

    /**so we this method we can change value from age like a params,
     * but if you can use this in case like one big bussinness or big class 
     * don't make sense that define this propierties like a private
     */
    set age(ageset:number){
        this._age = ageset
    }


}

const Linux = new Employe(1, 'Linux', '2010', 50);

/**we can use age like a params, but is using setters methods */
/**if you look around a methow you cant find, because the get methow is
 * like a params, but really is a function
 */
console.log('value from instance',  Linux.age);

/**we can set the value from age equal to 120 */
Linux.age = 120;

console.log(Linux);

/**we can change them values like */




// 