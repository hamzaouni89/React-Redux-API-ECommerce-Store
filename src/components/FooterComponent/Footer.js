import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";
import "./Footer.css";

/*=============================================
=            FooterComponent            =
=============================================*/

const FooterComponent = () => {
  return (
    <footer>
      {/* Contact Us start */}
      <div id="major-footer">
        <section className="contact-us-info">
          <h2>Contact Us</h2>
          <p>Rue Ibn Khateb 2045 L'aouina </p>
          <p>La Goulette - Tunis - Tunisia</p>
        </section>
        {/* Contact Us end */}

        {/* Get Social start */}
        <section className="social-info">
          <h2>Get Social</h2>
          <div id="socialmedia-icons">
            <span>
              <a href="https://www.facebook.com" target="_blanc">
                <FaFacebookF />
              </a>
            </span>
            <span>
              <a href="https://www.instagram.com" target="_blanc">
                <FaInstagram />
              </a>
            </span>
            <span>
              <a href="https://www.twitter.com" target="_blanc">
                <FaTwitter />
              </a>
            </span>
            <span>
              <a href="https://www.youtube.com" target="_blanc">
                <FaYoutube />
              </a>
            </span>
          </div>
        </section>
        {/* Get Social end */}

        {/* Newsletter start */}
        <section className="newsletter-info">
          <h2>Newsletter</h2>
          <p>Stay up to date with our work and how you can help</p>
          <form className="newsletter-form">
            <div id="fname-lname">
              <div>
                <label htmlFor="fname" className=".screen-reader-text">
                  First Name
                </label>
                <input
                  type="text"
                  id="fname"
                  className="newsletter-fname"
                  placeholder="First Name"
                />
                <p className="newsletter-fname-error-msg msg-hide">
                  Enter correct First Name
                </p>
              </div>
              <div>
                <label htmlFor="lname" className=".screen-reader-text">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lname"
                  className="newsletter-lname"
                  placeholder="Last Name"
                />
                <p className="newsletter-lname-error-msg msg-hide ">
                  Enter correct Last Name
                </p>
              </div>
            </div>
            <div id="emailid-send">
              <div>
                <label htmlFor="email" className=".screen-reader-text">
                  Email Address
                </label>
                <input
                  type="text"
                  id="email"
                  className="newsletter-email"
                  placeholder="example@domain.com"
                />
                <p className="newsletter-email-error-msg msg-hide ">
                  Enter valid email Id
                </p>
              </div>
              <button type="submit">
                <FaEnvelope />
              </button>
            </div>
            <p className="newsletter-thanks-msg msg-hide">
              Thank you for Subscribing to our newsletter...!
            </p>
          </form>
        </section>
      </div>
      {/* Newsletter end */}
      <div id="minor-footer">
        <p> Number +216 94 337 521</p>
        <p>Privacy Policy | Terms &amp; Conditions</p>
        <p>&copy; 2023 Edmonton Scriptorce</p>
      </div>
    </footer>
  );
};

/*=====  End of FooterComponent  ======*/

export default FooterComponent;
