

//* Buy Magazine*//

alert ("Do you want to buy our Magazine's?");
confirm = prompt("Please confirm:" + "\n\n" + "Enter Y to continue" + "\n" + "or" + "\n" + "Enter N to exit\n" + "(Use capital letter)");

while (confirm == ""){
    alert("You must to enter an option");
    confirm = prompt("Please confirm:" + "\n\n" + "Enter Y to continue" + "\n" + "or" + "\n" + "Enter N to exit\n" + "(Use capital letter)");
};

while ((confirm.toUpperCase() != "Y") && (confirm.toUpperCase() != "N")) {
   alert("Enter the right option");
   confirm = prompt("Please confirm:" + "\n\n" + "Enter Y to continue" + "\n" + "or" + "\n" + "Enter N to exit\n" + "(Use capital letter)");
};

const magazine1 = {
    name: "A",
    price: "usd 1.99.-"
};
const magazine2 = {
    name: "B", 
    price: "usd 10.99.-"
};
const magazine3 = {
    name: "C",
    price: "usd 19.99.-"
};

const magazines = [
    magazine1,
    magazine2,
    magazine3,
];

let paidMagazine = prompt ("Chose one of these three options!\n\n" 
    + magazine1.name + "-" + "Current Month: " + magazine1.price + "\n" + magazine2.name + "-" + "Six months collection: " + magazine2.price + "\n" + magazine3.name + "-" 
    + "One year collection: " + magazine3.price + "\n" + "(Use capital letter)");

    while (paidMagazine == ""){
        alert("No option selected!");
        paidMagazine = prompt ("Chose one of these three options!\n\n" 
        + magazine1.name + "-" + "Current Month: " + magazine1.price + "\n" + magazine2.name + "-" + "Six months collection: " + magazine2.price + "\n" + magazine3.name + "-" 
        + "One year collection: " + magazine3.price + "\n" + "(Use capital letter)");
    };

    while ((paidMagazine.toUpperCase() != "A") && (paidMagazine.toUpperCase()!= "B") && (paidMagazine.toUpperCase() != "C")) {
        alert("Must enter a valid option");
        paidMagazine = prompt ("Chose one of these three options!\n\n" 
        + magazine1.name + "-" + "Current Month: " + magazine1.price + "\n" + magazine2.name + "-" + "Six months collection: " + magazine2.price + "\n" + magazine3.name + "-" 
        + "One year collection: " + magazine3.price + "\n" + "(Use capital letter)");
    };

    magazines.forEach (function (magazine) {console.log(magazine)})

    if (paidMagazine == magazine1){
        message();
        price = 1.99;
    }else if (paidMagazine == magazine2){
        message();
        price = 10.99;
    }else {
        message();
        price = 19.99;
    }
    
    do {
        quantity = Number (prompt ("Enter magazine quantity: \n\n"));
    }
    while (isNaN (quantity));
    
    while ((quantity == "") || (quantity == 0)){
        alert("");
        quantity = prompt ("Enter magazine quantity: \n\n");
    }
    
    alert ("Your choise: \n\n" + "Quantity:" + " " + quantity + "\n" + "Option:" + " " + paidMagazine.toUpperCase());
    confirm = prompt("Please confirm:" + "\n\n" + "Enter Y to continue" + "\n" + "or" + "\n" + "Enter N to exit\n" + "(Use capital letter)");
    
    while ((confirm.toUpperCase() == "Y") && (confirm.toUpperCase() == "N")) {
        alert("You must to enter an option");
        confirm = prompt("Please confirm:" + "\n\n" + "Enter Y to continue" + "\n" + "or" + "\n" + "Enter N to exit\n" + "(Use capital letter)");
    }
    
    //* Functions *//
    
    function message(){
        alert ("You chose" + " " + paidMagazine.toUpperCase());
    }
    function subTotal (quantity, price){
        totalPrice = quantity * price;
    }
    
    //* Final Conditionals *//
    
    if (confirm.toUpperCase() == "Y"){
        subTotal(quantity, price);
        alert ("Your selection is: \n" + "\n" + "Option: " + paidMagazine + "\n" + "Quantity: " + quantity + "\n" + "Total: " + " " + totalPrice + ".-");
        alert ("Accept if this is correct");
        alert ("Well done!\n\n" + "Thx for your purchase :)!");
    }else if (confirm.toUpperCase() == "N") {
        alert ("Thx for your visit!");
    } 