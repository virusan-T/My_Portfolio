import React from 'react';
import profile from '../assets/profile.jpeg';
import cv from '../assets/Virusan_CV.pdf';

function Home() {
  return (
    <section className="hero" id='home'>
      <div className="hero-text">
        <p className="eyebrow">Computer Science and Software Engineering Student</p>
        <h1>Virusan Thavanathan</h1>
        <h3>
          I build full-stack applications and backend systems using React, Node.js, NestJS, Spring Boot, PostgreSQL, and cloud technologies. I enjoy working on real-world projects and exploring backend development, distributed systems, and automation.
        </h3>
        <div className="hero-actions">
          <a className="primary-btn" href="#project">View Projects</a>
          <a className="secondary-btn" href={cv} download="Virusan_CV.pdf">Download Resume</a>
        </div>
      </div>

      <div className="hero-image">
        <img src={profile} alt="Virusan Thavanathan portrait" loading="eager" />
      </div>
    </section>
  );
}

export default Home;
