import React from "react";

function ContactPage() {
  return (
    <section className="section contact-page">
      <div className="section-heading">
        <span className="section-kicker">Message</span>
        <h2>Contact Me</h2>
      </div>

      <form className="contact-form" action="mailto:thavamviru1110@gmail.com" method="post" encType="text/plain">
        <label>
          <span>Your Name</span>
          <input type="text" name="name" autoComplete="name" required />
        </label>
        <label>
          <span>Your Email</span>
          <input type="email" name="email" autoComplete="email" required />
        </label>
        <label>
          <span>Your Message</span>
          <textarea name="message" required></textarea>
        </label>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default ContactPage;
