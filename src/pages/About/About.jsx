import React from 'react';
import './About.css';
import portrait from './about.jpg';

const About = () => (
  <section id="about" className="about-section">
    <div className="themed-box">
      <h2>About Me</h2>

      <img 
        id="Self-Portrait" 
        src={portrait} 
        alt="Self portrait of Fahim Tanvir" 
      />

      <p>Hello, my name is <strong>Fahim Tanvir</strong> (Pronounced FAH-HEEM TAN-VEER).</p>

      <p>
        I’m a student at CUNY Queens College(Class of 26) with interests in 
        database systems, web development, software testing, and machine learning. 
        I enjoy exploring how technology works behind the scenes and building 
        projects that connect theory with real-world applications and situations. 
      </p>

      <p>
        I’ve gained experience in education, mentoring, and working with 
        artificial intelligence. I love stepping outside my comfort zone, 
        learning new things, and becoming a “jack of all trades” when it comes 
        to knowledge. One of my favorite things is taking complex technical 
        topics and making them understandable for non‑technical audiences.
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
