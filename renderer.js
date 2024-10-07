document.addEventListener('DOMContentLoaded', () => {
  const loggedInUser = localStorage.getItem('loggedInUser');
  const loginLink = document.getElementById('login-link');
  const userAvatar = document.getElementById('user-avatar');

  if (loggedInUser) {
      const firstLetter = loggedInUser.charAt(0).toUpperCase();
      userAvatar.textContent = firstLetter;
      userAvatar.style.display = 'flex';
      loginLink.style.display = 'none';
  }
});

// Slideshow script
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex - 1].style.display = "block";  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// Sticky header script
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
if (window.pageYOffset > sticky) {
  header.classList.add("sticky");
} else {
  header.classList.remove("sticky");
}
}
