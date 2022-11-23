promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("I love You !!")}, 3000)
  });
  
  promise.then((value)=>{
    document.getElementById("demo").innerHTML = value;
  });