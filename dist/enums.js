"use strict";
var week;
(function (week) {
    week[week["monday"] = 1] = "monday";
    week[week["thurday"] = 2] = "thurday";
    week[week["friday"] = 3] = "friday";
})(week || (week = {}));
console.log('this is the week');
console.log(week);
console.log('Im gonna see friday');
console.log(week[3]);
console.log('Im gonna see the position from friday inside week');
console.log(week.friday);
console.log(2);
console.log(1);
//# sourceMappingURL=enums.js.map