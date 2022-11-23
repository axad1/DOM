// cannot call a static method on an object, only on an object class
// no need of object of class
class Car{
    constructor(name){
        this.name = name
    }
    static hello(x){
        return x.name
    }
}

obj = new Car("Asad")
document.getElementById("demo").innerHTML = Car.hello(obj);