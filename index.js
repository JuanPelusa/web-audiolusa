//* Prompts & Cicles *//

let enterName = prompt("Suscribe to our newsletter!\n\n" + "Please enter your name\n");
while (enterName == ""){
    alert("Please complete the field");
    enterName = prompt("Suscribe to our newsletter!\n\n" + "Please enter your name\n");
}
let enterAge = Number (prompt ("Enter your age\n\n" + "(Need to be of legal age)")); 
const legalAge = (enterAge >= 18);
while (enterAge == ""){
    alert("Please complete the field");
    enterAge = Number (prompt ("Enter your age\n\n" + "(Need to be of legal age)"));
}

//* Conditionals & Cicles *//

if (legalAge){
    alert ("Thank you, please continue");
}
else {
    alert ("[ERROR] Not legal age");
}
while (enterAge < 18) {
    alert ("You need to be of legal age");
    enterAge = Number (prompt ("Enter your age\n" + "(Need to be of legal age)")); 
}
let enterEmaiL = prompt ("Enter your email\n"); 
while (enterEmaiL == ""){
    alert("Please complete the field");
    enterEmaiL = prompt ("Enter your email\n");
}
alert ("thank's for suscribe!")

//* Interactive Simulator *//

const suscription1 = "A";
const suscription2 = "B";
const suscription3 = "C";
const suscription4 = "D";
const coinType = "usd";

let paidSuscription = prompt ("Congratulations! Now you can take your suscription to the next level!\n\n" 
    + suscription1 + "-" + "One month: usd 4.99.-" + "\n" + suscription2 + "-" + "Three months: usd 13.99.-" + "\n" + suscription3 + "-" + "Six months: usd 24.99.-" + "\n" 
    + suscription4 + "-" + "One year: usd 44.99.-" + "\n\n" +  "Chose your suscription\n" + "(Use capital letter)");
let price
let confirm
let quantity
let totalPrice

while (paidSuscription == ""){
    alert("No option selected");
    paidSuscription = prompt ("Congratulations! Now you can take your suscription to the next level!\n\n" 
    + suscription1 + "-" + "One month: usd 4.99.-" + "\n" + suscription2 + "-" + "Three months: usd 13.99.-" + "\n" + suscription3 + "-" + "Six months: usd 24.99.-" + "\n" 
    + suscription4 + "-" + "One year: usd 44.99.-" + "\n\n" +  "Chose your suscription\n" + "(Use capital letter)");
} 
while ((paidSuscription.toUpperCase() != suscription1) && (paidSuscription.toUpperCase() != suscription2) && (paidSuscription.toUpperCase() != suscription3) && 
    (paidSuscription.toUpperCase() != suscription4)) {
    alert("Must enter a valid option");
    paidSuscription = prompt ("Congratulations! Now you can take your suscription to the next level!\n\n" 
    + suscription1 + "-" + "One month: usd 4.99.-" + "\n" + suscription2 + "-" + "Three months: usd 13.99.-" + "\n" + suscription3 + "-" + "Six months: usd 24.99.-" + "\n" 
    + suscription4 + "-" + "One year: usd 44.99.-" + "\n\n" +  "Chose your suscription\n" + "(Use capital letter)");
}

if (paidSuscription == suscription1){
    message();
    price = 4.99;
}else if (paidSuscription == suscription2){
    message();
    price = 13.99;
}else if (paidSuscription == suscription3){
    message();
    price = 24.99;
}else {
    message();
    price = 44.99;
}

do {
    quantity = Number (prompt ("Enter suscription qty: \n\n"));
}
while (isNaN (quantity));

while ((quantity == "") || (quantity == 0)){
    alert("");
    quantity = prompt ("Enter suscription qty: \n\n");
}

alert ("Your choise: \n\n" + "Quantity:" + " " + quantity + "\n" + "Suscription:" + " " + paidSuscription.toUpperCase());
confirm = prompt("Please confirm:" + "\n\n" + "Enter Y to continue" + "\n" + "or" + "\n" + "Enter N to exit\n" + "(Use capital letter)");

while ((confirm.toUpperCase() != "Y") && (confirm.toUpperCase() != "N")) {
   alert("You must to enter an option");
   confirm = prompt("Please confirm:" + "\n\n" + "Enter Y to continue" + "\n" + "or" + "\n" + "Enter N to exit\n" + "(Use capital letter)");
}

//* Functions *//

function message(){
    alert ("You chose" + " " + paidSuscription.toUpperCase());
}
function subTotal (quantity, price){
    totalPrice = quantity * price;
}

//* final Conditionals *//

if (confirm.toUpperCase() == "Y"){
    subTotal(quantity, price);
    alert ("Your selection is: \n" + "\n" + "Suscription: " + paidSuscription + "\n" + "Qty: " + quantity + "\n" + "Total: " + coinType + " " + totalPrice + ".-");
    alert ("Accept if this is correct");
    alert ("Well done!\n\n" + "Thx for your purchase :)!");
}else if (confirm.toUpperCase() == "N") {
    alert ("Thx for your visit!");
}
