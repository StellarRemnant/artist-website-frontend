const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const closeBtn = document.getElementById('closeBtn');

// Open the navbar when clicking the hamburger icon
hamburger.addEventListener('click', () => {
    navbar.style.left = "0"; 
});

// Close the navbar when clicking the close button
closeBtn.addEventListener('click', () => {
    navbar.style.left = "-250px"; 
});