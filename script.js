const age = 19;
const hasAppointment = true;
const service = "Classic Manicure";
let discount = 50;
const price = 500;
if (age >=18 && hasAppointment===true){
    console.log(`Ви можете записатися на процедуру ${service}, вартість якої становить ${price} грн.`); 
}
if (service === "Gel Polish" || service === "Nail Art"){
    console.log(`Доступна знижка на послугу, в розмірі ${discount} грн.`); 
}
if (hasAppointment === false) {
    console.log("Ви маєте спочатку записатися.");
} 
if (price > 300){
    console.log("Процедура дорожча 300 грн.");
} else {
    console.log("Процедура дешевша 300 грн.");
}