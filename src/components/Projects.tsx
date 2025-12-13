import styles from "../styles/Projects.module.css";

const projects = [
  {
    title: "Medical Search Engine (MEDEXA)",
    description:
      "A specialized medical search engine providing reliable, verified, and up-to-date healthcare information.",
    tech: ["React", "Node.js", "MySQL"],
    link: "#",
  },
  {
    title: "Binary Library",
    description:
      "An educational platform for Computer Science students with curated resources and notes.",
    tech: ["HTML", "CSS", "JavaScript", "MySQL"],
    link: "#",
  },
  {
    title: "IoT Connectivity (IPv6 & RPL)",
    description:
      "Academic seminar project explaining IPv6-based IoT routing using RPL protocol.",
    tech: ["IPv6", "RPL", "IoT"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <h2>Projects</h2>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div className={styles.card} key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className={styles.tech}>
              {project.tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
