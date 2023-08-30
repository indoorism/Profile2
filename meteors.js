// meteors.js

const navbar = document.querySelector('nav');

function createMeteor() {
    const meteor = document.createElement('div');
    meteor.className = 'meteor';
    meteor.style.left = `${Math.random() * 100}%`; // Random horizontal position
    navbar.appendChild(meteor);
    setTimeout(() => {
        meteor.remove(); // Remove the meteor element after animation completes
    }, 3000); // Adjust the time as needed
}

setInterval(createMeteor, 500); // Create a new meteor every 500 milliseconds
