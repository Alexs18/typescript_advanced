import { RepoIphone } from "../interfaces/Devices_Interfaces";
import { Base_Devices } from "../models/Base_Devices";

export class Laptop extends Base_Devices {
    
    constructor(
        public Teclado          :string,
        public Capacity_Usb     :number,
        Id              :string | number,
        Make                    :string,
        Model                   :number,
        Manufacturer            :string,
        dateF                   :string
    ){
        super(
            Id,
            Make,
            Model,
            Manufacturer,
            dateF
        )
    }

    /**I wanna se characteristics from this devices*/
    public override characteristics():string{
        const PhoneDescription = ` la laptop de marca ${this.Make} cuenta con
        teclado de tipo ${this.Teclado} y con los ${this.Capacity_Usb} puertos usb
        y Las Caracteristicas son ${super.characteristics()}`
        return PhoneDescription;
    }

    /**as class base make a abstract method you can implement this method en all
     * class that you use herencia
     */

    /**So for obviusles reason its don't work, but you can make other example */
    async BuscarActualizaciones():Promise<RepoIphone>{
        /**you can searhc updates from a repositorio for example*/
        try {
            let repo = 'www.repo.iphone.com'
            let apirepo = await fetch(repo);
            let repoNew:RepoIphone= {
                repos:`${apirepo}`,
                key:true
            }
            return repoNew;
        } catch (error) {
            throw error
        }
    }

}