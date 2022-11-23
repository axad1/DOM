function display(value){
    document.getElementById("demo").innerHTML = value
}

promise = new Promise((resolve,reject)=>{
    x = 1
    if(x==0){
        resolve("Asad ok")
    }
    else{
        reject("my error")
    }
})

promise.then((value)=> display(value), (value)=> display(value))