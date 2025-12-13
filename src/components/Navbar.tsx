import { useState } from "react";
import styles from "../styles/Navbar.module.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>

        {/* LOGO */}
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div>

        {/* HAMBURGER */}
        <div
          className={styles.hamburger}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* NAV LINKS */}
        <ul className={`${styles.links} ${open ? styles.show : ""}`}>
          <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
          <li><a href="#skills" onClick={() => setOpen(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
        </ul>

      </nav>
    </header>
  );
};

export default Navbar;