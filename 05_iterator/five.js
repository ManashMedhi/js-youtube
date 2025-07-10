// const coding = ["js" , "ruby", "java" ,"python"];
// coding.forEach(function (val){
//     console.log(val);
// })

// //   OR we can also use the arrow fubction
// coding.forEach((val) => {
//     console.log(val);
// })

// coding.forEach( (item , index,arr ) => {
//     console.log(item, index , arr);
// })

// Object inside the array  vvvv imp
const solve = [
    {
        username: "manash",
        pass: "1223",
    },
    {
        username: "manash_123",
        pass: "122344343%$%3",
    },
    {
        username: "manash_medhi12345",
        pass: "@#%#!@#@627",
    },
]
 solve.forEach((item)=>{
    console.log(item.username)
 })