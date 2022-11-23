// get and set keywords
// do not use parentheses with getter
// use the underscore character to separate the getter/setter from the actual property

class Car {
    constructor(brand) {
        this._carname = brand;
    }
    get carname() {
        return this._carname;
    }
    set carname(x) {
        this._carname = x;
    }
}

let myCar = new Car("Ford");
// setter
myCar.carname = "Volvo";
// getter
document.getElementById("demo").innerHTML = myCar.carname;