import React, { useState } from "react";

function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: wire up to a backend / email service
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="section">
        <h2>Contact Me</h2>
        <p style={{ marginTop: '20px', color: 'var(--text-dim)' }}>
          Thank you, <strong style={{ color: 'var(--accent)' }}>{form.name}</strong>! Your message has been received.
        </p>
      </section>
    );
  }

  return (
    <section className="section">
      <h2>Contact Me</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          aria-label="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          aria-label="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          aria-label="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default ContactPage;
