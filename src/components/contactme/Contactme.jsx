import react from "react";
import "./contactme.scss";

function Contactme() {
  return (
    <div className="contact_me">
      <div className="contactme_container">
        <h1>Contact Me</h1>
        <form className="contactme_form">
          <div className="input_container">
            <label className="full_name_title">Full Name</label>
            <input
              type="text"
              name="name"
              className="name"
              placeholder="Enter your name"
            />
          </div>
          <div className="input_container">
            <label className="email_title"> Email</label>
            <input
              type="email"
              name="email"
              className="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="input_container">
            <label className="message_title">Your message</label>
            <textarea
              name="message"
              rows="10"
              className="message"
              placeholder="Enter your message here"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contactme;
