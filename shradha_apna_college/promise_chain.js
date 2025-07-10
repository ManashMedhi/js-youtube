const aysnFun = ()=> {
    return new Promise((resolve ,reject)=>{
      setTimeout(()=>{
        console.log("some data1 ");
        resolve("success");
      }, 3000);
    })
}

console.log("fetching data 1");
let p1 = aysnFun();
p1.then(()=>{
    console.log(res);
})