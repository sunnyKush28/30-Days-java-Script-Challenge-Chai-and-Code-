function idGenerate() {
    const uniqueIdKey = "1234567890"

    let uniqueId = ""
    for (let i = 0; i <= 8; i++) {
        const number = Math.floor(Math.random() * 10)
        uniqueId += uniqueIdKey[number]
    }

    function generateId() {
        uniqueId = Number(uniqueId)
        uniqueId++
        return uniqueId
    }

    return generateId
}

const generateId = idGenerate()

console.log(generateId());


const UserGreet = () => {
    const username = "Sunny"

    return {
        greetUser: function () {
            return `Hello ${username}`
        }
    }
}

const greetUser = UserGreet()

console.log(greetUser.greetUser());