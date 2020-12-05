const getUser = id => {
    setTimeout(() => { 
        console.log("Reading a user from database...")
        return { id : id , gitHubUsername : 'mdalam1' }
    }, 2000)
    // setTimeOut is an asyncronous method in js which doesn't block the execution.
}

console.log("Before")
const user = getUser(1)
console.log(user)
console.log("After")

