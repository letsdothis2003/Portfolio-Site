import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="themed-box">
        <h2>Contact Me</h2>

        <form
          action="https://send.pageclip.co/bjs3MTDfM7unLnK6j28kqfcAlg44CMsW"
          className="pageclip-form"
          method="post"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit" className="pageclip-form__submit">
            <span>Send Message</span>
          </button>
        </form>

        <div className="contact-links">
          <p>You can also find me here:</p>
          <ul>
            <li>
              <a
                href="hhttps://github.com/letsdothis2003"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/fahim-t-30991b27a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
