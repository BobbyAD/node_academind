var name = "Bobby";
var age = 235;
var hasHobbies = true;

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
