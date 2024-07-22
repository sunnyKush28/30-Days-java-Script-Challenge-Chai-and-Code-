const btn1 = document.getElementById('btn1')

btn1.addEventListener('click', (e) => {
    const paragraph = document.getElementById('paragraph1')
    paragraph.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque repudiandae adipisci incidunt sapiente odio, facere delectus esse quia voluptates recusandae!"
})

const myImage = document.getElementById('myImage')
const showImg = document.getElementById('showImg')
myImage.addEventListener('dblclick', (e) => {
    e.target.style.display = e.target.style.display === "block" ? "none" : "block";
    showImg.style.display = e.target.style.display === "none" ? "block" : "none";
})

showImg.addEventListener('click', (e) => {
    myImage.style.display = "block";
    showImg.style.display = e.target.style.display === "block" ? "none" : "block";

})

const mouseover = document.getElementById('mouseover')
const mouseout = document.getElementById('mouseout')

mouseover.addEventListener('mouseover', (e) => {
    const honverElement = document.getElementById('hoverEvent')
    honverElement.style.backgroundColor = "#BEC6A0"
})

mouseout.addEventListener('mouseout', (e) => {
    const honverElement = document.getElementById('hoverEvent')
    honverElement.style.backgroundColor = ""
})

const inputField1 = document.getElementById('inputField1')

inputField1.addEventListener("keydown", (e) => {
    console.log(e.target.value);
})

const inputField2 = document.getElementById('inputField2')

inputField2.addEventListener("keyup", (e) => {
    const valueParagraph = document.getElementById('valueParagraph')
    valueParagraph.innerHTML = e.target.value
})

const formSubmit = document.getElementById('formSubmit')

formSubmit.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e.target);
    const formData = new FormData(e.target)
    for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }

    const name = e.target.elements.name.value
    const email = e.target.elements.email.value
    const number = e.target.elements.number.value

    console.log(name, email, number);

})

const selectValue = document.getElementById('selectValue')
selectValue.addEventListener("change", (e) => {
    const selectParagraph = document.getElementById('selectParagraph')
    selectParagraph.innerHTML = `You selected ${e.target.value}`
})


document.addEventListener('DOMContentLoaded', () => {
    const itemList = document.getElementById('itemList');

    itemList.addEventListener('click', (e) => {
        if (e.target && e.target.matches('li.list-item')) {
            console.log(e.target.textContent);
        }
    });

    const itemList1 = document.getElementById('itemList1');
    const addItemButton = document.getElementById('addItem');

    // Event listener for dynamically added list items
    itemList1.addEventListener('click', (e) => {
        if (e.target && e.target.matches('li.dynamic-item')) {
            console.log(`Clicked item: ${e.target.textContent}`);
        }
    });

    // Button click to add new items
    addItemButton.addEventListener('click', () => {
        const newItem = document.createElement('li');
        newItem.textContent = `Item ${itemList1.children.length + 1}`;
        newItem.className = 'dynamic-item';
        itemList1.appendChild(newItem);
    });
});