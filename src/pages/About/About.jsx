import React from 'react';
import './About.css';
import portrait from './about.jpg';

const About = () => (
  <section id="about" className="about-section">
    <div className="themed-box">
      <h2>About Me</h2>
  

<img id="Self-Portrait" src={portrait} alt="Self-Portrait" />

<p>
        Hello, my name is Fahim Tanvir.
      </p>

      <p>
        I am currently an undergraduate student at CUNY Queens College, with interests in database systems, website development, and software testing. 
        I am also passionate about machine learning and cryptography.
      </p>

      <p>
  Here is my resume:{" "}
  <a
    href="https://docs.google.com/document/d/1Z8mAWcqACDeUCHOTyKHlUAf_2SeyeLqN/edit?usp=sharing&ouid=111692039254444137806&rtpof=true&sd=true"
    target="_blank"
    rel="noopener noreferrer"
  >
    View Resume
  </a>
</p>


    </div>
  </section>
);

export default About;