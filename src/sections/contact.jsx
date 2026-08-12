import React from 'react';

function Contact() {
  return (
    <section className="section" id="contact">
      <div className="section-heading">
        <span className="section-kicker">Connect</span>
        <h2>Contact</h2>
      </div>

      <div className="contact-box">
        <p>
          <strong>Email</strong>
          <a className="contact-value" href="mailto:thavamviru1110@gmail.com">
            thavamviru1110@gmail.com
          </a>
        </p>
        <p>
          <strong>Phone</strong>
          <a className="contact-value" href="tel:+94760746714">
            +94 76 0746 714
          </a>
        </p>
        <p>
          <strong>GitHub</strong>
          <a
            className="contact-value"
            href="https://github.com/virusan-T"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/virusan-T
          </a>
        </p>
        <p>
          <strong>LinkedIn</strong>
          <span className="contact-value muted-value">LinkedIn URL to be added</span>
        </p>
      </div>
    </section>
  );
}

export default Contact;
