class person{

    constructor(name){
        this.species = "homo sapiens";
        this.name =name;
    }
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

    constructor(name){
        super(name); // super have to use before using the this keyword for inheritance
        this.branch = "Electrical Engineering";
    }
    work(){
        console.log("solve problem");
    }
}

let manash = new Engineer("manash");
console.log(manash)