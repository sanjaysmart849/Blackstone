import '../styles/Contact.css';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm("xpqkvdly");

  if (state.succeeded) {
    return (
      <section className="contact-section">
        <h2 className="success-message">
          ✅ Message sent successfully!
        </h2>
      </section>
    );
  }

  return (
    <section id="contact" className="contact-section fade-in">
      <div className="section-header">
        <span className="section-label">Contact</span>
        <h2>Start your visual journey with us.</h2>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        
        {/* NAME */}
        <div className="field-group">
          <label htmlFor="name">Name</label>
          <input 
            id="name" 
            type="text" 
            name="name" 
            placeholder="Your name" 
            required 
          />
        </div>

        {/* EMAIL */}
        <div className="field-group">
          <label htmlFor="email">Email</label>
          <input 
            id="email" 
            type="email" 
            name="email" 
            placeholder="Your email" 
            required 
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
        </div>

        {/* MESSAGE */}
        <div className="field-group">
          <label htmlFor="message">Message</label>
          <textarea 
            id="message" 
            name="message" 
            rows="5" 
            placeholder="Tell us about your project" 
            required 
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
        </div>

        {/* BUTTON */}
        <button 
          type="submit" 
          className="contact-submit"
          disabled={state.submitting}
        >
          {state.submitting ? "Sending..." : "Send Message"}
        </button>

      </form>
    </section>
  );
}