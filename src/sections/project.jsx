import React from 'react';

function Projects() {
  return (
    <section className="section" id="project">
      <h2>Projects</h2>

      <div className="project-grid">

        <div className="project-card">
          <h3>GPA Calculator</h3>
          <p>
            A web application to calculate student GPA.
            Built using React for frontend and Spring Boot for backend.
          </p>
          <p><strong>Tech:</strong> React, Spring Boot, MySQL</p>
        </div>

        <div className="project-card">
          <h3>Employee Management System</h3>
          <p>
            CRUD application to manage employee records with REST APIs.
          </p>
          <p><strong>Tech:</strong> React, Spring Boot, MySQL</p>
        </div>

        <div className="project-card">
          <h3>Microbanking System (MIMS)</h3>
          <p>
            Academic project for savings, deposits, and interest calculation.
          </p>
          <p><strong>Tech:</strong> Java, Spring Boot</p>
        </div>

        <div className="project-card">
          <h3>Vehicle Spare Parts Website</h3>
          <p>
            Full-stack web platform for browsing and managing vehicle spare parts.
          </p>
          <p><strong>Tech:</strong> Next.js, Spring Boot, PostgreSQL</p>
        </div>

        <div className="project-card">
          <h3>Personal Portfolio Website</h3>
          <p>
            Responsive portfolio website to showcase my profile, skills, projects, and contact details.
          </p>
          <p><strong>Tech:</strong> React, CSS</p>
        </div>

      </div>
    </section>
  );
}

export default Projects;
