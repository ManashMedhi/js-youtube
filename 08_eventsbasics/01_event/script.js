// let butttonOne  = document.getElementById("manash");
// butttonOne.onclick=(e)=>{
//     console.log("button was clicked");
//     let a = 100;
//     console.log(a);
//         a++;
//         console.log(a);
//     console.log(e);
//     when we print the console.log(e) then we get many properties

// }
// const div= document.querySelector("div");
// div.onmouseover=()=>{
//     console.log("you are inside the div in java script")
// }

const buttonOne = document.getElementById("manash"); // Correct ID, no #

if (buttonOne) {  // Check if element exists
    // Handler 1 (with event object 'e')
    buttonOne.addEventListener("click", (e) => {
        console.log("button1 was clicked - handler1");
    });

    // Handler 2
    buttonOne.addEventListener("click", () => {
        console.log("button1 was clicked - handler2");
    },false); //  this false is default 

    // Handler 3 (using the named function)
    const handler3 = () => {
        console.log("button1 was clicked - handler3");
    };
    buttonOne.addEventListener("click", handler3);

    // Handler 4
    buttonOne.addEventListener("click", () => {
        console.log("button1 was clicked - handler4");
        buttonOne.removeEventListener("click", handler3);
    });
} 