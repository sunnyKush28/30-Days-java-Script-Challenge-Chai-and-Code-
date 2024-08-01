localStorage.setItem("Sunny", "My name is sunny")
console.log(localStorage.getItem("Sunny"));

const myObj = {
    name: "sunny",
    age: 30,
    email: "sunnyacro11@gmail.com"
}

const myObjJSON = JSON.stringify(myObj)


localStorage.setItem("myObj", myObjJSON)

const retrieveObj = localStorage.getItem("myObj")
const parseObj = JSON.parse(retrieveObj)
console.log(retrieveObj);
console.log(parseObj);
