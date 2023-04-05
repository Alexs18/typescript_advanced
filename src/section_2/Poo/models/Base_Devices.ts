import { MethodDevice } from "../interfaces/Devices_Interfaces";

export abstract class Base_Devices implements MethodDevice{

    constructor
    (
        private _Id:string | number,
        private _Make:string,
        private _Model:number,
        private _Manufacturer:string,
        protected dateF:string,
    ){}
    

    /**Make getter to class base is almost incorrectly, because you need make more code
     * so you can use protect  yo tell hem that is propierties just access from instance class
     * example
     */
    get Id():string | number{
        return this._Id;
    }
    get Make():string{
        return this._Make;
    }
    get Model():string{
        return this.Model;
    }
    get Manufacturer():string{
        return this.Manufacturer;
    }

    public characteristics():string{
        const DeviceDescription = `identificacion ${this._Id}, Marca: ${this._Make}, Modelo: ${this._Model}, Fabricante: ${this._Manufacturer}`
        return DeviceDescription 
    }

    /**if you use abtsract method in all clas, you
     * can use reservate word abstrarct to make a abstract method
     */

    abstract BuscarActualizaciones():void

    /**so you need implement this method because implement interface MethodDevice*/
    async searchManufacturer():Promise<Response | undefined>{
        try {
            let ManufacturerHistory = fetch(`www.google.com/${this.Manufacturer}`);
            return ManufacturerHistory
            
        } catch (error) {
            throw error   
        }
    }
    
    async seatchMarke():Promise<Response | undefined>{
        try {
            let ManufacturerHistory = fetch(`www.google.com/${this.Make}`);
            return ManufacturerHistory
            
        } catch (error) {
            throw error   
        }
    }
    

}