const arr = [1,2,3,4,5];
for(const num of arr){
    console.log(num);
}

const greetings = "Hello  manash";
for(const greet of greetings){
    console.log(`Each char is ${greet}`)
}  

// maps

const map = new Map();
map.set('IN' ,"India");
map.set("USA" , "United state of America");
map.set('FR' , "France");
map.set('FR' , "France");
console.log(map);
for(const [key , value] of map){  // or we can write [key , value] in place of key that is called the destructure of the array
    console.log(key ,'->', value);
}

//   in this way we can't iterate the object

 const myObject = {
    game1: 'NFS',
    game2: 'Spiderman',
 }

 for(const [key , value] of myObject){
    console.log(key , '->' ,value);
 }