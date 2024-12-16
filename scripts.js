// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Form validation
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
  
    if (!name || !email || !message) {
      alert("All fields are required!");
    } else {
      alert("Thank you for your message, " + name + "!");
      // Here you could send the form data to a server
      // For now, we will just reset the form
      this.reset();
    }
  });
  