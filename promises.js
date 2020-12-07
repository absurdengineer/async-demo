// Promises in js are objects which holds the eventual result of an Asynchronous operation. 
// Either Data or Error 
// To create a promise we use Promise() constructor which takes an argument 
// i.e., function with two arguments which are resolve and reject which are also functions.
// And they gets invoked on certaion condition,
// that if everything goes right then first argument function i.e, resolve() gets invoked with the data
// otherwise second argument function i.e, reject() gets invoked with the error object.
// Promise() body consists of asyncronous operation to execute.

//const p = new Promise((resolve, reject) => {
//    setTimeout(() => { 
//        let output = true 
//        if(output)
//            resolve({id : 1, name : "Md Dilshad Alam"})
//        else
//            reject(new Error("Error  Message."))
//    }, 2000)
//})

// To consume a promise we use two methods which are then() and catch()
// If execution of asynchronous function was successful then 
// then() method will get executed with the data thrown by resolve() method.
// otherwise catch() method will get executed with the error message thrown by reject() method.

//p.then(data => console.log("Data : ", data))
// .catch(err => console.log(`Error : ${err.message}`))

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Performing Asynchronous Operation : 1 ...")
        resolve(1)
    }, 2000) 
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Performing Asynchronous Operation : 2 ...")
        resolve(2)
    }, 2000) 
})

// If you want to perform certain operation after the end of multiple asynchronous operations 
// then you can use Promise class's static method all() which takes array of promises as argument
// and return array of results from all passed promises for successful execution.
// and if any of the operation fails then it gives the error for the whole operation.

//Promise.all([p1,p2])
//    .then(result => console.log(result))
//    .catch(error => console.log(`Error : ${ error.message }`))

// If you want to perform certain operation as soon as any of multiple asynchronous operations executes
// then you can use Promise class's static method race() which takes array of promises as argument
// and returns the result of first executed Asynchronous operation.
// and if first executing asyncchronous operation failed then throws error.

Promise.race([p1,p2])
    .then(result => console.log(result))
    .catch(error => console.log(`Error : ${ error.message }`))
