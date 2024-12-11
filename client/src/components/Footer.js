import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h1 className="footer-title">Richard Lechko</h1>

        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Richard Lechko | All Rights Reserved
        </p>

        <p className="footer-updated">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
