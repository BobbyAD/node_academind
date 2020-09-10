const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Done!");
        }, 1500);
    });
    // synchronous, called immediately
    return promise;
};

setTimeout(() => {
    console.log("Timer is done!");
    // now allowed to put .thens after each other instead of nesting
    fetchData().then(text => {
        console.log(text);
        return fetchData();
    })
    .then(text2 => {
        console.log(text2);
    })
}, 2000);

console.log("Hello");
console.log("Hi");
