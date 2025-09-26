import logo from "../assets/logo.webp";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquare, FaSquareXTwitter } from "react-icons/fa6";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-8">
      <div className="flex flex-shrink-0 items-center">
        <a href="" aria-label="Home" className="group">
          <div className="flex items-center justify-center">
            <span className="text-5xl font-extrabold bg-gradient-to-r from-white via-stone-200 to-stone-400 bg-clip-text text-transparent hover:from-stone-700 hover:via-white hover:to-stone-700 transition-all duration-500 group-hover:scale-110 transform">
              MA
            </span>
          </div>
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/mudassir-ahmad-17565a2a1/"
          target="_blank"
          rel="noopener"
          aria-label="Linkedin"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/mudassir788"
          target="_blank"
          rel="noopener"
          aria-label="Github"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/mudassir_ahmad_mawat?igsh=MTBlM21sOG43N3l4eA=="
          target="_blank"
          rel="noopener"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://twitter.com/your-twitter-username"
          target="_blank"
          rel="noopener"
          aria-label="Twitter"
        >
          <FaSquareXTwitter />
        </a>
      </div>
    </nav>
  );
}
