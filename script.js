function toggleMenu() {
    const navMenu = document.querySelector('nav ul');
    navMenu.classList.toggle('visible');
}

const hamburgerIcon = document.querySelector('.hamburger-icon');
hamburgerIcon.addEventListener('click', toggleMenu);


// Smooth scrolling for links in the navigation that reference sections within the page
document.querySelectorAll('nav ul li a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
function filterProjects(category) {
    const projects = document.querySelectorAll('.Proj');
    projects.forEach(project => {
        if (category === 'all' || project.classList.contains(category)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}


const filterButtons = document.querySelectorAll('.filter-button');
filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        const category = this.getAttribute('data-filter');
        filterProjects(category);
    });
});
// Lightbox effect for project images

const lightboxOverlay = document.createElement('div');
lightboxOverlay.classList.add('lightbox-overlay');
document.body.appendChild(lightboxOverlay);

function showLightbox(image) {
    const lightboxImage = document.createElement('img');
    lightboxImage.src = image.src;
    lightboxImage.classList.add('lightbox-image');
    lightboxOverlay.appendChild(lightboxImage);
    lightboxOverlay.classList.add('visible');
    document.body.classList.add('no-scroll');
}

function hideLightbox() {
    lightboxOverlay.classList.remove('visible');
    document.body.classList.remove('no-scroll');
    while (lightboxOverlay.firstChild) {
        lightboxOverlay.removeChild(lightboxOverlay.firstChild);
    }
}

document.querySelectorAll('.Proj img').forEach(image => {
    image.addEventListener('click', function() {
        showLightbox(this);
    });
});

lightboxOverlay.addEventListener('click', hideLightbox);

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Simulate form submission success
    alert('Thank you for your message! We will get back to you shortly.');

    // Clear form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
});

    const formInputs = document.querySelectorAll('form input, form textarea');

    formInputs.forEach(input => {
        input.addEventListener('input', function() {
            const errorElement = this.parentElement.querySelector('span.error');

            if (this.value === '') {
                this.parentElement.classList.add('error');
                errorElement.textContent = 'Please fill in this field.';
            } else {
                this.parentElement.classList.remove('error');
                errorElement.textContent = '';
            }
        });
    });
