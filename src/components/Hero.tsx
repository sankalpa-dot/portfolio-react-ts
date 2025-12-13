import { Typewriter } from "react-simple-typewriter";
import styles from "../styles/Hero.module.css";
import profile from "../assets/profile.jpeg";

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.content}>

        {/* PROFILE IMAGE */}
        <img
          src={profile}
          alt="Sankalpa Sovan Samal"
          className={styles.profile}
        />

        <h1 className={styles.title}>
          Hi, I'm <span>Sankalpa</span>
        </h1>

        <p className={styles.subtitle}>
          <Typewriter
            words={[
              "M.Sc. Computer Science Student",
              "Aspiring Computer Science Professor",
              "Interested in IoT & Computer Networks",
              "React & Web Development Enthusiast"
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </p>

        <div className={styles.buttons}>
          <a href="#projects">View Projects</a>
          <a href="src/assets/Resume Sankalpa.pdf" download className={styles.outline}>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
