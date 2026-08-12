import React from 'react';

function Projects() {
  const projects = [
    {
      name: 'Second-Hand Vehicle Marketplace with Intelligent Search and Automated Inventory Processing',
      description:
        'Cloud-native B2B vehicle marketplace where dealers upload inventory in bulk, including CSV data and images. The platform processes uploads through an automated ETL pipeline and supports intelligent vehicle search.',
      technologies: [
        'React',
        'Node.js',
        'NestJS',
        'PostgreSQL',
        'pgvector',
        'AWS S3',
        'AWS SQS',
        'AWS SES',
        'Docker',
        'Docker Compose',
        'Terraform',
        'GitHub Actions',
        'JWT',
      ],
      featured: true,
      status: 'Current major project - in progress',
    },
    {
      name: 'Personal Portfolio Website',
      description:
        'Responsive portfolio website for presenting skills, projects, education, achievements, and contact information.',
      technologies: ['React', 'React Router', 'CSS'],
      status: 'Personal project',
    },
        {
      name: 'Vehicle Spare Parts Website',
      description:
        'Full-stack web platform for browsing and managing vehicle spare parts with a modern frontend, backend APIs, and persistent storage.',
      technologies: ['Next.js', 'Spring Boot', 'PostgreSQL'],
      status: 'Personal project - in progress',
    },
    {
      name: 'GPA Calculator',
      description:
        'Academic web application for calculating student GPA from course credits and grades.',
      technologies: ['React', 'Backend API', 'MySQL'],
      status: 'Personal project',
    },
    {
      name: 'Employee Management System',
      description:
        'CRUD application for managing employee records with REST APIs, including create, update, view, and delete workflows.',
      technologies: ['React', 'Spring Boot', 'MySQL'],
      status: 'Personal project',
    },
    {
      name: 'Regex to NFA Converter',
      description:
        'Compiler-theory tool that converts regular expressions into non-deterministic finite automata for visualization and learning.',
      technologies: ['JavaScript', 'Automata Theory'],
      status: 'Personal project',
    },
  ];

  return (
    <section className="section" id="project">
      <div className="section-heading">
        <span className="section-kicker">Selected Work</span>
        <h2>Projects</h2>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article
            className={`project-card${project.featured ? ' project-card--featured' : ''}`}
            key={project.name}
          >
            <div className="project-media" aria-hidden="true">
              <span>{project.name.charAt(0)}</span>
            </div>
            <div className="project-content">
              <span className="project-status">{project.status}</span>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="tech-list" aria-label={`${project.name} technologies`}>
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
             
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
