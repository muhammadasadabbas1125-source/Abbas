document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    if(form){
        form.addEventListener("submit", function(e){
            e.preventDefault();

            let name = document.getElementById("fullname").value.trim();
            let email = document.getElementById("emailaddress").value.trim();
            let message = document.getElementById("message").value.trim();

            let nameError = document.getElementById("nameError");
            let emailError = document.getElementById("emailError");
            let messageError = document.getElementById("messageError");

            nameError.innerText = "";
            emailError.innerText = "";
            messageError.innerText = "";

            let valid = true;

            if(name === ""){
                nameError.innerText = "Please enter your correct name";
                valid = false;
            }

            let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if(!email.match(emailPattern)){
                emailError.innerText = "Please enter your correct email";
                valid = false;
            }

            let wordCount = message.split(/\s+/).filter(word => word.length > 0).length;
            if(wordCount < 20 || wordCount > 50){
                messageError.innerText = "Message must contain 20 to 50 words";
                valid = false;
            }

            if(valid){
                let formData = {
                    name: name,
                    email: email,
                    message: message
                };

                localStorage.setItem("contactData", JSON.stringify(formData));
                alert("Message saved successfully!");
                form.reset();
            }
        });
    }
});

function getLocation() {

let display = document.getElementById("location-display");
let map = document.getElementById("map");

if (navigator.geolocation) {

display.innerHTML = "Fetching your location...";

navigator.geolocation.getCurrentPosition(showPosition, showError);

} else {

display.innerHTML = "Geolocation is not supported by this browser.";

}

}

function showPosition(position) {

let lat = position.coords.latitude;
let lon = position.coords.longitude;

document.getElementById("location-display").innerHTML =
"📍 Latitude: " + lat.toFixed(4) + "<br>📍 Longitude: " + lon.toFixed(4);

document.getElementById("map").innerHTML =
`<iframe 
width="100%" 
height="450" 
style="border:0"
loading="lazy"
allowfullscreen
src="https://maps.google.com/maps?q=${lat},${lon}&z=12&output=embed">
</iframe>`;

}

function showError(error) {

let display = document.getElementById("location-display");

switch(error.code) {

case error.PERMISSION_DENIED:
display.innerHTML = "❌ Location access denied by user.";
break;

case error.POSITION_UNAVAILABLE:
display.innerHTML = "⚠️ Location information unavailable.";
break;

case error.TIMEOUT:
display.innerHTML = "⌛ Location request timed out.";
break;

default:
display.innerHTML = "⚠️ Unknown error occurred.";
}

}

// Cosmic News Ticker

const news = [
"🔭 Astronomers discover a new Earth-like exoplanet in a nearby star system.",
"🌌 The James Webb Space Telescope reveals stunning new galaxy images.",
"☄️ Scientists detect mysterious signals from deep space.",
"🛰️ NASA plans new mission to explore Jupiter’s icy moon Europa.",
"🌠 Rare meteor shower expected to light up the night sky this month."
];

let index = 0;

function updateNews(){

const ticker = document.getElementById("news-ticker");

if(ticker){

ticker.style.opacity = 0;

setTimeout(()=>{

ticker.textContent = news[index];

ticker.style.opacity = 1;

index++;

if(index >= news.length){
index = 0;
}

},500);

}

}

setInterval(updateNews,4000);

updateNews();

// Solar System Exploration Progress Animation

document.addEventListener("DOMContentLoaded", function(){

let progressBar = document.getElementById("solarProgress");
let progressText = document.getElementById("progressText");

let value = 0;
let target = 72; // final percentage (change kar sakte ho)

let interval = setInterval(function(){

if(value >= target){
clearInterval(interval);
} else {

value++;

progressBar.style.width = value + "%";
progressText.textContent = value;

}

},40);

});
