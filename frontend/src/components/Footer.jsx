import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import "../css/HomepageComponents/footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-row footer-row-1">
        <div className="footer-left">
          <ul className="footer-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>
            <li>
              <Link to="/faqs">FAQs</Link>
            </li>
            <li>
              <Link to="/careers">Careers</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="footer-middle">
          <h3>Contact</h3>
          <address>
            Lakeside 15th street
            <br />
            Pokhara, Nepal
            <br />
            +977-[0]61-467701
          </address>
        </div>
        <div className="footer-right">
          <iframe
            title="Pokhara Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.9279279279277!2d83.9639373150623!3d28.20958398246954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399594f7a0a7a3b3%3A0x7a7a7a7a7a7a7a7a!2sPokhara%2C%20Gandaki%20Province%2C%20Nepal!5e0!3m2!1sen!2sus!4v1610000000000!5m2!1sen!2sus"
            width="300"
            height="150"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="footer-row footer-row-2">
        <div className="footer-left">
          <p>Copyright @ 2021 Vyayamshala</p>
        </div>
        <div className="footer-middle social-icons">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <FaYoutube size={24} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </a>
        </div>
        <div className="footer-right">
          <p>Created by Sagar Gurung</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
