import React from "react";
import "./footer.css";

export default function Footer() {
 

  return (
    <footer className="footerPart">
      <div className="footerInfoDiv">
        <div>
          <h3>Authors</h3>
          <ul>
            <li>Henry Watts</li>
            <li>Julie Pink</li>
          </ul>
        </div>

        <div>
          <h3>Working with</h3>
          <ul>
            <li>News.wn</li>
            <li>Cns.com</li>
            <li>Lspd.com</li>
            <li>Fox.com</li>
          </ul>
        </div>
        <div>
          <h3>Info</h3>
          <ul>
            <li>About us</li>
            <li>COmmunity</li>
            <li>Vibes</li>
          </ul>
        </div>

        <div>
          <h3>Support</h3>
          <ul>
            <li>Help</li>
            <li>FAQ</li>
            <li>Privacy policy</li>
          </ul>
        </div>
      </div>

      <p>&copy; 2023 News portal. All Rigths deserve</p>
    </footer>
  );
}
