import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>Copyright &copy; {new Date().getFullYear()} | Node Farm</p>
    </footer>
  );
};

export default Footer;
