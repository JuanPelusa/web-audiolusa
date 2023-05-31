let productsInCart = JSON.parse(localStorage.getItem("products-in-cart"));

const contEmpty = document.querySelector('#emptycart');
const contProducts = document.querySelector('#productsInCart');
//const contenedorRightActions = document.querySelector("#rightActions");
//const contenedorbuyCart = document.querySelector("#buyCart");
let eraseButton = document.querySelectorAll('.eraseProduct');
//const eraseAll = document.querySelector('#erase-cart');
const contTotal = document.querySelector('#total');

const currencyType = "usd";

function loadProductsToCart() {

if(productsInCart && productsInCart.length >= 0) {

    contEmpty.classList.add('disabled');
    contProducts.classList.remove('disabled');
    contTotal.classList.remove("disable");
    
    contProducts.innerHTML = "";
    
    productsInCart.forEach(product => {
        
        const div = document.createElement("div");
        div.classList.add("cartProduct");
        div.innerHTML =
        `<img class="cartProduct" src="${product.image}">
        <div>
        <h5>${product.name}</h5>
        <p>${product.description}</p>
        <h5>${currencyType} ${product.price}</h5>
        </div>
        <p class"cartProductQuantity">Qty: 
        ${product.quantity}
        </p>
        <button class="eraseProduct" id="${product.id}"><p><i aria-hidden="true" 
        class="fa fa-trash"></i></p></button>
        `
        ;
        contProducts.append(div)
    })
    updateButtonsErase()
    }
    else{

        contEmpty.classList.remove('disabled');
        contProducts.classList.add('disabled');
        contTotal.classList.add("disabled");

        
    };
    
    
}

loadProductsToCart();

function updateButtonsErase() {
    eraseButton = document.querySelectorAll(".eraseProduct");
    
        eraseButton.forEach(buttons => {
            buttons.addEventListener("click", eraseFrom);
        })
    }

    function eraseFrom(e) {
        const idButton = e.currentTarget.id;
        const index = productsInCart.findIndex(product => product.id === idButton);
        
        productsInCart.splice(index, 1);
        loadProductsToCart();

        localStorage.setItem('products-in-cart', JSON.stringify(productsInCart))
    }
    






