class parent{
    hello(){
        console.log("hello");
    }
}
class child extends parent{

}
let object = new child()
// console.log(object.hello())

class person{
    eat(){
        console.log("eat");
    }

    sleep(){
        console.log("sleep");
    }
    work(){
        console.log("do nothing");
    }
}
class Engineer extends person{
    work(){
        console.log("solve problem");
    }
}

let manash = new Engineer();
console.log(manash.work())