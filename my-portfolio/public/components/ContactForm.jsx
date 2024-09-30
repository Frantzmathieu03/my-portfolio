import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validateEmail = email => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = e => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email || !validateEmail(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.message) newErrors.message = 'Message is required';

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      // Form is valid, submit form
      console.log('Form Submitted', formData);
    }
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={e => setFormData({ ...formData, name: e.target.value })}
        />
        {errors.name && <span className="error">{errors.name}</span>}

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={e => setFormData({ ...formData, email: e.target.value })}
        />
        {errors.email && <span className="error">{errors.email}</span>}

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={e => setFormData({ ...formData, message: e.target.value })}
        />
        {errors.message && <span className="error">{errors.message}</span>}

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default ContactForm;
