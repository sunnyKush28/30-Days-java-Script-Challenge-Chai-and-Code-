const responce1 = fetch('https://invalid-url.example')

responce1.then((res) => { }).catch((error) => {
    console.log(error.message);
})

// const responce2 = fetch('https://invalid-url.example')


const fetchData = async () => {
    try {
        const response = await fetch('https://invalid-url.example');
        console.log(response.status);
    } catch (error) {
        console.log(error.message);
    }
}

fetchData()