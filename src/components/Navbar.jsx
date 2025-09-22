import React from "react";
import logo from "../assets/logo.webp";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquare, FaSquareXTwitter } from "react-icons/fa6";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-8">
      <div className="flex flex-shrink-0 items-center">
        <a href="" aria-label="Home">
          <img src={logo} alt="logo" className="mx-2" width={50} height={33} />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href=" https://www.linkedin.com/in/your-linkedin-profile"
          target="_blank"
          rel=" noopener"
          aria-label="Linkedin"
        >
          <FaLinkedin />
        </a>
        <a
          href=" https://www.github.com/in/your-github-profile"
          target="_blank"
          rel=" noopener"
          aria-label="Github"
        >
          <FaGithub />
        </a>
        <a
          href=" https://www.instagram.com/in/your-instagram-profile"
          target="_blank"
          rel=" noopener"
          aria-label="instagram"
        >
          <FaInstagram />
        </a>
        <a
          href=" https://www.linkedin.com/in/your-twitter-profile"
          target="_blank"
          rel=" noopener"
          aria-label="twitter"
        >
          <FaSquareXTwitter />
        </a>
      </div>
    </nav>
  );
}
2;
