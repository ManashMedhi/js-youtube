consumePromiseFive()
async function getAllusers(){
    try {
        const response = await fetch('http://jsonplaceholder.typicode.com/users')
        console.log(response)
        const data = response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
        
    }
}


getAllusers();