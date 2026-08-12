import React from 'react'

function Academic() {
  const education = [
    {
      title: 'Computer Science and Software Engineering Student',
      meta: 'University of Moratuwa',
      description:
        'Focused on full-stack development, software engineering practices, databases, cloud services, and automation.',
    },
  ];

  const achievements = [
    'Winner - UOJ CODERS V5.0 Finale 12-hour Hackathon by the Computer Society and Department of Computer Science, University of Jaffna.',
    '2nd Runner-Up - Drama Fest conducted by Intake 23, Department of Computer Science and Engineering, as part of the Communication Skills module.',
  ];

  return (
    <>
      <section className='section about-section' id='about'>
        <div className="section-heading">
          <span className="section-kicker">About</span>
          <h2>About Me</h2>
        </div>
        <div className="about-grid">
          <p>
            I am a Computer Science and Software Engineering student building a foundation in
            backend systems, modern web applications, databases and cloud services. I enjoy turning product ideas into reliable, usable software.
          </p>
          <p>
            My current work focuses on full-stack development with React, Node.js/NestJS,
            PostgreSQL, Docker, and AWS. I am especially interested in scalable systems,
            automated data processing, and search experiences that make complex data easier
            to use.
          </p>
        </div>
      </section>

      <section className='section timeline-section' id='education'>
        <div className="section-heading">
          <span className="section-kicker">Background</span>
          <h2>Education</h2>
        </div>

        <div className="timeline-grid">
          <div>
            <h3 className="subsection-title">Education</h3>
            {education.map((item) => (
              <article className="timeline-card" key={item.title}>
                <h4>{item.title}</h4>
                <span>{item.meta}</span>
                <p>{item.description}</p>
              </article>
            ))}
          </div>

         
        </div>
      </section>

      <section className='section achievements-section' id='achievements'>
        <div className="section-heading">
          <span className="section-kicker">Proof</span>
          <h2>Achievements & Certifications</h2>
        </div>
        <ul className="achievement-list">
          {achievements.map((achievement) => (
            <li key={achievement}>{achievement}</li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default Academic;
