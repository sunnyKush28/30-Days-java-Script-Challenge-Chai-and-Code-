import { products } from './products.js';



const productsDiv = document.getElementById('productsDiv')
const cartDiv = document.getElementById('cart')

let cart = []
let quantity = 0
const productsShow = () => {
    productsDiv.innerHTML = products.map((product) => {
        return (
            `<div class="card align-self-stretch justify-content-center" style="width: 15rem;">
            <div class="image-container align-self-center">
            <img src="${product.images[0]}" class=" productImg" alt="...">
            </div>
            
            <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">${product.price}</p>
                <div class="btns d-flex justify-content-around m-0 p-0 gap-3">
                <button class="btn btn-success addToCartBtn" data-id="${product.id}">Add To cart</button>
                <button class="btn btn-danger removeToCartBtn" data-id="${product.id}">Remove to cart</button>
                </div>
            </div>
            </div>`
        )
    }).join('')

    document.querySelectorAll('.addToCartBtn').forEach((button) => {
        button.addEventListener('click', (e) => {
            const productId = e.target.getAttribute('data-id')
            addToCart(productId)
        })
    })

    document.querySelectorAll('.removeToCartBtn').forEach((button) => {
        button.addEventListener('click', (e) => {
            const productId = e.target.getAttribute('data-id')
            removeToCartBtn(productId)
        })
    })

}

productsShow()






function addToCart(id) {
    const product = products.find(product => product.id == id)
    if (product != null) {
        const itemInCart = cart.find(product => product.product.id == id)
        if (itemInCart != null) {
            itemInCart.quantity++
        } else {
            const item = {
                product,
                quantity: 1
            }
            cart.push(item)
        }
    }
    cartAddQuantity()
    console.log(cart);

}


function removeToCartBtn(id) {
    const itemInCart = cart.find(product => product.product.id == id)

    if (itemInCart != null) {
        if (itemInCart.quantity > 1) {
            itemInCart.quantity--
            cartRemoveQuantity()
        } else {
            cart = cart.filter((product) => product.product.id != id)
            cartRemoveQuantity()
        }
    } else {
        alert('Product is not available in cart')
        cartRemoveQuantity()

    }




}


const cartAddQuantity = () => {
    quantity = cart.reduce((total, product) => total + product.quantity, 0);


    const style = document.createElement('style');
    style.innerHTML = `
    .cart::after{
        content: '${quantity}';    
        top: -100%;
        right: -100%;
        display: inline-block;
        background-color: rgb(223, 177, 118);
        color: white;
        border-radius: 50%;
        padding: 2px 6px;
        font-size: 16px;
    }
    `

    cartDiv.appendChild(style)
}

const cartRemoveQuantity = () => {
    if (quantity > 0) {
        quantity -= 1

    }
    console.log(quantity);
    const style = document.createElement('style');
    style.innerHTML = `
.cart::after {
        content: '${quantity}';
    
        top: -10%;
        right: -10%;
        display: inline-block;
        background-color: rgb(223, 177, 118);
        color: white;
        border-radius: 50%;
        padding: 2px 6px;
        font-size: 16px;
    }
    `

    cartDiv.appendChild(style)
}

const cartitems = document.getElementById('cartitems')
const checkOut = document.getElementById('checkOut')

