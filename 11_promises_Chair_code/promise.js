new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task 1");
        resolve()
    },1000)
    }).then(()=>{
        console.log("async 1 resolved")
})

//  ..................................................................
//  returning data form the resolve

// Q. what we  have  done here
// ANS-:
// Waits 1 second.

// Then sends back a user object: { username: "chai", email: "chai@example.com" }.

// We catch that data using .then() and print it.
const promiseThree = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({username :"chai" , email: "chai@example.com"})
        },1000)

})

promiseThree.then(function(user){
    console.log(user);
})
//  .........................................................................



// promise four
const promiseFour = new Promise((resolve ,reject)=>{
        setTimeout(()=>{
            let error = true;
            if(!error){
                resolve({username: "manash" , password: "123"})
            }
            else{
                       reject('ERROR: Something Went Wrong')
            }
        },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
     console.log(error)
}).finally(()=>{
    console.log("the promise is either resolve or rejected")
})  

 async function consumePromiseFive(){
    try {
        const response = await promiseFive
    console.log(response);
        
    } catch (error) {
          console.log(error);
    }
 }
 

//  ...................................................................... 


consumePromiseFive()
async function getAllusers(){
    try {
        const response = await fetch('http://jsonplaceholder.typicode.com/users')
        console.log(response)
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
        
    }
}


getAllusers();