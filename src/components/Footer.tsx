import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Sankalpa Sovan Samal</p>
      <p>Built with ❤️ using React & Vite</p>
    </footer>
  );
};

export default Footer;
