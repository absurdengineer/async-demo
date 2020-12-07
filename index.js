function getUser(id){
    return new Promise((resolve, reject) => {
        // setTimeOut is an asyncronous method in js which doesn't block the execution.
        setTimeout(() => { 
        console.log('Reading a user from database...')
        if(id) resolve({ id : id , gitHubUsername : 'mddalam1' })
        else reject(new Error("Invalid User Id"))
        }, 2000)
    })
}
function getRepositories(username){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log('Calling GitHub API... ')
        if(username === 'mddalam1')
            resolve(['repo1', 'repo2', 'repo3'])
        else
            reject(new Error("No Repositories Found !!!"))
        }, 2000)
    }) 
}
function getRepoDetails(repo){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling GitHub Repo API... ')
            if(repo)
                resolve({name : "Express", commits : "7 commits"})
            else
                reject(new Error("Repo Doesn't Exist"))
        }, 2000)
    })
}

console.log('Before')   
getUser(1)
    .then(user => {
        console.log('User : ', user)
        getRepositories(user.gitHubUsername)
            .then(repos => {
                console.log("Repositories : " + repos)
                getRepoDetails(repos[0])
                    .then(repoDetail => {
                        console.log("Details of First Repo : ", repoDetail)
                    })
                    .catch(err => console.log(`Error : ${err.message}`))
            })
            .catch(err => console.log(`Error : ${err.message}`))
    })
    .catch(err => console.log(`Error : ${err.message}`))
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