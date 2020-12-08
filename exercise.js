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

const verifyAndSendMail = async id => {
    const customer = await getCustomer(id)
    console.log("customer : \n", customer)
    if(customer.isGold){
        const movies = await getTopMovies()
        console.log(`Top Movies are : ${movies}`)
        console.log("Sending ", movies, " to ", customer.email, "...")
        const mailSent = await sendEmail(customer.email, movies)
        console.log("Email Sent.")
    }        
    else
        console.log("Not a Gold Customer")        
} 

verifyAndSendMail(1)