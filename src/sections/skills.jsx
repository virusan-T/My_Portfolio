import React from 'react';

function Skills() {
  const skills = [
    { name: 'React', detail: 'Frontend UI Development' },
    { name: 'Next.js', detail: 'SSR and Full-Stack React Apps' },
    { name: 'Java', detail: 'OOP and Backend Logic' },
    { name: 'Spring Boot', detail: 'REST API Development' },
  ];

  return (
    <section className="section skills-section" id="skills">
      <h2>My Skills</h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <article className="skill-tile" key={skill.name}>
            <h3>{skill.name}</h3>
            <p>{skill.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
