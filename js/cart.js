let productsInCart = JSON.parse(localStorage.getItem("products-in-cart"));


const contProducts = document.querySelector('#productsInCart');
let eraseButton = document.querySelectorAll('.eraseProduct');
const eraseAll = document.querySelector('#removeCart');
const contTotal = document.querySelector('#total');
const buyButton = document.querySelector('#buyBasket');

const currencyType = "usd";

function loadProductsToCart() {

if(productsInCart && productsInCart.length >= 0) {

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
        <h5>${currencyType} ${product.price}.-</h5>
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

        contProducts.classList.add('disabled');
        contTotal.classList.add("disabled");

        
    };
    updateTotal();
    updateInCart();
}

loadProductsToCart();

function updateButtonsErase() {
    eraseButton = document.querySelectorAll(".eraseProduct");
    
        eraseButton.forEach(buttons => {
            buttons.addEventListener("click", eraseFrom);
        })
    }

    function eraseFrom(e) {

        Toastify({
            text: "Product removed",
            duration: 2000,
            close: true,
            gravity: "top", 
            position: "center",
            stopOnFocus: true,
            style: {
                color: "#000000",
                background: "linear-gradient(to right, #ff0000, #ff3636)",
                borderRadius: "1rem",
                textTransform: "uppercase",
                fontSize: ".75rem"
            },
            onClick: function(){}
        }).showToast();

        const idButton = e.currentTarget.id;
        const index = productsInCart.findIndex(product => product.id === idButton);
        
        productsInCart.splice(index, 1);
        loadProductsToCart();

        localStorage.setItem('products-in-cart', JSON.stringify(productsInCart))
    }
    
    function updateTotal() {
        total.innerText = productsInCart.reduce((acc, product) => acc + (product.price * product.quantity), 0)
    };

buyButton.addEventListener("click", buyBasket);

function buyBasket() {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      swalWithBootstrapButtons.fire({
        icon: 'success',
        title: 'comfirm your purchase',
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: 'yes',
        cancelButtonText: 'no'
    }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire (
                'Thank for buy',
                'See you soon!'
            )
        }else if (
                result.dismiss === Swal.DismissReason.cancel
            )   {
                swalWithBootstrapButtons.fire(
                    'Dont worry, it always a next time!',
                    'See you soon!'
                )
            }
            productsInCart.length = 0;
            localStorage.setItem("products-in-cart", JSON.stringify(productsInCart));
            loadProductsToCart();
        });
}

eraseAll.addEventListener("click", removeCart);

function removeCart() {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })
    swalWithBootstrapButtons.fire({
        title: 'do you want to erase all the products?',
        icon: 'question',
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: 'yes',
        cancelButtonText: 'no'
    }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
                'Sorry to hear that :(',
                'See you soon!'
            )
            productsInCart.length = 0;
            localStorage.setItem('products-in-cart', JSON.stringify(productsInCart));
            loadProductsToCart()
        }
      });
}







