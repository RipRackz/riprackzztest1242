// JavaScript for interactive particles background
document.addEventListener('DOMContentLoaded', () => {
    const particleContainer = document.getElementById('particle-container');

    for (let i = 0; i < 100; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particleContainer.appendChild(particle);
    }

    const particles = document.querySelectorAll('.particle');

    particles.forEach(particle => {
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;

        const speed = Math.random() * 6 + 4; // Slower speed: 4s to 10s
        const size = Math.random() * 4 + 1;

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        particle.style.animationDuration = `${speed}s`;
    });

    const faqItems = document.querySelectorAll('.faq-item');

    window.addEventListener('scroll', () => {
        const triggerBottom = window.innerHeight / 5 * 4;

        faqItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;

            if(itemTop < triggerBottom) {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
                item.style.animation = 'popOut 0.5s ease-out';
            } else {
                item.style.opacity = '0';
                item.style.transform = 'translateY(50px)';
            }
        });
    });
});
// Get modal elements
var modal = document.getElementById("purchase-modal");
var btn = document.getElementById("purchase-btn");
var span = document.getElementsByClassName("close")[0];

// Open the modal when the button is clicked
btn.onclick = function() {
    modal.style.display = "flex";
}

// Close the modal when the user clicks on the close button
span.onclick = function() {
    modal.style.display = "none";
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Function to open Sellix purchase popup
document.querySelectorAll('.option-btn').forEach(button => {
    button.addEventListener('click', function() {
        var productId = this.getAttribute('data-sellix-product');
        Sellix.openCheckout({
            i: productId
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');

    menuToggle.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });
});
