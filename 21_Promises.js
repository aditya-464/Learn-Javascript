// Promises Using JS
// Promises are asynchronous in nature, i.e they take time to resolve or reject. Meanwhile, the other lines present in the code continue their execution
const numList = [2, 3, 5, 7, 9, 11, 13, 17, 19, 23];

// Creating a promise to check the availability of 9 in numList
const myPromise = new Promise((resolve, reject) => {
    for (let i = 0; i < numList.length; i++) {
        if (i == 9) {
            resolve("Number 9 is Present in the numList!");
        }
    }
    reject("Number 9 is Absent in the numList!");

});

// If 9 is present in numList, resolve() is called which then triggers the "then" part
// If 9 is absent in numList, reject() is called which then triggers the "catch" part
myPromise.then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
})