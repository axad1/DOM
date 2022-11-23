// A JavaScript class is not an object.
// It is a template for JavaScript objects.
// "use strict"
// The syntax in classes must be written in "strict mode".

class Car{
    x = "Hello World"
    hi(){
        return "Programming"
    }
}

obj = new Car()

document.getElementById("demo").innerHTML = obj.hi()