const marvel_heros = ["thor" , "ironman" , "spiderman"];
const dc_heros = ["superman" , "batman" , "flash"];
marvel_heros.push(dc_heros)
console.log(marvel_heros); // we are getting the dc heros as single element 

//
 const allheros = marvel_heros.concat(dc_heros);
 console.log(allheros);

 // or wew can use

 const all_heros = [...marvel_heros,...dc_heros];
 console.log(all_heros);
 const another_arr = [1,2,3,[4,5,6] ,7, [6,7 ,[4,5]]];
 const real_another_arr = another_arr.flat(Infinity);
 console.log(real_another_arr);

 console.log(Array.isArray("manash"));
 console.log(Array.from("manash"));
 console.log(Array.from({name: "manash"})); // interesting vvimp

 let score1 = 100;
 let score2 = 200;
 let score3 = 300;

 console.log(Array.of(score1 , score2 ,score3));



