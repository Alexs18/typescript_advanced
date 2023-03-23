/**Enum whithout const is you define enum like a const
 * you can access all values like a object
 */

enum week {
    monday = 1,
    thurday,
    friday
}

console.log('this is the week');
console.log(week);
console.log('Im gonna see friday');
console.log(week[3]);
console.log('Im gonna see the position from friday inside week');
console.log(week.friday);

/**If you define an enum like const you dont can acces to this
 * key like 1,2,3 etc
*/
const enum stateresponse {
    loading,
    success,
    error
}

console.log(stateresponse.error);
console.log(stateresponse.success);