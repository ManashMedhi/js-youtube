function getData(dataId , getNextData){
    setTimeout(function(){
        console.log("Here is your data" , dataId);
        if(getNextData){
            getNextData();
        }
    } , 2000);
}

//  call backk hell 
//  very tough to u nderstand
getData(1, ()=>{
    console.log("Please wait a second data 2 is loading...")
    getData(2,()=>{
        console.log("Please wait a second data 3 is loading...");
        getData(3,()=>{
            console.log("Please wait a second data 4 is loading...")
            getData(4,()=>{
                console.log("Please wait a second data 5 is loading...")
                getData(5,0)
            });
        });
    });
});