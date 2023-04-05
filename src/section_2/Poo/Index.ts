/** we can call all classe to know how work abstract class */

/** export Phone, Tablet and Laptop class */
import {Laptop} from '../Poo/class/Laptop'
import {Phone} from '../Poo/class/Phone'
import {Tablet} from '../Poo/class/Tablet'
import {Base_Devices} from '../Poo/models/Base_Devices'


/**we can create a instance from each created class*/
const HP        = new Laptop('Mecanico', 4, 1, 'Hp', 9758, 'Tokio', '2022-10-20');
const IPHONE14  = new Phone('Iphone 14', '200 gb', true, 'Simple', 2, 'Iphone', 9759, 'USA', '2022-10-20');
const TOSHIBA20 = new Tablet(true, 3, 'Hp', 98, 'China', '2022-10-20');


/**so we can show our instance from device */
let desciption_tablet = TOSHIBA20.characteristics();
let desciption_phone  = IPHONE14.characteristics();  
let desciption_laptop = HP.characteristics();

console.log(`des lap ${desciption_laptop}`);
console.log(`des phone ${desciption_phone}`);
console.log(`des tablet ${desciption_tablet}`);

/**Everything is ok, but is you use the class base you can make other instance, because is not abstract class
 * you need to change to abstract class to make work
 */


/** if you descoment that doesn't work becase change the instance from the abstract method */

// const InstanceToBase = new Base_Devices(3, 'Hp', 98, 'China')