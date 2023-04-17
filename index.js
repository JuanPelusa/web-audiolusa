//* Prompts & Cicles *//

let enterName = prompt("Subscribe to our newsletter!\n\n" + "Please enter your name\n");
while (enterName == ""){
    alert("Please complete the field");
    enterName = prompt("Subscribe to our newsletter!\n\n" + "Please enter your name\n");
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
alert ("thank's for subscribe!")

//* Interactive Simulator *//

const subscription1 = "A";
const subscription2 = "B";
const subscription3 = "C";
const subscription4 = "D";
const coinType = "usd";

let paidSubscription = prompt ("Congratulations! Now you can take your subscription to the next level!\n\n" 
    + subscription1 + "-" + "One month: usd 4.99.-" + "\n" + subscription2 + "-" + "Three months: usd 13.99.-" + "\n" + subscription3 + "-" + "Six months: usd 24.99.-" + "\n" 
    + subscription4 + "-" + "One year: usd 44.99.-" + "\n\n" +  "Chose your subscription\n" + "(Use capital letter)");
let price
let confirm
let quantity
let totalPrice

while (paidSubscription == ""){
    alert("No option selected");
    paidSubscription = prompt ("Congratulations! Now you can take your subscription to the next level!\n\n" 
    + subscription1 + "-" + "One month: usd 4.99.-" + "\n" + subscription2 + "-" + "Three months: usd 13.99.-" + "\n" + subscription3 + "-" + "Six months: usd 24.99.-" + "\n" 
    + subscription4 + "-" + "One year: usd 44.99.-" + "\n\n" +  "Chose your subscription\n" + "(Use capital letter)");
} 
while ((paidSubscription.toUpperCase() != subscription1) && (paidSubscription.toUpperCase() != subscription2) && (paidSubscription.toUpperCase() != subscription3) && 
    (paidSubscription.toUpperCase() != subscription4)) {
    alert("Must enter a valid option");
    paidSubscription = prompt ("Congratulations! Now you can take your subscription to the next level!\n\n" 
    + subscription1 + "-" + "One month: usd 4.99.-" + "\n" + subscription2 + "-" + "Three months: usd 13.99.-" + "\n" + subscription3 + "-" + "Six months: usd 24.99.-" + "\n" 
    + subscription4 + "-" + "One year: usd 44.99.-" + "\n\n" +  "Chose your subscription\n" + "(Use capital letter)");
}

if (paidSubscription == subscription1){
    message();
    price = 4.99;
}else if (paidSubscription == subscription2){
    message();
    price = 13.99;
}else if (paidSubscription == subscription3){
    message();
    price = 24.99;
}else {
    message();
    price = 44.99;
}

do {
    quantity = Number (prompt ("Enter subscription qty: \n\n"));
}
while (isNaN (quantity));

while ((quantity == "") || (quantity == 0)){
    alert("");
    quantity = prompt ("Enter subscription qty: \n\n");
}

alert ("Your choise: \n\n" + "Quantity:" + " " + quantity + "\n" + "Subscription:" + " " + paidSubscription.toUpperCase());
confirm = prompt("Please confirm:" + "\n\n" + "Enter Y to continue" + "\n" + "or" + "\n" + "Enter N to exit\n" + "(Use capital letter)");

while ((confirm.toUpperCase() != "Y") && (confirm.toUpperCase() != "N")) {
   alert("You must to enter an option");
   confirm = prompt("Please confirm:" + "\n\n" + "Enter Y to continue" + "\n" + "or" + "\n" + "Enter N to exit\n" + "(Use capital letter)");
}

//* Functions *//

function message(){
    alert ("You chose" + " " + paidSubscription.toUpperCase());
}
function subTotal (quantity, price){
    totalPrice = quantity * price;
}

//* final Conditionals *//

if (confirm.toUpperCase() == "Y"){
    subTotal(quantity, price);
    alert ("Your selection is: \n" + "\n" + "Subscription: " + paidSubscription + "\n" + "Qty: " + quantity + "\n" + "Total: " + coinType + " " + totalPrice + ".-");
    alert ("Accept if this is correct");
    alert ("Well done!\n\n" + "Thx for your purchase :)!");
}else if (confirm.toUpperCase() == "N") {
    alert ("Thx for your visit!");
}