"use strict";
let ElementToDom = null;
let ELEMENT = ElementToDom;
ELEMENT = 10;
let div_one = document.getElementById('element1');
div_one.value = 'new value from de html is there';
let list_targets = document.querySelectorAll('.content_element');
list_targets.forEach(target => {
    target.classList.forEach((value, key) => {
        value;
        value.includes('listelement');
    });
});
//# sourceMappingURL=tyassertion.js.map