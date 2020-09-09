const name = "Bobby";
let age = 235;
const hasHobbies = true;

age = 453;

function summarizeUser(userName, userAge, userHasHobby) {
    return (
        "Name is " +
        userName +
        ", age is " +
        age +
        " and the user has hobbies: " +
        userHasHobby
    );
}

console.log(summarizeUser(name,age,hasHobbies));