cartDiv.addEventListener('click', (e) => {
    e.preventDefault()
    productsDiv.innerHTML = ''
    checkOut.style.display = 'flex'
    const cartshow = () => {
        cartitems.innerHTML = cart.map((product) => {
            return (
                `<div class="d-flex flex-row justify-content-center mb-4" style="height:350px; ">
            <div class="col-4">
            <img src="${product.product.images[0]}" class="w-100 " style="object-fit: content;aspect-ratio: 1/1;" alt="...">
            </div>
            
            <div class="card-body d-flex flex-column justify-content-center align-content-around">
                <h5 class="card-title">${product.product.title}</h5>
                <p class="card-text">${product.product.price}</p>
                <p class="card-text">${product.product.description}</p>

                <select class="form-select changeQuantity w-50 mb-3"  data-id="${product.product.id}" >
                    <option value="${product.quantity}" selected disabled>${product.quantity}</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>

                </select>
                <div class="col-3 d-flex justify-content-around m-0 p-0 gap-3">
                
                <button class="btn btn-success addToCartBtn" data-id="${product.product.id}">Add To cart</button>
                <button class="btn btn-danger removeToCartBtn" data-id="${product.product.id}">Remove to cart</button>
                </div>
            </div>
            </div>`
            )
        }).join('')

        document.querySelectorAll('.addToCartBtn').forEach((button) => {
            button.addEventListener('click', (e) => {
                const productId = e.target.getAttribute('data-id')
                addToCart(productId)
                cartshow()
            })
        })

        document.querySelectorAll('.removeToCartBtn').forEach((button) => {
            button.addEventListener('click', (e) => {
                const productId = e.target.getAttribute('data-id')
                removeToCartBtn(productId)
                cartshow()
            })
        })

        const changeQuantity = document.querySelectorAll('.changeQuantity')

        changeQuantity.forEach(change => {
            change.addEventListener('change', (e) => {
                const productId = e.target.getAttribute('data-id')
                const newQuantity = e.target.value
                console.log(cart);

                const itemInCart = cart.find(product => product.product.id == productId)
                itemInCart.quantity = parseInt(newQuantity, 10)
                cartAddQuantity()
            })
        })

    }
    cartshow()



})

const ProductsClick = document.getElementById('products')
ProductsClick.addEventListener('click', (e) => {
    cartitems.innerHTML = ''
    productsShow()
})

const detailsSubmit = document.getElementById('detailSubmit')

detailsSubmit.addEventListener('submit', (e) => {
    e.preventDefault()
    // document.body.removeChild(document.getElementById('exampleModal'))


    // document.body.classList.remove('modal-open')
    // document.querySelector('.modal-backdrop').classList.remove('show')
    // document.body.removeAttribute('style')
    // document.body.removeChild(document.querySelector('.modal-backdrop'))
    cartitems.innerHTML = ''
    checkOut.style.display = 'none'
    const formData = new FormData(detailsSubmit)
    console.log(formData);
    const orderDetails = document.getElementById('orderDetails')
    let userDetails = {}
    for (let [key, value] of formData.entries()) {
        userDetails[key] = value
    }

    let totalPayment = cart.reduce((total, product) => total + (product.quantity * product.product.price), 0)

    const OrderedItems = cart.map(product => {
        return (
            `<div class="row align-items-center" style="height:350px" >
                <div class="col-3">
                    <img src=${product.product.images[0]} class="w-100" style="object-fit: content;aspect-ratio: 1/1;" ></img>
                </div >
                <div  class="col-6">
                    <h4>${product.product.title}</h4>
                    <h5>${product.quantity}</h5>
                </div>
                <div  class="col-3">
                    <h4>Rs. ${product.quantity * product.product.price}</h4>
                </div>
            </div>`
        )
    }).join('')

    orderDetails.innerHTML = `
    <h3 class="text-center mb-1">Order Details</h3>
            ${OrderedItems}
        <div class='row'>
            <div class='col-9'>
                <h1>Total Payment</h1>
            </div>
            <div class='col-3'>
                <h1>Rs. ${totalPayment.toFixed(2)}</h1>
            </div>
        </div>
        <div class="row my-3">
            
            <table class="table bg-dark text-white">
            <tr class="px-3">
            <th>Name: </th>
            <td>${userDetails.name}</td>
            </tr>
            <tr class="px-3">
            <th>Address: </th>
            <td>${userDetails.address}</td>
            </tr>
            <tr class="px-3">
            <th>Mobile Number: </th>
            <td>${userDetails.number}</td>
            </tr>
            <tr class="px-3">
            <th>Payment Type</th>
            <td>${userDetails.payOption}</td>
            </tr>
            <tr class="px-3">
            <th>Status</th>
            <td>User Order Placed Successfully</td>
            </tr>
            </table>
        </div>

    `
})

