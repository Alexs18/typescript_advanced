import { RepoIphone } from "../interfaces/Devices_Interfaces";
import { Base_Devices } from "../models/Base_Devices";

export class Phone extends Base_Devices {
    
    constructor(
        public Name         :string,
        public Capacity     :string,
        public Sim_Dual     :boolean,
        public Type_Screem  :string,
        Id          :string | number,
        Make                :string,
        Model               :number,
        Manufacturer        :string,
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

    private DualSim():string{
        let chipDual:string = '';
        chipDual = 
            this.Sim_Dual? chipDual = 'cuenta con doble chip':
                'cuenta con solo un chip';
        return chipDual; 
    }
    /**I wanna se characteristics from this devices*/
    public override characteristics():string{
        
        const PhoneDescription = `Nombre del telefono ${this.Name} su capacidad es de
        ${this.Capacity}, ${this.DualSim()}, su tipo de pantalla es ${this.Type_Screem}
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