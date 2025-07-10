// immediately invoked functions expressions (IIFE)
// vvv imp/// why we use IIFE : ANS = becoz amar global scope julan variables take ulan bohut pollution kore utar karone ami IIFE use korung 

// ()() 
(function chai(){
    console.log(`DB connected`);
}) ();

// or by arrow function
(() => {
    console.log(`DB connected Two`)
})();

// or 
((name) => {
    console.log(`DB connected 3 ${name}`)
})("manash");


