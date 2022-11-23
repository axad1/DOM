// The await keyword can only be used inside an async function.

async function display() {
    promise = new Promise(function(resolve, reject) {
        resolve("I love You !!");
    });
    document.getElementById("demo").innerHTML = await promise;
}

display();