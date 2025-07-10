function sum(a,b){
    let add = a+b
   return add;
}
function calculator(a,b,sumCallback){
    const res =  sumCallback(a,b);
    console.log(res);
}
calculator(1,2,sum)