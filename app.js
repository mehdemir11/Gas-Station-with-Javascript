// !            GASOLINE : 20.79
// *            DIESEL   : 21.97
// todo         LPG      : 11.79

let gasoline = 20.79,
  diesel = 21.97,
  lpg = 11.79;
const newLine = "\r\n";
const firstQuestion =  "What fuel type your car uses?" + newLine
+" 1 - Gasoline " + newLine
+" 2 - Diesel " + newLine
+" 3 - LPG";
let fuelType = prompt(firstQuestion);
let fuelLiter = Number(prompt("Fuel liter please!"));1
let balance = Number(prompt("Your balance?"));
let total = gasoline*fuelLiter;
let currentBalance = (balance - total);
if(fuelType=="1"){
        // GASOLINE
    if(total>balance){
        alert("Balance is not mucher than your total.");
    }
    else{
        alert("Payment is successfull. Have a good one." + newLine + "Current Balance : " + currentBalance);
    }
}else if(fuelType=="2"){
    if(total>balance){
        // DIESEL
        alert("Balance is not mucher than your total.");
    }
    else{
        alert("Payment is successfull. Have a good one." + newLine + "Current Balance : " + currentBalance);
    }
}else if(fuelType=="3"){
        // LPG
    if(total>balance){
        alert("Balance is not mucher than your total.");
    }
    else{
        alert("Payment is successfull. Have a good one." + newLine + "Current Balance : " + currentBalance);
    }
}else{
    alert("Please enter a valid value!!!!");
}
