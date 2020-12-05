function getUser(id, callback){
    setTimeout(() => { 
        console.log('Reading a user from database...')
        callback({ id : id , gitHubUsername : 'mddalam1' })
    }, 2000)
    // setTimeOut is an asyncronous method in js which doesn't block the execution.
}
function getRepositories(username, callback){
    setTimeout(() => {
        console.log('Calling GitHub API... ')
        if(username === 'mddalam1')
            callback(['repo1', 'repo2', 'repo3'])
        else
            callback([])
    }, 2000)
}

console.log('Before')   
getUser(1, user => {
    console.log('User : ', user)
    getRepositories(user.gitHubUsername, repos => {
        console.log("Repositories : " + repos)
    })
})
console.log("After")

