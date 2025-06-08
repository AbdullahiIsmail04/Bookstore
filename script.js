// Change Navbar Background Color on Scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// RESPONSIVE NAVBAR TOGGLE
const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});

// HIDE NAVIGATION LINKS AFTER CLICKING ON A LINK
const navLinks = document.querySelectorAll('.navbar-links a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbarLinks.classList.remove('active');
  });
});
