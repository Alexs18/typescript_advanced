class Pokemon{

    private static joinpower:number = 1;
    constructor(
        private readonly id:number,
        public name:string,
        public aka:string,
        public evolution:boolean,
        private _power:number | string
    ){

    }

    /**you also can create private method only by access inside to the class
     * in this case, I gonna use to get state evolution, like a message to welcome
     */
    private stateevolution():string{
        let state:string = '';
        this.evolution === true?
            state = 'I can evolution':
                state = 'I cannot evolution';
        return state;
    }

    introductionpokemon():string{
        let introduction:string = '';
        introduction = `Hi Im the pokemon ${this.name} my power is ${this.power}
        and I wanna tell you ${this.stateevolution()} and you can tell me ${this.aka} `;
        return introduction;
    }

    static addpower():number | string{
        return this.joinpower++
    }
    get power():number | string {
        return this._power;
    }

    /**we can create a method static, to know how much pokemos have a instance,
     * or get convinate power all pokemos, or somethins like that
     */

    /**to get convinate power from all pokemons*/
    static powerall():number | string{
        let defaul_Pokemon = new Pokemon(0, 'defaul', 'df', false, 0);

        if (typeof defaul_Pokemon.power === 'string') {
            
            let numberpower = parseInt(defaul_Pokemon.power);
            return this.joinpower = this.joinpower + numberpower;
            
        }
        return this.joinpower = this.joinpower + defaul_Pokemon.power; 
    }

    static pwd():number{
        return Pokemon.joinpower
    }

}

let Picachu = new Pokemon(1, 'Picachu', 'PKA', true, 500);
let Bolbasor = new Pokemon(2, 'Miutu', 'Miu', false, 1000);
let Miu = new Pokemon(3, 'Miutu', 'Miu', false, 1000);

Pokemon.addpower();

console.log('los pokemones');
console.log(Picachu);
console.log(Bolbasor);

console.log('vemos la suma de los poderes de los pokemones');
console.log(Pokemon.pwd());

