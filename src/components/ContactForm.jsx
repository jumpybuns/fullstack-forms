import React from 'react';

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="form-container">
      <form action="" method="post" className="contact-form">
        <div className="contact-form">
          <div className="input-wrapper">
            <input type="text" id="name" name="name" autoCapitalize="none" />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-wrapper">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              spellCheck="false"
              autoComplete="off"
              autoCapitalize="none"
              aria-required="true"
              required
            />
            <label htmlFor="email">Name</label>
          </div>
          <div className="input-wrapper">
            <textarea type="text" id="message" name="message"></textarea>
            <label htmlFor="message">Name</label>
          </div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
