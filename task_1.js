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





