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


// EXAMPLES OF CONVERTING CALLBACK-BASED CODE TO PROMISE-BASED CODE
// Callback
function step1(callback) {
    setTimeout(() => {
        console.log("Step 1 completed");
        callback();
    }, 1000);
}

function step2(callback) {
    setTimeout(() => {
        console.log("Step 2 completed");
        callback();
    }, 1000);
}

step1(() => {
    step2(() => {
        console.log("All steps completed");
    });
});
const myPromise = new Promise((resolve, reject) => {
    const success = true; // Use const for variables that are not reassigned
    
    // Simulate an asynchronous operation using setTimeout
    setTimeout(() => {
        if (success) {
            resolve("Operation Successful!"); // Resolve the promise if successful
        } else {
            reject("Operation Failed!"); // Reject the promise if failed
        }
    }, 1000);
});

// Example usage of the promise
myPromise
    .then((message) => {
        console.log(message); // Handle successful resolution
    })
    .catch((error) => {
        console.error(error); // Handle rejection
    });

    // Callback
const fs=require("fs")
fs.readFile("random.txt","utf-8",(err,data)=>{
    if (err) {
        console.log(`An error has occured:${err}`);
    }
    else {
        console.log(`File content: ${data}`);
    }
});

