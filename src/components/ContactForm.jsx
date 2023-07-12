import '../styles/ContactForm.css';
import FormattedDate from './FormattedDate';

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = document.querySelector('#contact-form');

    const formData = new FormData(form);
    formData.append(FormattedDate, 'now');
    form.submit();

    form.reset();
  };

  return (
    <div className="form-container">
      <form id="contact-form" action="http://localhost:3001/message" method="post">
        <div className="contact-form">
          <div className="top-row">
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
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="input-wrapper">
            <textarea
              type="text"
              id="body"
              name="body"
              rows="20"
              placeholder="Your message"
              autoComplete="off"
              autoCapitalize="none"
              aria-required="true"
              required
            ></textarea>
            <label htmlFor="body">Message</label>
          </div>
          <div className="input-wrapper">
            <input type="submit" value="Submit" onClick={handleSubmit} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
