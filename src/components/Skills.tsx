import styles from "../styles/Skills.module.css";

const skills = [
  { name: "Rust", icon: "devicon-rust-plain", url: "https://www.rust-lang.org" },
  { name: "Actix-web", icon: "devicon-rust-plain", url: "https://actix.rs" },
  { name: "Tokio", icon: "devicon-rust-plain", url: "https://tokio.rs" },

  { name: "Java", icon: "devicon-java-plain colored", url: "https://www.oracle.com/java/" },
  { name: "Spring Boot", icon: "devicon-spring-plain colored", url: "https://spring.io/projects/spring-boot" },
  { name: "Hibernate", icon: "devicon-hibernate-plain colored", url: "https://hibernate.org" },
  { name: "MySQL", icon: "devicon-mysql-plain colored", url: "https://www.mysql.com" },
  { name: "OpenDJ", icon: "devicon-ldap-plain", url: "https://github.com/OpenIdentityPlatform/OpenDJ" },
  { name: "Keycloak", icon: "devicon-keycloak-plain", url: "https://www.keycloak.org" },

  { name: "OIDC", icon: "devicon-openid-plain", url: "https://openid.net/connect/" },
  { name: "Kafka", icon: "devicon-apachekafka-original colored", url: "https://kafka.apache.org" },
  { name: "AWS", icon: "devicon-amazonwebservices-original colored", url: "https://aws.amazon.com" },
  { name: "Cloudflare", icon: "devicon-cloudflare-plain colored", url: "https://www.cloudflare.com" },
  { name: "Docker", icon: "devicon-docker-plain colored", url: "https://www.docker.com" },
  { name: "Kubernetes", icon: "devicon-kubernetes-plain colored", url: "https://kubernetes.io" },
  { name: "Jenkins", icon: "devicon-jenkins-line colored", url: "https://www.jenkins.io" },
  { name: "React", icon: "devicon-react-original colored", url: "https://react.dev" },
  { name: "NeoVim", icon: "devicon-neovim-plain colored", url: "https://neovim.io" },

  { name: "Bash", icon: "devicon-bash-plain colored", url: "https://www.gnu.org/software/bash/" },
  { name: "Linux", icon: "devicon-linux-plain colored", url: "https://www.kernel.org" },
  { name: "macOS", icon: "devicon-apple-original", url: "https://www.apple.com/macos/" },
];

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <h2>Skills</h2>

      <div className={styles.grid}>
        {skills.map((skill, i) => (
          <a
            key={i}
            href={skill.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <div className={styles.card}>
              <i className={skill.icon}></i>
              <p>{skill.name}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Skills;

