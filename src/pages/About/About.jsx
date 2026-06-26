import React from 'react';
import './About.css';
import portrait from './about.jpg';

const About = () => (
  <section id="about" className="about-section">

    <div className="themed-box about-content">
      <img 
        id="Self-Portrait" 
        src={portrait} 
        alt="Self portrait of Fahim Tanvir" 
      />

      <div className="about-text">
        <h2>About Me</h2>
        <p>Hello, I'm <strong>Fahim Tanvir</strong> (Pronounced FAH-HEEM TAN-VEER), a passionate developer focused on creating meaningful software solutions.</p>

        <p>
          My interests span <strong>database systems, web development, software testing, and machine learning</strong>. 
          I thrive on exploring how technology works behind the scenes and building 
          projects that connect theory with real-world applications.
        </p>

        <p>
          I've gained hands-on experience in education, mentoring, and AI integration. I love stepping outside my comfort zone and
          learning new skills. One of my greatest strengths is translating complex technical 
          concepts into clear, understandable explanations for non-technical audiences.
        </p>
      </div>
    </div>

    <div className="cta-section">
      <p className="cta-label">Ready to work together?</p>

      <button
        className="resume-link-btn"
        onClick={() =>
          window.open(
            'https://docs.google.com/document/d/1Z8mAWcqACDeUCHOTyKHlUAf_2SeyeLqN/edit?usp=sharing&ouid=111692039254444137806&rtpof=true&sd=true',
            '_blank',
            'noopener,noreferrer'
          )
        }
      >
        View My Resume
      </button>
    </div>

  </section>
);

export default About;
