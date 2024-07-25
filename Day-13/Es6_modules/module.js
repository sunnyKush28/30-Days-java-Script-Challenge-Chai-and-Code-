// activity-1

function addTwoNumber(a, b) {
    return a + b
}

const ModuleObjectPerson = {
    name: "sunny kushwah",
    email: "sunnyac@gmail.com",
    username: "SunnyKush",
    userprofile: function () {
        console.log(`Username:${this.username}`);
        console.table(this)
    }
}
export { addTwoNumber, ModuleObjectPerson }

// activity-2

