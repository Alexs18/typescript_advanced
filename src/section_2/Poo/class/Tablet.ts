import { RepoIphone } from "../interfaces/Devices_Interfaces";
import { Base_Devices } from "../models/Base_Devices";

export class Tablet extends Base_Devices {
    
    constructor(
        public Multi_Touch      :boolean,
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

    private MultiTouch():string{
        let Multi:string = '';
        Multi = 
            this.Multi_Touch? 'multi touch ':
                'un solo touch';
        return Multi; 
    }

    /**I wanna se characteristics from this devices*/
    public override characteristics():string{
        
        const PhoneDescription = ` la Tablet de marca ${this.Make} cuenta con
        ${this.MultiTouch()}
        y Las Caracteristicas son ${super.characteristics()}`
        return PhoneDescription;

    }
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