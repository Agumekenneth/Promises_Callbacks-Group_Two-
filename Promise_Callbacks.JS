const userPlaysSports = false
const userPlaysTennis=false

// CALLBACK EXAMPLE

function playsGamesCallback(callback,errorCallback){
    if (userPlaysSports) {
        errorCallback({
            name: 'User Plays Sports',
            message:'User is fit!'
        })
    } else if (userPlaysTennis) {
        errorCallback({
            name: 'User Plays Tennis',
            message: 'User enjoys both indoors and outdoors'
        })
    } else {
        callback('User does not enjoy sports')
    }
}

playsGamesCallback((message)=>{
    console.log(`This ${message}`)
}, (error)=>{
    console.log(error.message)
})


// PROMISE EXAMPLE
function playsGamesPromise(){
    return new Promise((resolve,reject)=>{
        if (userPlaysSports) {
            reject({
                name: 'User Plays Sports',
                message:'User is fit!'
            })
        } else if (userPlaysTennis) {
            reject({
                name: 'User Plays Tennis',
                message: 'User enjoys both indoors and outdoors'
            })
        } else {
            resolve('User does not enjoy sports')
        }
    })
}
    

playsGamesPromise().then((message)=>{
    console.log(`This ${message}`)
}).catch((error)=>{
    console.log(error.message)
})