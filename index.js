console.log("Before")
setTimeout(() => { console.log("Reading a user from database...")}, 2000)
// setTimeOut is an asyncronous method in js which doesn't block the execution.
console.log("After")