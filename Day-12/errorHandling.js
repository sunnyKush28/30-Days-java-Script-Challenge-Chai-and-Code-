// activity-01
function errorHandling() {
    try {
        throw new Error("This is an intentional error.");
    } catch (error) {
        console.log(error.message);
    }
}

errorHandling()

const divisionOfNumber = (a, b) => {
    try {
        if (a % b == 0) {
            throw new Error("Denominator is zero")
        }
        console.log(a % b);
    } catch (error) {
        console.log(error.message);
    }
}
divisionOfNumber(10, 4)


// activity-02

const finallyBlock = () => {
    try {
        console.log("Run before error");
        throw new Error("I am error")
        console.log("Run after error");
    } catch (error) {
        console.log(`Error: ${error.message}`);
    } finally {
        console.log("It will run for other process to Run/Stop");
    }
}

finallyBlock()

//activity-03

class CoustomClass extends Error {
    constructor(message, errorcode) {
        super(message)
        this.name = this.constructor.name;
        this.errorcode = errorcode
    }
}

try {
    throw new CoustomClass("This is a custom error", 404);
} catch (e) {
    console.error(`${e.name}: ${e.message} (Code: ${e.errorcode})`);
} finally {
    console.log("This code runs regardless of an error.");
}

class validationError extends Error {
    constructor(
        statuscode,
        message = "Some thing went wrong",
        errors = []
    ) {
        super(message)
        this.statuscode = statuscode
        this.message = message
        this.errors = errors
    }
}

function validateInput(input) {
    if (typeof input !== 'string' || input.trim() === '') {
        throw new validationError(400, "Input is not string or empty")
    }
    console.log("Input is valid");
}

try {
    const input = ""
    validateInput(input)
} catch (error) {
    console.log(error.message);
}

const randomPromise = () => {
    const number = Math.random()
    console.log(typeof (number));

    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (number >= 0.5) {
                resolve({ message: "Promise resolved number is greter then 0.5", number: number })
            } else {
                reject("Promise rejected number is less then 0.5")
            }
        }, 2000)
    })

    return myPromise
}

// randomPromise()
//     .then((result) => {
//         console.log(result);
//         console.log(typeof (result));
//         return result.number
//     }).then((number) => {
//         console.log(((number) * 10));
//     })
//     .catch((error) => {
//         console.log(error);
//     })


randomPromise()
    .then((result) => {
        console.log(result);

        const number = Number(result.number);
        console.log(`Type of result.number: ${typeof number}`);
        return number;
    })
    .then((number) => {
        console.log(`Received number: ${number}`);
        console.log(`Number multiplied by 10: ${Number(number) * 10}`);
    })
    .catch((error) => {
        console.error(error);
    });

