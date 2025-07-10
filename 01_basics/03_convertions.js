let score="manash";
console.log(typeof score);
console.log(typeof (score)); // another way to write the above line
let valueInNumber = Number(score) // convert the score value into the number 
console.log(typeof valueInNumber);
console.log( valueInNumber); // and we want to know that what is the value present in the valueInNumber after the convertions

// NaN means not a number
//"any string " => NaN
// true -> 1 and false -> 0 

let x= "manash";
let y= Boolean(x);   // convertion into the boolean
console.log(y);

// if x==1 the o/p will be true; 
// if x= any string then o./p will be true if empty strig then the o/p will be false