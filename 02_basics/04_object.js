// const tinderUser = new Object{

// }
const tinderUser = {}
tinderUser.id = "123@abc";
tinderUser.name = "manash";
tinderUser.isLoggedIn = false;
// console.log()
const regularUser = {
    email: "manah@mehdi",
    fullname:{                      // nested object
        userfullname:{
            firstname: "manash",
            lastname: "medhi",
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a" ,2: "b"}
const obj2 = {3: "a " ,4: "b"}
const obj3 = Object.assign({},obj1 ,obj2);
const obj4 = {...obj1,...obj2};
console.log(obj4);  

// 

const users = [
    {
        id: 1,
        email: "manash@123",
    },
    {
        id:2,
        email: "manashmedhi@123",
    },
]

console.log(users[1].email);
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser));// key values lan ok array at banabo and joto tha key value pair thakibo oto ta array thakibo
// kumabela ami jodi saba sang j jey ta ase na nai uta ami ante saba pang
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in hindi ",
    price: "999",
    courseInstructor: "hitesh"
}
// if we want to print the course instructor name multiple times 

const {courseInstructor : instructor} = course //  this is the way to destructure the objects

//   JSON  java scrript object notation

// {
//     "name": "manash",
//     "coursename": "js is hindi"
// }