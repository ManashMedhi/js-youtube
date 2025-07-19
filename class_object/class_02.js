class ToyotaCar{

    constructor(brand ,mileage){
        console.log("creating constructor")
        this.brand = brand;
        this.mileage = mileage;
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

let fortuner  = new ToyotaCar("fortuner" ,10);
console.log(fortuner);
let bmw = new ToyotaCar("bmw" , 5);
console.log(bmw)
