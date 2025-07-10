const getPromise = ()=>{
    return new Promise((resolve ,reject)=>{
        console.log("I am a promise");
        resolve("success");
        // either resolve pass koribo nai ba reject pass koribo
        reject("network error");
    });
};

let promise = getPromise();
promise.then(()=>{
    console.log("promise fulfilled");
});
promise.catch(()=>{
    console.log("rejectd");
})