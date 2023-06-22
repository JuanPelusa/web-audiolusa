//* Object constructor *\\


let products = [];

fetch('../js/products.json')
.then(Response => Response.json())
.then(data => {
    products = data;
    loadProducts(products);
})

const currencyType = "usd";

const seeCart = document.getElementById("seeCart");
const addTo = document.querySelectorAll("allProductsButtons");
let addButtons = document.querySelectorAll(".add");
const inCart = document.querySelector("#inCartNumber");

const productsContainer = document.querySelector(`#productTitle`);

function loadProducts() {

    productsContainer.innerHTML = "";
    
    products.forEach(product => {
        
        const content = document.createElement("div");
        content.classList.add('product-card')
        content.innerHTML =
        `<img src="${product.image}">
        <div>
        <h5 class="title-card">${product.name}</h5>
        <p class="description">${product.description}</p>
        </div>
        <p class="info">${product.specs}</p>
        <p class="infoPrice">${currencyType} ${product.price}
        <button class="add" id="${product.id}">BUY NOW</button>
        `;

        productsContainer.append(content)
        
    })
    addToButtons()  
}

    loadProducts();

function addToButtons() {
    addToButtons = document.querySelectorAll(".add");

    addToButtons.forEach(buttons => {
        buttons.addEventListener("click", addToCart);
    })
}

let productsInCart;

let productsInCartLS = (localStorage.getItem("products-in-cart"));

if (productsInCartLS) {
    productsInCart = JSON.parse(productsInCartLS);
    updateInCart()
} else {
    productsInCart = [];
}


function addToCart(e) {

    const idButton = e.currentTarget.id;
    const productAdded = products.find(product => product.id === idButton)

    if(productsInCart.some(product => product.id === idButton)) {
        const index = productsInCart.findIndex(product => product.id === idButton);
        productsInCart[index].quantity++;
    } 
    else {
        productAdded.quantity = 1;
        productsInCart.push(productAdded);
    }

    updateInCart();
    localStorage.setItem("products-in-cart", JSON.stringify(productsInCart));
    console.log(productsInCart)
}

function updateInCart() { 
    let newInCart = productsInCart.reduce((acc, product) => acc + product.quantity, 0);
    inCartNumber.innerText = newInCart;
    
}