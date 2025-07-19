//   ways to declare object in J.s

const student = {
    fullName: "manash",
    scholar_ID: "2213150",
    printMarks: function(){
        console.log("marks = ", this.marks); // jote ami this lakhung ami uta object
        // kotha koya asung e.g ami ate this.mark => student.mark
    }
};


class ToyotaCar{

    constructor(){
        console.log("creating constructor")
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    setBrand(brand){
        this.brand = brand;
    }
}

let fortuner  = new ToyotaCar(); // new ak key word hai jo 
//  object ko create karta hai through car
//  here fortuer is an object
fortuner.setBrand("fortuner");
let bmw  = new ToyotaCar()
bmw.setBrand("bmw");