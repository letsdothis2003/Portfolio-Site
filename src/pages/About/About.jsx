import React from 'react';
import './About.css';
import portrait from './about.jpg';

const About = () => (
  <section id="about" className="about-section">

    <div className="themed-box about-content">
      <img 
        id="Self-Portrait" 
        className="about-portrait"
        src={portrait} 
        alt="Self portrait of me" 
      />

      <div className="about-text">
        <h2>About Me</h2>
        <p>Hello, I'm <strong>Fahim Tanvir</strong> (Pronounced FAH-HEEM TAN-VEER), a passionate developer focused on creating meaningful software solutions.</p>

        <p>
          My technical interests span database systems, web development, software testing, and machine learning. 
          I love to explore how technology works behind the scenes and researching ways on ethical usage, implementation
          of safegaurds and regulations.
        </p>

        <p>
          I've gained hands-on experience in education, mentoring, and AI integration. I love stepping outside my comfort zone and
          learning new skills. One of my greatest strengths is translating complex technical 
          concepts into clear, understandable explanations for casual audiences.
        </p>

        <div className="about-details-grid">
          <div className="about-detail-card">
            <h3>Things I work with</h3>
            <div className="detail-table">
              <div className="detail-column">
                <strong>Languages</strong>
                <ul className="detail-list detail-list--inline">
                  <li>HTML &amp; CSS</li>
                  <li>JavaScript</li>
                  <li>Python</li>
                  <li>C++</li>
                  <li>SQL</li>
                  <li>PHP</li>
                  <li>R</li>
                </ul>
              </div>
              <div className="detail-column">
                <strong>Frameworks &amp; Tools</strong>
                <ul className="detail-list detail-list--inline">
                  <li>React</li>
                  <li>Bootstrap</li>
                  <li>Streamlit</li>
                  <li>Git &amp; GitHub</li>
                  <li>Figma</li>
                  <li>Canva</li>
                  <li>Cursor</li>
                  <li>Docker</li>
                </ul>
              </div>
              <div className="detail-column">
                <strong>AI / ML</strong>
                <ul className="detail-list detail-list--description">
                  <li>NLP</li>
                  <li>Google Colab</li>
                  <li>Scikit-learn</li>
                  <li>Jupyter Notebook</li>
                </ul>
              </div>
              <div className="detail-column">
                <strong>Cloud &amp; Data</strong>
                <ul className="detail-list detail-list--inline">
                  <li>Firebase</li>
                  <li>Supabase</li>
                  <li>Pocketbase</li>
                  <li>Render</li>
                  <li>Vercel</li>
                  <li>Netlify</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="about-detail-card">
            <h3>Places I&rsquo;ve worked</h3>
            <ul className="detail-list detail-list--solid detail-list--inline">
              <li>CUNY</li>
              <li>CodePath</li>
              <li>Thrive Collective</li>
              <li>Selective Corporate Summer Internship Program (SCIP)</li>
              <li>Vanguarde Digital</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="about-footer">
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
    </div>
  </section>
);

export default About;
