// const coding = ["js", "ruby", "java", "google"];

// const res = coding.forEach((val) => {
//     console.log(val);
// });
// console.log(res);


// for each doesn't return any thing run the code
// we will get undefined

const myNums = [1,2,3,4,5,6,7];

// const newNums = myNums.filter((val) => {
//     return val > 3
// })
// console.log(newNums);
// OR we can use the foreach function also
const newNums = [];

myNums.forEach((val) => {
    if (val > 2) {
        newNums.push(val);
    }
});

console.log(newNums); // [3, 4, 5, 6, 7]