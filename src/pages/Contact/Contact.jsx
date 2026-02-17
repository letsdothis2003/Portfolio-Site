import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; 
import './ContactForm.css';

const ContactForm = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="form-container">
        <h2>Contact Me</h2>

        <form action="https://api.web3forms.com/submit" method="POST">
          {/* Your Web3Forms Access Key */}
          <input type="hidden" name="access_key" value="de95b588-e25e-4674-be05-a869867fa7ff" />

          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          
          <div className="button-box">
            <button type="submit">
              <strong>Submit</strong>
            </button>
          </div>
        </form>

        <div className="contact-links">
          <p>You can also find me here:</p>
          <ul>
            <li>
              <a
                href="https://github.com/letsdothis2003"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaGithub className="social-icon" />
                <span>GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/fahim-t-30991b27a/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaLinkedin className="social-icon" />
                <span>LinkedIn</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;