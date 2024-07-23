//Activity -1 UnderStanding Promise
const PromiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This promise is resolved")
    }, 2000)
})

PromiseOne.then((msg) => {
    console.log(msg);
})

const PromiseTwo = new Promise((resolve, reject) => {
    let error = false
    setTimeout(() => {
        if (!error) return resolve("This promise is resolved From promiseTwo");
        else return reject("This promise is rejected From promiseTwo")
    }, 2000)
})

PromiseTwo
    .then((msg) => {
        console.log(msg);
    })
    .catch((msg) => {
        console.log(msg);

    })


//Activity -2 Promise chaning 

const PromiseThree = new Promise((resolve, reject) => {
    const error = false
    setTimeout(() => {
        if (!error) return resolve({ user: "sunny", email: "sunny@chai.com" });
        else return reject("This promise is rejected From PromiseThree")
    }, 2000)
})

PromiseThree
    .then((data) => {
        console.log(data);
        return data.user
    }).then((user) => {
        console.log(user);
    }).catch((err) => {
        console.log(err);
    }).finally(() => {
        console.log("Promise either resolve or rejected");
    })


//Activity -3 Async and Await

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({ username: "sunny", number: 123456 })
        } else {
            reject("Error: promiseFour is rejected ")
        }
    })
})

const handlePromiseFour = async () => {
    try {
        const res = await promiseFour
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

handlePromiseFour()

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({ username: "sunny", number: 123456 })
        } else {
            reject("Error: promiseFive is rejected ")
        }
    })
})

const handlePromiseFive = async () => {
    try {
        const res = await promiseFive
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

handlePromiseFive()



//Activity -4  fecting data from api
const apiUrl = "https://api.github.com/users"
const promiseSix = new Promise((resolve, reject) => {
    fetch(apiUrl)
        .then((res) => {
            if (!res.ok) {
                reject("Network response was not ok")
            }
            return res.json()
        }).then((data) => {
            resolve(data);
        }).catch((error) => {
            reject('There was a problem with the fetch operation: ' + error.message);
        })
})


promiseSix
    .then(data => {
        data.forEach((data) => {
            console.log(data.login)
        })
    })
    .catch(error => {
        console.error(error);
    });


async function fetchApi(apiUrl) {
    const fetchData = await fetch(apiUrl)
    const data = await fetchData.json()

}

fetchApi(apiUrl)

// Promise.all([PromiseOne, PromiseTwo, PromiseThree, promiseFour, promiseFive, promiseSix])
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error))

Promise.race([PromiseOne, PromiseTwo, PromiseThree, promiseFour, promiseFive, promiseSix])
    .then((data) => console.log(data, "RACE"))
    .catch((error) => console.log(error))