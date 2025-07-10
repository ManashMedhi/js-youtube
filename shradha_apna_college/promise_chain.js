const aysnFun1 = ()=> {
    return new Promise((resolve ,reject)=>{
      setTimeout(()=>{
        console.log("some data1 ");
        resolve("success");
        // reject("network error")
      }, 1000);
    })
}

const aysnFun2 = ()=> {
    return new Promise((resolve ,reject)=>{
      setTimeout(()=>{
        // console.log("some data2 ");
        resolve("success");
      }, 4000);
    })
}

// console.log("fetching data 1");
// let p1 = aysnFun1();
// p1.then((res)=>{
//     console.log(res);
// })

// console.log("fetching data 2");
// let p2 = aysnFun2();
// p2.then((res)=>{
//     console.log(res);
// })
// amak jodi lage j amar dui tay data akologe nahe and time tao same doa ase then  amak chaining use koriba lagibo
// ami uporar juta code laksung utar amr time ta balag balag ase 

console.log("fetching data 1");
 aysnFun1().then((res)=>{
    console.log("fetching data 2...");
   aysnFun2().then((res)=>{
    })
})

// OR we can write
aysnFun2(1)
.then((res)=>{
  return aysnFun2(2);
})
.then((res)=>{
  return aysnFun2(3);
}).then((res)=>{
  console.log("success");
})

