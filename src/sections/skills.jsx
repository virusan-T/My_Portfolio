import React from 'react';

function Skills() {
  return (
    <section className="section" id='skills'>
      <h2>My Skills</h2>

      <p>React</p>
      <div className="bar"><span style={{width:"70%"}}></span></div>

      <p>Java</p>
      <div className="bar"><span style={{width:"80%"}}></span></div>

      <p>Spring Boot</p>
      <div className="bar"><span style={{width:"65%"}}></span></div>
    </section>
  );
}

export default Skills;
