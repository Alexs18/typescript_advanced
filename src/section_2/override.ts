/**Override is a method that allow know when I use a method from
 * child class from parent class
 * 
 * example I have class maquinaria and I have class grua, so
 * to know that a method insede grua is on maquinaria class
 * you can put this method like override
 * example
 */

class Maquinaria{

    constructor(
        private readonly _id: number,
        private _name:string,
        private _proveedor:string,
        public area:string
    ){
    }
    showarea():string{
        return `${this._id} y ${this.area} and ${this._proveedor}`
    }
}

class Bomba extends Maquinaria{

    constructor(
        _id:number,
        _name:string,
        _proveedor:string,
        area:string
    ){
        super(_id, _name, _proveedor, area);
    }

    /**with the override method we can say that is a method woo is inside the parent class */
    /**example if you uses this method in a extension classee, this method will be override like her name say it 
     * and you can other method
     */

    /**For example if you take a method from the parent class without override method
     * this take a method from the parent class
     */

    override showarea(): string {
        return `From the instance maquinaria ${super.showarea()}`  
    }

}

let BombaPedrolo = new Maquinaria(
    1, 'bomba pedrolo', 
    'Solorzano carreño',
    'compras'
)

let BombaPresion = new Bomba(
    2, 'Bomba a precion',
    'Lopez Mendoza',
    'ventas'
)
console.log(BombaPedrolo.showarea());
console.log(BombaPresion.showarea());
