/**with type assertion you can make something like put an alias
 * on lenguaje structure query or sql 
 */

/**example*/

let ElementToDom: any = null;

/**you cantt asociate this variable to other like forcing */

let ELEMENT = ElementToDom as number;
ELEMENT = 10;

/**example if you search an element obove the DOM you can find something
 * like that
 */

let div_one = document.getElementById('element1') as HTMLInputElement

div_one.value = 'new value from de html is there';

/**in the other example we can seacrh one list of element to
 * know what is the class we have like a content and know 
 * we know like a listclass is a string you make the alias like string
 */
let list_targets = document.querySelectorAll('.content_element');

list_targets.forEach(target=>{
    target.classList.forEach((value, key)=>{
        value as string
        value.includes('listelement')
    })    
})
