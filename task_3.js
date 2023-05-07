
function createObjNoPrototype() {
    const obj = {};
    return obj;
}

console.log(createObjNoPrototype());

/* 

var. 2 - with prototype:

function createObjNoPrototype() {
    const obj = Object.create(null);
    return obj;
}

console.log(createObjNoPrototype());

*/