const user = {
    name: "Lena",
    surname: "Ivanova",
    city: "Moscow"
}

function isProperties(prop, obj) {
    return prop in obj;
}
console.log(isProperties('surname', user));
