const projects = [
  {
    title: "AI Windows Assistant",
    description:
      "Developed an intelligent desktop assistant capable of executing voice commands, automating routine tasks, and providing quick access to system functionalities. The project focuses on enhancing productivity through natural user interaction and task automation.",
    tech: "Python • Speech Recognition • Automation • APIs • Windows Services",
  },
  {
    title: "AI-Powered Study Material App",
    description:
      "Built a smart learning platform that allows students to upload study materials and receive AI-generated explanations. The application enhances learning by simplifying complex concepts into clear and understandable content.",
    tech: "Java • Android Studio • Firebase • AI Integration • PDF Processing",
  },
  {
    title: "Automated AI Video Generator",
    description:
      "Created an automated content generation system that converts online information into engaging videos. The workflow reduces manual effort while streamlining the entire content creation process from data collection to video output.",
    tech: "n8n • Python • Web Scraping • AI Tools • Automation",
  },
  {
    title: "Data Analytics Dashboard",
    description:
      "Designed interactive dashboards that transform raw data into meaningful visual insights. The project helps users monitor performance, identify trends, and support data-driven decision-making.",
    tech: "Power BI • SQL • Excel • Data Visualization • Analytics",
  },
  {
    title: "Web Scraping & Data Collection System",
    description:
      "Developed a data extraction solution capable of collecting and organizing information from multiple online sources. The system enables efficient data gathering for analysis, reporting, and automation purposes.",
    tech: "Python • Selenium • BeautifulSoup • Data Processing • Automation",
  },
  {
    title: "Customer Behavior Analysis",
    description:
      "Explored customer transaction data to uncover purchasing trends, customer segments, and buying patterns. The analysis provides valuable insights that support marketing strategies and business growth.",
    tech: "SQL • Power BI • Excel • Data Analysis • Data Visualization",
  },
];

export default function Projects() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">PROJECTS</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div
              key={project.title}
              className="project-card glass-card"
            >
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-stack">
                <strong>Tech Stack:</strong>
                <br />
                {project.tech}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}