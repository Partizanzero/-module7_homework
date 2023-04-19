

const ownCity = {
    ownCity: "Samara"
}

const user = Object.create(ownCity);
user.name = "Lena";
user.surname = "Ivanova";
user.city = "Moscow";

/* Task 1 */
function getOwnProperties(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key);
        }
    }
}

getOwnProperties(user);


/* Task 2 */
function isProperties(prop, obj) {
    return prop in obj;
}
console.log(isProperties('surname', user));



/* Task 3 */
function createObjNoPrototype() {
    const obj = Object.create(null);
    return obj;
}

console.log(createObjNoPrototype());
