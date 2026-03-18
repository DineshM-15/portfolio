document.querySelectorAll("nav a").forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault();

let target = document.querySelector(this.getAttribute("href"));

target.scrollIntoView({
behavior:"smooth"
});

});

});

let form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

e.preventDefault();

alert("Message sent successfully!");

form.reset();

});