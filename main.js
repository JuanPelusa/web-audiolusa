//* Object constructor *\\

class Products {
    constructor(id, name, description, price, quantity, image, total) {
        this.id = Number(id);
        this.name = name;
        this.description = description;
        this.price = Number(price);
        this.quantity = Number(quantity);
        this.image = image;
        this.total = total;
    }
};

//* Objects *\\

const PRODUCT_1 = new Products 
    ("1", "Focal Maestro Utopia Evo", "Floorstanding loudspeaker", "40000", "1", "../images/Maestro_Utopia_Evo_-_Focal-removebg-preview.png", "40000");
const PRODUCT_2 = new Products 
    ("2", "Bowers & Wilkins 801", "Floorstanding loudspeaker", "41000", "1", "../images/801-d4-satin-rosenut-removebg-preview.png", "41000");
const PRODUCT_3 = new Products 
    ("3", "Dali Epicon 8", "Floorstanding loudspeaker", "15000", "1", "../images/Dali_EPICON_8_walnut-removebg-preview.png", "15000");
const PRODUCT_4 = new Products 
    ("4", "Diablo Utopia Evo", "Bookshelf 2-way loudspeaker", "12000", "1", "../images/Diablo_Utopia_Colour_Evo_-_Focal-removebg-preview.png", "12000");
const PRODUCT_5 = new Products 
    ("5", "Bowers & Wilkins 705 s3", "Bookshelf 2-way loudspeaker", "3200", "1", "../images/705-s3_mocha-removebg-preview.png", "3200");
const PRODUCT_6 = new Products 
    ("6", "Dali Rubicon 2 (par)", "Bookshelf 2-way loudspeaker", "3700", "1", "../images/Dali_RUBICON_2-removebg-preview.png", "3700");
const PRODUCT_7 = new Products 
    ("7", "Focal Sub Utopia EM Evo", "Subwoofer", "25000", "1", "../images/Sub_Utopia_EM_Colour_Evo-removebg-preview.png", "25000"); 
const PRODUCT_8 = new Products 
    ("8", "Klipsch R120sw", "Subwoofer", "400", "1", "../images/-120sw_Subwoofer-removebg-preview.png", "400"); 

//* Products array *\\

const everyProducts = [
    PRODUCT_1,
    PRODUCT_2,
    PRODUCT_3,
    PRODUCT_4,
    PRODUCT_5,
    PRODUCT_6,
    PRODUCT_7,
    PRODUCT_8,
];

//* Cart array *\\

let cart = []

//* Type of currency *\\
const currencyType = "usd";

//* Taking products id *\\

const seeCart = document.getElementById("seeCart");
const productsInCart = document.getElementById("productsInCart");

everyProducts.forEach((product, speakers)=> {
    const title = document.querySelector(`#productTitle_${speakers + 1}`)
    const content = document.createElement("div");
    content.innerHTML =
    `<img src="${product.image}">
    <h5 class="title-card">${product.name}</h5>
    <p class="title-card">${product.description}</p>`
    title.append(content);
    const addTo = document.querySelector(`#addToCart_${speakers + 1}`);
    const cartContent = document.createElement("div");
    addTo.append(cartContent);
    
    addTo.addEventListener("click", () => {
        const exist = cart.some((oneProduct) => oneProduct.name === product.name);
        if (exist) {
            const products = cart.map((oneProduct) => {
                if (oneProduct.name === product.name) {
                    oneProduct.quantity++;
                    oneProduct.total = oneProduct.price * oneProduct.quantity;
                    return oneProduct;
                } else {
                    return oneProduct;
                }
            });
            cart = [...products];
        } else {
            cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: product.quantity,
            total: product.price * product.quantity,
            image: product.image,
            });
        }
    });
})

