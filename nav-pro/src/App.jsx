import "./assets/components/style.css";


function App() {
  return (
    <>
      {/* Navbar */}
      <div className="navbar">
        <h2>Task</h2>
        <div>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      {/* Home */}
      <section id="home" className="section">
        <h1>Welcome to My Website</h1>
        <p>We create modern and beautiful web applications.</p>
      </section>



      {/* About */}
      <section id="about" className="section about">
        <img src="img2.jpg" alt="about" />
        <div>
          <h2>About Us</h2>
          <p>
           This is About page
          </p>
        </div>
      </section>



      {/* Services */}
      <section id="services" className="section">
        <h2>Our Services</h2>
        <ul>
          <li>Web Development</li>
          <li>UI / UX Design</li>
          <li>Mobile App Development</li>
          <li>Digital Marketing</li>
        </ul>
      </section>

      {/* Gallery */}
      <section id="gallery" className="section gallery">
        <h2>Gallery</h2>
        <div className="gallery-grid">
          <div><img src="img2.jpg"/><p>Image 1</p></div>
          <div><img src="img2.jpg"/><p>Image 2</p></div>
          <div><img src="img2.jpg"/><p>Image 3</p></div>
          <div><img src="img2.jpg"/><p>Image 4</p></div>
          <div><img src="img2.jpg"/><p>Image 5</p></div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <h2>Contact Us</h2>
        <p>Email: shakti@gmail.com</p>
        <p>Phone: +91 9876543210</p>
      </section>

      {/* Footer */}
      <div className="footer">
        This footer pf the website
      </div>
    </>
  );
}

export default App;
