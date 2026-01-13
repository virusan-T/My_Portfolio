import React from 'react';
import profile from '../assets/profile.jpeg';

function Home() {
  return (
    <section className="hero" id='home'>
      <div className="hero-text">
        <p className="hello">Hello, I'm</p>
        <h1>Virusan Thavanathan</h1>
        <h3>Computer Science Engineering Student</h3>
        <button>Download CV</button>
      </div>

      <div className="hero-image">
        <img src={profile} alt="profile" />
      </div>
    </section>
  );
}

export default Home;
