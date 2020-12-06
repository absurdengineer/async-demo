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
function getRepoDetails(repo, callback){
    setTimeout(() => {
        console.log('Calling GitHub Repo API... ')
        if(repo)
            callback({name : "Express", commits : "7 commits"})
        else
            callback({})
    }, 2000)
}

console.log('Before')   
getUser(1, user => {
    console.log('User : ', user)
    getRepositories(user.gitHubUsername, repos => {
        console.log("Repositories : " + repos)
        getRepoDetails(repos[0], repoDetail => {
            console.log("Details of First Repo : ", repoDetail)
        })
    })
})
console.log("After")

/* 

Synchronous Methods
const user = getUser("mddalam1")
const repos = getRepositories(user.username)
const detail = getRepoDetails(repos[0])
console.log(user,repos,detail)

Asynchronous Methods
getUser(1, user => {
    console.log('User : ', user)
    getRepositories(user.gitHubUsername, repos => {
        console.log("Repositories : " + repos)
        getRepoDetails(repos[0], repoDetail => {
            // Again and Again calling Callbacks 
            // This situation is called `Callback Hell`
            console.log("Details : ", repoDetail)
        })
    })
})

*/