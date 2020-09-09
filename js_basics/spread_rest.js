const hobbies = ['Sports', 'Cooking'];

const copiedArray = hobbies.slice();

console.log(copiedArray);

const copyTwo = [...hobbies];

console.log(copyTwo);

// fixed size
// const toArray = (a, b, c) => {
//     return [a, b, c]
// }

// rest operator ...args
const toArray = (...args) => {
    return args;
}

console.log(toArray(1,2,3))
