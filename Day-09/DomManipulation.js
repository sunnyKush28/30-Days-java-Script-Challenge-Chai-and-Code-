const changeContent1 = () => {
    const content1 = document.getElementById('content1')
    content1.innerHTML = "DOM-Manipulation- Change content by ID"
}




const changeContent2 = () => {
    const content2 = document.querySelector('.content2')
    content2.innerHTML = "DOM-Manipulation- Change content & BG-COLOR by CLASS"

    content2.style.backgroundColor = "#BEC6A0"

}

const createElement1 = () => {
    const appendDiv = document.getElementById('append')
    const div = document.createElement('div')
    appendDiv.innerHTML = null
    appendDiv.appendChild(div)
    div.innerHTML = "DIV Element is Created"
    div.setAttribute("id", "createdDiv")
    div.style.backgroundColor = "#BE22A0"

}

const removeElement1 = () => {
    const createdDiv = document.getElementById('createdDiv')
    if (!createdDiv) return alert("Please create div first")
    createdDiv.remove()

}

const createElement2 = () => {
    const liElement = document.getElementById('li')
    const li = document.createElement('li')
    liElement.appendChild(li)
    li.innerHTML = "LI Element is Created"
    li.style.backgroundColor = "#BE11F3"

}

const removeElement2 = () => {
    const liElement = document.getElementById('li').lastChild

    if (!liElement) return alert("Please ADD LI first")

    liElement.remove()



}

const changeImg = () => {
    const img = document.getElementById('img')
    const imgPath = img.getAttribute('src')
    return imgPath == './pngegg (7).png' ? img.setAttribute('src', './pngegg (8).png') : img.setAttribute('src', './pngegg (7).png')

}

const addClass = () => {
    const element = document.getElementById('element')
    element.classList.add('myclass')

}

const removeClass = () => {
    const element = document.getElementById('element')
    element.classList.remove('myclass')

}

const btn1 = document.getElementById('btn1')
console.log(btn1);
btn1.addEventListener('click', (e) => {

    const paragraph = document.getElementById('paragraph')
    paragraph.innerHTML = "cumque at pariatur nostrum, tenetur quos dolorum harum sapiente nam eveniet similique, suscipit cumque at pariatur nostrum, tenetur quos dolorum harum sapiente nam eveniet similique, suscipitLorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos aspernatur eius iure, ex odio eligendi quas!"
})

const mouse = document.getElementById('mouse')

mouse.addEventListener("mouseover", (e) => {
    e.target.style.border = "2px solid yellow"
}, false)

mouse.addEventListener("mouseout", (e) => {
    e.target.style.border = "2px solid white";
}, false);