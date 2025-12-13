import styles from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Contact Me</h2>
      <p>If you want to connect with me, feel free to reach out.</p>

      <div className={styles.details}>
        <p><strong>Name:</strong> Sankalpa Sovan Samal</p>
        <p><strong>Email:</strong> sankalpasovan@gmail.com</p>
        <p><strong>Phone:</strong> +91-XXXXXXXXXX</p>
        <p><strong>Location:</strong> Odisha, India</p>

        <div className={styles.links}>
          <a href="https://github.com/sankalpa-dot" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com" target="_blank">LinkedIn</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
