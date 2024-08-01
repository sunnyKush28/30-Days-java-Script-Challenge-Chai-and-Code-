window.onload = () => {
    const getData = JSON.parse(localStorage.getItem("myObj2"))

    const display = document.getElementById('data')

    if (getData) {
        for (let key in getData) {
            const h4 = document.createElement("h4")
            display.appendChild(h4)
            h4.innerHTML = `${key}: ${getData[key]}`
        }
    }
    else {
        display.innerHTML = ""
    }
}

const buttonSubmit = document.querySelector('button')
buttonSubmit.addEventListener("click", (e) => {
    e.preventDefault()
    const form = document.querySelector('form')
    const myObj = {}
    const formData = new FormData(form)
    for (let [key, value] of formData.entries()) {
        myObj[key] = value;
    }

    const myObjJSON = JSON.stringify(myObj)


    localStorage.setItem("myObj2", myObjJSON)


})

function removemyobj() {
    console.log("before remove data")
    console.log("myObj", localStorage.getItem('myObj'));
    console.log("myObj2", localStorage.getItem('myObj2'));
    console.log("after remove myObj")
    localStorage.removeItem("myObj")
    console.log("myObj", localStorage.getItem('myObj'));
    console.log("myObj2", localStorage.getItem('myObj2'));


}