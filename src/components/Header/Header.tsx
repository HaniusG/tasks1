import React from "react";
import LanguageChange from "../LanguageChange";
import "./header.css";

export default function Header() {
  return (
    <div className="headerDiv">
        <h1>
            Logotype
        </h1>
      <ul>
        <li>Link 1 </li>
        <li>Link2</li>
        <li>Link3</li>
        <li>Link 4</li>
        <li>example@website.com</li>
        <li>
          <LanguageChange />
        </li>
      </ul>
    </div>
  );
}
