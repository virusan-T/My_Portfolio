import React from 'react';

function Skills() {
  const skillGroups = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'Java', 'C++', 'JavaScript', 'TypeScript'],
    },
    {
      title: 'Web Technologies',
      skills: ['React', 'Node.js', 'NestJS', 'Tailwind CSS','Spring Boot'],
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL', 'MySQL'],
    },
    {
      title: 'Cloud',
      skills: ['AWS EC2', 'AWS S3'],
    },
    {
      title: 'DevOps / Tools',
      skills: ['Git', 'GitHub', 'Docker', 'Docker Compose', 'GitHub Actions', 'Terraform'],
    },
  ];

  return (
    <section className="section skills-section" id="skills">
      <div className="section-heading">
        <span className="section-kicker">Stack</span>
        <h2>Technical Skills</h2>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-tile" key={group.title}>
            <h3>{group.title}</h3>
            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
