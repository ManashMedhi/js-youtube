const myArr = [0,1 ,2,3,4,5];
console.log(myArr[0]);

const myArr2 = ["shaktiman" , "naagraj"];
console.log(myArr2[1]);

//   Or we can decalare the array in this way also this is like a vector that we use in the cpp

const myarr = new Array(1,2,3,4);
console.log(myarr);
//methods of array
myarr.push(6);
myarr.pop() 
myarr.unshift(0);  // don,t use this TC  will be very more
myarr.shift();

// console.log(myarr.includes(9));
// console.log(myarr.indexOf(3));
// console.log(myarr);

const newArr = myArr.join(); // convert the array to the string
console.log(myarr);
console.log(newArr);

// slice and splice

console.log("A" , myarr)l;
const mynewarr1 = myarrr.slice(1,3);
console.log(mymearr1)
