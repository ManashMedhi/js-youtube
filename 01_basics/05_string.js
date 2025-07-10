const name = "manash";
const count=50;
// console.log(name + count + "medhi"); // not recommanded

// use this , this is called string interpolation

console.log(`Hello my name is ${name} and my repo  count is ${count}`);  // back tags

const gameName = new String('ManashjyotiMedhi');
console.log(gameName.charAt(2));
const newString = gameName.substring(0,4)
console.log(newString);
const anotherString = gameName.slice(3,7);
console.log(anotherString);
const newStringOne= "    manash   d";
console.log(newStringOne.trim()); //  only trim the first space of the string 
console.log(gameName.replace('jyotiMedhi' , 'xyz'));
  


