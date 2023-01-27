import { useRef } from "react";
import "./contactme.scss";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contactme() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
        process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY
      )
      .then(
        (result) => {
          toast(
            `Honored to connect with you. Your email has been sent! Have a nice day! :)`,
            {
              position: toast.POSITION.BOTTOM_CENTER,
              className: "toast_notification",
            }
          );
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div className="contact_me">
        <div className="contactme_container">
          <h1>Contact Me 📧</h1>
          <form className="contactme_form" onSubmit={sendEmail} ref={form}>
            <div className="input_container">
              <label className="full_name_title">Full Name</label>
              <input
                type="text"
                name="user_name"
                className="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="input_container">
              <label className="email_title"> Email</label>
              <input
                type="email"
                name="user_email"
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
            <div className="send_container">
              <input type="submit" value="Send" className="send_button" />
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Contactme;
