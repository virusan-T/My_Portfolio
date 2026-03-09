import React from 'react';

function Contact() {
  return (
    <section className="section" id="contact">
      <h2>Contact</h2>

      <div className="contact-box">
        <p>
          <strong>Email:</strong>{' '}
          <span className="contact-value">thavamviru1110@gmail.com</span>
        </p>
        <p>
          <strong>Phone:</strong>{' '}
          <span className="contact-value">+94 76 0746 714</span>
        </p>
        <p>
          <strong>GitHub:</strong>{' '}
          <a
            className="contact-value github-link-tag"
            href="https://github.com/virusan-T"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github.com/virusan-T
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
