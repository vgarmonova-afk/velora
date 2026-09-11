const nameInput = document.getElementById("name");
const form = document.getElementById("form");
const message = document.getElementById("message");
const service = document.getElementById("service");
const date = document.getElementById("date");
const consent = document.getElementById("consent");
const price = document.getElementById("price");

service.addEventListener("change", function(){

    if (service.value === "Gel Polish") {
        price.textContent = "Ціна - 600 грн ";
    } else if (service.value === "Classic Manicure") {
        price.textContent = "Ціна - 350 грн";
      } else if (service.value === "Nail Art") {
        price.textContent = "Ціна - 800 грн";
      }
      price.classList.add("show");
      setTimeout(function(){
        price.classList.remove("show");
      }, 3000 );
})
    form.addEventListener("submit", function(event) {
    event.preventDefault();
 if (consent.checked) {

    message.textContent = `Дякуємо за вашу заявку, ${nameInput.value}! Ми зв'яжемося з вами найближчим часом. Ви обрали позицію ${service.value} на ${date.value}`;
    message.classList.add("show");
    
    setTimeout(function(){
        
        message.classList.remove("show");
        form.reset();
    }, 3000 );}
    else {
    message.textContent = "Будь ласка погодьтеся на обробку даних перед відправкою форми.";
    message.classList.add("show");
    setTimeout(function(){
        message.classList.remove("show");
    } , 3000 );
} }); 
    


    