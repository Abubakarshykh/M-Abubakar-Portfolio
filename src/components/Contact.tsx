import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:sheikhabubaker498@gmail.com" data-cursor="disable">
                sheikhabubaker498@gmail.com
              </a>
            </p>
            <h4>Location</h4>
            <p>Islamabad, Pakistan</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <div className="contact-socials">
              <a
                href="https://github.com/Abubakarshykh"
                target="_blank"
                data-cursor="disable"
                className="contact-social"
              >
                Github <MdArrowOutward />
              </a>
              <a
                href="https://linkedin.com/in/muhammad-abubakar-80b00518a/"
                target="_blank"
                data-cursor="disable"
                className="contact-social"
              >
                Linkedin <MdArrowOutward />
              </a>
            </div>
          </div>
        </div>
        <div className="contact-footer">
          <h2>
            Designed and Developed by <span>Muhammad Abubakar</span>
          </h2>
          <h5>
            <MdCopyright /> 2026
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Contact;
