<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="An advanced website with modern features">
  <meta name="author" content="Your Name">
  <title>Advanced Website</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <header>
    <div class="logo">
      <h1>My Simple WebSite</h1>
      <img src="C:\Users\Nites\OneDrive\Pictures\Screenshots\nirajkumar.jpg" alt="This is my photo">
      <h2 id="kumar">Er. Niraj kumar</h2>
    </div>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <section id="hero">
    <div class="hero-content">
      <h2>Welcome to My Website</h2>
      <p>Your success is our mission.</p>
      <a href="#services" class="cta-button">Learn More</a>
    </div>
   
  </section>

  <section id="about" class="section">
    <h2>About Us</h2>
    <p>We are a team of passionate developers building solutions that matter.</p>
    <p>Our mission is to provide innovative digital experiences for our clients.</p>
  </section>

  <section id="services" class="section">
    <h2>Our Services</h2>
    <div class="services-container">
      <div class="service-card">
        <h3>Web Development</h3>
        <p>Build responsive, performant websites tailored to your needs.</p>
      </div>
      <div class="service-card">
        <h3>UI/UX Design</h3>
        <p>Design user-friendly interfaces that engage and convert.</p>
      </div>
      <div class="service-card">
        <h3>SEO Optimization</h3>
        <p>Boost your visibility with our expert SEO strategies.</p>
      </div>
    </div>
  </section>

  <section id="contact" class="section">
    <h2>Contact Us</h2>
    <form id="contactForm">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required>

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required></textarea>

      <label for="message">Message:</label>
      <textarea id="message" name="message" required></textarea>

      <button type="submit" class="cta-button">Submit</button>
    </form>
  </section>

  <footer>





    /* Reset default margin and padding */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    background-color: #f4f4f4;
  }
  
  /* Header Styling */
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    color: white;
    padding: 1rem;
  }
  
  header .logo h1 {
    font-size: 2rem;
  }
  img{
   margin-right: 600px;
    height: 100px;
    width: 100px;
    border-radius: 20px;
    background-color: blue;
    border: 5px;
    border-color: chartreuse;
  }
  .kumar{
    margin-right: 980px;
    background-color: #4d02fc;
    color: deepskyblue;
  }
  
  header nav ul {
    display: flex;
    list-style-type: none;
  }
  
  header nav ul li {
    margin: 0 15px;
  }
  
  header nav ul li a {
    color: white;
    text-decoration: none;
    font-size: 1.1rem;
  }
  
  header nav ul li a:hover {
    text-decoration: underline;
  }
  
  /* Hero Section */
  #hero {
    background: url('https://via.placeholder.com/1920x800') no-repeat center center/cover;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-align: center;
  }
  
  #hero .hero-content h2 {
    font-size: 3rem;
    margin-bottom: 20px;
  }
  
  .cta-button {
    padding: 10px 20px;
    background-color: #FF6347;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    font-size: 1rem;
  }
  
  .cta-button:hover {
    background-color: #FF4500;
  }
  
  /* Section Styling */
  .section {
    padding: 50px 20px;
    text-align: center;
  }
  
  h2 {
    margin-bottom: 20px;
    font-size: 2rem;
  }
  
  .services-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    margin-top: 30px;
  }
  
  .service-card {
    background-color: #4d02fc;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .service-card h3 {
    margin-bottom: 10px;
    font-size: 1.5rem;
  }
  
  /* Contact Form */
  form {
    max-width: 600px;
    margin: 0 auto;
    text-align: left;
  }
  
  form label {
    display: block;
    margin: 10px 0 5px;
  }
  
  form input, form textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  form button {
    background-color: #FF6347;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  form button:hover {
    background-color: #FF4500;
  }
  
  /* Footer */
  footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 20px;
  }
  
  /* Media Queries for responsiveness */
  @media (max-width: 768px) {
    header nav ul {
      flex-direction: column;
      align-items: center;
    }
  
    .services-container {
      grid-template-columns: 1fr;
    }
  }




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
  
    <p>&copy; 2024 My simple webSite | Designed by You</p>
  </footer>

  <script src="scripts.js"></script>
</body>
</html>
