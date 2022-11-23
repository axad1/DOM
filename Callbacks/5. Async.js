/*
async function myFunction(){
    return "Hello";
}
// is same as
function myFunction() {
    return Promise.resolve("Hello");
    or
    return Promise.reject("Error");
}
*/
function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}

async function myFunction() {return "Hello"}

myFunction().then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error + " by error");}
    );