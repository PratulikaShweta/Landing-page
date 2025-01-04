// Toggle mobile navigation menu
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// ScrollReveal for smooth animations on scroll
window.sr = ScrollReveal();

// Header reveal animation
sr.reveal('.header__container', {
  duration: 1000,
  origin: 'top',
  distance: '50px',
  opacity: 0,
  delay: 300,
  scale: 0.8
});

// About section reveal animation
sr.reveal('.about__container', {
  duration: 1000,
  origin: 'left',
  distance: '50px',
  opacity: 0,
  delay: 500,
  scale: 0.8
});

// Rooms section reveal animation
sr.reveal('.room__card', {
  duration: 1000,
  origin: 'bottom',
  distance: '50px',
  opacity: 0,
  delay: 400,
  scale: 0.9
});

// Services section reveal animation
sr.reveal('.service__list li', {
  duration: 1000,
  origin: 'bottom',
  distance: '30px',
  opacity: 0,
  delay: 200,
  scale: 0.9
});

// Explore section reveal animation
sr.reveal('.explore__content', {
  duration: 1000,
  origin: 'right',
  distance: '50px',
  opacity: 0,
  delay: 600,
  scale: 0.8
});

// Booking form validation
const bookingForm = document.querySelector('.booking__form');
bookingForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const checkIn = document.getElementById('check-in').value;
  const checkOut = document.getElementById('check-out').value;
  const guests = document.getElementById('guests').value;

  if (!checkIn || !checkOut || !guests) {
    alert('Please fill out all fields.');
  } else {
    alert(`Booking request submitted:
      Check-In: ${checkIn}
      Check-Out: ${checkOut}
      Guests: ${guests}`);
    // Optionally, reset the form after submission
    bookingForm.reset();
  }
});

// Sticky Navbar for smooth scrolling (when the user scrolls)
const navbar = document.querySelector('.nav');
const sticky = navbar.offsetTop;

window.onscroll = () => {
  if (window.pageYOffset > sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
};

// Handling the Book Now button click event
const bookNowBtn = document.querySelector('.btn.nav__btn');
bookNowBtn.addEventListener('click', function () {
  // For example, scroll smoothly to the booking section when the button is clicked
  document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
});

// Closing mobile menu when clicking on a link
const navLinksItems = document.querySelectorAll('.nav__links a');
navLinksItems.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function () {
  // Add event listeners to the navigation links
  document.getElementById("homeLink").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
  });

  document.getElementById("aboutLink").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  });

  document.getElementById("servicesLink").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    document.getElementById("services").scrollIntoView({ behavior: "smooth" });
  });

  document.getElementById("exploreLink").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    document.getElementById("explore").scrollIntoView({ behavior: "smooth" });
  });

  document.getElementById("contactLink").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  });
});
