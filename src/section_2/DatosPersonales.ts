export class DatosPersonales {
    constructor(
        private _name:string,
        private _last_name:string,
        private _age: number,
        private _dni: number
    ){

    }
    getintroduction():string {
        let introduction = `Mi name is ${this._name},
        and my last name is ${this._last_name} Im ${this._age}
        years old, and my dni is ${this._dni}`
        return introduction;
    }
}
