import React from "react";
import logo from "../assets/logo.webp";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-8">
      <div className="flex flex-shrink-0 items-center">
        <a href="" aria-label="Home">
          <img src={logo} alt="home" className="mx-2" width={50} height={33} />
        </a>
      </div>
    </nav>
  );
}
