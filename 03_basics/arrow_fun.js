const user = {
    username: "manash",
    price: 999,
    welcomeMessege: function(){
        console.log(`${this.username} , welcome to the website`);
        console.log(this)
    }
}

user.welcomeMessege();
user.username = "medhi";  //we have change the context
user.welcomeMessege()

console.log(this) // vv imp ami jodi aita github ot run korung tahale empty string show koribo and
//  ami jodi eta browser ote run korung tahale amar window show koribo karon browser ot global object juta ase uta window ta hoil oi karone onte aise

function solve(){
    let username = "manash"
    console.log(this.username); // not possible becoz this function only use in the object 
}
solve()
// or since we can declare the function in this way also
const solve2 = function(){
    let username2 = "manash";
    console.log(this.username2);
}

// this is the way we declare our arrow functions arrow function 

 // arrow ex : fun 1
const arrowfun = () => {
    let username = "hitesh"
    console.log(this.username);
}

// arrow fun ex : 2
const addtwo = (nums1, nums2) => {
    return nums1 + nums2;
}
console.log(addtwo(3,4));

// or we can define the arrow function in this way i.e it is called implesite return 

const fun2 = (nums1, nums2) => (nums1+ nums2)
console.log(fun2(2,3));

// way to return an object using arrow function

const fun3 = (nums1, nums2) => ({username: "manash"})
console.log(fun3(2,34));
