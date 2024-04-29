import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <h1>Frequently Asked Questions</h1>
      <div className="footer-content">
        
        <ul className="faq-list">
          <li className="faq-item">
            <h3 className="faq-question">What is the return policy?</h3>
            <p className="faq-answer">
              We offer a 30-day money-back guarantee on all purchases.
            </p>
          </li>
          <li className="faq-item">
            <h3 className="faq-question">How do I contact customer support?</h3>
            <p className="faq-answer">
              You can reach us by email at <a href="mailto:support@mybookwebsite.com">support@READEASY.com</a> or by phone at (123) 456-7890.
            </p>
          </li>
          <li className="faq-item">
            <h3 className="faq-question">Do you offer free shipping?</h3>
            <p className="faq-answer">
              Yes, we offer free shipping on orders over $50.
            </p>
          </li>
        </ul>
        <p className="footer-text">
          Copyright © 2024 ℝ𝔼𝔸𝔻𝔼𝔸𝕊𝕐. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;