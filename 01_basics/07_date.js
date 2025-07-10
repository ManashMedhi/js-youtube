let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
  
let myCreatedDate = new Date(2025 , 5, 31 , 5, 3);
// console.log(myCreatedDate.toLocaleDateString());

// time stamps 
let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Date.now());  // we will get the time in milisecond
console.log(Math.floor(Date.now()/1000)); // to convert the milisecond into second
 
let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());