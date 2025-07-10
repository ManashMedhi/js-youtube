// to iterate in the object

const myObject = {
    js: 'javascipt',
    cpp: 'C++',
    rb: 'ruby',
}
for (const key in myObject) {
        console.log(`${key} shortcut is for ${myObject[key]}`);
}

// for in loop in the array
const programming = ["js","rb", "py", "java"];
for(const key in programming){
     console.log(programming[key]);
}