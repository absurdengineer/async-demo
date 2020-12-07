// Promises in js are objects which holds the eventual result of an Asynchronous operation. 
// Either Data or Error 
// To create a promise we use Promise() constructor which takes an argument 
// i.e., function with two arguments which are resolve and reject which are also functions.
// And they gets invoked on certaion condition,
// that if everything goes right then first argument function i.e, resolve() gets invoked with the data
// otherwise second argument function i.e, reject() gets invoked with the error object.
// Promise() body consists of asyncronous operation to execute.

const p = new Promise((resolve, reject) => {
    setTimeout(() => { 
        let output = true 
        if(output)
            resolve({id : 1, name : "Md Dilshad Alam"})
        else
            reject(new Error("Error  Message."))
    }, 2000)
})

// To consume a promise we use two methods which are then() and catch()
// If execution of asynchronous function was successful then 
// then() method will get executed with the data thrown by resolve() method.
// otherwise catch() method will get executed with the error message thrown by reject() method.

p.then(data => console.log("Data : ", data))
 .catch(err => console.log(`Error : ${err.message}`))

