
import React from "react";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>About BasketMania</h3>
          <p>
            BasketMania brings you the latest news and updates from the world of
            basketball. Stay tuned for game highlights, player profiles, and
            more.
          </p>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <a
            href="https://facebook.com/BasketMania"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="" alt="Facebook" />
          </a>
          <a
            href="https://twitter.com/BasketMania"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="" alt="Twitter" />
          </a>
          <a
            href="https://instagram.com/BasketMania"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="" alt="Instagram" />
          </a>
        </div>
        <div className="footer-legal">
          <ul>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms-of-service">Terms of Service</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;