const person = {
    name: "Bobby",
    age: 29,
    greet() {
        console.log("Hi, I'm " + this.name + " and I'm " + this.age);
    },
};

console.log(person);

person.greet();

// destructuring
const printName = ({ name }) => {
    console.log(name);
};

printName(person);

const { name, age } = person;

console.log(name, age)