const getCustomer = (id, callback) => {
    setTimeout(() => {
        callback({
            id : 1,
            name : "Md Dilshad Alam",
            isGold : true,
            email : 'mdalam1@gmail.com'
        })
    }, 4000);
}
const getTopMovies = callback => {
    setTimeout(() => {
        callback(['movie1', 'movie2'])
    }, 4000);
}
const sendEmail = (email, movies, callback) => {
    setTimeout(() => {
        console.log("Sending ", movies, " to ", email, "...")
        callback();
    }, 4000);
}

getCustomer(1, customer => {
    console.log("customer : ", customer)
    if(customer.isGold)
        getTopMovies(movies => {
            console.log(`Top Movies are : ${movies}`)
            sendEmail(customer.email, movies, () => {
                console.log("Email Sent.")
            })
        })
    else
        console.log("Not a Gold Customer")
})