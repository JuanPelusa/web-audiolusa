//* Object constructor *\\


const products = [
    {
        id: "Focal_01",
        name: "Focal Maestro Utopia Evo",
        description: "Floorstanding loudspeaker",
        specs : `3-way column loudspeaker
        High efficiency, high power handling
        Utopia III technologies: Beryllium, IAL2™,
        TMD suspension, NIC magnet, Focus Time™,
        OPC+™, W™, Power Flower™,
        Gamma Structure™
        Exclusive technology: MDS
        (Magnetic Damping System)
        Customisable sound with adjustable bass,
        mid-range and treble levels
        100% made by Focal`,
        price: "40000",
        quantity: "1",
        image: "../images/Maestro_Utopia_Evo_-_Focal-removebg-preview.png",
        total:"40000",
    },
    {
        id: "B&W_02",
        name: "Bowers & Wilkins 801",
        description: "Floorstanding loudspeaker",
        specs:`Diamond tweeter
        Solid body Tweeter-on-Top
        Continuum™ cone FST
        Anti-Resonance plug
        Biomimetic Suspension
        Turbine™ Head Matrix™
        Aerofoil™ cone bass units
        Flowport
        3-way vented-box system
        Frequency range
        13Hz to 35kHz
        Harmonic distortion
        2nd and 3rd harmonics (90dB,1m on axis)
        + 1% 30Hz – 20kHz
        + 0.3% 100Hz – 20kHz`,
        price: "41000",
        quantity: "1",
        image: "../images/801-d4-satin-rosenut-removebg-preview.png",
        total:"41000",
    },
    {
        id: "Dali_03",
        name: "Dali Epicon 8",
        description: "Floorstanding loudspeaker",
        specs:`Frequency Range [+/- 3] dB [Hz] 35-30.000
        Frequency Range [+/- 3] dB [Hz] 35-30.000
        Maximum SPL [dB] 112                    
        Crossover Frequencies [Hz] 550/3.100/15.000
        Crossover Principle 3+½-way
        HFD 1 x 29 mm soft dome
        1 x 10 x 55 mm
        ribbon,
        Low Frequency/midrange Driver(s) 2 x 8” / 1 x 6½”                   
        Bass Reflex Tuning Frequency [Hz] 28.0 
        Bi-wire / Bi-Amp`,
        price: "15000",
        quantity: "1",
        image: "../images/Dali_EPICON_8_walnut-removebg-preview.png",
        total:"15000",
    },
    {
        id: "Dali_04",
        name: "Diablo Utopia Evo",
        description: "Bookshelf 2-way loudspeaker",
        specs:`Type of loudspeaker 2-way, compact bass-reflex loudspeaker
        Drivers Power Flower “W” 61/2" (16.5cm) Woofer
        IAL2 pure Beryllium inverted dome 1"
        (27mm) tweeter (with protective grille)
        Dedicated aluminum/MDF Graphite Black finish
        Helmholtz resonator
        Frequency response (±3dB) 44Hz - 40kHz
        Low frequency point (-6dB) 40Hz
        Sensitivity (2.83V/1m) 89dB`,
        price: "12000",
        quantity: "1",
        image: "../images/Diablo_Utopia_Colour_Evo_-_Focal-removebg-preview.png",
        total:"12000",
    },
    {
        id:"B&W_05",
        name: "Bowers & Wilkins 705 s3",
        description: "Bookshelf 2-way loudspeaker",
        specs:`Decoupled Carbon Dome tweeter
        Solid Body Tweeter-on-Top
        Continuum™ cone bass/ midrange
        Flowport™
        2-way vented-box system
        Frequency range
        -6dB at 45Hz and 33kHz,
        Frequency response
        50Hz - 28kHz ±3dB,
        Harmonic distortion
        2nd and 3rd harmonics (90dB, 1m)
        + 1% 100Hz - 22kHz
        + 0.5% 150Hz - 20kHz,          
        Sensitivity
        88dB spl (2.83Vrms, 1m)`,
        price: "3200",
        quantity: "1",
        image: "../images/705-s3_mocha-removebg-preview.png",
        total:"3200",
    },
    {
        id: "Dali_06",
        name: "Dali Rubicon 2 (pair)",
        description: "Bookshelf 2-way loudspeaker",
        specs:`Frequency Range [+/- 3] dB [Hz] 50 -26,000, 
        Sensitivity [2.83V/1m] [dB] 87, 
        Nominal Impedance [ohms] 4,
        Maximum SPL [dB] 107,
        Recommended Amp. Power [Watt] 40-150,
        Crossover Frequency [Hz] 3,100,
        Crossover Principle 2-way,
        High Frequency Driver 1 x 29 mm soft dome,
        Low Frequency Driver(s) 1 x 6½”,                    
        Bass Reflex Tuning Frequency [Hz] 42.5`,
        price: "3700",
        quantity: "1",
        image: "../images/Dali_RUBICON_2-removebg-preview.png",
        total:"3700",
    },
    {
        id: "Focal_07",
        name: "Focal Sub Utopia EM Evo",
        description: "Subwoofer",
        specs:`Type Stackable passive subwoofer
        Drivers Electro-Magnetic 13" (33cm) “W” bass
        driver
        Frequency response (+/- 3dB) 22Hz - 500Hz
        Response at - 6dB 19Hz
        Sensitivity (2.83V / 1m) 93dB
        Nominal impedance 8 Ω
        Minimal impedance 5.5 Ω
        Recommended amp power 500 - 1,000W
        Dimensions (HxLxD) 634 x 483 x 622mm
        Weight (unit) 158.5lbs (72kg)`,
        price: "25000",
        quantity: "1",
        image: "../images/Sub_Utopia_EM_Colour_Evo-removebg-preview.png",
        total:"25000",
    },
    {
        id: "Klipsch_08",
        name: "Klipsch R120sw",
        description: "Subwoofer",
        specs:`Frecuency reponse 29Hz - 120Hz +/- 3dB
        Maximun acoustic output 116 dB
        Amplifier all Digital
        Amplifier power (cont/peak) 200W/400W
        Amplifier features Volume, Low-pass, 0/180 phase, Auto Power On
        Driver components 12” high excursion spun-copper IMG woofer
        Enclosure type Bass-Reflex via rear-firing port
        Inputs Line level/LFE RCA jacks`,
        price: "400",
        quantity: "1",
        image: "../images/-120sw_Subwoofer-removebg-preview.png",
        total:"400",
    },
];

const currencyType = "usd";

const seeCart = document.getElementById("seeCart");
const addTo = document.querySelectorAll("allProductsButtons");
let addButtons = document.querySelectorAll(".add");
const inCart = document.querySelector("#inCartNumber");

const title = document.querySelector(`#productTitle`);

function loadProducts() {

    title.innerHTML = "";
    
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

        title.append(content)
    })
    updateButtons()
}

    loadProducts();

function updateButtons() {
    addButtons = document.querySelectorAll(".add");

    addButtons.forEach(buttons => {
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












