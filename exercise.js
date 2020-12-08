const getCustomer = id => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                id : 1,
                name : "Md Dilshad Alam",
                isGold : true,
                email : 'mdalam1@gmail.com'
            })
        }, 4000)
    })
}
const getTopMovies = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(['movie1', 'movie2'])
        }, 4000)
    })
}
const sendEmail = (email, movies) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 4000)
    })
}

getCustomer(1)
    .then(customer => {
        console.log("customer : ", customer)
        if(customer.isGold)
            getTopMovies()
                .then(movies => {
                    console.log(`Top Movies are : ${movies}`)
                    console.log("Sending ", movies, " to ", customer.email, "...")
                    sendEmail(customer.email, movies)
                        .then(() => {
                            console.log("Email Sent.")
                        })
                        .catch(err => console.log(`Error : ${err.message}`))
                })
                .catch(err => console.log(`Error : ${err.message}`))
        else
            console.log("Not a Gold Customer")
    })
    .catch(err => console.log(`Error : ${err.message}`))