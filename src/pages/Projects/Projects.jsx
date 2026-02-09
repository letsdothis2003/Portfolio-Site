import React, { useState } from 'react';
import './Projects.css';

const projectData = [
      {
    title: 'AI-Generated Image Detector',
    description: 'I got interested in digital image processing around the fall, I thought I can create something that can tackle the issue of ai slop on social media',
    publishDate: 'ONGOING AS OF 11/12',
    collaborators: 'Ahmed Ali',
    link: 'https://github.com/letsdothis2003/AI-Generated-Image-Detector',
  },
    {
    title: 'MAYTHON: MAYO Multivariete Scheme Recreation',
    description: 'Me and a fellow group of friends were interested in crytography schemes, so we decided to recreate it using python.',
    publishDate: 'January 21, 2026',
    collaborators: 'Jude Merryshow, Labib Nafi, Mooshorof Hussain',
    link: 'https://github.com/letsdothis2003/Maython',
  },

  {
    title: 'Library Management System',
    description: 'A database management system using SQL and Java. It is intended to track checked out books, library members and staff along with relational constraints',
    publishDate: 'May 11, 2025',
    collaborators: 'Jessica Chen, Khalid Issa, Abul Hasan, Jason Lopez',
    link: 'https://github.com/letsdothis2003/Library-Database-Management-System',
  },
  {
    title: 'Customer Churn System',
    description: 
    'A software system we developed in Java which uses the machine learning algorithm known as Random Forest to predict if a customer will quit their subscription using their data.',
    publishDate: 'Dec 15, 2024',
    collaborators: 'Ahmed Ali, Abul Hasan',
    link: 'https://github.com/letsdothis2003/Customer_Churn_System',
  },
  {
    title: 'Music Festival Website',
    description: 'A website we designed which uses Stripe API along with other tools to represent local music events and a functional merch store',
    publishDate: 'Dec 12, 2024',
    collaborators: 'Jamal Siddiqui, Steven Campeche',
    link: 'https://github.com/letsdothis2003/Music-Festival-Website',
  },
  {
    title: 'Technology Company Website',
    description: 
    'A template we designed to act as a template for a company website. We included some wacky and relatively bizzare photos and concepts just to grab user attention',
    publishDate: 'Nov 3, 2024',
    collaborators: ' Bernardo Antonio Manto, Shah Muzafar, Steven Campeche, Jamal Siddiqui',
    link: 'https://github.com/letsdothis2003/Technology-Company-Website',
  },
];

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleCard = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="themed-box">
        <h2 className="section-title">My Projects(Click the names to expand)</h2>
      </div>

      <div className="projects-container">
        {projectData.map((project, index) => (
          <div
            key={index}
            className={`project-card ${expandedIndex === index ? 'expanded' : ''}`}
            onClick={() => toggleCard(index)}
          >
            <div className="themed-box">
              <p className="project-title">{project.title}</p>
              {expandedIndex === index && (
                <div className="project-details">
                  <p><strong>Description:</strong> {project.description}</p>
                  <p><strong>Published:</strong> {project.publishDate}</p>
                  <p><strong>Collaborators:</strong> {project.collaborators}</p>
                  <p>
                    <strong>Link:</strong>{' '}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      {project.link}
                    </a>
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
