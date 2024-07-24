const randomPromise = () => {
    const number = Math.random()
    console.log(typeof (number));

    const myPromise = new Promise((resolve, reject) => {

        if (number >= 0.5) {
            resolve({ message: "Promise resolved number is greter then 0.5", number: number })
        } else {
            reject("Promise rejected number is less then 0.5")
        }

    })

    return myPromise
}


const handleRandomPromise = async () => {
    try {
        const result = await randomPromise().then((result) => {
            console.log(result);
            const number = Number(result.number);
            console.log(`Type of result.number: ${typeof number}`);
            return number;
        })
            .then((number) => {
                console.log(`Received number: ${number}`);
                console.log(`Number multiplied by 10: ${Number(number) * 10}`);
            });

    } catch (error) {
        console.error("Error:", error);
    }
}

handleRandomPromise()