let productsInCart =JSON.parse(localStorage.getItem("products-in-cart"));
console.log(productsInCart);


const contProducts = document.querySelector('#productsInCart');
const contenedorRightActions = document.querySelector("#rightActions");
const contenedorbuyCart = document.querySelector("#buyCart");

const currencyType = "usd";

if(productsInCart) {

    contProducts.classList.remove('disabled');
    contenedorRightActions.classList.remove('disabled');
    contenedorbuyCart.classList.remove('disabled');

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
        <button class="cartProductErase" id=${product.id}><p><i aria-hidden="true" 
        class="fa fa-trash"></i></p></button>
        `
        ;
        contProducts.append(div)
    })
    }
    else{

    }
    



